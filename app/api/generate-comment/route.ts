import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { targetUrl, bridgeUrl, niche } = await request.json();

        // Get API keys from environment
        const rapidApiKey = process.env.RAPIDAPI_KEY;
        const scraperApiKey = process.env.SCRAPER_API_KEY;

        if (!rapidApiKey) {
            console.error('RAPIDAPI_KEY not configured');
            return NextResponse.json(
                { success: false, error: 'API key not configured' },
                { status: 500 }
            );
        }

        // STEP 1: Scrape the target URL to get actual page content
        let pageContext = '';
        if (scraperApiKey && targetUrl) {
            try {
                const scraperUrl = `http://api.scraperapi.com/?api_key=${scraperApiKey}&url=${encodeURIComponent(targetUrl)}`;
                const scraperResponse = await fetch(scraperUrl);

                if (scraperResponse.ok) {
                    const html = await scraperResponse.text();

                    // Extract title
                    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
                    const title = titleMatch ? titleMatch[1].trim() : '';

                    // Extract meta description
                    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                        html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
                    const description = descMatch ? descMatch[1].trim() : '';

                    // Extract visible text (remove HTML tags, scripts, styles)
                    let cleanText = html
                        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                        .replace(/<[^>]+>/g, ' ')
                        .replace(/\s+/g, ' ')
                        .trim();

                    // Combine and truncate to ~1500 chars for token efficiency
                    pageContext = `Title: ${title}\nDescription: ${description}\nContent: ${cleanText.substring(0, 1500)}`;
                } else {
                    console.warn('Failed to scrape target URL, proceeding without context');
                }
            } catch (scrapeError) {
                console.warn('Scraping error:', scrapeError);
            }
        }

        // STEP 2: Build the prompt with actual page context
        const prompt = `Act as an industry expert in "${niche}". Write a highly valuable, insightful comment for a blog post.

GOAL: Gently recommend this specific resource: ${bridgeUrl}

PAGE CONTEXT:
${pageContext || 'No page content available - use general knowledge about the niche.'}

RULES:
1. VALUE FIRST: Start with a specific, helpful insight or tip related to the ACTUAL CONTENT of the page. Reference something specific from the article if possible.
2. NO "GREAT POST": Do NOT start with "Great post", "Thanks for sharing", or any generic fluff. Start directly with the insight.
3. NATURAL RECOMMENDATION: After the insight, mention the resource naturally as a solution or further reading.
   - Bad: "Check out this link: ${bridgeUrl}"
   - Good: "I actually found a specific framework that automates this process here: ${bridgeUrl} - it might help with [X]."
4. TONE: Professional, helpful, peer-to-peer. NOT a salesperson.
5. LENGTH: 2-3 sentences maximum. Short and punchy.
6. RELEVANCE: Your comment MUST be relevant to the page content above. Do NOT write about unrelated topics.

Write ONLY the comment text.`;

        const response = await fetch('https://chatgpt-42.p.rapidapi.com/gpt4', {
            method: 'POST',
            headers: {
                'x-rapidapi-key': rapidApiKey,
                'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                web_access: false
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('ChatGPT API error:', errorText);
            throw new Error(`ChatGPT API error: ${response.status}`);
        }

        const data = await response.json();
        const comment = data.result || data.message || data.choices?.[0]?.message?.content || 'Failed to generate comment';

        return NextResponse.json({
            success: true,
            comment
        });

    } catch (error) {
        console.error('Comment generation error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to generate comment' },
            { status: 500 }
        );
    }
}

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getDomain = (url: string): string => {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname;
    } catch {
        return url;
    }
};

const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// Faster AI Niche Detection
async function getNicheKeyword(productName: string, rapidApiKey: string): Promise<string> {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const response = await fetch('https://cheapest-gpt-4-turbo-gpt-4-vision.p.rapidapi.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'cheapest-gpt-4-turbo-gpt-4-vision.p.rapidapi.com'
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "system",
                        content: "You are a marketing expert. Identify the BROAD ENGLISH NICHE for a product. Return ONLY 1-2 words in English. NO Arabic, NO product names. Example: 'Self-Sufficient' -> 'Homesteading'."
                    },
                    {
                        role: "user",
                        content: `Niche for: "${productName}"`
                    }
                ],
                model: "gpt-4o",
                max_tokens: 8
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        const data = await response.json();
        const niche = data.choices?.[0]?.message?.content?.trim().replace(/[".]/g, '');

        // Ensure its English and not the product name
        if (!niche || /[\u0600-\u06FF]/.test(niche)) return "General Interests";
        return niche;
    } catch (error) {
        return "Universal Market";
    }
}

export async function POST(request: NextRequest) {
    try {
        const { keywords, niche: passedNiche } = await request.json();
        const apiKey = process.env.SCRAPER_API_KEY;
        const rapidApiKey = process.env.RAPIDAPI_KEY;

        if (!apiKey) return NextResponse.json({ success: false, error: 'Config missing' }, { status: 500 });

        // 1. Get Niche (Use passed niche if available, otherwise fallback to AI)
        let nicheKeyword = passedNiche;

        if (!nicheKeyword) {
            console.log(`[ScraperAPI] Niche missing for "${keywords}", calling AI fallback...`);
            nicheKeyword = rapidApiKey ? await getNicheKeyword(keywords, rapidApiKey) : keywords;
        } else {
            console.log(`[ScraperAPI] Using stored niche: "${nicheKeyword}"`);
        }

        const searchQuery = `"${nicheKeyword}" + "leave a comment"`;

        let uniqueUrls: string[] = [];

        // 2. Optimized Scraper Call (No render = 5x faster)
        try {
            const scraperUrl = `https://api.scraperapi.com/?api_key=${apiKey}&url=${encodeURIComponent(
                `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}&num=40`
            )}&country_code=us`; // Removed &render=true

            const response = await fetch(scraperUrl, { signal: AbortSignal.timeout(25000) });
            if (!response.ok) throw new Error(`Google error: ${response.status}`);

            const html = await response.text();
            const urlPattern = /https?:\/\/(?!www\.google\.com|support\.google\.com|accounts\.google\.com|policies\.google\.com|schema\.org)[a-zA-Z0-9][-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)/g;
            const matches = html.match(urlPattern) || [];

            const junkDomains = [
                'google.com', 'gstatic.com', 'facebook.com', 'twitter.com', 'instagram.com',
                'pinterest.com', 'linkedin.com', 'reddit.com', 'youtube.com', 'x.com',
                'amazon.com', 'microsoft.com', 'apple.com', 'w3.org', 'schema.org',
                'doubleclick.net', 'googleadservices.com', 'shutterstock.com'
            ];

            const junkPatterns = ['wp-content/uploads', 'wp-json', 'xmlrpc', '?tab=', '&tab=', '/products/'];
            const junkExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.pdf', '.zip', '.mp4', '.mp3', '.webp', '.css', '.js'];
            const seenDomains = new Set<string>();

            const filteredUrls = matches.filter(url => {
                const lowerUrl = url.toLowerCase();

                // 1. Check for junk domains
                if (junkDomains.some(d => lowerUrl.includes(d))) return false;

                // 2. Check for junk patterns (uploads, technical paths)
                if (junkPatterns.some(p => lowerUrl.includes(p))) return false;

                // 3. Check for file extensions
                if (junkExtensions.some(ext => lowerUrl.endsWith(ext) || lowerUrl.includes(ext + '?') || lowerUrl.includes(ext + '&'))) return false;

                // 4. Check for minimum depth (blogs usually have paths)
                if (url.split('/').length <= 3) return false;

                // 5. Ensure one result per unique domain
                const domain = getDomain(url);
                if (seenDomains.has(domain)) return false;

                seenDomains.add(domain);
                return true;
            });

            if (filteredUrls.length > 0) {
                const shuffled = shuffleArray(filteredUrls);
                uniqueUrls = shuffled.slice(0, Math.floor(Math.random() * 6) + 10); // 10-15
            }
        } catch (err: any) {
            console.error('Scraping failed:', err.message);
            return NextResponse.json({ success: false, error: `Scraping failed: ${err.message}` }, { status: 500 });
        }

        if (uniqueUrls.length === 0) {
            return NextResponse.json({ success: false, error: 'No results found. Try again.' }, { status: 404 });
        }

        return NextResponse.json({ success: true, urls: uniqueUrls, query: searchQuery, niche: nicheKeyword });

    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

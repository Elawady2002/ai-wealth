import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { targetUrl, bridgeUrl, niche } = await request.json();

        // Get API key from environment
        const apiKey = process.env.RAPIDAPI_KEY;

        if (!apiKey) {
            console.error('RAPIDAPI_KEY not configured');
            return NextResponse.json(
                { success: false, error: 'API key not configured' },
                { status: 500 }
            );
        }

        const prompt = `You are a helpful blog commenter. Write a high-quality, informative comment for a blog post about "${niche}". 

The comment should:
1. Be relevant and add value to the discussion
2. Sound natural and conversational, NOT like spam
3. Be 2-3 sentences maximum
4. Naturally and seamlessly include this link: ${bridgeUrl}
5. NOT be generic or promotional - it must be helpful first

Context: The target blog is at ${targetUrl} and is about ${niche}.

Write ONLY the comment text, nothing else. Do not include phrases like "Great post!" or "Thanks for sharing" - be more specific and thoughtful.`;

        const response = await fetch('https://chatgpt-42.p.rapidapi.com/gpt4', {
            method: 'POST',
            headers: {
                'x-rapidapi-key': apiKey,
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

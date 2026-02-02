import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { keywords, altKeywords } = await request.json();

        // Get API key from environment
        const apiKey = process.env.SCRAPER_API_KEY;

        if (!apiKey) {
            console.error('SCRAPER_API_KEY not configured');
            return NextResponse.json(
                { success: false, error: 'API key not configured' },
                { status: 500 }
            );
        }

        // Build search query: [Niche Keyword] OR [Alt Keyword] + "leave a comment"
        const searchQuery = `${keywords} OR ${altKeywords} + "leave a comment"`;

        // ScraperAPI synchronous endpoint
        const scraperUrl = `http://api.scraperapi.com/?api_key=${apiKey}&url=${encodeURIComponent(
            `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}&num=15`
        )}&render=true`;

        const response = await fetch(scraperUrl);

        if (!response.ok) {
            throw new Error(`ScraperAPI error: ${response.status}`);
        }

        const html = await response.text();

        // Extract URLs from Google search results
        const urlPattern = /https?:\/\/(?!www\.google\.com|support\.google\.com|accounts\.google\.com|policies\.google\.com)[a-zA-Z0-9][-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)/g;
        const matches = html.match(urlPattern) || [];

        // Filter and deduplicate URLs
        const uniqueUrls = [...new Set(matches)]
            .filter(url =>
                !url.includes('google.com') &&
                !url.includes('gstatic.com') &&
                !url.includes('googleapis.com') &&
                !url.includes('schema.org')
            )
            .slice(0, 15);

        return NextResponse.json({
            success: true,
            urls: uniqueUrls,
            query: searchQuery
        });

    } catch (error) {
        console.error('Scraper error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch search results' },
            { status: 500 }
        );
    }
}

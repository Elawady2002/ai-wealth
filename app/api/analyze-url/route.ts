import { NextRequest, NextResponse } from 'next/server';

// Explicitly tell Vercel this is a serverless function
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json({ success: false, error: 'URL is required' }, { status: 400 });
        }

        // Get API key
        const apiKey = process.env.SCRAPER_API_KEY;

        if (!apiKey) {
            console.error('SCRAPER_API_KEY not configured');
            // Fallback for mocked data if no API key is present (dev mode)
            return NextResponse.json({
                success: true,
                data: {
                    title: `Bridge - ${new URL(url).hostname}`,
                    description: "This is a generated description based on the provided URL. Content extraction requires a valid API key.",
                    image: null
                }
            });
        }

        // Use ScraperAPI to render the page
        const scraperUrl = `http://api.scraperapi.com/?api_key=${apiKey}&url=${encodeURIComponent(url)}&render=true`;

        const response = await fetch(scraperUrl);

        if (!response.ok) {
            throw new Error(`ScraperAPI error: ${response.status}`);
        }

        const html = await response.text();

        // Extract Title
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : `Bridge - ${new URL(url).hostname}`;

        // Extract Meta Description
        const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
            html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
        const description = descMatch ? descMatch[1] : "Discover the hidden system generating wealth on autopilot.";

        // Extract OG Image
        const imgMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
            html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*property=["']og:image["'][^>]*>/i);
        const image = imgMatch ? imgMatch[1] : null;

        return NextResponse.json({
            success: true,
            data: {
                title,
                description,
                image
            }
        });

    } catch (error) {
        console.error('Analyze URL error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to analyze URL' },
            { status: 500 }
        );
    }
}

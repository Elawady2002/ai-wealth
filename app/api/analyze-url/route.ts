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
        let html = '';
        let usingScraperApi = false;

        if (apiKey) {
            try {
                // Use ScraperAPI if available
                const scraperUrl = `http://api.scraperapi.com/?api_key=${apiKey}&url=${encodeURIComponent(url)}&render=true`;
                const response = await fetch(scraperUrl);
                if (response.ok) {
                    html = await response.text();
                    usingScraperApi = true;
                }
            } catch (e) {
                console.warn("ScraperAPI failed, falling back to local fetch", e);
            }
        }

        // Fallback: Local Fetch (Native Scraper)
        if (!html) {
            console.log("Attempting local fetch for:", url);
            try {
                const response = await fetch(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                        'Accept-Language': 'en-US,en;q=0.5'
                    }
                });
                if (response.ok) {
                    html = await response.text();
                } else {
                    throw new Error(`Local fetch failed: ${response.status}`);
                }
            } catch (error) {
                console.error("Local scraping failed:", error);
                // Final Fallback if everything fails
                return NextResponse.json({
                    success: true,
                    data: {
                        title: `Bridge - ${new URL(url).hostname}`,
                        description: "Could not scrape content securely. Please verify the URL or try manually entering details.",
                        image: "https://placehold.co/600x400/1e293b/ffffff?text=No+Preview+Available"
                    }
                });
            }
        }

        // --- Intelligent Parsing Logic ---

        // 1. Extract Title
        const titleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
            html.match(/<title[^>]*>([^<]+)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : `Bridge - ${new URL(url).hostname}`;

        // 2. Extract Description
        const descMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
            html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i);
        const description = descMatch ? descMatch[1] : "Discover the hidden system generating wealth on autopilot.";

        // 3. Extract Image (Priority: OG Image > Twitter Image > JSON-LD > First Large Image)
        let image = null;

        // Try OG/Twitter tags first
        const imgMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
            html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
            html.match(/<link[^>]*rel=["']image_src["'][^>]*href=["']([^"']*)["'][^>]*>/i);

        if (imgMatch) {
            image = imgMatch[1];
        } else {
            // Try extracting from JSON-LD (common in e-commerce)
            const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
            if (jsonLdMatch) {
                try {
                    const data = JSON.parse(jsonLdMatch[1]);
                    // Helper to find image in recursive JSON
                    const findImage = (obj: any): string | null => {
                        if (!obj) return null;
                        if (typeof obj === 'string' && (obj.match(/\.(jpeg|jpg|png|webp)/i) || obj.includes('transform'))) return obj; // Simple check
                        if (obj.image) return typeof obj.image === 'string' ? obj.image : (Array.isArray(obj.image) ? obj.image[0] : obj.image.url);
                        if (Array.isArray(obj)) {
                            for (const item of obj) {
                                const found = findImage(item);
                                if (found) return found;
                            }
                        }
                        return null;
                    };
                    image = findImage(data);
                } catch (e) {
                    console.log("JSON-LD parse error", e);
                }
            }
        }

        // Final fallback image if extraction completely fails but page load succeeded
        if (!image) {
            image = "https://placehold.co/600x400/10b981/ffffff?text=Product+Preview";
        }

        // Handle relative URLs for images
        if (image && image.startsWith('/')) {
            const urlObj = new URL(url);
            image = `${urlObj.protocol}//${urlObj.host}${image}`;
        }

        return NextResponse.json({
            success: true,
            data: {
                title: title.replace(/&amp;/g, '&').replace(/&#x27;/g, "'"),
                description: description.replace(/&amp;/g, '&').replace(/&#x27;/g, "'"),
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

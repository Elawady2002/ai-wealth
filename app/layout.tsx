import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import { ParticleBackground } from "@/components/ui/particle-background";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AI Wealth | Income Sync OS",
  description: "Transform affiliate links into fully deployed, conversion-optimized digital assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          spaceGrotesk.variable,
          syne.variable,
          "antialiased min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden" // Set overflow hidden to handle scrolling in main
        )}
      >
        <ParticleBackground />

        <div className="flex min-h-screen relative z-10">
          <Sidebar />

          <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <TopBar />

            {/* Main Content Area - Scrollable */}
            <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth">
              <div className="max-w-7xl mx-auto w-full">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

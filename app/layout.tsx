import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TimeResolutionHeader } from "@/components/home/TimeResolutionHeader";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rayhan Atmadja",
  description: "A little piece of Rayhan Atmadja in his professional world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <div className="w-full relative">
          <div
            aria-hidden="true"
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(45vmax circle at 15% 20%, rgba(var(--glow-purple), var(--glow-opacity-1)), transparent 85%),
                radial-gradient(38vmax circle at 85% 75%, rgba(var(--glow-purple), var(--glow-opacity-2)), transparent 85%)
              `,
              backgroundRepeat: "no-repeat",
              transform: "translateZ(0)",
              contain: "layout paint style",
            }}
          />
          <div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--border) 1px, transparent 1px),
                linear-gradient(to bottom, var(--border) 1px, transparent 1px)
              `,
              backgroundSize: "72px 72px",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 0%, #000 20%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 50% 0%, #000 20%, transparent 80%)",
              transform: "translateZ(0)",
              contain: "layout paint style",
            }}
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col flex-1 items-center justify-center font-sans relative z-10">
              <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between px-6 md:px-16 sm:items-start pt-32">
                <TimeResolutionHeader />
                <Navigation />
                {children}
                <Footer />
              </main>
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}

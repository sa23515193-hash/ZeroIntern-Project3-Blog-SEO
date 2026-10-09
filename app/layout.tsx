import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ThemeToggle } from "./theme-toggle";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://example.vercel.app"
  ),
  title: {
    default: "Insightful — SEO-first Blog",
    template: "%s | Insightful",
  },
  description:
    "A fast, accessible and SEO-focused publishing platform built with Next.js, MDX and static generation.",
  keywords: [
    "Next.js",
    "SEO",
    "MDX",
    "Core Web Vitals",
    "web development",
    "blog",
  ],
  authors: [{ name: "Sawaira Ijaz" }],
  openGraph: {
    title: "Insightful — SEO-first Blog",
    description: "Fast publishing for organic growth",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insightful — SEO-first Blog",
    description: "Fast publishing for organic growth",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <nav className="nav">
          <div className="container navin">
            <Link className="brand" href="/">
              insight<span>ful</span>
              
            </Link>
<div className="links">
  <Link href="/">Home</Link>
  <Link href="/blog/">Blog</Link>
  <Link href="/dashboard/">Analytics</Link>
  <Link href="/about/">About</Link>
</div>

            <div className="navactions">
              <ThemeToggle />
              <Link className="iconbtn" href="/blog/">
                Read →
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <div className="container footerin">
            <span>© 2026 Insightful · ZeroIntern Project 3</span>
            <span>Built with Next.js + MDX · Static & fast</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

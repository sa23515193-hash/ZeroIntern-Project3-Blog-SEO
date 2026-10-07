import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "./theme-toggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://sa23515193-hash.github.io/ZeroIntern-Project3-Blog-SEO/"),
  title: {default:"Insightful — SEO-first Blog", template:"%s | Insightful"},
  description:"A fast, accessible and SEO-focused publishing platform built with Next.js, MDX and static generation.",
  keywords:["Next.js","SEO","MDX","Core Web Vitals","web development","blog"],
  authors:[{name:"Sawaira Ijaz"}],
  openGraph:{title:"Insightful — SEO-first Blog",description:"Fast publishing for organic growth",type:"website"},
  twitter:{card:"summary_large_image",title:"Insightful — SEO-first Blog",description:"Fast publishing for organic growth"}
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en" suppressHydrationWarning><body>
   <nav className="nav"><div className="container navin">
    <a className="brand" href="./">insight<span>ful</span></a>
    <div className="links"><a href="./">Home</a><a href="./blog/">Blog</a><a href="./dashboard/">Analytics</a><a href="./about/">About</a></div>
    <div className="navactions"><ThemeToggle/><a className="iconbtn" href="./blog/">Read →</a></div>
   </div></nav>
   {children}
   <footer className="footer"><div className="container footerin"><span>© 2026 Insightful · ZeroIntern Project 3</span><span>Built with Next.js + MDX · Static & fast</span></div></footer>
 </body></html>
}

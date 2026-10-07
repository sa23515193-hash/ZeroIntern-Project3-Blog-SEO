export type Post = {
  slug: string; title: string; excerpt: string; category: string; date: string;
  readTime: string; author: string; views: number; featured?: boolean;
};

export const posts: Post[] = [
 {slug:"seo-foundations",title:"SEO Foundations for Modern Blogs",excerpt:"A practical guide to metadata, headings, internal links and crawlable content.",category:"SEO",date:"2026-10-01",readTime:"6 min",author:"Sawaira Ijaz",views:1240,featured:true},
 {slug:"core-web-vitals",title:"Core Web Vitals Without the Guesswork",excerpt:"Understand LCP, INP and CLS and build pages that feel instant on real devices.",category:"Performance",date:"2026-09-25",readTime:"7 min",author:"Sawaira Ijaz",views:980,featured:true},
 {slug:"structured-data",title:"Structured Data: A Beginner's Guide",excerpt:"Learn how JSON-LD helps search engines understand articles, authors and organizations.",category:"SEO",date:"2026-09-18",readTime:"5 min",author:"Sawaira Ijaz",views:760},
 {slug:"static-generation",title:"Why Static Generation Is So Fast",excerpt:"How pre-rendered pages reduce server work and deliver content close to your readers.",category:"Next.js",date:"2026-09-12",readTime:"6 min",author:"Sawaira Ijaz",views:650},
 {slug:"mdx-writing",title:"Writing Better Technical Articles with MDX",excerpt:"Combine Markdown readability with React components for rich, reusable documentation.",category:"MDX",date:"2026-09-05",readTime:"5 min",author:"Sawaira Ijaz",views:590},
 {slug:"analytics-without-backend",title:"Privacy-Friendly Analytics Without a Backend",excerpt:"A front-end demo pattern for tracking article interactions with local browser storage.",category:"Analytics",date:"2026-08-28",readTime:"4 min",author:"Sawaira Ijaz",views:430}
];
export function getPost(slug:string){return posts.find(p=>p.slug===slug);}

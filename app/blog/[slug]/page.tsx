import {posts,getPost} from "@/lib/posts";
import {getMdx} from "@/lib/mdx";
import type {Metadata} from "next";
import {notFound} from "next/navigation";

export const dynamicParams=false;
export function generateStaticParams(){return posts.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params; const p=getPost(slug); if(!p)return {};
 return {title:p.title,description:p.excerpt,keywords:[p.category,"SEO","Next.js","web performance"],openGraph:{title:p.title,description:p.excerpt,type:"article",publishedTime:p.date,authors:[p.author]}};
}
export default async function Article({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=getPost(slug); if(!p)notFound(); const mdx=await getMdx(slug);
 const jsonLd={"@context":"https://schema.org","@type":"Article","headline":p.title,"description":p.excerpt,"datePublished":p.date,"author":{"@type":"Person","name":p.author},"publisher":{"@type":"Organization","name":"Insightful"}};
 return <main className="article"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><div className="articlemeta"><span className="tag">{p.category}</span><span>{p.date}</span><span>{p.readTime} read</span></div><h1>{p.title}</h1><p className="lead">{p.excerpt}</p><div>{mdx.content}</div><div className="callout"><strong>SEO note:</strong> This article is statically generated and its metadata + Article JSON-LD are generated at build time.</div></main>
}

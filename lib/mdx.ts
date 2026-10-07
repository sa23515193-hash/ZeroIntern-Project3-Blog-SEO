import { readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

export async function getMdx(slug:string){
  const source=await readFile(path.join(process.cwd(),"content",`${slug}.mdx`),"utf8");
  const {data,content}=matter(source);
  const result=await compileMDX({source:content,options:{parseFrontmatter:false}});
  return {data,content:result.content};
}

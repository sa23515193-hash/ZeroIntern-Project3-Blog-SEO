import {posts} from "@/lib/posts";
export default function Home(){
 const featured=posts.filter(p=>p.featured);
 return <main>
  <section className="hero"><div className="container">
   <span className="eyebrow">✦ SEO-first publishing platform</span>
   <h1>Publish ideas.<br/><span>Grow organically.</span></h1>
   <p>Insightful is a fast, accessible blog platform built around the fundamentals of technical SEO: clean metadata, structured content, static generation and performance.</p>
   <div className="heroactions"><a className="btn primary" href="./blog/">Explore articles →</a><a className="btn" href="./dashboard/">View analytics</a></div>
  </div></section>
  <section className="section"><div className="container">
   <div className="sectionhead"><div><h2>Featured insights</h2><p>Practical lessons for better websites.</p></div><a className="btn" href="./blog/">All posts</a></div>
   <div className="grid">{featured.map(p=><a className="card postcard" href={`./blog/${p.slug}/`} key={p.slug}><div className="posttop"><span className="tag">{p.category}</span><span>{p.readTime}</span></div><h3>{p.title}</h3><p>{p.excerpt}</p><span className="read">Read article →</span></a>)}</div>
  </div></section>
  <section className="section"><div className="container"><div className="stats">
   <div className="card"><span className="muted">Published articles</span><strong>{posts.length}</strong></div>
   <div className="card"><span className="muted">Total demo views</span><strong>{posts.reduce((a,p)=>a+p.views,0).toLocaleString()}</strong></div>
   <div className="card"><span className="muted">Avg. read time</span><strong>5.5m</strong></div>
   <div className="card"><span className="muted">SEO score target</span><strong>95+</strong></div>
  </div></div></section>
 </main>
}

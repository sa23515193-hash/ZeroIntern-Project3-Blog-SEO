"use client";

import { posts } from "@/lib/posts";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [extra, setExtra] = useState(0);

  useEffect(() => {
    const savedViews = Number(localStorage.getItem("demoViews") || 0);
    setExtra(savedViews);
  }, []);

  const total = posts.reduce((sum, post) => sum + post.views, 0) + extra;

  return (
    <main className="section dashboard">
      <div className="container">
        <div className="sectionhead">
          <div>
            <h2>Analytics overview</h2>
            <p>
              Demo analytics stored locally in your browser — no backend
              required.
            </p>
          </div>
        </div>

        <div className="stats">
          <div className="card">
            <span className="muted">Total views</span>
            <strong>{total.toLocaleString()}</strong>
          </div>

          <div className="card">
            <span className="muted">Top article</span>
            <strong style={{ fontSize: 22 }}>SEO Foundations</strong>
          </div>

          <div className="card">
            <span className="muted">Organic share</span>
            <strong>72%</strong>
          </div>

          <div className="card">
            <span className="muted">Avg. engagement</span>
            <strong>4m 18s</strong>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h3>Article traffic</h3>

            {posts.map((post) => {
              return (
                <div key={post.slug} style={{ margin: "20px 0" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 7,
                    }}
                  >
                    <span>{post.title}</span>

                    <span className="muted">
                      {post.views.toLocaleString()} views
                    </span>
                  </div>

                  <div className="bar">
                    <i
                      style={{
                        width: `${Math.max(12, post.views / 12.5)}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card">
          <strong>Implementation note</strong>

          <p className="muted">
            The production-ready extension point is clearly separated:
            replace the localStorage counter with Plausible, GA4, Vercel
            Analytics, or your own API when a backend is introduced.
          </p>
        </div>
      </div>
    </main>
  );
}
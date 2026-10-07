# ZeroIntern Project 3 — Insightful Blog Platform with SEO

A fast publishing platform built with **Next.js + MDX** and designed for static deployment.

## Features

- Next.js App Router and Server Components
- MDX source articles in `/content`
- Static Site Generation / pre-rendered articles
- SEO metadata per article
- Article JSON-LD structured data
- `sitemap.xml` and `robots.txt`
- Responsive modern UI
- Dark mode
- Search and category filtering
- Analytics dashboard with backend-free localStorage demo
- GitHub Pages deployment via GitHub Actions
- No database or API required for the demo

## Run locally

Requirements: Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To test the production build:

```bash
npm run build
```

The exported site is created in `/out`.

## GitHub Pages

1. Create a public repository, e.g. `ZeroIntern-Project3-Blog-SEO`.
2. Upload all project files to the repository root.
3. In **Settings → Pages**, choose **GitHub Actions** as the source.
4. Push to `main`.
5. The included workflow builds and deploys the static `/out` folder.

The Next.js configuration automatically uses the GitHub repository name as the `basePath` during GitHub Actions, so project links work on GitHub Pages.

## Content

Add or edit articles in `/content/*.mdx`, then add the matching metadata object to `lib/posts.ts`. Run a build to generate the route.

## Backend roadmap

The demo intentionally works without a backend. For a production version, a separate backend/API can provide authentication, an admin CMS, database-backed posts, real analytics, comments, drafts and scheduled publishing.

## Submission checklist

- [x] Repository contains source code
- [x] README with setup instructions
- [x] SEO metadata
- [x] Sitemap
- [x] Structured data
- [x] Dark mode
- [x] Analytics demo
- [x] Static generation
- [x] Responsive design
- [x] GitHub Pages workflow

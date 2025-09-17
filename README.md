# Angel Musa — Portfolio (Next.js + Tailwind)

A sleek, dark‑green personal site with pages for **Intro/Contact**, **Work Experience**, and **Projects** (auto‑pulled from GitHub).

## Quickstart

```bash
npm i
npm run dev
# open http://localhost:3000
```

## Deploy (Vercel — recommended)
1. Create a new Git repo and push this folder.
2. Go to vercel.com → Add New Project → Import your repo.
3. Framework preset: **Next.js**. Click Deploy. Done.

## Deploy (Netlify)
- Use Next.js 14 build (Netlify supports Next). Build command: `npm run build`, Publish directory: `.next` (Netlify will detect).
- Or export a static site (if you remove the GitHub API fetch) with `next export`.

## Customize
- Colors: `tailwind.config.ts` (`brand` palette) and CSS variables in `app/globals.css`.
- Work timeline: edit `app/work/page.tsx`.
- Contact links: edit `app/page.tsx`.
- Projects: reads from `https://api.github.com/users/angel-musa/repos?sort=updated&per_page=24`.

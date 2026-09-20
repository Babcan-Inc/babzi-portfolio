# babzi-portfolio

Public research portfolio for BABZI.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS. Built for Vercel.

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build
```

## Deploy

1. Connect this repo to a Vercel project.
2. Deploy from `main`.
3. Point `babzi.xyz` at that Vercel project (domain already resolves to Vercel with a 404 until a project is attached).

## Contact

babziweb3@gmail.com · https://x.com/Babzi_web3

## Admin (Writings)

Local: set `ADMIN_PASSWORD` in `.env.local`. Saves write `content/writing.json`.

Vercel (so publishes stick): set `ADMIN_PASSWORD`, and `GITHUB_TOKEN` with Contents write on `Babcan-Inc/babzi-portfolio`. Optional: `ADMIN_SECRET`, `GITHUB_REPO`, `GITHUB_BRANCH`. See `.env.example`.

Desk: `/admin`. Public shelf stays at `/work`.


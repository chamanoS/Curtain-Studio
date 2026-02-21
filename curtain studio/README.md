# The Curtain Studio — SPA (React + Vite + Tailwind)

This project turns the **Curtain Studio** business-plan PDF into a professional single-page app style website (multi-route SPA).

## 1) Prerequisites
- Node.js 18+ (recommended)
- npm

## 2) Install & run
```bash
npm install
npm run dev
```

## 3) Build
```bash
npm run build
npm run preview
```

## 4) Deploy to Netlify (two easy options)

### Option A — Drag & drop
1. Run `npm run build`
2. Upload the **dist/** folder to Netlify (Drop site)

### Option B — Git-based deploy (recommended)
1. Push this repo to GitHub
2. In Netlify: **Add new site → Import from Git**
3. Build command: `npm run build`
4. Publish directory: `dist`

SPA routing is already configured in `netlify.toml`.

## 5) Netlify Forms (Contact page)
The contact form uses Netlify Forms:
- Form name: `quote`
- It will appear under **Site → Forms** after first deploy & a submission.

## 6) Customize content
All core copy is in:
- `src/data/content.ts`

Images are in:
- `src/assets/`

## 7) New features
- **Instant quote estimator**: `/quote` (also embedded on Home)
- **Gallery**: `/gallery` (grid + lightbox + a before/after slider component you can reuse)
- **Downloads**: `/downloads` (PDFs served from `public/downloads/`)

## 8) Downloads
Static PDFs included:
- `/downloads/business-plan.pdf`
- `/downloads/pricing-sheet.pdf`
- `/downloads/investor-snapshot.pdf`

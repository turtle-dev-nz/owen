# owennicholson.com

Personal site for Owen Nicholson — React, TypeScript and Vite, hosted on GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Check

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deploy

Deploys are manual. Merging to `main` does not update the live site.

```bash
npm run deploy   # builds, then publishes dist/ to the gh-pages branch
```

## Notes

- The link-preview image is `public/og-image.png` (1200×630). Update it if the name or headline changes.
- The Projects section is written but currently hidden; re-enable it in `src/pages/Home.tsx` and the nav links in `src/components/layout/Navbar.tsx`.
- Theme debug logging can be switched on in the browser with `localStorage.setItem("theme-debug", "1")`.

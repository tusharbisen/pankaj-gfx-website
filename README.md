# Pankaj GFX

Pankaj GFX is a Next.js App Router website for a graphic design business. The project uses TypeScript, Tailwind CSS, and reusable shared components.

## Run locally

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` for the local or deployed site.
3. Start the development server with `npm run dev`.

## Project structure

```text
src/
  app/                 App Router pages, root layout, and global styles
    fonts/             Locally bundled Geist font files
  components/          Shared navigation, footer, UI, and SEO helpers
  config/              Current business configuration
  lib/                 Shared application utilities
  models/              Existing Mongoose models
public/                Static assets served from the site root
```

The root layout in `src/app/layout.tsx` applies the shared header, footer, floating WhatsApp action, global font, and base metadata. `src/components/Seo.ts` exports the default Next.js metadata and a helper for page-specific title and description metadata.

## Current implementation phase

The project shell and shared layout are in place. Public page data and the database-backed content layer are handled in later implementation phases.

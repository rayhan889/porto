# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ Next.js version warning

This project pins `next@16.2.9`, which is **not** the Next.js version in your training data — APIs, conventions, and file structure may differ from what you expect. Before writing any App Router code (routing, metadata, caching, data fetching, config), check `node_modules/next/dist/docs/01-app/` for the relevant guide and heed any deprecation notices there. Don't assume an older Next.js pattern still applies.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`).

```bash
pnpm dev              # Start dev server (also runs velite in watch mode via next.config.ts)
pnpm build            # velite build && next build
pnpm start            # Start production server
pnpm lint             # eslint
pnpm test             # vitest --run (single run, CI mode)
pnpm test:watch       # vitest (watch mode)
pnpm test:ui          # vitest --ui
pnpm velite           # velite build (one-off content build)
pnpm velite:dev        # velite dev (watch mode only)
```

Run a single test file: `pnpm vitest run path/to/file.test.ts` (or `path/to/file.test.tsx`).
Run tests matching a name: `pnpm vitest run -t "test name"`.

## Architecture

This is a personal portfolio/blog site (rynrama.com) built on Next.js App Router + React 19.

### Content pipeline: Velite

Blog posts are MDX files under `content/blog/**/*.mdx`, compiled by **Velite** (`velite.config.ts`) into typed data under `.velite/` (gitignored, generated — import from `@/.velite`). Velite is invoked from `next.config.ts` itself (a self-triggering build step guarded by `process.env.VELITE_STARTED`), not just from the `velite` npm scripts — so content changes are picked up automatically in `pnpm dev`/`pnpm build`.

- The `posts` collection schema (in `velite.config.ts`) derives `slug`, `permalink`, a `toc` (table of contents, built by a custom heading-regex extractor), and `readingTime` (via the `reading-time` package) at build time.
- Heading IDs used for the TOC/anchor links are produced by `lib/slug.ts`'s `slugify`/`stripMarkdownInline` — both the Velite TOC extraction and the runtime MDX `h2`/`h3` overrides in `components/ui/MDXContent.tsx` must stay in sync on how they slugify heading text, since one generates the TOC links and the other generates the actual heading `id`s they point to.
- MDX bodies are compiled to a function body string (`s.mdx()`); `components/ui/MDXContent.tsx` evaluates that string at runtime via `new Function("runtime", code)` and renders it with a custom `overrides` map (headings, code blocks with copy-to-clipboard, images via `next/image`, links, lists, blockquotes).
- Generated image assets land in `public/static/` (gitignored, generated) via Velite's `output.assets` config.

### Static content store: Zustand, not a CMS/DB

Resume-style content (experience, work/projects, education, awards, stacks) is **not** fetched from any backend — it's hardcoded as arrays inside `store/useContentStore.ts` and exposed through a Zustand store. Read that file directly to find/edit this content (job history, project list, tech stack icons, etc.). `store/selectors.ts` provides typed hooks (`useExperiences`, `useWorks`, `useStacks`, ...) that components should use instead of accessing `useContentStore` directly. Shapes for each content type live in `lib/types.ts`. `store/useTimeResolutionStore.ts` is unrelated — it drives the live clock/screen-resolution display in `TimeResolutionHeader`.

### Path aliases & UI components

- `@/*` resolves to the repo root (`tsconfig.json`, and mirrored in `vitest.config.ts`'s Vite alias).
- shadcn is configured via `components.json` (style: `radix-nova`, base color `neutral`, icon library `lucide`). Aliases: `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils` (the `cn()` helper combining `clsx` + `tailwind-merge`).
- Icon components for tech stack badges live under `components/icon/` (one file per technology, e.g. `GoIcon.tsx`, `DockerIcon.tsx`) and are referenced from `useContentStore.ts`.

### Routing

App Router pages under `app/`: `/` (home, composed from `components/home/*`), `/about`, `/projects` (+ a dedicated `projects/tale-of-samurai` page that embeds a Pygame-built game via `GameEmbed`/`GameEmbedLoader`), `/writings` (blog index) and `/writings/[slug]` (individual post, sourced from Velite's `posts`), and `/tools`. `app/sitemap.ts`, `app/robots.ts`, and per-route `opengraph-image.tsx` files handle SEO/OG metadata; `lib/site.ts` centralizes `siteName`/`siteUrl`/`siteDescription` used across metadata.

### Testing

Vitest + jsdom + React Testing Library. Config in `vitest.config.ts`, global setup (`@testing-library/jest-dom`) in `vitest.setup.ts`. Test files live alongside source, either as `*.test.ts(x)` next to the file (e.g. `lib/date.test.ts`) or under a `__tests__/` folder (e.g. `components/ui/__tests__/PostCard.test.tsx`, `lib/__tests__/utils.test.ts`).

# Porto

Personal portfolio and blog for Me, see at [rynrama.com](https://rynrama.com).

## Pages

- **Home**, intro, experience, work/projects, and stack sections, all driven by a single content store.
- **Writings**, a blog authored in MDX, with syntax-highlighted code blocks (copy-to-clipboard), KaTeX math, auto-generated table of contents, and reading time.
- **Projects**, including [Tale of Samurai](https://rynrama.com/projects/tale-of-samurai), a turn-based pixel-art game written in Python/Pygame and compiled to WebAssembly via `pygbag`, embedded directly in the page.
- **Tools**, the hardware/editor/terminal setup used day to day.

## Stack

- Next.js 16 (App Router) + React 19
- **Content with**: [Velite](https://velite.js.org/) compiling MDX (`content/blog/**/*.mdx`) into typed data, with `rehype-pretty-code` (Shiki), `remark-math`/`rehype-katex`
- **State**: Zustand (`store/`) for static resume/project content and small client-side UI state

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Velite builds content automatically in watch mode alongside `next dev` (wired up in `next.config.ts`), so editing an MDX file under `content/blog/` will hot-reload.

## Scripts

| Script            | Description                                        |
| ----------------- | -------------------------------------------------- |
| `pnpm dev`        | Start the dev server (content build in watch mode) |
| `pnpm build`      | `velite build && next build` — production build    |
| `pnpm start`      | Start the production server                        |
| `pnpm lint`       | Run ESLint                                         |
| `pnpm test`       | Run the Vitest suite once                          |
| `pnpm test:watch` | Run Vitest in watch mode                           |
| `pnpm test:ui`    | Run Vitest with the interactive UI                 |
| `pnpm velite`     | One-off Velite content build                       |
| `pnpm velite:dev` | Velite in watch mode only                          |

## Project structure

```
app/                    App Router pages (home, about, projects, writings, tools)
components/
  home/                 Home page sections (intro, experience, selected work, stack)
  icon/                 One SVG icon component per technology, used by the stack list
  ui/                   Shared UI (nav, footer, MDX renderer, cards, shadcn primitives)
content/blog/           MDX blog posts, compiled by Velite
lib/                    Date formatting, slugify helpers, site metadata constants, cn()
store/                  Zustand stores: static content (experience/work/education/stacks)
                         and small client UI state (time/resolution header)
velite.config.ts        Velite collection schema (adds slug, TOC, reading time to posts)
```

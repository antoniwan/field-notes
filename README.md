# Field Notes on (Modern) Humanity

A static site built with Astro for publishing field notes, observations, and insights about living in the modern world. The project serves as an open-source manual for being human, featuring personal reflections, tested lessons, and practical wisdom gathered from work, family, and life experiences.

## Project Overview

**Site URL:** https://fieldnotesonmodernhumanity.com  
**Technology Stack:** Astro 5.13.5, TypeScript, MDX, RSS, Sitemap  
**Content Focus:** Personal essays, life observations, modern living insights

## Features

- ✅ Static site generation with Astro
- ✅ Markdown and MDX content support
- ✅ RSS feed generation
- ✅ Sitemap generation
- ✅ SEO-optimized with OpenGraph data
- ✅ Responsive design with dark mode support
- ✅ Content collections for organized note management
- ✅ Reading time calculation
- ✅ Hero sections and prose components

## Content Structure

The site is organized around "notes" rather than traditional blog posts, reflecting the field notes concept:

- **Notes Collection:** Located in `src/content/notes/`
- **Content Types:** Markdown (.md) and MDX (.mdx) files
- **Metadata:** Title, description, publication date, hero image, reading time, category, tags
- **Current Content:** Sample posts and style guide (placeholder content)

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable Astro components
│   ├── content/notes/     # Note content collection
│   ├── layouts/           # Page and post layouts
│   ├── pages/             # Route pages
│   ├── utils/             # Utility functions
│   └── consts.ts          # Site constants
├── astro.config.mjs       # Astro configuration
└── package.json           # Dependencies and scripts
```

## Development

### Prerequisites
- Node.js
- pnpm (recommended) or npm

### Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`           | Install dependencies                             |
| `pnpm dev`               | Start local dev server at `localhost:4321`      |
| `pnpm build`             | Build production site to `./dist/`               |
| `pnpm preview`           | Preview build locally before deploying           |
| `pnpm astro ...`         | Run Astro CLI commands                           |

### Content Management

- Add new notes to `src/content/notes/` as Markdown or MDX files
- Use frontmatter for metadata (title, description, pubDate, etc.)
- Images should be placed in `src/assets/` and referenced relatively
- The site automatically generates routes and feeds from content

## Open Source Philosophy

This project embraces open-source principles for the content itself. The repository is public, allowing for community contributions, forks, and collaborative development of the "field notes" concept. Contributors can propose changes, add new insights, or build their own branches of the human experience documentation.

## License

- **Content:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) - Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
- **Code:** [MIT License](https://opensource.org/licenses/MIT) - Open source software license
- **Copyright:** © 2024 Strong Hands, Soft Heart LLC

The content is licensed under Creative Commons, allowing for sharing and adaptation with attribution, while the code is available under the permissive MIT license for maximum reusability.

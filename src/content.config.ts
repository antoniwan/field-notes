import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './utils/categories';

// Get valid category slugs for validation
const validCategorySlugs = Object.keys(CATEGORIES);

const notes = defineCollection({
	// Load Markdown and MDX files in the `src/content/notes/` directory.
	loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				description: z.string(),
				// Transform string to Date object
				pubDate: z.coerce.date(),
				heroImage: image().optional(),
				readingTime: z.number().optional(),
				// Category should be one of the valid category slugs
				category: z.enum(validCategorySlugs as [string, ...string[]]).optional(),
				// Themes are optional array of strings (will be validated in components)
				themes: z.array(z.string()).optional().default([]),
				// Legacy tags support
				tags: z.array(z.string()).optional().default([]),
			}),
});

export const collections = { notes };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
			}),
});

export const collections = { notes };

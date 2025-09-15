import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://fieldnotesonmodernhumanity.com',
	integrations: [
		mdx(), 
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
		})
	]
});

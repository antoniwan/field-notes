import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('notes');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/notes/${post.id}/`,
			guid: `/notes/${post.id}/`,
			category: post.data.category,
			tags: post.data.tags,
		})),
		customData: `<language>en-us</language>
		<managingEditor>fieldnotes@example.com (Field Notes)</managingEditor>
		<webMaster>fieldnotes@example.com (Field Notes)</webMaster>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		<generator>Astro RSS</generator>`,
	});
}

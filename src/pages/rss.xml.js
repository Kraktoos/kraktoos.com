import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';
import sanitizeHtml from 'sanitize-html';

export function get(context) {
	const postImportResult = import.meta.glob('../blog/**/*.md', { eager: true });
	const posts = Object.values(postImportResult);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			link: post.url,
			content: sanitizeHtml(post.compiledContent()),
			...post.frontmatter,
		})),
	});
}
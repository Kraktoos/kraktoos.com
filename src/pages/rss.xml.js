import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export const get = () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: "https://kraktoos.github.io/",
		items: import.meta.glob('./blog/**/*.{md,mdx}'),
		posts: (item) => {
			const { metadata } = item;
			return {
				title: metadata.title,
				description: metadata.description,
				link: `https://kraktoos.github.io/blog/${metadata.slug}`,
				date: metadata.date,
			};
		}
	});

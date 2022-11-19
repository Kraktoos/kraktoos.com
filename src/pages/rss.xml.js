import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export const get = () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: "kraktoos.github.io",
		items: import.meta.glob('./blog/**/*.{md,mdx}'),
	});

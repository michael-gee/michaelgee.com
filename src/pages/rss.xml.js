import rss from '@astrojs/rss';

export const get = () =>
	rss({
		title: "Michael Gee's Blog",
		description:
			"Michael Gee's personal blog sharing technical expertise and cool things he has learned along the way.",
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.mdx')
	});

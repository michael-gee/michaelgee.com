import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: "Michael Gee's Blog",
    description:
      "Michael Gee's personal blog sharing technical expertise and cool things he has learned along the way.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/*.{md,mdx}')),
    customData: `<language>en-us</language>`
  });
}

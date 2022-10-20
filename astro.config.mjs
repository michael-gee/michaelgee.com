import { defineConfig } from 'astro/config';

import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://michaelgee.com',
	integrations: [image({ serviceEntryPoint: '@astrojs/image/sharp' }), mdx(), sitemap()]
});

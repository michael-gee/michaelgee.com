import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://michaelgee.com',
	integrations: [
		react(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		}),
		mdx(),
		sitemap(),
		tailwind()
	]
});

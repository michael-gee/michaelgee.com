import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://michaelgee.com',
	integrations: [
		react(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		}),
		mdx(),
		partytown(),
		sitemap(),
		tailwind()
	]
});

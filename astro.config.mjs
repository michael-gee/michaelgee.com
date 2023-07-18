import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel({
		analytics: true
	}),
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

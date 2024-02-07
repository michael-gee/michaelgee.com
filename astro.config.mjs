import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    speedInsights: {
      enabled: true
    },
    webAnalytics: {
      enabled: true
    },
    imageService: true,
    devImageService: 'sharp'
  }),
  site: 'https://michaelgee.com',
  integrations: [react(), mdx(), sitemap(), tailwind(), icon({ sprite: true })],
  image: {
    remotePatterns: [{ protocol: 'https' }],
    domains: ['get.gofan.co', 'cdn.pixabay.com', 'assets.website-files.com']
  }
});

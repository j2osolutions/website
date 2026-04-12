// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://j2osolutions.github.io',
  base: '/website',
  trailingSlash: 'always',
  integrations: [sitemap()],
});

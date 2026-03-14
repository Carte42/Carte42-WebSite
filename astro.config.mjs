import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://carte42.fr',
  base: '/Carte42-WebSite',
  integrations: [tailwind()],
});

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://kraktoos.com',
  integrations: [mdx(), sitemap(), image(), tailwind()],
  markdown: {
    syntaxHighlight: 'prism'
  }
});
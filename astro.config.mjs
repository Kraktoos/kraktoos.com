import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import image from "@astrojs/image";

import svelte from "@astrojs/svelte";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://kraktoos.com',
  integrations: [mdx(), sitemap(), image(), svelte()],
  markdown: {
    syntaxHighlight: 'prism'
  }
});
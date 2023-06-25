import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import image from "@astrojs/image";
import svelte from "@astrojs/svelte";

import purgecss from "astro-purgecss";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://kraktoos.com',
  integrations: [mdx(), sitemap(), image(), svelte(), purgecss(), compress()],
  markdown: {
    syntaxHighlight: 'prism'
  }
});
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});
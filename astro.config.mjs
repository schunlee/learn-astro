import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://rainbow-haupia-e851a0.netlify.app",
  integrations: [preact()]
});
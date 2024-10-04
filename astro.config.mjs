import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // Add the site property to the Astro config with your site’s own unique Netlify URL.
  site: "https://example.com",

  integrations: [preact()]
});
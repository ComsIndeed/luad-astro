import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solidJs(), icon()]
});
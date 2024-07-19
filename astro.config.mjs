import { defineConfig } from 'astro/config';
import lottie from "astro-integration-lottie";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [lottie(), tailwind(), react()]
});
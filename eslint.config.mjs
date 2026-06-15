// @ts-check
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
  },
}).append({
  // Nuxt routing maps single-word filenames (e.g. index.vue) to pages.
  files: ["playground/pages/**/*.vue", "playground/app.vue"],
  rules: {
    "vue/multi-word-component-names": "off",
  },
});

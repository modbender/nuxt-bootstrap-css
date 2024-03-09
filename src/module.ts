import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

import type { ModuleOptions } from "./types";

const moduleList = ["bootstrap", "@popperjs/core"];

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-bootstrap-css",
    configKey: "bootstrap",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.build.transpile = [
      ...nuxt.options.build.transpile,
      ...moduleList,
    ];

    nuxt.options.css = ["bootstrap/scss/bootstrap.scss", ...nuxt.options.css];

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin.client"));
  },
});

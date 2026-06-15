---
title: Customizing the Theme
description: Override Bootstrap's SCSS variables, restyle with custom colors and radius, and add a runtime light/dark toggle.
sidebar:
  order: 3
---

Bootstrap is customized by overriding its SCSS variables before its stylesheet compiles. Nuxt Bootstrap CSS registers that stylesheet for you, and you inject your overrides through Nuxt's Vite Sass options.

## Override SCSS variables inline

For a few tweaks, inline them with `additionalData`. Because Bootstrap declares its variables with `!default`, your values win:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-bootstrap-css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $primary: #6f42c1;
            $success: #16a34a;
            $border-radius: 0.75rem;
            $enable-shadows: true;
          `,
        },
      },
    },
  },
})
```

Every component that derives from these variables — buttons, alerts, cards, form controls — picks up the new look automatically.

## Use a dedicated overrides file

For anything larger, keep your overrides in their own SCSS file and reference it instead of inlining:

```scss
// assets/scss/_bootstrap-overrides.scss
$primary: #6f42c1;
$font-family-sans-serif: 'Inter', system-ui, sans-serif;
$headings-font-weight: 700;

// You can also extend Bootstrap maps, e.g. custom theme colors:
$custom-colors: (
  'brand': #ff6b6b,
);
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-bootstrap-css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_bootstrap-overrides.scss" as *;',
        },
      },
    },
  },
})
```

## Add a runtime light/dark toggle

Bootstrap 5.3's color modes are driven by the `data-bs-theme` attribute. Pair the module with [`@nuxtjs/color-mode`](https://color-mode.nuxtjs.org/) to let users switch themes at runtime:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-bootstrap-css', '@nuxtjs/color-mode'],
  colorMode: {
    dataValue: 'bs-theme', // writes data-bs-theme="light|dark" on <html>
    classSuffix: '',
  },
})
```

```vue
<!-- components/ThemeToggle.vue -->
<script setup lang="ts">
const colorMode = useColorMode()

function toggle() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="btn btn-outline-secondary" @click="toggle">
    Toggle {{ colorMode.value === 'dark' ? 'light' : 'dark' }} mode
  </button>
</template>
```

:::tip
You can also scope dark mode to part of a page by putting `data-bs-theme="dark"` on a single wrapper element — handy for a dark navbar or footer on an otherwise light page.
:::

## Next steps

- [Configuration](/nuxt-bootstrap-css/configuration/) — what the module sets up and the `bootstrapCSS` key.
- [Basic](/nuxt-bootstrap-css/examples/basic/) — the minimal end-to-end setup.

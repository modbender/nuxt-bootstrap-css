---
title: Configuration
description: What Nuxt Bootstrap CSS sets up for you, the bootstrapCSS config key, and how to customize Bootstrap's SCSS variables and theme.
sidebar:
  order: 4
---

Nuxt Bootstrap CSS is intentionally zero-config: it works the moment you add it to `modules`, with nothing to set. This page explains exactly what it does for you and how to customize Bootstrap itself.

## What the module sets up

When enabled, the module does three things automatically:

1. **Registers Bootstrap's stylesheet** — it prepends `bootstrap/scss/bootstrap.scss` to Nuxt's `css` option, so the full Bootstrap SCSS is compiled and server-rendered.
2. **Transpiles the runtime packages** — it adds `bootstrap` and `@popperjs/core` to `build.transpile`, so they're processed correctly for both server and client builds.
3. **Injects Bootstrap's JavaScript on the client** — a client-only plugin provides `$bootstrap` and `$Popper` (see [Usage](/nuxt-bootstrap-css/usage/)), so `data-bs-*` components work and you can drive them programmatically.

## The `bootstrapCSS` key

The module reserves a `bootstrapCSS` config key in `nuxt.config.ts`. In the current version it takes no options — the module has no settings of its own — so you normally won't write it at all:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-bootstrap-css'],
  // bootstrapCSS: {}, // reserved; no options yet
})
```

:::tip
Customizing Bootstrap itself — colors, spacing, breakpoints — is done by overriding Bootstrap's **SCSS variables**, not through a module option. See [Customizing Bootstrap](#customizing-bootstrap) below.
:::

## Customizing Bootstrap

Bootstrap is customized the standard way: by overriding its SCSS variables before the stylesheet is compiled. Use Nuxt's Vite Sass options to inject your overrides globally:

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
            $border-radius: 0.5rem;
            $enable-shadows: true;
          `,
        },
      },
    },
  },
})
```

Any [Bootstrap SCSS variable](https://getbootstrap.com/docs/5.3/customize/sass/#variable-defaults) can be overridden this way. Because Bootstrap's variables are declared with `!default`, your values take precedence when injected ahead of the import.

For larger customizations, point `additionalData` at your own SCSS entry file instead of inlining variables:

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

## Dark Mode

Bootstrap 5.3's color modes are built in. You don't configure them through the module — you toggle them with the `data-bs-theme` attribute. See [Dark Mode in Usage](/nuxt-bootstrap-css/usage/#dark-mode) for the details and how to wire it to a runtime toggle.

## Next steps

- [Usage](/nuxt-bootstrap-css/usage/) — classes, components, the injected JS API, and dark mode.
- [Examples](/nuxt-bootstrap-css/examples/basic/) — end-to-end recipes you can copy.

---
title: Installation
description: Install Nuxt Bootstrap CSS and register it in nuxt.config — one step, no stylesheet import, no plugin wiring.
sidebar:
  order: 2
---

Getting Nuxt Bootstrap CSS running is a single step: add the module to your Nuxt config. There's no stylesheet to import and no plugin to register — the module handles both for you.

## Add the module

The quickest way is the Nuxt CLI, which installs the package and adds it to your `nuxt.config` for you:

```bash
npx nuxi@latest module add nuxt-bootstrap-css
```

### Manual install

If you'd rather install it by hand, add the package with your preferred package manager:

```bash
# pnpm
pnpm add -D nuxt-bootstrap-css
```

```bash
# npm
npm install --save-dev nuxt-bootstrap-css
```

```bash
# yarn
yarn add --dev nuxt-bootstrap-css
```

Then add `'nuxt-bootstrap-css'` to the `modules` array in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-bootstrap-css'],
})
```

## What the module pulls in

The package bundles its runtime dependencies, so you don't install them yourself:

- **`bootstrap`** — the full Bootstrap SCSS and JavaScript.
- **`@popperjs/core`** — the positioning engine Bootstrap uses for dropdowns, tooltips, and popovers.
- **`sass`** — used to compile Bootstrap's SCSS during the build.

## No stylesheet import needed

You don't have to add anything to your `css` array or import a stylesheet. The module registers `bootstrap/scss/bootstrap.scss` through Nuxt's `css` option automatically, so the full Bootstrap stylesheet is compiled and server-rendered the moment the module is enabled.

:::tip
Because the styles are registered through Nuxt's `css` option, Bootstrap is rendered on the server — there's no flash of unstyled content on first paint.
:::

## Next steps

- [Usage](/nuxt-bootstrap-css/usage/) — use Bootstrap classes, interactive components, and dark mode.
- [Configuration](/nuxt-bootstrap-css/configuration/) — customize Bootstrap's SCSS variables and theme.

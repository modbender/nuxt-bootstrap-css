---
title: Basic
description: A minimal end-to-end example — register the module and build a page with Bootstrap classes, no extra setup.
sidebar:
  order: 1
---

The smallest complete setup: register the module, then use Bootstrap classes anywhere. There's no stylesheet to import and no plugin to register.

## 1. Register the module

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-bootstrap-css'],
})
```

No options are required — Bootstrap's full SCSS is compiled and server-rendered as soon as the module is enabled.

## 2. Build a page with Bootstrap classes

```vue
<!-- pages/index.vue -->
<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <h1 class="h3 mb-3">Hello, Bootstrap!</h1>
            <p class="text-body-secondary mb-4">
              This page uses Bootstrap's grid, card, and utility classes — with
              zero configuration.
            </p>
            <button class="btn btn-primary me-2">Primary</button>
            <button class="btn btn-outline-secondary">Secondary</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

Load the page and you get a fully styled, responsive layout straight away — the grid, the card, the buttons, and the spacing utilities all come from Bootstrap.

:::tip
Because the stylesheet is registered through Nuxt's `css` option, the page is styled on the server — there's no flash of unstyled content on first paint.
:::

## Next steps

- [Interactive Components](/nuxt-bootstrap-css/examples/interactive-components/) — dropdowns, modals, and tabs using Bootstrap's JavaScript.
- [Customizing the Theme](/nuxt-bootstrap-css/examples/customizing-the-theme/) — override Bootstrap's SCSS variables.

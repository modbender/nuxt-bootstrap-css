---
title: Usage
description: Use Bootstrap classes and interactive components, toggle dark mode with data-bs-theme, and reach the injected Bootstrap and Popper JavaScript APIs.
sidebar:
  order: 3
---

Once the module is installed there's nothing else to wire up. Every Bootstrap class, component, and JavaScript behavior is available across your whole app.

## Bootstrap classes

Use any Bootstrap utility or component class directly in your templates — the full stylesheet is already compiled in:

```vue
<template>
  <div class="container my-5">
    <div class="row g-3">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Built entirely with Bootstrap classes.</p>
            <button class="btn btn-primary">Action</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

## Interactive components

Bootstrap's JavaScript is loaded on the client, so components that rely on `data-bs-*` attributes — dropdowns, modals, tabs, tooltips, collapses, offcanvas, and more — work without any extra code:

```vue
<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
</template>
```

:::tip
The data-attribute API (`data-bs-toggle`, `data-bs-target`, …) is the simplest way to use Bootstrap's components and is enough for most cases. Reach for the JavaScript API below only when you need to control a component programmatically.
:::

## The injected JavaScript API

The module's client plugin injects the full `bootstrap` and `@popperjs/core` modules into your Nuxt app, so you can drive components programmatically. Access them through `useNuxtApp()`:

```vue
<script setup lang="ts">
const { $bootstrap, $Popper } = useNuxtApp()

const modalEl = ref<HTMLElement | null>(null)

function openModal() {
  if (!modalEl.value) return
  const modal = new $bootstrap.Modal(modalEl.value)
  modal.show()
}
</script>

<template>
  <button class="btn btn-primary" @click="openModal">Open modal</button>

  <div ref="modalEl" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">Hello from a programmatically opened modal.</div>
      </div>
    </div>
  </div>
</template>
```

`$bootstrap` gives you every Bootstrap class — `Modal`, `Tooltip`, `Toast`, `Dropdown`, `Collapse`, `Offcanvas`, and the rest — and `$Popper` exposes Popper's positioning API if you need it directly.

:::caution
`$bootstrap` and `$Popper` are provided by a **client-only** plugin, since Bootstrap's JavaScript needs the browser DOM. Call them in client-side code — inside `onMounted`, event handlers, or guarded by `import.meta.client` — not during server-side rendering.
:::

## Dark Mode

Bootstrap 5.3 introduced [color modes](https://getbootstrap.com/docs/5.3/customize/color-modes/), and they work out of the box. Add the `data-bs-theme` attribute with a value of `light` or `dark` to any element to switch its theme — set it on `<html>` to theme the whole page:

```vue
<template>
  <div data-bs-theme="dark" class="p-4">
    <button class="btn btn-primary">I'm dark-themed</button>
  </div>
</template>
```

To toggle the whole app's theme, set the attribute on the root `<html>` element through Nuxt's app head config:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-bootstrap-css'],
  app: {
    head: {
      htmlAttrs: { 'data-bs-theme': 'dark' },
    },
  },
})
```

For a runtime theme toggle, pair it with [`@nuxtjs/color-mode`](https://color-mode.nuxtjs.org/) so the attribute follows the user's preference:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-bootstrap-css', '@nuxtjs/color-mode'],
  colorMode: {
    dataValue: 'bs-theme', // writes data-bs-theme="..."
    classSuffix: '',
  },
})
```

## Next steps

- [Configuration](/nuxt-bootstrap-css/configuration/) — what the module sets up and how to customize Bootstrap's SCSS.
- [Examples](/nuxt-bootstrap-css/examples/basic/) — copy-paste, end-to-end recipes.

---
title: Nuxt Bootstrap CSS
description: A Nuxt module that wires Bootstrap 5 into your Nuxt 3 or Nuxt 4 app — full CSS server-side, full JavaScript client-side, with zero configuration.
sidebar:
  order: 1
---

Setting up [Bootstrap](https://getbootstrap.com/) in a Nuxt app is more fiddly than it should be: you have to install Bootstrap and Popper, import the SCSS in the right place, make sure both packages get transpiled, and load Bootstrap's JavaScript on the client without breaking server-side rendering. Nuxt Bootstrap CSS does all of that for you.

Add it to your `modules` and you get the complete Bootstrap experience — every style server-rendered, every interactive component (dropdowns, modals, tabs, tooltips, …) working on the client — with no further setup.

## Key features

- **Instant integration, no config required** — add one module and Bootstrap's full SCSS is compiled into your app.
- **Full CSS server-side** — Bootstrap's stylesheet is registered through Nuxt's `css` option, so it's rendered on the server with no flash of unstyled content.
- **Full JavaScript client-side** — Bootstrap's interactive components and Popper are injected on the client, so `data-bs-*` behaviors work out of the box without hurting SSR.
- **Everything from Bootstrap** — the real `bootstrap` and `@popperjs/core` packages, nothing stripped out. Use any Bootstrap class or component.
- **Dark Mode support** — Bootstrap 5.3 color modes work via the standard `data-bs-theme` attribute.
- **Nuxt 3 + Nuxt 4** — a single install supports both major versions.

## A 30-second taste

Add the module:

```bash
npx nuxi@latest module add nuxt-bootstrap-css
```

That's it — start using Bootstrap classes and components anywhere:

```vue
<template>
  <div class="container my-5">
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
      </ul>
    </div>
  </div>
</template>
```

The dropdown's JavaScript behavior works immediately — no manual Bootstrap import, no plugin wiring.

## Compatibility

| | Supported |
| --- | --- |
| Nuxt Bootstrap CSS | 1.x |
| Bootstrap | 5.3.x |
| Nuxt | 3.x and 4.x |
| Vue | 3 |

:::tip
Nuxt Bootstrap CSS 1.x supports both Nuxt 3 and Nuxt 4 from the same package — there's nothing extra to configure when you upgrade Nuxt.
:::

## Where to next

- [Installation](/nuxt-bootstrap-css/installation/) — add the module to your project.
- [Usage](/nuxt-bootstrap-css/usage/) — Bootstrap classes, interactive components, dark mode, and the injected JS API.
- [Configuration](/nuxt-bootstrap-css/configuration/) — what the module sets up and how to customize Bootstrap.

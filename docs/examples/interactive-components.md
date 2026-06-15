---
title: Interactive Components
description: Dropdowns and tabs via Bootstrap's data-attribute API, plus driving a modal programmatically through the injected $bootstrap API.
sidebar:
  order: 2
---

Bootstrap's JavaScript is loaded on the client, so interactive components work two ways: the declarative `data-bs-*` attribute API, and the programmatic JavaScript API exposed as `$bootstrap`.

## Dropdown and tabs (data-attribute API)

Most components need no JavaScript of your own — just the right `data-bs-*` attributes:

```vue
<!-- pages/index.vue -->
<template>
  <div class="container my-5">
    <!-- Dropdown -->
    <div class="dropdown mb-5">
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

    <!-- Tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#home-pane"
          type="button"
          role="tab"
        >
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#profile-pane"
          type="button"
          role="tab"
        >
          Profile
        </button>
      </li>
    </ul>
    <div class="tab-content pt-3">
      <div id="home-pane" class="tab-pane fade show active" role="tabpanel">
        Home tab content.
      </div>
      <div id="profile-pane" class="tab-pane fade" role="tabpanel">
        Profile tab content.
      </div>
    </div>
  </div>
</template>
```

## Modal (programmatic API)

To open a component from your own code, reach for the injected `$bootstrap` object and construct the component class yourself:

```vue
<!-- pages/index.vue -->
<script setup lang="ts">
const { $bootstrap } = useNuxtApp()

const modalEl = ref<HTMLElement | null>(null)

function openModal() {
  if (!modalEl.value) return
  $bootstrap.Modal.getOrCreateInstance(modalEl.value).show()
}
</script>

<template>
  <div class="container my-5">
    <button class="btn btn-primary" @click="openModal">Launch modal</button>

    <div ref="modalEl" class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div class="modal-body">Opened from a click handler with $bootstrap.</div>
        </div>
      </div>
    </div>
  </div>
</template>
```

`$bootstrap.Modal.getOrCreateInstance()` reuses an existing instance if one exists, which avoids stacking duplicate controllers on the same element.

:::caution
`$bootstrap` comes from a **client-only** plugin. Use it in event handlers, `onMounted`, or code guarded by `import.meta.client` — never during server-side rendering, where there's no DOM.
:::

## Next steps

- [Customizing the Theme](/nuxt-bootstrap-css/examples/customizing-the-theme/) — override Bootstrap's SCSS variables.
- [Usage](/nuxt-bootstrap-css/usage/) — the full picture of classes, components, and the injected API.

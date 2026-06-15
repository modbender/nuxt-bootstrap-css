<h1 align="center">
Nuxt Bootstrap CSS
</h1>

<p align="center">
<a href="https://npmjs.com/package/nuxt-bootstrap-css"><img src="https://img.shields.io/npm/v/nuxt-bootstrap-css/latest.svg?style=flat&colorA=020420&colorB=00DC82" alt="Nuxt Bootstrap CSS - NPM Package" /></a>
<a href="https://npmjs.com/package/nuxt-bootstrap-css"><img src="https://img.shields.io/npm/dm/nuxt-bootstrap-css.svg?style=flat&colorA=020420&colorB=00DC82" alt="Nuxt Bootstrap CSS - NPM Package Downloads" /></a>
<a href="https://npmjs.com/package/nuxt-bootstrap-css"><img src="https://img.shields.io/npm/l/nuxt-bootstrap-css.svg?style=flat&colorA=020420&" alt="Nuxt Bootstrap CSS License" /></a>
<a href="https://nuxt.com"><img src="https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js" alt="Nuxt Bootstrap CSS - Nuxt" /></a>
</p>

<p align="center">
Complete Bootstrap integration, instant, no config, full CSS server side, full javascript client side.
</p>

<p align="center">
  <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Nuxt Bootstrap CSS Performance" />
</p>

-----
- [📚 Documentation](https://modbender.in/nuxt-bootstrap-css/)
- [📖 Official Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [🏀 Online playground](https://stackblitz.com/github/modbender/nuxt-bootstrap-css?file=playground%2Fapp.vue)
- [✨ Release Notes](/CHANGELOG.md)

## Features

- 📦 &nbsp;Instant Bootstrap Integration, No Config Required
- 🪶 &nbsp;No Decrease in Performance, Javascript injected to client side
- 🎉 &nbsp;Everything from Bootstrap available
- 🕶️ &nbsp;Dark Mode support

## Quick Setup

1. Add `nuxt-bootstrap-css` dependency to your project

    ```bash
    # Using pnpm
    pnpm add -D nuxt-bootstrap-css

    # Using yarn
    yarn add --dev nuxt-bootstrap-css

    # Using npm
    npm install --save-dev nuxt-bootstrap-css
    ```

2. Add `nuxt-bootstrap-css` to the `modules` section of `nuxt.config.ts`

    ```js
    export default defineNuxtConfig({
      modules: [
        'nuxt-bootstrap-css'
      ]
    })
    ```

3. Start designing your webpage using Bootstrap classes. Full `bootstrap` javascript and `@popper/core` is already imported.

    ```xml
    <template>
      <!-- JS Dropdown -->
      <div class="container my-5">
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
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"> Something else here </a>
            </li>
          </ul>
        </div>
        <!-- JS Tabs -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="disabled-tab"
              data-bs-toggle="tab"
              data-bs-target="#disabled-tab-pane"
              type="button"
              role="tab"
              aria-controls="disabled-tab-pane"
              aria-selected="false"
              disabled
            >
              Disabled
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="disabled-tab-pane"
            role="tabpanel"
            aria-labelledby="disabled-tab"
            tabindex="0"
          >
            ...
          </div>
        </div>
      </div>
    </template>
    ```

That's it! You can now use Nuxt Bootstrap CSS in your Nuxt app ✨

## Dark Mode

Bootstrap 5.3 introduced [Dark Mode](https://getbootstrap.com/docs/5.3/customize/color-modes/#dark-mode).  

Simply by adding attribute `data-bs-theme` to any element with value `light` or `dark` you can manipulate it's theme.

Bootstrap 5.3 is already pre-configured with `light` and `dark` theme variables. But you can always create custom themes with custom variables to switch colors.

With `color-mode` it's easy to configure Dark Mode for bootstrap.

```js
colorMode: {
  dataValue: 'bs-theme',
  classSuffix: ''
}
```

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run ESLint
pnpm run lint

# Run Vitest
pnpm run test
pnpm run test:watch

# Release new version
npm run release
```

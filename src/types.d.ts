// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions {}

declare module "@nuxt/schema" {
  interface NuxtConfig {
    bootstrapCSS?: ModuleOptions;
  }

  interface NuxtOptions {
    bootstrapCSS?: ModuleOptions;
  }
}

export {};

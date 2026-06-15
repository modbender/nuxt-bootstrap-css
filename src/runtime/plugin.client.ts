import { defineNuxtPlugin } from "#app";

import * as bootstrap from "bootstrap";
import * as Popper from "@popperjs/core";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      bootstrap,
      Popper,
    },
  };
});

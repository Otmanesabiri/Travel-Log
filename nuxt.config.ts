import tailwindcss from "@tailwindcss/vite";

import { validateEnv } from "./app/lib/env";

// Validate env variables during initialization
validateEnv();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode", "@pinia/nuxt"],
  ssr: true,
  css: ["./app/assets/css/main.css"],

  // Connects and types environment variables via runtimeConfig
  runtimeConfig: {
    public: {
      // Expose vars to the client (e.g., API URL)
      // nodeEnv: env.NODE_ENV,
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ["better-auth/vue"],
    },
  },
  colorMode: {
    dataValue: "theme",
  },

});

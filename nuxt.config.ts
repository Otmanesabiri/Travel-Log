import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon"],
  ssr: false,
  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});

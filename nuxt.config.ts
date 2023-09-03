export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "nuxt-lodash",
    "nuxt-simple-sitemap",
  ],
  css: ["~/assets/css/main.css"],
  ssr: false,
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    strategy: "prefix",
    defaultLocale: "en",
    langDir: "translations/",
    locales: [
      { code: "en", file: "en.json" },
      { code: "de", file: "de.json" },
    ],
  },
  googleFonts: {
    stylePath: "assets/css/google-fonts.css",
    fontsDir: "assets/fonts",
    download: true,
    inject: true,
    base64: false,
    families: {
      Oswald: true,
      "Open+Sans": true,
    },
  },
  image: {
    dir: "public/images/",
    quality: 80,
  },
  devtools: {
    enabled: true,
  },
  site: {
    url: "https://www.grainiere.ch",
  },
});

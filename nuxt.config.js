export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "int-lang",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    /* module options */
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome",
          contact: {
            name: "Name",
            email: "Email",
            message: "Message",
            save: "Save",
          },
          auth: {
            login: "Login with Google",
            logout: "Logout",
          },
        },
        fr: {
          welcome: "Bienvenue",
          contact: {
            name: "Nom",
            email: "e-mail",
            message: "message",
            save: "sauvegarder",
          },
          auth: {
            login: "Connectez-vous avec Google",
            logout: "Se déconnecter",
          },
        },
        es: {
          welcome: "Bienvenido",
          contact: {
            name: "nombre",
            email: "Email",
            message: "mensaje",
            save: "Ahorrar",
          },
          auth: {
            login: "Iniciar sesión con Google",
            logout: "cerrar sesión",
          },
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: { compact: true },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],
  router: {
    options: {
      linkActiveClass: 'text-blue-600',
      linkExactActiveClass: 'text-blue-600',
    }
  }
})

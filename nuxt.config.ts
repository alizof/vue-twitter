import path from 'path';


export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    'nuxt-icon',
    '@nuxtjs/supabase',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  primevue: {
    importPT: { as: 'Lara', from: __dirname+'/presets/lara/' },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
  },
  css: ['~/assets/css/tailwind.css'],
  supabase: {
    redirectOptions: {
      login: '/signin',
      callback: '/confirm'
    }
  },
  components: [
    {
      path: '~/components',
     pathPrefix: false,
    },
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
});
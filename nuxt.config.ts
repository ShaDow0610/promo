// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxt/icon', 
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots', 
    '@nuxtjs/tailwindcss'
  ],
  i18n:{
    strategy: 'prefix',
    defaultLocale:'fr',
    locales:[
       { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'in', name: 'हिन्दी', file: 'in.json' },
      { code: 'ae', name: 'العربية', file: 'ae.json' },
      { code: 'az', name: 'Azərbaycan dili', file: 'az.json' },
      { code: 'pt', name: 'Português', file: 'pt.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'so', name: 'Soomaaliga', file: 'so.json' },
      { code: 'tr', name: 'Türkçe', file: 'tr.json' },

    ]
  },
  sitemap:{
    autoLastmod:true
  },
  robots:{
    rules:[{ userAgent: '*' , allow: '/'}]
  }
})
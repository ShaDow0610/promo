// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  ssr: false,

  css: [
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-free/css/all.css' // ← ajoute ça
  ],

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss'
  ],

  /* -------------------- APP / SEO -------------------- */
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      titleTemplate: '%s Ultimate Pronos',

      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#000000' }
      ],

      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png', sizes: '96x96' }
      ],

      script: [
        {
          id: 'Cookiebot',
          src: 'https://consent.cookiebot.com/uc.js',
          async: true,
          'data-cbid': 'b433eb58-7ffb-431f-84b2-e83a7e017c20'
        }
      ]
    }
  },

  /* -------------------- NITRO / STATIC -------------------- */
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/about', '/contact', '/hacks'],
      failOnError: false
    },

    compressPublicAssets: true
  },

  /* -------------------- I18N -------------------- */
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'locales/',

    locales: [
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'hi', name: 'हिन्दी', file: 'hi.json' },
      { code: 'ar', name: 'العربية', file: 'ar.json' },
      { code: 'az', name: 'Azərbaycan dili', file: 'az.json' },
      { code: 'pt', name: 'Português', file: 'pt.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'so', name: 'Soomaaliga', file: 'so.json' },
      { code: 'tr', name: 'Türkçe', file: 'tr.json' }
    ]
  },

  /* -------------------- ROUTES -------------------- */
  routeRules: {
    '/': { prerender: true },
    '/fr/**': { prerender: true },
    '/en/**': { prerender: true }
  },

  /* -------------------- SITEMAP -------------------- */
  sitemap: {
    hostname:'https://ultimatepronos.com',
    routes: async () => {
      // Pour les pages dynamiques
      const routes = await fetch('https://ultimatepronos.com')
      return routes.map(page => `/page/${page.slug}`)
    },
    i18n: true,
    autoLastmod: true,
    gzip: true
  },

  /* -------------------- ROBOTS -------------------- */
  robots: {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  },

  /* -------------------- EXPERIMENTAL -------------------- */
  experimental: {
    payloadExtraction: true
  }
})

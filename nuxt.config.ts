// https://nuxt.com/docs/api/configuration/nuxt-config
const locales = ['fr','en','es','hi','ar','az','pt','ru','so','tr']
const pages = ['','/about','/contact','/hacks']

const prerenderRoutes = locales.flatMap(l =>
  pages.map(p => `/${l}${p}`)
)
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  ssr: true, // IMPORTANT pour SEO

  devtools: { enabled: true },


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

      script: process.env.NODE_ENV === 'production'
      ? [{
          id: 'Cookiebot',
          src: 'https://consent.cookiebot.com/uc.js',
          async: true,
          'data-cbid': 'b433eb58-7ffb-431f-84b2-e83a7e017c20'
        }]
      : []

    }
  },

  /* -------------------- NITRO / STATIC -------------------- */
  nitro: {

    preset: 'static',

    prerender: {
      
      crawLinks:true,

      routes: ['/', '/404.html', '/200.html', ...prerenderRoutes],

      failOnError: false
    },

    compressPublicAssets: true
  },
  storage: {
    cache: {
      driver: 'memory'
    }
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


  /* -------------------- SITEMAP -------------------- */
  sitemap:{

    site:{

      url: 'https://ultimatepronos.com'
    },
    urls: [
        '/', '/404.html', '/200.html', // routes par défaut
        '/fr', '/fr/about', '/fr/contact', '/fr/hacks',
        '/en', '/en/about', '/en/contact', '/en/hacks',
        '/es', '/es/about', '/es/contact', '/es/hacks',
        '/hi', '/hi/about', '/hi/contact', '/hi/hacks',
        '/az', '/az/about', '/az/contact', '/az/hacks',
        '/ar', '/ar/about', '/ar/contact', '/ar/hacks',
        '/pt', '/pt/about', '/pt/contact', '/pt/hacks',
        '/ru', '/ru/about', '/ru/contact', '/ru/hacks',
        '/tr', '/tr/about', '/tr/contact', '/tr/hacks',
        '/so', '/so/about', '/so/contact', '/so/hacks',
    ],
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

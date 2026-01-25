// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  nitro:{
    preset: 'static',
    compressPublicAssets: true
  },
  modules: [
    '@nuxt/icon', 
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots', 
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      htmlAttrs:{lang: 'fr'},
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s . Ultimate Pronos',
      script:[
        {
          id:'Cookiebot',
          src:'https://consent.cookiebot.com/uc.js',
          async: true,
          'data-cbid':"b433eb58-7ffb-431f-84b2-e83a7e017c20"
        },
      ],
      meta:[
        {name: "robots", content:'index, follow'},
        {name: "theme-color", content:'#000000'}
      ],
      link:[
        {rel: 'icon', type: 'img/png' , href: '/logo.png', sizes: ' 96x96'},
        {rel: 'canonical' , href: ''}
      ]
    }
  },
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
  experimental:{
    payloadExtraction: true,
    inlineRouteRules:false
  },
  routeRules:{
    '/':{prerender:true},
    '/fr/**':{prerender:true},
    'en/**':{prerender:true}
  },
  sitemap:{

    i18n:true,
    gzip: true
  },
  robots:{
    rules:[{ userAgent: '*' , allow: '/'}]
  }

})

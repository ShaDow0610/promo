import { defineAsyncComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSuspense, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'consola';
import 'vue-router';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'node:crypto';
import 'node:url';
import 'ipx';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const siteUrl = "https://ultimatepronos.com";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const HeroSection = defineAsyncComponent(() => import('./HeroSection-BuuhHB2m.mjs'));
    const BookmakersSection = defineAsyncComponent(() => import('./BookmakersSection-BKkTpoxL.mjs'));
    const howItWorksSection = defineAsyncComponent(() => import('./howItWorksSection-BYe6W3FX.mjs'));
    const ClientResults = defineAsyncComponent(() => import('./ClientResults-DF_v9W5s.mjs'));
    const CallToAction = defineAsyncComponent(() => import('./CallToAction-DmxX0Vam.mjs'));
    useHead({
      title: "UltimatePronos – Codes Promo & Pronostics Foot Fiables",
      meta: [
        {
          name: "description",
          content: "Profitez des meilleurs codes promo XBET, MELBET, 1WIN, BetWinner et top jeux (Apple of Fortune, Aviator). Rejoignez notre canal Telegram pour coupons gagnants !"
        },
        {
          name: "keywords",
          content: "pronostics, paris sportifs, foot, xbet, melbet, 1win, betwinner, apple of fortune, aviator, code promo, coupons gagnants, algorithme de pronostics"
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Shadow" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        // Open Graph
        { property: "og:title", content: "UltimatePronos – Codes Promo et Pronostics Sportifs Fiables" },
        { property: "og:description", content: "Découvrez les meilleurs codes promo pour XBET, MELBET, 1WIN, BetWinner et top jeux comme Apple of Fortune, Aviator. Algorithme de pronostics fiable, coupons gagnants et cadeaux exclusifs sur notre canal Telegram." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl },
        { property: "og:image", content: siteUrl + "/logo.png" },
        { property: "og:locale", content: "fr_FR" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "UltimatePronos – Codes Promo et Pronostics Sportifs Fiables" },
        { name: "twitter:description", content: "Découvrez les meilleurs codes promo pour XBET, MELBET, 1WIN, BetWinner et top jeux comme Apple of Fortune, Aviator. Algorithme de pronostics fiable, coupons gagnants et cadeaux exclusifs sur notre canal Telegram." },
        { name: "twitter:image", content: siteUrl + "/logo.png" }
      ],
      link: [
        // Canonical
        { rel: "canonical", href: siteUrl },
        // hreflang pour langues
        { rel: "alternate", hreflang: "fr", href: siteUrl + "/fr" },
        { rel: "alternate", hreflang: "en", href: siteUrl + "/en" },
        { rel: "alternate", hreflang: "es", href: siteUrl + "/es" },
        { rel: "alternate", hreflang: "hi", href: siteUrl + "/hi" },
        { rel: "alternate", hreflang: "ar", href: siteUrl + "/ar" },
        { rel: "alternate", hreflang: "az", href: siteUrl + "/az" },
        { rel: "alternate", hreflang: "pt", href: siteUrl + "/pt" },
        { rel: "alternate", hreflang: "ru", href: siteUrl + "/ru" },
        { rel: "alternate", hreflang: "so", href: siteUrl + "/so" },
        { rel: "alternate", hreflang: "tr", href: siteUrl + "/tr" },
        { rel: "alternate", hreflang: "x-default", href: siteUrl }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": siteUrl,
            "name": "UltimatePronos",
            "author": {
              "@type": "Organization",
              "name": "UltimatePronos"
            },
            "description": "Codes promo et pronostics sportifs fiables pour XBET, MELBET, 1WIN, BetWinner, Apple of Fortune, Aviator et plus. Algorithme exclusif et coupons gagnants.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": siteUrl + "/search?query={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "UltimatePronos",
            "url": siteUrl,
            "logo": siteUrl + "/images/logo.png",
            "sameAs": [
              "https://t.me/+09RmIt4oNn41ZWVk",
              "https://www.facebook.com/ultimatepronos",
              "https://www.twitter.com/ultimatepronos"
            ]
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(HeroSection), null, null, _parent));
        },
        fallback: () => {
          _push(`<section class="h-[40vh] flex item-center justify-center text-withe/60">Loading...</section>`);
        },
        _: 1
      });
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(BookmakersSection), null, null, _parent));
        },
        fallback: () => {
          _push(`<section class="h-[40vh] flex item-center justify-center text-withe/60">Loading bookmakers...</section>`);
        },
        _: 1
      });
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(howItWorksSection), null, null, _parent));
        },
        fallback: () => {
          _push(`<section class="h-[40vh] flex item-center justify-center text-withe/60">Loading guide...</section>`);
        },
        _: 1
      });
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(ClientResults), null, null, _parent));
        },
        fallback: () => {
          _push(`<section class="h-[40vh] flex item-center justify-center text-withe/60">Loading results...</section>`);
        },
        _: 1
      });
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(CallToAction), null, null, _parent));
        },
        fallback: () => {
          _push(`<section class="h-[40vh] flex item-center justify-center text-withe/60">Loading predictions...</section>`);
        },
        _: 1
      });
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D20VKtxp.mjs.map

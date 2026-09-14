import { ref, getCurrentInstance, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrGetDirectiveProps } from 'vue/server-renderer';
import { g as gsapWithCSS } from '../_/index.mjs';
import { _ as _export_sfc, u as useHead } from './server.mjs';
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
const telegramUrl = "https://t.me/+09RmIt4oNn41ZWVk";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "UltimatePronos – À propos de nos pronostics et hacks",
      meta: [
        {
          name: "description",
          content: "UltimatePronos est votre source fiable de pronostics sportifs et algorithmes pour Apple of Fortune, Aviator et plus. Découvrez notre équipe et notre méthodologie."
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "UltimatePronos" },
        // Open Graph
        { property: "og:title", content: "UltimatePronos – À propos de nos pronostics et hacks" },
        { property: "og:description", content: "Découvrez l’équipe derrière UltimatePronos et notre méthodologie pour prédire Apple of Fortune, Aviator et autres jeux." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl + "/about" },
        { property: "og:image", content: siteUrl + "/logo.png" },
        { property: "og:locale", content: "fr_FR" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "UltimatePronos – À propos de nos pronostics et hacks" },
        { name: "twitter:description", content: "Découvrez l’équipe et la méthodologie UltimatePronos pour prédire Apple of Fortune, Aviator et plus." },
        { name: "twitter:image", content: siteUrl + "/logo.png" }
      ],
      link: [
        { rel: "canonical", href: siteUrl + "/about" },
        // hreflang
        { rel: "alternate", hreflang: "fr", href: siteUrl + "/fr/about" },
        { rel: "alternate", hreflang: "en", href: siteUrl + "/en/about" },
        { rel: "alternate", hreflang: "es", href: siteUrl + "/es/about" },
        { rel: "alternate", hreflang: "hi", href: siteUrl + "/hi/about" },
        { rel: "alternate", hreflang: "ar", href: siteUrl + "/ar/about" },
        { rel: "alternate", hreflang: "az", href: siteUrl + "/az/about" },
        { rel: "alternate", hreflang: "pt", href: siteUrl + "/pt/about" },
        { rel: "alternate", hreflang: "ru", href: siteUrl + "/ru/about" },
        { rel: "alternate", hreflang: "so", href: siteUrl + "/so/about" },
        { rel: "alternate", hreflang: "tr", href: siteUrl + "/tr/about" },
        { rel: "alternate", hreflang: "x-default", href: siteUrl + "/about" }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "À propos – UltimatePronos",
            "url": siteUrl + "/about",
            "description": "Découvrez l’équipe et la méthodologie derrière UltimatePronos, experts en pronostics et hacks pour Apple of Fortune, Aviator et plus."
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
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    let io;
    const vReveal = {
      mounted(el, binding) {
        const delay = parseFloat(binding?.value?.delay ?? binding?.value ?? el.getAttribute("delay") ?? 0) || 0;
        el.style.opacity = 0;
        el.style.transform = "translateY(16px)";
        observe(el, delay);
      },
      unmounted(el) {
        unobserve(el);
      }
    };
    function observe(el, delay) {
      if (!io) {
        io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const d = parseFloat(entry.target.dataset.revealDelay || 0);
              gsapWithCSS.to(entry.target, { opacity: 1, y: 0, duration: 0.5, delay: d, ease: "power2.out" });
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });
      }
      el.dataset.revealDelay = delay;
      io.observe(el);
    }
    function unobserve(el) {
      if (io) io.unobserve(el);
    }
    const app = getCurrentInstance()?.appContext.app;
    if (app && !app._context.directives?.reveal) {
      app.directive("reveal", vReveal);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "relative overflow-hidden bg-[#0b0b0c] text-white"
      }, _attrs))} data-v-23e0f170><div class="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" data-v-23e0f170><div class="absolute inset-0 animate-bgShift" data-v-23e0f170></div><div class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]" data-v-23e0f170></div><div class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" data-v-23e0f170></div><div class="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0))]" data-v-23e0f170></div></div><header class="relative container mx-auto max-w-6xl px-5 sm:px-8 pt-24 sm:pt-28 pb-14 sm:pb-16 text-center" data-v-23e0f170><div${ssrRenderAttrs(mergeProps({ class: "mx-auto mb-4 sm:mb-6 w-max px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-[10px] sm:text-xs tracking-widest text-yellow-300/90" }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170> À PROPOS </div><h1${ssrRenderAttrs(mergeProps({ class: "font-display text-[34px] leading-[1.05] sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] drop-shadow-[0_6px_18px_rgba(255,215,100,.18)]" }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170> Notre vision du <span class="whitespace-nowrap" data-v-23e0f170>prono sportif</span></h1><p${ssrRenderAttrs(mergeProps({
        class: "mt-4 max-w-3xl mx-auto text-gray-300 text-[13px] sm:text-base",
        delay: "0.08"
      }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170> Chez <span class="text-yellow-300/90 font-semibold" data-v-23e0f170>PronostikerX</span>, nous allions données, discipline et pédagogie pour aider les parieurs à <span class="text-yellow-300/90" data-v-23e0f170>mieux décider</span>. Notre approche : simple, premium, efficace — partout dans le monde. </p><div${ssrRenderAttrs(mergeProps({
        class: "mt-7 sm:mt-9",
        delay: "0.12"
      }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><a${ssrRenderAttr("href", telegramUrl)} target="_blank" rel="noopener" class="tele-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-bold bg-[#229ED9] text-white shadow-[0_8px_24px_rgba(34,158,217,0.35)] ring-1 ring-[#229ED9]/50 hover:brightness-110 active:brightness-95 transition" data-v-23e0f170><i class="fa-brands fa-telegram" data-v-23e0f170></i> Rejoindre le canal Telegram </a></div></header><section class="container mx-auto max-w-6xl px-5 sm:px-8 pb-12 sm:pb-16" data-v-23e0f170><div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4" data-v-23e0f170><div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><div class="text-[10px] sm:text-xs tracking-wider text-gray-400" data-v-23e0f170>PAYS COUVERTS</div><div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300" data-v-23e0f170><span data-v-23e0f170>0</span>+</div></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><div class="text-[10px] sm:text-xs tracking-wider text-gray-400" data-v-23e0f170>DÉPÔTS BOOSTÉS</div><div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300" data-v-23e0f170>$<span data-v-23e0f170>0</span>M+</div></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><div class="text-[10px] sm:text-xs tracking-wider text-gray-400" data-v-23e0f170>JOUEURS ACTIFS</div><div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300" data-v-23e0f170><span data-v-23e0f170>0</span>+ </div></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><div class="text-[10px] sm:text-xs tracking-wider text-gray-400" data-v-23e0f170>TAUX DE SUCCÈS</div><div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300" data-v-23e0f170><span data-v-23e0f170>0</span>% </div></div></div><p${ssrRenderAttrs(mergeProps({
        class: "mt-3 text-[11px] sm:text-xs text-gray-400 text-center",
        delay: "0.05"
      }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170> * Indicateurs agrégés et évolutifs — ils ne constituent pas une garantie de gains. </p></section><section class="container mx-auto max-w-6xl px-5 sm:px-8 pb-12 sm:pb-16" data-v-23e0f170><div class="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch" data-v-23e0f170><article${ssrRenderAttrs(mergeProps({ class: "p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5" }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><h2 class="text-2xl sm:text-3xl font-extrabold mb-2" data-v-23e0f170>Notre méthode</h2><p class="text-gray-300 text-sm sm:text-base" data-v-23e0f170> Nous combinons analyses de forme, statistiques avancées, gestion de bankroll et retours terrain. Chaque sélection est conçue pour une <span class="text-yellow-300/90" data-v-23e0f170>valeur réelle</span> plutôt qu’un simple feeling. </p><ul class="mt-4 space-y-2 text-sm sm:text-base text-gray-200" data-v-23e0f170><li class="flex gap-2" data-v-23e0f170><i class="fa-solid fa-chart-line text-emerald-300 mt-1" data-v-23e0f170></i> Modèles de probabilité &amp; contextes de match</li><li class="flex gap-2" data-v-23e0f170><i class="fa-solid fa-wallet text-yellow-300 mt-1" data-v-23e0f170></i> Bankroll management clair &amp; progressif</li><li class="flex gap-2" data-v-23e0f170><i class="fa-solid fa-bell text-sky-300 mt-1" data-v-23e0f170></i> Alertes Telegram en temps réel </li><li class="flex gap-2" data-v-23e0f170><i class="fa-solid fa-shield-halved text-purple-300 mt-1" data-v-23e0f170></i> Pédagogie &amp; discipline avant tout</li></ul></article><article${ssrRenderAttrs(mergeProps({
        class: "p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5",
        delay: "0.05"
      }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><h2 class="text-2xl sm:text-3xl font-extrabold mb-2" data-v-23e0f170>L’esprit PronostikerX</h2><p class="text-gray-300 text-sm sm:text-base" data-v-23e0f170> Une marque <span class="text-yellow-300/90" data-v-23e0f170>premium &amp; minimaliste</span> : design soigné, messages clairs, résultats mesurables. Notre ambition : vous donner un cadre pour progresser durablement. </p><div class="mt-4 grid grid-cols-2 gap-3 text-sm sm:text-base" data-v-23e0f170><div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90" data-v-23e0f170><i class="fa-solid fa-leaf" data-v-23e0f170></i> Simplicité </div><div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90" data-v-23e0f170><i class="fa-solid fa-bolt" data-v-23e0f170></i> Efficacité </div><div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90" data-v-23e0f170><i class="fa-solid fa-compass-drafting" data-v-23e0f170></i> Méthode </div><div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90" data-v-23e0f170><i class="fa-solid fa-globe" data-v-23e0f170></i> International </div></div></article></div></section><section class="container mx-auto max-w-6xl px-5 sm:px-8 pb-12 sm:pb-16" data-v-23e0f170><h2${ssrRenderAttrs(mergeProps({ class: "text-center text-2xl sm:text-3xl font-extrabold mb-6" }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170>Feuille de route</h2><ol class="relative border-s border-white/10 max-w-3xl mx-auto" data-v-23e0f170><li${ssrRenderAttrs(mergeProps({ class: "mb-8 ms-6 relative" }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><span class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15" style="${ssrRenderStyle({ "box-shadow": "0 0 0 4px rgba(255,210,106,.08)" })}" data-v-23e0f170></span><h3 class="text-lg sm:text-xl font-bold" data-v-23e0f170>Fondations</h3><p class="text-gray-300 text-sm sm:text-base" data-v-23e0f170>Structure claire, design sobre, base de contenus solides.</p></li><li${ssrRenderAttrs(mergeProps({
        class: "mb-8 ms-6 relative",
        delay: "0.06"
      }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><span class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15" style="${ssrRenderStyle({ "box-shadow": "0 0 0 4px rgba(255,210,106,.08)" })}" data-v-23e0f170></span><h3 class="text-lg sm:text-xl font-bold" data-v-23e0f170>Analyses &amp; canaux</h3><p class="text-gray-300 text-sm sm:text-base" data-v-23e0f170>Sélections quotidiennes, notifications, pédagogie sur Telegram. </p></li><li${ssrRenderAttrs(mergeProps({
        class: "mb-8 ms-6 relative",
        delay: "0.12"
      }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><span class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15" style="${ssrRenderStyle({ "box-shadow": "0 0 0 4px rgba(255,210,106,.08)" })}" data-v-23e0f170></span><h3 class="text-lg sm:text-xl font-bold" data-v-23e0f170>Expériences démo</h3><p class="text-gray-300 text-sm sm:text-base" data-v-23e0f170>Démonstrations guidées pour comprendre la logique et éviter les erreurs.</p></li><li${ssrRenderAttrs(mergeProps({
        class: "ms-6 relative",
        delay: "0.18"
      }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><span class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15" style="${ssrRenderStyle({ "box-shadow": "0 0 0 4px rgba(255,210,106,.08)" })}" data-v-23e0f170></span><h3 class="text-lg sm:text-xl font-bold" data-v-23e0f170>Améliorations continues</h3><p class="text-gray-300 text-sm sm:text-base" data-v-23e0f170>Itérations basées sur données, retours de la communauté et résultats.</p></li></ol></section><section id="about-team" class="container mx-auto max-w-6xl px-5 sm:px-8 pb-14 sm:pb-20" data-v-23e0f170><div class="grid md:grid-cols-2 gap-6 sm:gap-8" data-v-23e0f170><div${ssrRenderAttrs(mergeProps({ class: "p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5" }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><h2 class="text-2xl sm:text-3xl font-extrabold mb-2" data-v-23e0f170>Équipe &amp; éthique</h2><p class="text-gray-300 text-sm sm:text-base" data-v-23e0f170> Nous défendons un jeu responsable. Fixez des objectifs réalistes, sachez faire une pause, et ne misez que ce que vous pouvez vous permettre de perdre. </p><ul class="mt-4 space-y-2 text-sm sm:text-base text-gray-200" data-v-23e0f170><li class="flex gap-2" data-v-23e0f170><i class="fa-solid fa-user-shield text-rose-300 mt-1" data-v-23e0f170></i> Transparence &amp; pédagogie </li><li class="flex gap-2" data-v-23e0f170><i class="fa-solid fa-scale-balanced text-blue-300 mt-1" data-v-23e0f170></i> Pas de promesse irréaliste</li><li class="flex gap-2" data-v-23e0f170><i class="fa-solid fa-hands-holding-circle text-green-300 mt-1" data-v-23e0f170></i> Focus long terme </li></ul></div><div${ssrRenderAttrs(mergeProps({
        class: "p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5",
        delay: "0.06",
        id: "contact"
      }, ssrGetDirectiveProps(_ctx, vReveal)))} data-v-23e0f170><h2 class="text-2xl sm:text-3xl font-extrabold mb-2" data-v-23e0f170>Contact</h2><p class="text-gray-300 text-sm sm:text-base" data-v-23e0f170> Une question, une suggestion, un partenariat ? Écrivez-nous ou rejoignez le canal. </p><div class="mt-4 grid gap-3" data-v-23e0f170><a${ssrRenderAttr("href", telegramUrl)} target="_blank" rel="noopener" class="bg-[#229ED9] text-white ring-1 ring-[#229ED9]/50 hover:brightness-110 transition inline-flex items-center gap-2 px-4 py-2 rounded-lg" data-v-23e0f170><i class="fa-brands fa-telegram text-xl" data-v-23e0f170></i> Telegram </a><a href="mailto:contact@pronostikerx.com" class="bg-white/5 hover:bg-white/10 border border-white/10 text-white transition inline-flex items-center gap-2 px-4 py-2 rounded-lg" data-v-23e0f170><i class="fa-solid fa-envelope text-yellow-300" data-v-23e0f170></i> contact@pronostikerx.com </a></div><p class="mt-3 text-[11px] sm:text-xs text-gray-400" data-v-23e0f170> Temps de réponse indicatif : 24–48h ouvrées. </p></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23e0f170"]]);

export { about as default };
//# sourceMappingURL=about-BhMDuR0_.mjs.map

import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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
const promoCode = "GLE44";
const _sfc_main = {
  __name: "hacks",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "UltimatePronos – Hacks & Algorithmes de Pronostics Jeux d’Argent",
      meta: [
        {
          name: "description",
          content: "Découvrez nos algorithmes de pronostics pour Apple of Fortune, Aviator, Mines et plus sur XBET, 1WIN, MELBET, BetWinner. Rejoignez notre canal Telegram pour recevoir les signaux gagnants !"
        },
        {
          name: "keywords",
          content: "pronostics, hacks, Apple of Fortune, Aviator, Mines, Plinko, Crash, JetX, Dice, Goal, Burning hot, Limbo, Keno, Roulette, Blackjack, Baccarat, Poker, Wheel, Slots, Zeppelin, Space XY, Minesweeper, Tower, Stairs, Lucky Jet, Jet Lucky 2, Crazy Time, Monopoly Live, Dream Catcher, Coin Flip, Penalty Shootout, Andar Bahar, Teen Patti, Lightning Roulette, Mega Ball, Razor Shark, Sugar Rush, Fruit Party, Book of Dead, The Dog House, Gates of Olympus, XBET, 1WIN, MELBET, BetWinner, code promo, algorithme de prédiction"
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Shadow" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        // Open Graph
        { property: "og:title", content: "UltimatePronos – Hacks & Algorithmes de Pronostics Jeux d’Argent" },
        { property: "og:description", content: "Nos algorithmes prédisent Apple of Fortune, Aviator, Mines et plus sur XBET, 1WIN, MELBET, BetWinner. Suivez nos signaux gagnants sur Telegram !" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl + "/hacks" },
        { property: "og:image", content: siteUrl + "/logo.png" },
        { property: "og:locale", content: "fr_FR" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "UltimatePronos – Hacks & Algorithmes de Pronostics Jeux d’Argent" },
        { name: "twitter:description", content: "Algorithmes de pronostics pour Apple of Fortune, Aviator, Mines et plus. Signaux gagnants et code promo sur notre canal Telegram." },
        { name: "twitter:image", content: siteUrl + "/logo.png" }
      ],
      link: [
        { rel: "canonical", href: siteUrl + "/hacks" },
        // hreflang
        { rel: "alternate", hreflang: "fr", href: siteUrl + "/fr/hacks" },
        { rel: "alternate", hreflang: "en", href: siteUrl + "/en/hacks" },
        { rel: "alternate", hreflang: "es", href: siteUrl + "/es/hacks" },
        { rel: "alternate", hreflang: "hi", href: siteUrl + "/hi/hacks" },
        { rel: "alternate", hreflang: "ar", href: siteUrl + "/ar/hacks" },
        { rel: "alternate", hreflang: "az", href: siteUrl + "/az/hacks" },
        { rel: "alternate", hreflang: "pt", href: siteUrl + "/pt/hacks" },
        { rel: "alternate", hreflang: "ru", href: siteUrl + "/ru/hacks" },
        { rel: "alternate", hreflang: "so", href: siteUrl + "/so/hacks" },
        { rel: "alternate", hreflang: "tr", href: siteUrl + "/tr/hacks" },
        { rel: "alternate", hreflang: "x-default", href: siteUrl + "/hacks" }
      ],
      script: [
        // JSON-LD pour site + organisation
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "UltimatePronos Hacks",
            "url": siteUrl + "/hacks",
            "description": "Algorithmes de pronostics pour Apple of Fortune, Aviator, Mines et plus sur XBET, 1WIN, MELBET, BetWinner. Signaux gagnants et codes promo sur Telegram.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": siteUrl
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Hacks",
                  "item": siteUrl + "/hacks"
                }
              ]
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
            "logo": siteUrl + "/logo.png",
            "sameAs": [
              "https://t.me/+09RmIt4oNn41ZWVk",
              "https://www.facebook.com/ultimatepronos",
              "https://www.twitter.com/ultimatepronos"
            ]
          })
        }
      ]
    });
    const platforms = {
      "1xbet": { name: "1xBet", url: "https://reffpa.com/L?tag=d_4135466m_97c_&site=4135466&ad=97", promo: promoCode, badgeBg: "#2b69ff", badgeFg: "#fff" },
      "1win": { name: "1win", url: "https://1wvdmy.life/?p=l6cr", promo: promoCode, badgeBg: "#1f2937", badgeFg: "#fff" },
      "melbet": { name: "Melbet", url: "https://refpa3665.com/L?tag=d_4135872m_66329c_&site=4135872&ad=66329", promo: promoCode, badgeBg: "#FFD54F", badgeFg: "#111" },
      "betwinner": { name: "Betwinner", url: "https://bwredir.com/1xK9?p=%2Fregistration%2F", promo: promoCode, badgeBg: "#00A650", badgeFg: "#fff" }
    };
    const games = ref([
      { id: 1, name: "Apple of Fortune", platform: platforms["1xbet"], image: "/apple.webp", description: "Révélez la bonne case à chaque ligne grâce à nos signaux." },
      { id: 2, name: "Aviator", platform: platforms["1win"], image: "/aviator 1win.jpg", description: "Partez avant le crash. Indices de volatilité en temps réel." },
      { id: 3, name: "Mines", platform: platforms["melbet"], image: "/mines.jpg", description: "Évitez les mines, sécurisez vos paliers de gain." },
      { id: 4, name: "Plinko", platform: platforms["betwinner"], image: "/plinko.jpg", description: "Trajectoires optimisées et niveaux de risque ajustés." },
      { id: 5, name: "Crash", platform: platforms["1xbet"], image: "/crash.jpg", description: "Courbes, momentum, sorties ciblées pour limiter le risque." },
      { id: 6, name: "JetX", platform: platforms["1win"], image: "/jetx.jpg", description: "Stratégies de décollage et d’éjection progressive." },
      { id: 7, name: "Dice", platform: platforms["melbet"], image: "/dice.jpg", description: "Probabilités dynamiques, gestion des séries perdantes." },
      { id: 8, name: "Goal", platform: platforms["betwinner"], image: "/goal.jpg", description: "Avancez vers le but en minimisant les risques par palier." },
      { id: 9, name: "Burning hot", platform: platforms["1xbet"], image: "/burnung hot.jpg", description: "Lectures de séquences pour mieux anticiper les tours." },
      { id: 10, name: "Limbo", platform: platforms["1win"], image: "/limbo.jpg", description: "Cibles de multiplicateurs et mises progressives." },
      { id: 11, name: "Keno", platform: platforms["melbet"], image: "/keno.jpg", description: "Sélection optimisée des grilles à espérance positive." },
      { id: 12, name: "Roulette", platform: platforms["betwinner"], image: "/roulette.jpg", description: "Progression contrôlée et cibles de sortie claires." },
      { id: 13, name: "Blackjack", platform: platforms["1xbet"], image: "/blackjack.jpg", description: "Charts, comptage soft et limites de pertes strictes." },
      { id: 14, name: "Baccarat", platform: platforms["1win"], image: "/baccarat.jpg", description: "Gestion des runs banker/player, stop-win discipliné." },
      { id: 15, name: "Poker", platform: platforms["melbet"], image: "/pocker.jpg", description: "Ranges de départ simples et lignes à faible variance." },
      { id: 16, name: "Wheel", platform: platforms["betwinner"], image: "/wheel.jpg", description: "Répartition des segments et couverture intelligente." },
      { id: 17, name: "Slots", platform: platforms["1xbet"], image: "/slot.jpg", description: "Sessions courtes, features ciblées, retraits réguliers." },
      { id: 18, name: "Zeppelin", platform: platforms["1win"], image: "/zipeline.jpg", description: "Sorties progressives, séquence de sécurité intégrée." },
      { id: 19, name: "Space XY", platform: platforms["melbet"], image: "/spacexy.jpg", description: "Stratégie multi-objectifs selon la volatilité." },
      { id: 20, name: "Minesweeper", platform: platforms["betwinner"], image: "/minesweeper.jpg", description: "Pattern sécurisés et stop-loss stricts." },
      { id: 21, name: "Tower", platform: platforms["1xbet"], image: "/tower.jpg", description: "Montée par niveaux avec paliers de prise de gain." },
      { id: 22, name: "Stairs", platform: platforms["1win"], image: "/stairs.jpg", description: "Choix de marches à meilleur ratio risque/rendement." },
      { id: 23, name: "Lucky Jet", platform: platforms["melbet"], image: "/luckyjey.jpg", description: "Double sortie et couverture des pics volatils." },
      { id: 24, name: "Jet Lucky 2", platform: platforms["betwinner"], image: "/luckyjet2.jpg", description: "Variantes de sortie en deux temps, gestion des runs." },
      { id: 25, name: "Crazy Time", platform: platforms["1xbet"], image: "/Crazy-Time-.jpg", description: "Allocation intelligente sur bonus et rouleau." },
      { id: 26, name: "Monopoly Live", platform: platforms["1win"], image: "/monopolylive.jpg", description: "Couverture des cases clés, risques modulés." },
      { id: 27, name: "Dream Catcher", platform: platforms["melbet"], image: "/dream catcher.jpg", description: "Répartition de mise sur segments majoritaires." },
      { id: 28, name: "Coin Flip", platform: platforms["betwinner"], image: "/coinflip.jpg", description: "Gestion des flips consécutifs et stop-win clair." },
      { id: 29, name: "Penalty Shootout", platform: platforms["1xbet"], image: "/penalty shootout.jpg", description: "Sélection de côtés avec probas contextuelles." },
      { id: 30, name: "Goal Crash", platform: platforms["1win"], image: "/goal crash.jpg", description: "Objectifs courts, sortie rapide, risque maîtrisé." },
      { id: 31, name: "Andar Bahar", platform: platforms["melbet"], image: "/andar bahar.jpg", description: "Gestion des séquences et tailles de mise." },
      { id: 32, name: "Teen Patti", platform: platforms["betwinner"], image: "/teen patty.jpg", description: "Sélection de spots favorables, variance contenue." },
      { id: 33, name: "Lightning Roulette", platform: platforms["1xbet"], image: "/ligthning roulette.jpg", description: "Ciblage des éclairs et couverture de base." },
      { id: 34, name: "Mega Ball", platform: platforms["1win"], image: "/megaball.jpg", description: "Nombre de cartes optimal et gestion du budget." },
      { id: 35, name: "Razor Shark", platform: platforms["melbet"], image: "/razor shark.jpg", description: "Fenêtres d’opportunités et sortie disciplinée." },
      { id: 36, name: "Sugar Rush", platform: platforms["betwinner"], image: "/suger rush.jpg", description: "Sessions courtes, focus sur bonus majorés." },
      { id: 37, name: "Fruit Party", platform: platforms["1xbet"], image: "/fruit party.jpg", description: "Ciblage de volatilité moyenne, bankroll stable." },
      { id: 38, name: "Book of Dead", platform: platforms["1win"], image: "/book of death.jpg", description: "Cycles de spins et limites strictes de pertes." },
      { id: 39, name: "The Dog House", platform: platforms["melbet"], image: "/dog house.jpg", description: "Entrées prudentes, prise de bénéfices graduelle." },
      { id: 40, name: "Gates of Olympus", platform: platforms["betwinner"], image: "/gate of olympus.jpg", description: "Exposition maîtrisée sur multiplicateurs élevés." }
    ]);
    const q = ref("");
    const activePlatforms = ref(/* @__PURE__ */ new Set());
    const platformsUi = [
      { key: "1xbet", label: "1xBet" },
      { key: "1win", label: "1win" },
      { key: "melbet", label: "Melbet" },
      { key: "betwinner", label: "Betwinner" }
    ];
    const filteredGames = computed(() => {
      const term = q.value.toLowerCase();
      return games.value.filter((g) => {
        const passText = !term || g.name.toLowerCase().includes(term) || g.platform.name.toLowerCase().includes(term);
        const passPlat = !activePlatforms.value.size || activePlatforms.value.has(keyByPlatformName(g.platform.name));
        return passText && passPlat;
      });
    });
    function keyByPlatformName(name) {
      if (name === "1xBet") return "1xbet";
      if (name === "1win") return "1win";
      if (name === "Melbet") return "melbet";
      return "betwinner";
    }
    const loaded = ref(/* @__PURE__ */ new Set());
    ref(false);
    const show = ref(false);
    const current = ref(null);
    const userId = ref("");
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen bg-[#0b0b0c] text-white overflow-hidden" }, _attrs))} data-v-508197a4><div class="absolute inset-0 -z-10 pointer-events-none" data-v-508197a4><div class="absolute inset-0 animate-bgShift" data-v-508197a4></div><div class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]" data-v-508197a4></div><div class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" data-v-508197a4></div></div><div class="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16" data-v-508197a4><header class="text-center" data-v-508197a4><div class="mx-auto mb-4 w-max px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-[10px] sm:text-xs tracking-widest text-yellow-300/90" data-v-508197a4> PREMIUM • HACKS • DEMOS </div><h1 class="font-display text-[34px] leading-[1.05] sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] drop-shadow-[0_6px_18px_rgba(255,215,100,.18)]" data-v-508197a4> Hacks jeux — sélection multi-plateformes </h1><p class="mt-3 sm:mt-4 max-w-3xl mx-auto text-gray-300 text-[13px] sm:text-base" data-v-508197a4> Découvrez 40 jeux parmi les plus joués sur 1xBet, 1win, Melbet et Betwinner. Accès rapide, code promo <span class="text-yellow-300 font-semibold" data-v-508197a4>${ssrInterpolate(promoCode)}</span>, et démo guidée. </p></header><div class="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between" data-v-508197a4><div class="flex-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5" data-v-508197a4><i class="fa-solid fa-magnifying-glass text-white/70" data-v-508197a4></i><input${ssrRenderAttr("value", q.value)} type="search" placeholder="Rechercher un jeu ou une plateforme…" class="w-full bg-transparent outline-none text-sm placeholder:text-white/40" data-v-508197a4></div><div class="flex items-center gap-2" data-v-508197a4><!--[-->`);
      ssrRenderList(platformsUi, (p) => {
        _push(`<button class="${ssrRenderClass([activePlatforms.value.has(p.key) ? "bg-white/10 border-white/20 text-white" : "bg-black/30 border-white/10 text-white/70 hover:text-white hover:bg-white/10", "px-3 py-2 rounded-lg text-sm border transition"])}" data-v-508197a4>${ssrInterpolate(p.label)}</button>`);
      });
      _push(`<!--]-->`);
      if (activePlatforms.value.size) {
        _push(`<button class="px-3 py-2 rounded-lg text-sm bg-black/30 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition" data-v-508197a4> Réinitialiser </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-8 grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-v-508197a4><!--[-->`);
      ssrRenderList(filteredGames.value, (g) => {
        _push(`<article class="group relative w-sm justify-self-center rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_10px_30px_rgba(250,200,80,0.06)] will-change-transform card-3d" data-v-508197a4><div class="relative h-40 sm:h-44 md:h-48 overflow-hidden" data-v-508197a4>`);
        if (!loaded.value.has(g.id)) {
          _push(`<div class="absolute inset-0 skeleton" data-v-508197a4></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<img${ssrRenderAttr("src", g.image)}${ssrRenderAttr("alt", g.name)} class="w-full h-full object-contain transition duration-500 group-hover:scale-[1.06]" loading="lazy" decoding="async" data-v-508197a4><div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" data-v-508197a4></div><div class="absolute top-2 left-2 px-2 py-1 rounded-md text-[11px] font-semibold ring-1 ring-white/10" style="${ssrRenderStyle({ backgroundColor: g.badgeBg, color: g.badgeFg })}" data-v-508197a4>${ssrInterpolate(g.platform.name)}</div></div><div class="p-4" data-v-508197a4><h3 class="text-lg font-bold leading-tight pr-8" data-v-508197a4>${ssrInterpolate(g.name)}</h3><p class="mt-1 text-sm text-gray-300 line-clamp-2" data-v-508197a4>${ssrInterpolate(g.description)}</p><div class="mt-3 flex items-center justify-between" data-v-508197a4><a${ssrRenderAttr("href", g.platform.url)} target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-xs text-white/80 hover:text-white underline underline-offset-2" data-v-508197a4> Ouvrir la plateforme <i class="fa-solid fa-arrow-up-right-from-square text-[11px]" data-v-508197a4></i></a><button type="button" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-semibold bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 hover:brightness-110 active:scale-[.99] transition" data-v-508197a4><i class="fa-solid fa-wand-magic-sparkles" data-v-508197a4></i> Utiliser le hack </button></div><div class="mt-3 flex items-center justify-between" data-v-508197a4><span class="text-xs text-white/60" data-v-508197a4>Code promo</span><button class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-500/15 text-yellow-200 border border-yellow-500/30 text-sm font-semibold hover:brightness-110 active:scale-[.98] transition" data-v-508197a4><i class="fa-regular fa-copy" data-v-508197a4></i> ${ssrInterpolate(g.platform.promo)}</button></div></div><div class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" data-v-508197a4><div class="absolute -inset-20 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] duration-700" data-v-508197a4></div></div></article>`);
      });
      _push(`<!--]--></div>`);
      if (!filteredGames.value.length) {
        _push(`<div class="mt-12 text-center text-white/70" data-v-508197a4> Aucun jeu trouvé. Essayez un autre terme ou filtre. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (show.value) {
        _push(`<div class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4" data-v-508197a4><div class="bg-[#0d0d0e] text-white rounded-2xl shadow-2xl max-w-xl w-full border border-white/10 overflow-hidden" data-v-508197a4><div class="flex items-center justify-between px-4 sm:px-5 py-3 bg-white/5 border-b border-white/10" data-v-508197a4><div class="flex items-center gap-3" data-v-508197a4><div class="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300" data-v-508197a4><i class="fa-solid fa-user-check" data-v-508197a4></i></div><div data-v-508197a4><p class="font-semibold leading-tight" data-v-508197a4>Démarrer le hack — ${ssrInterpolate(current.value?.name)}</p><p class="text-xs text-gray-400" data-v-508197a4>Vérification de compatibilité du compte</p></div></div><button class="p-2 text-gray-300 hover:text-white" aria-label="Fermer" data-v-508197a4>✕</button></div><div class="p-5 space-y-4" data-v-508197a4><p class="text-sm text-gray-300" data-v-508197a4> Saisissez l’ID de votre compte créé avec le code <span class="text-yellow-300 font-semibold" data-v-508197a4>${ssrInterpolate(promoCode)}</span> sur <span class="font-semibold" data-v-508197a4>${ssrInterpolate(current.value?.platform.name)}</span>. Nous vérifions que le hack fonctionne correctement avec votre profil. </p><div class="grid grid-cols-1 sm:grid-cols-3 gap-3" data-v-508197a4><div class="sm:col-span-2" data-v-508197a4><label class="block text-xs text-white/60 mb-1" data-v-508197a4>ID utilisateur</label><input${ssrRenderAttr("value", userId.value)} type="text" placeholder="Ex. 1X-1234-ABCD" class="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" data-v-508197a4></div><div class="flex items-end" data-v-508197a4><button class="w-full inline-flex items-center justify-center rounded-lg px-4 py-3 font-bold bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] text-black shadow-[0_8px_24px_rgba(255,210,90,0.25)] ring-1 ring-yellow-500/40 hover:brightness-105 active:brightness-95 transition" data-v-508197a4> Envoyer </button></div></div><div class="mt-2 p-3 rounded-xl bg-white/5 border border-white/10" data-v-508197a4><p class="text-sm" data-v-508197a4> Pas de compte sur <span class="font-semibold" data-v-508197a4>${ssrInterpolate(current.value?.platform.name)}</span> ? <a${ssrRenderAttr("href", current.value?.platform.url)} target="_blank" class="text-yellow-300 underline underline-offset-2" data-v-508197a4>Créer un compte</a> avec le code <button class="text-yellow-200 font-semibold hover:underline" data-v-508197a4>${ssrInterpolate(current.value?.platform.promo)}</button>. </p></div><p class="text-xs text-gray-400 italic" data-v-508197a4> NB : l’identifiant permet d’assurer la liaison technique entre le hack et votre compte pour une expérience fiable. </p><div class="flex items-center justify-between gap-2 pt-2" data-v-508197a4><a${ssrRenderAttr("href", telegramUrl)} target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold bg-[#229ED9] text-white ring-1 ring-white/10 hover:brightness-110 telegram-pulse" data-v-508197a4><i class="fa-brands fa-telegram mr-2" data-v-508197a4></i> Rejoindre le canal Telegram </a><span class="text-xs text-white/70" data-v-508197a4>Plus d’infos, guides et support en direct.</span></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hacks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hacks = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-508197a4"]]);

export { hacks as default };
//# sourceMappingURL=hacks-D25zEKVm.mjs.map

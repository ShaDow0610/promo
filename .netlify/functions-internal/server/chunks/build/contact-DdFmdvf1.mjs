import { computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead, a as useI18n } from './server.mjs';
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
const supportTelegram = "https://t.me/+09RmIt4oNn41ZWVk";
const supportEmail = "Arnoldpc3@gmail.com";
const promoCode = "GLE44";
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "UltimatePronos – Contactez-nous pour codes promo et hacks",
      meta: [
        {
          name: "description",
          content: "Contactez UltimatePronos pour questions, assistance, ou recevoir nos signaux gagnants pour Apple of Fortune, Aviator et autres jeux de pronostics."
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "UltimatePronos" },
        // Open Graph
        { property: "og:title", content: "UltimatePronos – Contactez-nous pour codes promo et hacks" },
        { property: "og:description", content: "Posez vos questions et recevez des conseils et signaux pour Apple of Fortune, Aviator et autres jeux sur UltimatePronos." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl + "/contact" },
        { property: "og:image", content: siteUrl + "/logo.png" },
        { property: "og:locale", content: "fr_FR" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "UltimatePronos – Contactez-nous pour codes promo et hacks" },
        { name: "twitter:description", content: "Contactez UltimatePronos pour assistance, conseils et signaux gagnants pour Apple of Fortune, Aviator et plus." },
        { name: "twitter:image", content: siteUrl + "/logo.png" }
      ],
      link: [
        { rel: "canonical", href: siteUrl + "/contact" },
        // hreflang
        { rel: "alternate", hreflang: "fr", href: siteUrl + "/fr/contact" },
        { rel: "alternate", hreflang: "en", href: siteUrl + "/en/contact" },
        { rel: "alternate", hreflang: "es", href: siteUrl + "/es/contact" },
        { rel: "alternate", hreflang: "hi", href: siteUrl + "/hi/contact" },
        { rel: "alternate", hreflang: "ar", href: siteUrl + "/ar/contact" },
        { rel: "alternate", hreflang: "az", href: siteUrl + "/az/contact" },
        { rel: "alternate", hreflang: "pt", href: siteUrl + "/pt/contact" },
        { rel: "alternate", hreflang: "ru", href: siteUrl + "/ru/contact" },
        { rel: "alternate", hreflang: "so", href: siteUrl + "/so/contact" },
        { rel: "alternate", hreflang: "tr", href: siteUrl + "/tr/contact" },
        { rel: "alternate", hreflang: "x-default", href: siteUrl + "/contact" }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact – UltimatePronos",
            "url": siteUrl + "/contact",
            "description": "Contactez UltimatePronos pour questions, assistance, ou recevoir nos signaux gagnants pour Apple of Fortune, Aviator et autres jeux."
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
    const { t } = useI18n();
    const bookmakers = {
      x1bet: "https://reffpa.com/L?tag=d_4135466m_97c_&site=4135466&ad=97",
      melbet: "https://refpa3665.com/L?tag=d_4135872m_66329c_&site=4135872&ad=66329",
      betwinner: "https://bwredir.com/1xK9?p=%2Fregistration%2F",
      win1: "https://1wvdmy.life/?p=l6cr"
    };
    const safe = (href) => typeof href === "string" && href.startsWith("http") ? href : "#";
    const safeBookmakers = computed(() => ({
      x1bet: safe(bookmakers.x1bet),
      melbet: safe(bookmakers.melbet),
      betwinner: safe(bookmakers.betwinner),
      win1: safe(bookmakers.win1)
    }));
    const labelFor = (key) => ({ x1bet: "1xBet", melbet: "Melbet", betwinner: "Betwinner", win1: "1win" })[key] || key;
    const linkColor = (key) => ({
      x1bet: "text-blue-300",
      melbet: "text-yellow-300",
      betwinner: "text-emerald-300",
      win1: "text-gray-300"
    })[key] || "text-gray-300";
    const dotColor = (key) => ({
      x1bet: "bg-blue-400",
      melbet: "bg-yellow-400",
      betwinner: "bg-emerald-400",
      win1: "bg-gray-400"
    })[key] || "bg-gray-400";
    ref(null);
    ref(null);
    const copied = ref(false);
    const form = ref({
      name: "",
      email: "",
      subject: "Support",
      userId: "",
      message: ""
    });
    const sending = ref(false);
    const formError = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "relative min-h-screen bg-[#0b0b0c] text-white overflow-hidden",
        "aria-labelledby": "contact-title"
      }, _attrs))} data-v-f900119d><div class="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" data-v-f900119d><div class="absolute inset-0 animate-bgShift" data-v-f900119d></div><div class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]" data-v-f900119d></div><div class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" data-v-f900119d></div></div><div class="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20" data-v-f900119d><header class="text-center" data-v-f900119d><div class="mx-auto mb-4 w-max px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-[10px] sm:text-xs tracking-widest text-yellow-300/90" data-v-f900119d>${ssrInterpolate(unref(t)("heroSection.hero.marker"))}</div><h1 id="contact-title" class="font-display text-[34px] leading-[1.05] sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] drop-shadow-[0_6px_18px_rgba(255,215,100,.18)]" data-v-f900119d> Contact — <span class="whitespace-nowrap" data-v-f900119d>${ssrInterpolate(unref(t)("heroSection.brand"))}</span></h1><p class="mt-3 sm:mt-4 max-w-3xl mx-auto text-gray-300 text-[13px] sm:text-base" data-v-f900119d> Besoin d’aide, d’un partenariat ou d’un retour ? Écrivez-nous. Réponse rapide via Telegram. </p></header><div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6" role="list" data-v-f900119d><article role="listitem" class="group rounded-2xl p-5 bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(250,200,80,0.06)]" data-v-f900119d><div class="flex items-start gap-3" data-v-f900119d><div class="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300" data-v-f900119d><i class="fa-brands fa-telegram" aria-hidden="true" data-v-f900119d></i></div><div data-v-f900119d><h3 class="text-xl font-bold" data-v-f900119d>Canal Telegram</h3><p class="text-sm text-gray-300" data-v-f900119d>Reçois pronos, actus et accès aux démos.</p></div></div><a${ssrRenderAttr("href", telegramUrl)} target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-bold bg-[#229ED9] text-white ring-1 ring-white/10 hover:brightness-110 shadow-[0_10px_30px_rgba(34,158,217,.25)] transition telegram-wiggle" data-v-f900119d><i class="fa-brands fa-telegram mr-2" aria-hidden="true" data-v-f900119d></i><span data-v-f900119d>Rejoindre le canal</span></a></article><article role="listitem" class="rounded-2xl p-5 bg-white/5 border border-white/10" data-v-f900119d><div class="flex items-start gap-3" data-v-f900119d><div class="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300" data-v-f900119d><i class="fa-regular fa-life-ring" aria-hidden="true" data-v-f900119d></i></div><div data-v-f900119d><h3 class="text-xl font-bold" data-v-f900119d>Support technique</h3><p class="text-sm text-gray-300" data-v-f900119d>Questions sur la démo ou l’accès premium.</p></div></div><a${ssrRenderAttr("href", supportTelegram)} target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-semibold bg-white/10 hover:bg-white/15 border border-white/10" aria-label="Contacter le support sur Telegram" data-v-f900119d> @king_of_apple_hack_support </a></article><article role="listitem" class="rounded-2xl p-5 bg-white/5 border border-white/10" data-v-f900119d><div class="flex items-start gap-3" data-v-f900119d><div class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300" data-v-f900119d><i class="fa-regular fa-envelope" aria-hidden="true" data-v-f900119d></i></div><div data-v-f900119d><h3 class="text-xl font-bold" data-v-f900119d>Email</h3><p class="text-sm text-gray-300" data-v-f900119d>Partenariats, presse, demandes spécifiques.</p></div></div><a${ssrRenderAttr("href", `mailto:${supportEmail}`)} class="mt-4 inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-semibold bg-white/10 hover:bg-white/15 border border-white/10"${ssrRenderAttr("aria-label", `Envoyer un email à ${supportEmail}`)} data-v-f900119d>${ssrInterpolate(supportEmail)}</a></article></div><div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6" data-v-f900119d><div class="rounded-2xl p-5 bg-white/5 border border-white/10" data-v-f900119d><h4 class="text-lg font-semibold" data-v-f900119d>Code promo</h4><p class="text-sm text-gray-300" data-v-f900119d>Utilise ce code lors de l’inscription.</p><button type="button"${ssrIncludeBooleanAttr(copied.value) ? " disabled" : ""} class="mt-3 relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/15 text-yellow-200 border border-yellow-500/30 text-base font-semibold hover:brightness-110 active:scale-[.98] transition disabled:opacity-60 disabled:cursor-not-allowed"${ssrRenderAttr("aria-label", `Copier le code promo ${promoCode}`)} data-v-f900119d><i class="fa-regular fa-copy" aria-hidden="true" data-v-f900119d></i><span aria-live="polite" data-v-f900119d>${ssrInterpolate(promoCode)}</span>`);
      if (copied.value) {
        _push(`<span class="absolute -top-7 right-0 text-xs px-2 py-0.5 rounded bg-black/80 text-white shadow" aria-live="assertive" data-v-f900119d>Copié ✓</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><p class="mt-3 text-xs text-gray-400 italic" data-v-f900119d> NB : le code relie votre compte pour un fonctionnement optimal de la démo. </p></div><div class="rounded-2xl p-5 bg-white/5 border border-white/10" data-v-f900119d><h4 class="text-lg font-semibold" data-v-f900119d>Localisation</h4><p class="text-sm text-gray-300" data-v-f900119d>Douala (Cameroun) · Équipe distribuée, support international.</p><div class="mt-3 rounded-xl overflow-hidden border border-white/10" role="img" aria-label="Carte à venir" data-v-f900119d><div class="h-40 bg-[radial-gradient(80%_60%_at_50%_30%,#202328,#0f1115)] flex items-center justify-center text-white/50 text-sm" data-v-f900119d> Carte à venir </div></div></div><div class="rounded-2xl p-5 bg-white/5 border border-white/10" data-v-f900119d><h4 class="text-lg font-semibold" data-v-f900119d>Liens utiles</h4><ul class="mt-3 space-y-2 text-sm" data-v-f900119d><!--[-->`);
      ssrRenderList(safeBookmakers.value, (href, key) => {
        _push(`<li data-v-f900119d><a${ssrRenderAttr("href", href)} target="_blank" rel="noopener noreferrer" class="${ssrRenderClass([linkColor(key), "inline-flex items-center gap-2 hover:underline"])}" data-v-f900119d><span class="${ssrRenderClass([dotColor(key), "inline-block w-2 h-2 rounded-full"])}" data-v-f900119d></span><span data-v-f900119d>${ssrInterpolate(labelFor(key))}</span></a></li>`);
      });
      _push(`<!--]--></ul></div></div><form class="mt-10 rounded-2xl p-5 sm:p-6 bg-white/5 border border-white/10" novalidate data-v-f900119d><h3 class="text-2xl font-bold mb-1" data-v-f900119d>Écrire un message</h3><p class="text-sm text-gray-300 mb-4" data-v-f900119d>Nous répondons rapidement via email ou Telegram.</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" data-v-f900119d><div data-v-f900119d><label class="block text-xs text-gray-400 mb-1" for="name" data-v-f900119d>Nom</label><input id="name"${ssrRenderAttr("value", form.value.name)} name="name" type="text" autocomplete="name" class="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" data-v-f900119d></div><div data-v-f900119d><label class="block text-xs text-gray-400 mb-1" for="email" data-v-f900119d>Email *</label><input id="email"${ssrRenderAttr("value", form.value.email)} name="email" required type="email" autocomplete="email" inputmode="email" class="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" data-v-f900119d></div><div data-v-f900119d><label class="block text-xs text-gray-400 mb-1" for="subject" data-v-f900119d>Sujet</label><select id="subject" name="subject" class="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" data-v-f900119d><option value="Support" data-v-f900119d${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "Support") : ssrLooseEqual(form.value.subject, "Support")) ? " selected" : ""}>Support</option><option value="Partenariat" data-v-f900119d${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "Partenariat") : ssrLooseEqual(form.value.subject, "Partenariat")) ? " selected" : ""}>Partenariat</option><option value="Presse" data-v-f900119d${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "Presse") : ssrLooseEqual(form.value.subject, "Presse")) ? " selected" : ""}>Presse</option><option value="Autre" data-v-f900119d${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "Autre") : ssrLooseEqual(form.value.subject, "Autre")) ? " selected" : ""}>Autre</option></select></div><div data-v-f900119d><label class="block text-xs text-gray-400 mb-1" for="userid" data-v-f900119d>ID utilisateur (optionnel)</label><input id="userid"${ssrRenderAttr("value", form.value.userId)} name="userId" type="text" placeholder="ID lié au code GLE44" autocomplete="off" class="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" data-v-f900119d></div><div class="sm:col-span-2" data-v-f900119d><label class="block text-xs text-gray-400 mb-1" for="message" data-v-f900119d>Message *</label><textarea id="message" name="message" required rows="5" class="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" data-v-f900119d>${ssrInterpolate(form.value.message)}</textarea></div></div><div class="mt-4 flex items-center gap-3" data-v-f900119d><button type="submit"${ssrIncludeBooleanAttr(sending.value) ? " disabled" : ""} class="inline-flex items-center justify-center rounded-full px-6 py-3 font-bold bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] text-black shadow-[0_8px_24px_rgba(255,210,90,0.25)] ring-1 ring-yellow-500/40 hover:brightness-105 active:brightness-95 transition disabled:opacity-60 disabled:cursor-not-allowed"${ssrRenderAttr("aria-busy", sending.value ? "true" : "false")} data-v-f900119d><i class="fa-regular fa-paper-plane mr-2" aria-hidden="true" data-v-f900119d></i>`);
      if (!sending.value) {
        _push(`<span data-v-f900119d>Envoyer</span>`);
      } else {
        _push(`<span data-v-f900119d>Préparation…</span>`);
      }
      _push(`</button><a${ssrRenderAttr("href", telegramUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold bg-[#229ED9] text-white ring-1 ring-white/10 hover:brightness-110 telegram-pulse" data-v-f900119d><i class="fa-brands fa-telegram mr-2" aria-hidden="true" data-v-f900119d></i> Écrire sur Telegram </a></div>`);
      if (formError.value) {
        _push(`<p class="mt-3 text-sm text-red-300" role="alert" data-v-f900119d>${ssrInterpolate(formError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f900119d"]]);

export { contact as default };
//# sourceMappingURL=contact-DdFmdvf1.mjs.map

import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, a as useI18n } from './server.mjs';
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

const _sfc_main = {
  __name: "BookmakersSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    ref(null);
    const bookmakers = [
      {
        name: t("bookmakersSection.brands.1win.name"),
        logo: "/1win2.webp",
        code: "GLE44",
        note: t("bookmakersSection.brands.1win.note"),
        quickUrl: "https://1wvdmy.life/?p=l6cr",
        fullUrl: "https://1wvdmy.life/?p=l6cr"
      },
      {
        name: t("bookmakersSection.brands.1xbet.name"),
        logo: "/1xbet.jpg",
        code: "GLE44",
        note: t("bookmakersSection.brands.1xbet.note"),
        quickUrl: "https://reffpa.com/L?tag=d_4135466m_97c_&site=4135466&ad=97",
        fullUrl: "https://reffpa.com/L?tag=d_4135466m_27409c_&site=4135466&ad=27409"
      },
      {
        name: t("bookmakersSection.brands.Melbet.name"),
        logo: "/melbet.png",
        code: "GLE44",
        note: t("bookmakersSection.brands.Melbet.note"),
        quickUrl: "https://refpa3665.com/L?tag=d_4135872m_66329c_&site=4135872&ad=66329",
        fullUrl: "hhttps://reffpa.com/L?tag=d_4135466m_27409c_&site=4135466&ad=27409"
      },
      {
        name: t("bookmakersSection.brands.Betwinner.name"),
        logo: "/betwinner1webp.webp",
        code: "GLE44",
        note: t("bookmakersSection.brands.Betwinner.note"),
        quickUrl: "https://bwredir.com/1xK9?p=%2Fregistration%2F",
        fullUrl: "https://bwredir.com/1xK9?p=%2Fmobile%2F"
      }
    ];
    const reasons = [
      { icon: "fa-solid fa-gift", title: t("bookmakersSection.reasons.bonus.title"), text: t("bookmakersSection.reasons.bonus.text") },
      { icon: "fa-solid fa-shield", title: t("bookmakersSection.reasons.trust.title"), text: t("bookmakersSection.reasons.trust.text") },
      { icon: "fa-solid fa-chart-line", title: t("bookmakersSection.reasons.value.title"), text: t("bookmakersSection.reasons.value.text") }
    ];
    const copied = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "bookmakers",
        class: "relative w-full text-white overflow-hidden py-14 sm:py-16"
      }, _attrs))} data-v-6067ec7a><div class="absolute inset-0 -z-10" data-v-6067ec7a><div class="absolute top-0 inset-x-0 h-24 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85),rgba(0,0,0,0))]" data-v-6067ec7a></div><div class="absolute inset-0 bg-gradient-to-b from-black via-[#0e0e11] to-black" data-v-6067ec7a></div><div class="absolute inset-0 opacity-20 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.20),transparent_70%)]" data-v-6067ec7a></div><div class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" data-v-6067ec7a></div><div class="absolute inset-0 animate-bgShift" data-v-6067ec7a></div><div class="absolute inset-0 pointer-events-none" data-v-6067ec7a></div><div class="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0))]" data-v-6067ec7a></div></div><div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6" data-v-6067ec7a><header class="text-center mb-8 sm:mb-12" data-v-6067ec7a><h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight" data-v-6067ec7a>${ssrInterpolate(unref(t)("bookmakersSection.header.title_html"))} <span class="text-yellow-400" data-v-6067ec7a>${ssrInterpolate(unref(t)("bookmakersSection.header.title_html1"))}</span> ${ssrInterpolate(unref(t)("bookmakersSection.header.title_html2"))}</h2><p class="mt-3 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base" data-v-6067ec7a>${ssrInterpolate(unref(t)("bookmakersSection.header.subtitle_html1"))}<span class="text-yellow-300" data-v-6067ec7a>${ssrInterpolate(unref(t)("bookmakersSection.header.subtitle_html2"))}</span>, ${ssrInterpolate(unref(t)("bookmakersSection.header.subtitle_html3"))} <span class="text-yellow-300" data-v-6067ec7a>${ssrInterpolate(unref(t)("bookmakersSection.header.subtitle_html4"))}</span>${ssrInterpolate(unref(t)("bookmakersSection.header.subtitle_html5"))} <span class="text-yellow-300" data-v-6067ec7a>${ssrInterpolate(unref(t)("bookmakersSection.header.subtitle_html6"))}</span></p></header><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-14" data-v-6067ec7a><!--[-->`);
      ssrRenderList(bookmakers, (b) => {
        _push(`<article class="bookmaker bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center shadow-xl backdrop-blur-[2px] flex flex-col" data-v-6067ec7a><div class="logo-box w-25 h-25 mx-auto mb-3 sm:mb-4 rounded-xl border border-white/10 bg-black/30 overflow-hidden" data-v-6067ec7a><img${ssrRenderAttr("src", b.logo)}${ssrRenderAttr("alt", b.name)} class="w-full h-full object-contain sm:h-14 md:h-16 mx-auto mb-3 sm:mb-4" data-v-6067ec7a></div><h3 class="text-lg sm:text-xl font-bold" data-v-6067ec7a>${ssrInterpolate(b.name)}</h3><p class="text-xs sm:text-sm text-gray-300 mt-1" data-v-6067ec7a>${ssrInterpolate(b.note)}</p><div class="mt-4" data-v-6067ec7a><div class="flex flex-col sm:grid sm:grid-cols-1 sm:items-center gap-2 sm:gap-3" data-v-6067ec7a><a class="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs sm:text-[9px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/25 transition"${ssrRenderAttr("href", b.quickUrl)} target="_blank" rel="noopener" aria-label="Inscription rapide" data-v-6067ec7a><i class="fa-solid fa-bolt mr-1.5" data-v-6067ec7a></i> ${ssrInterpolate(unref(t)("bookmakersSection.cards.quickSignup"))}</a><button class="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs sm:text-[9px] font-semibold bg-yellow-500/10 text-yellow-300 border border-yellow-400/30" aria-label="Code promo" data-v-6067ec7a><i class="fa-solid fa-ticket mr-1.5" data-v-6067ec7a></i> ${ssrInterpolate(unref(t)("bookmakersSection.cards.codeLabel"))} : ${ssrInterpolate(b.code)} <i class="fa-regular fa-copy" data-v-6067ec7a></i>`);
        if (copied.value) {
          _push(`<span class="absolute -top-7 right-0 text-xs px-2 py-0.5 rounded bg-black/80 text-white shadow" aria-live="polite" data-v-6067ec7a> Copié ✓ </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button><a class="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs sm:text-[9px] font-semibold bg-sky-500/15 text-sky-300 border border-sky-400/30 hover:bg-sky-500/25 transition"${ssrRenderAttr("href", b.fullUrl)} target="_blank" rel="noopener" aria-label="Inscription complète" data-v-6067ec7a><i class="fa-solid fa-list-check mr-1.5" data-v-6067ec7a></i> ${ssrInterpolate(unref(t)("bookmakersSection.cards.fullSignup"))}</a></div></div></article>`);
      });
      _push(`<!--]--></div><div class="md:hidden mb-2 text-center text-[11px] text-gray-400 select-none" data-v-6067ec7a>Glisse →</div><div class="md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory no-scrollbar mb-10" data-v-6067ec7a><div class="flex gap-4" data-v-6067ec7a><!--[-->`);
      ssrRenderList(reasons, (r) => {
        _push(`<article class="reason min-w-[78%] snap-center bg-white/5 border border-white/10 rounded-xl p-5" data-v-6067ec7a><div class="flex items-start gap-3" data-v-6067ec7a><div class="w-10 h-10 rounded-lg flex items-center justify-center bg-yellow-500/10 text-yellow-300" data-v-6067ec7a><i class="${ssrRenderClass([r.icon, "text-lg"])}" data-v-6067ec7a></i></div><div data-v-6067ec7a><h4 class="text-base font-semibold" data-v-6067ec7a>${ssrInterpolate(r.title)}</h4><p class="text-[13px] text-gray-300 mt-1" data-v-6067ec7a>${ssrInterpolate(r.text)}</p></div></div></article>`);
      });
      _push(`<!--]--></div></div><div class="hidden md:grid grid-cols-3 gap-6 md:gap-8 mb-4" data-v-6067ec7a><!--[-->`);
      ssrRenderList(reasons, (r) => {
        _push(`<article class="reason bg-white/5 border border-white/10 rounded-xl p-6" data-v-6067ec7a><div class="flex items-start gap-3" data-v-6067ec7a><div class="w-10 h-10 rounded-lg flex items-center justify-center bg-yellow-500/10 text-yellow-300" data-v-6067ec7a><i class="${ssrRenderClass([r.icon, "text-lg"])}" data-v-6067ec7a></i></div><div data-v-6067ec7a><h4 class="text-lg font-semibold" data-v-6067ec7a>${ssrInterpolate(r.title)}</h4><p class="text-sm text-gray-300 mt-1" data-v-6067ec7a>${ssrInterpolate(r.text)}</p></div></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BookmakersSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BookmakersSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-6067ec7a"]]), { __name: "BookmakersSection" });

export { BookmakersSection as default };
//# sourceMappingURL=BookmakersSection-BKkTpoxL.mjs.map

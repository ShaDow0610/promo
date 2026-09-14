import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { g as gsapWithCSS } from '../_/index.mjs';
import { S as ScrollTrigger } from '../_/ScrollTrigger.mjs';
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
  __name: "ClientResults",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const results = [
      { name: "Kevin", bet: 20, win: 150, avatar: "/apple-fortune.jpg", screenshot: "/proof1.jpg" },
      { name: "Sonia", bet: 50, win: 320, avatar: "/apple-fortune.jpg", screenshot: "/proof2.jpg" },
      { name: "Arthur", bet: 10, win: 90, avatar: "/apple-fortune.jpg", screenshot: "/proof3.jpg" },
      { name: "Fatima", bet: 100, win: 600, avatar: "/apple-fortune.jpg", screenshot: "/proof4.jpg" },
      { name: "Lucas", bet: 15, win: 70, avatar: "/apple-fortune.jpg", screenshot: "/proof5.jpg" }
    ];
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const activeIndex = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "results",
        class: "relative text-white py-14 sm:py-16 overflow-hidden"
      }, _attrs))} data-v-d7b4006e><div class="absolute inset-0 -z-10 pointer-events-none" data-v-d7b4006e><div class="absolute inset-0 animate-bgShift" data-v-d7b4006e></div><div class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]" data-v-d7b4006e></div><div class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" data-v-d7b4006e></div><div class="absolute inset-0" data-v-d7b4006e></div><div class="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#0b0b0c]" data-v-d7b4006e></div><div class="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#050505]" data-v-d7b4006e></div></div><div class="container mx-auto px-4" data-v-d7b4006e><h2 class="text-2xl md:text-4xl font-bold text-center mb-8" data-v-d7b4006e>${ssrInterpolate(unref(t)("resultsSection.ariaLabel"))}</h2><div class="relative w-full overflow-hidden" data-v-d7b4006e><div class="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-[#0b0b0c] to-transparent z-10" data-v-d7b4006e></div><div class="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-[#0b0b0c] to-transparent z-10" data-v-d7b4006e></div><div class="flex gap-6 sm:gap-8 whitespace-nowrap will-change-transform" aria-label="Résultats défilants des joueurs" data-v-d7b4006e><!--[-->`);
      ssrRenderList(2, (n) => {
        _push(`<div class="flex gap-6 sm:gap-8" data-v-d7b4006e><!--[-->`);
        ssrRenderList(results, (r, index) => {
          _push(`<article class="group result-card bg-white/10 border border-white/10 rounded-2xl p-3 sm:p-4 md:p-5 min-w-[82vw] sm:min-w-[420px] md:min-w-[540px] hover:shadow-2xl hover:shadow-yellow-500/10 transition-transform duration-300 cursor-pointer flex flex-col" data-v-d7b4006e><div class="relative w-full h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/15" data-v-d7b4006e><img${ssrRenderAttr("src", r.screenshot)}${ssrRenderAttr("alt", `Capture du pari de ${r.name}`)} class="absolute inset-0 w-full h-full object-cover" loading="lazy" data-v-d7b4006e><div class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-yellow-500/0 via-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition" data-v-d7b4006e></div></div><div class="mt-4 flex items-center gap-3" data-v-d7b4006e><img${ssrRenderAttr("src", r.avatar)}${ssrRenderAttr("alt", `Avatar de ${r.name}`)} class="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-yellow-400 object-cover flex-shrink-0" loading="lazy" data-v-d7b4006e><div class="flex-1" data-v-d7b4006e><p class="font-semibold text-base sm:text-lg leading-tight" data-v-d7b4006e>${ssrInterpolate(r.name)}</p><p class="text-xs sm:text-sm text-gray-300" data-v-d7b4006e>${ssrInterpolate(unref(t)("resultsSection.card.labels.stake"))} : <span class="text-yellow-400 font-bold" data-v-d7b4006e>${ssrInterpolate(r.bet)}$</span>  →  ${ssrInterpolate(unref(t)("resultsSection.card.labels.gain"))} : <span class="text-green-400 font-bold" data-v-d7b4006e>${ssrInterpolate(r.win)}$</span></p></div><div class="hidden sm:flex items-center gap-2 text-green-400 font-semibold" data-v-d7b4006e><i class="fa-solid fa-arrow-trend-up" data-v-d7b4006e></i><span data-v-d7b4006e>+${ssrInterpolate(Math.round((r.win / r.bet - 1) * 100))}%</span></div></div></article>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div><p class="mt-6 text-center text-xs text-gray-400" data-v-d7b4006e>${ssrInterpolate(unref(t)("resultsSection.legend"))}</p></div>`);
      if (activeIndex.value !== null) {
        _push(`<div class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4" data-v-d7b4006e><div class="bg-[#0d0d0e] text-white rounded-2xl shadow-2xl max-w-3xl w-full relative overflow-hidden border border-white/10" data-v-d7b4006e><button class="absolute top-2 right-2 p-2 text-gray-300 hover:text-white z-10" aria-label="Fermer" data-v-d7b4006e>✕</button><div class="relative" data-v-d7b4006e><div class="overflow-hidden h-[55vh] sm:h-[65vh] flex items-center justify-center" data-v-d7b4006e><img${ssrRenderAttr("src", results[activeIndex.value].screenshot)} class="w-full h-full object-contain"${ssrRenderAttr("alt", `Capture du pari de ${results[activeIndex.value].name}`)} data-v-d7b4006e></div><button class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full" aria-label="Précédent" data-v-d7b4006e>‹</button><button class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full" aria-label="Suivant" data-v-d7b4006e>›</button><div class="absolute bottom-2 inset-x-0 flex justify-center sm:hidden" data-v-d7b4006e><span class="text-[11px] px-2 py-0.5 rounded-full bg-black/35 text-white" data-v-d7b4006e>${ssrInterpolate(unref(t)("resultsSection.modal.swipeHint"))}</span></div></div><div class="p-4 sm:p-6 flex items-center gap-3" data-v-d7b4006e><img${ssrRenderAttr("src", results[activeIndex.value].avatar)}${ssrRenderAttr("alt", `Avatar de ${results[activeIndex.value].name}`)} class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-yellow-400 object-cover" data-v-d7b4006e><div class="flex-1" data-v-d7b4006e><p class="font-semibold" data-v-d7b4006e>${ssrInterpolate(results[activeIndex.value].name)}</p><p class="text-sm text-gray-300" data-v-d7b4006e>${ssrInterpolate(unref(t)("resultsSection.modal.infoLine"))} <span class="text-yellow-400 font-bold" data-v-d7b4006e>${ssrInterpolate(results[activeIndex.value].bet)}$</span> • ${ssrInterpolate(unref(t)("resultsSection.modal.infoLine1"))} <span class="text-green-400 font-bold" data-v-d7b4006e>${ssrInterpolate(results[activeIndex.value].win)}$</span> • +${ssrInterpolate(Math.round((results[activeIndex.value].win / results[activeIndex.value].bet - 1) * 100))}% </p></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ClientResults.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ClientResults = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-d7b4006e"]]), { __name: "ClientResults" });

export { ClientResults as default };
//# sourceMappingURL=ClientResults-DF_v9W5s.mjs.map

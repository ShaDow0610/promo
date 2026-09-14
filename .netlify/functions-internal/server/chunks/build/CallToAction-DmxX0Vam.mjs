import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
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

const telegramUrl = "https://t.me/+09RmIt4oNn41ZWVk";
const rows = 6;
const cols = 5;
const maxReveals = 3;
const demoDurationSec = 10 * 60;
const _sfc_main = {
  __name: "CallToAction",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const show = ref(false);
    const running = ref(false);
    const locked = ref(false);
    const revealed = ref([]);
    const revealedCount = computed(() => revealed.value.length);
    ref(null);
    const askId = ref(false);
    ref(null);
    const userId = ref("");
    const idError = ref("");
    const cells = computed(() => {
      const list = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          list.push({ r, c, key: `${r}-${c}` });
        }
      }
      return list;
    });
    const isRevealed = (r, c) => revealed.value.some((x) => x.r === r && x.c === c);
    ref(rows - 1);
    ref(Array(rows).fill(null));
    const timeLeft = ref(demoDurationSec);
    const timeLeftFormatted = computed(() => {
      const m = Math.floor(timeLeft.value / 60).toString().padStart(2, "0");
      const s = Math.floor(timeLeft.value % 60).toString().padStart(2, "0");
      return `${m}:${s}`;
    });
    const timeDanger = computed(() => timeLeft.value <= 30);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "predictions",
        class: "relative text-white py-14 sm:py-16 overflow-hidden"
      }, _attrs))} data-v-80c4fb53><div class="absolute inset-0 -z-10 pointer-events-none" data-v-80c4fb53><div class="absolute inset-0 animate-bgShift" data-v-80c4fb53></div><div class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]" data-v-80c4fb53></div><div class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" data-v-80c4fb53></div><div class="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#0b0b0c]" data-v-80c4fb53></div><div class="absolute -bottom-10 left-0 right-0 h-10 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#050505]" data-v-80c4fb53></div></div><div class="container mx-auto px-4 max-w-6xl" data-v-80c4fb53><div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-v-80c4fb53><article class="rounded-2xl bg-white/10 border border-white/10 p-5 sm:p-6 shadow-[0_10px_30px_rgba(250,200,80,0.06)]" data-v-80c4fb53><header class="flex items-start gap-3 mb-3" data-v-80c4fb53><div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-yellow-500/15 border border-yellow-400/30 flex items-center justify-center text-yellow-300" data-v-80c4fb53><i class="fa-solid fa-futbol text-lg sm:text-xl" data-v-80c4fb53></i></div><div data-v-80c4fb53><h3 class="text-xl sm:text-2xl font-extrabold" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.footballCard.title"))}</h3><p class="text-sm sm:text-base text-gray-300" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.footballCard.description1"))}<span class="text-yellow-300 font-semibold" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.footballCard.description2"))}</span>${ssrInterpolate(unref(t)("predictionsSection.footballCard.description3"))} <span class="text-yellow-300 font-semibold" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.footballCard.description5"))}</span> ${ssrInterpolate(unref(t)("predictionsSection.footballCard.description5"))}<span class="text-yellow-300 font-semibold" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.footballCard.description6"))}</span>. </p></div></header><ul class="text-sm text-gray-300 space-y-1.5 mb-5" data-v-80c4fb53><li class="flex items-center gap-2" data-v-80c4fb53><i class="fa-solid fa-check text-green-400" data-v-80c4fb53></i> ${ssrInterpolate(unref(t)("predictionsSection.footballCard.bullets.bullets1"))}</li><li class="flex items-center gap-2" data-v-80c4fb53><i class="fa-solid fa-check text-green-400" data-v-80c4fb53></i> ${ssrInterpolate(unref(t)("predictionsSection.footballCard.bullets.bullets2"))}</li><li class="flex items-center gap-2" data-v-80c4fb53><i class="fa-solid fa-check text-green-400" data-v-80c4fb53></i> ${ssrInterpolate(unref(t)("predictionsSection.footballCard.bullets.bullets3"))}</li></ul><a${ssrRenderAttr("href", telegramUrl)} target="_blank" rel="noopener" class="tg-cta inline-flex items-center justify-center rounded-full px-6 py-3 font-bold text-white shadow-[0_8px_24px_rgba(34,158,217,0.35)] ring-1 ring-[#229ED9]/40 hover:brightness-110 active:brightness-95 transition" aria-label="Ouvrir Telegram" data-v-80c4fb53><i class="fa-brands fa-telegram mr-2 text-white" data-v-80c4fb53></i> ${ssrInterpolate(unref(t)("predictionsSection.footballCard.ctaJoin"))}</a></article><article class="rounded-2xl bg-white/10 border border-white/10 p-5 sm:p-6 shadow-[0_10px_30px_rgba(250,200,80,0.06)]" data-v-80c4fb53><header class="flex items-start gap-3 mb-3" data-v-80c4fb53><div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300" data-v-80c4fb53><i class="fa-solid fa-apple-whole text-lg sm:text-xl" data-v-80c4fb53></i></div><div data-v-80c4fb53><h3 class="text-xl sm:text-2xl font-extrabold" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.demoCard.title"))}</h3><p class="text-lg sm:text-base text-gray-300" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.demoCard.description"))} <span class="text-yellow-300 font-semibold" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.demoCard.description1"))}</span> ${ssrInterpolate(unref(t)("predictionsSection.demoCard.description2"))} ${ssrInterpolate(unref(t)("predictionsSection.demoCard.description3"))}<span class="text-yellow-300 font-semibold" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.demoCard.description4"))}</span> ${ssrInterpolate(unref(t)("predictionsSection.demoCard.description5"))}</p></div></header><div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4" data-v-80c4fb53><button class="inline-flex items-center text-sm justify-center rounded-full px-4 py-2.5 font-semibold bg-emerald-500 text-black hover:brightness-110 active:brightness-95 transition" data-v-80c4fb53><i class="fa-solid fa-play mr-2" data-v-80c4fb53></i> ${ssrInterpolate(unref(t)("predictionsSection.demoCard.ctaOpen"))}</button></div></article></div></div>`);
      if (show.value) {
        _push(`<div class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4" data-v-80c4fb53><div class="touche bg-[#0d0d0e] lg:h-145 md:h-145 text-white rounded-2xl shadow-2xl max-w-[920px] w-sm border border-white/10 overflow-hidden" data-v-80c4fb53><div class="flex items-center justify-between px-4 sm:px-5 py-1 bg-white/5 border-b border-white/10" data-v-80c4fb53><div class="flex items-center gap-3" data-v-80c4fb53><div class="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300" data-v-80c4fb53><i class="fa-solid fa-apple-whole" data-v-80c4fb53></i></div><div data-v-80c4fb53><p class="font-semibold leading-tight" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.modal.headerTitle"))}</p><p class="text-xs text-gray-400" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.modal.headerSubtitle"))}</p></div></div><button class="p-2 text-gray-300 hover:text-white" aria-label="Fermer" data-v-80c4fb53>✕</button></div><div class="px-4 sm:px-5 py-0 flex items-center justify-between gap-3 border-b border-white/10 bg-[#0f1012]" data-v-80c4fb53><div class="text-sm" data-v-80c4fb53><span class="text-gray-300" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.modal.controls.timeRemainingLabel"))}</span><span class="${ssrRenderClass([timeDanger.value ? "text-red-400" : "text-yellow-300", "ml-2 font-mono font-bold"])}" data-v-80c4fb53>${ssrInterpolate(timeLeftFormatted.value)}</span></div><div class="flex items-center gap-2" data-v-80c4fb53><button class="rounded-full px-4 py-2 bg-yellow-500 text-black font-semibold disabled:opacity-50"${ssrIncludeBooleanAttr(running.value) ? " disabled" : ""} data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.modal.controls.start"))}</button><button class="rounded-full text-xs px-4 py-2 text-lg bg-emerald-500 text-black font-semibold disabled:opacity-50"${ssrIncludeBooleanAttr(!running.value || revealedCount.value >= maxReveals || locked.value) ? " disabled" : ""} data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.modal.controls.reveal"))}</button></div></div><div class="p-4 sm:p-6" data-v-80c4fb53><div class="mx-auto max-w-[780px]" data-v-80c4fb53><div class="dispp grid gap-2 sm:gap-2.5" style="${ssrRenderStyle({ gridTemplateColumns: ` repeat(${cols}, minmax(0, 1fr))` })}" data-v-80c4fb53><!--[-->`);
        ssrRenderList(cells.value, (cell) => {
          _push(`<div${ssrRenderAttr("data-cell", cell.key)} class="${ssrRenderClass(["tile", "relative", "aspect-square", "rounded-full", "overflow-hidden", "border", "border-white/10", "flex", "items-center", "justify-center", isRevealed(cell.r, cell.c) ? "revealed" : ""])}" data-v-80c4fb53><div class="absolute inset-0 bg-[radial-gradient(65%_65%_at_50%_40%,#2b2d31,#1a1c20)]" data-v-80c4fb53></div><div class="cover absolute inset-[8%] rounded-full will-change-transform" data-v-80c4fb53><div class="absolute inset-0 rounded-full wood" data-v-80c4fb53></div><div class="absolute inset-0 rounded-full ring-1 ring-black/40 shadow-[inset_0_12px_22px_rgba(0,0,0,.35),inset_0_0_0_2px_rgba(0,0,0,.35)]" data-v-80c4fb53></div><div class="absolute inset-0 rounded-full opacity-20 bg-[radial-gradient(55%_35%_at_40%_25%,rgba(255,255,255,.5),transparent_60%)]" data-v-80c4fb53></div></div><div class="apple relative text-2xl sm:text-3xl will-change-transform" data-v-80c4fb53>🍏</div></div>`);
        });
        _push(`<!--]--></div><div class="mt-4 sm:mt-5 text-center" data-v-80c4fb53>`);
        if (!locked.value) {
          _push(`<p class="text-xs sm:text-sm text-gray-400" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.modal.board.revealsCounter"))} <span class="text-yellow-300 font-semibold" data-v-80c4fb53>${ssrInterpolate(revealedCount.value)}</span> / ${ssrInterpolate(maxReveals)}</p>`);
        } else {
          _push(`<div class="mt-3" data-v-80c4fb53><p class="text-xs sm:text-base text-gray-200 mb-3" data-v-80c4fb53>${ssrInterpolate(unref(t)("predictionsSection.modal.finished.text"))}</p><a${ssrRenderAttr("href", telegramUrl)} target="_blank" rel="noopener" class="tg-cta inline-flex items-center justify-center rounded-full px-6 py-3 font-bold text-white shadow-[0_8px_24px_rgba(34,158,217,0.35)] ring-1 ring-[#229ED9]/40 hover:brightness-110 active:brightness-95 transition" data-v-80c4fb53><i class="fa-brands fa-telegram mr-2 text-white" data-v-80c4fb53></i> ${ssrInterpolate(unref(t)("predictionsSection.modal.finished.ctaJoin"))}</a></div>`);
        }
        _push(`<p class="mt-3 text-[11px] text-gray-500 italic" data-v-80c4fb53>* ${ssrInterpolate(unref(t)("predictionsSection.modal.footnote"))}</p></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (askId.value) {
        _push(`<div class="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" data-v-80c4fb53><div class="w-full max-w-md bg-[#0f1012] text-white rounded-2xl border border-white/10 shadow-2xl overflow-hidden" data-v-80c4fb53><div class="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center gap-3" data-v-80c4fb53><div class="w-8 h-8 rounded-lg bg-yellow-500/15 border border-yellow-400/30 text-yellow-300 flex items-center justify-center" data-v-80c4fb53><i class="fa-solid fa-user-check" data-v-80c4fb53></i></div><p class="font-semibold" data-v-80c4fb53>Vérification rapide</p></div><div class="p-4 space-y-3" data-v-80c4fb53><p class="text-sm text-gray-300" data-v-80c4fb53> Entrez l’ID de votre compte créé avec le code promo <span class="font-semibold text-yellow-300" data-v-80c4fb53>GLE44</span> pour lancer la démo. </p><input${ssrRenderAttr("value", userId.value)} type="text" placeholder="ex. user_12345" class="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-sm outline-none focus:border-yellow-400/60" data-v-80c4fb53><p class="text-[12px] text-gray-400" data-v-80c4fb53> NB : cette étape vérifie la compatibilité afin d’exécuter le hack correctement avec votre application. </p>`);
        if (idError.value) {
          _push(`<p class="text-[12px] text-rose-300" data-v-80c4fb53>${ssrInterpolate(idError.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center justify-end gap-2 pt-1" data-v-80c4fb53><button class="px-3 py-2 text-sm rounded-full bg-white/5 hover:bg-white/10" data-v-80c4fb53>Annuler</button><button class="px-4 py-2 text-sm font-semibold rounded-full bg-yellow-500 text-black hover:brightness-110 active:brightness-95" data-v-80c4fb53> Envoyer </button></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CallToAction = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-80c4fb53"]]), { __name: "CallToAction" });

export { CallToAction as default };
//# sourceMappingURL=CallToAction-DmxX0Vam.mjs.map

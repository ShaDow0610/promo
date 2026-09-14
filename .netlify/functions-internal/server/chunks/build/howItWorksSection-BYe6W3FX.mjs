import { ref, computed, watch, mergeProps, unref, createVNode, resolveDynamicComponent, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderVNode } from 'vue/server-renderer';
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
  __name: "HowItWorksSection",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const { t } = useI18n();
    const steps = [
      {
        title: t("instructionsSection.steps.one.title"),
        text: t("instructionsSection.steps.one.text"),
        details: t("instructionsSection.steps.one.details"),
        subtitle1: t("instructionsSection.steps.one.subtitle1"),
        text1SubText1: t("instructionsSection.steps.one.text1.subText1"),
        text1SubText2: t("instructionsSection.steps.one.text1.subText2"),
        subtitle2: t("instructionsSection.steps.one.subtitle2"),
        text2_subTitle1: t("instructionsSection.steps.one.text2.subTitle1"),
        text2_li1: t("instructionsSection.steps.one.text2.li1"),
        text2_li2: t("instructionsSection.steps.one.text2.li2"),
        text2_li3: t("instructionsSection.steps.one.text2.li3"),
        text2_nb: t("instructionsSection.steps.one.text2.NB"),
        text2_warning: t("instructionsSection.steps.one.text2.warning"),
        text2_li4: t("instructionsSection.steps.one.text2.li4"),
        text2_li5: t("instructionsSection.steps.one.text2.li5"),
        text2_li6: t("instructionsSection.steps.one.text2.li6"),
        text2_li7: t("instructionsSection.steps.one.text2.li7"),
        text2_li8: t("instructionsSection.steps.one.text2.li8"),
        subtitle3: t("instructionsSection.steps.one.subtitle3"),
        text3: t("instructionsSection.steps.one.text3"),
        text3_li1: t("instructionsSection.steps.one.ul.li1"),
        text3_text1: t("instructionsSection.steps.one.ul.text1"),
        text3_li2: t("instructionsSection.steps.one.ul.li2"),
        text3_text2: t("instructionsSection.steps.one.ul.text2"),
        text3_li3: t("instructionsSection.steps.one.ul.li3"),
        text3_text3: t("instructionsSection.steps.one.ul.text3"),
        text3_nb: t("instructionsSection.steps.one.ul.NB"),
        subtitle4: t("instructionsSection.steps.one.details"),
        text4_subText: t("instructionsSection.steps.one.text4.subText"),
        text4_li1: t("instructionsSection.steps.one.text4.li1"),
        text4_nb: t("instructionsSection.steps.one.text4.NB"),
        icon: "fa-solid fa-apple-whole",
        color: "#22c55e",
        media: [{ type: "video", src: "/hack.webm", alt: "Grille Apple of Fortune" }]
      },
      {
        title: t("instructionsSection.steps.two.title"),
        text: t("instructionsSection.steps.two.text"),
        details: t("instructionsSection.steps.two.details"),
        icon: "fa-solid fa-ticket",
        color: "#facc15",
        media: [{ type: "video", src: "/inscription.mp4", alt: "Historique de gains" }]
      },
      {
        title: t("instructionsSection.steps.three.title"),
        text: t("instructionsSection.steps.three.text"),
        details: t("instructionsSection.steps.three.details"),
        icon: "fa-solid fa-futbol",
        color: "#3b82f6",
        media: [{ type: "image", src: "/apple-fortune.jpg", alt: "Historique de gains" }]
      },
      {
        title: t("instructionsSection.steps.four.title"),
        text: t("instructionsSection.steps.four.text"),
        details: t("instructionsSection.steps.four.details"),
        icon: "fa-solid fa-trophy",
        color: "#ef4444",
        media: [{ type: "video", src: "/wins.webm", alt: "Historique de gains" }]
      }
    ];
    const activeStep = ref(null);
    const currentSlide = ref(0);
    const modalEl = ref(null);
    ref(null);
    const mediaList = computed(() => {
      if (activeStep.value === null) return [];
      const s = steps[activeStep.value];
      return Array.isArray(s.media) ? s.media : [];
    });
    const currentItem = computed(() => mediaList.value[currentSlide.value] || {});
    const currentItemProps = computed(() => {
      const item = currentItem.value;
      if (!item) return {};
      if (item.type === "video") {
        return { src: item.src, autoplay: true, muted: true, loop: true, playsinline: true, controls: true, preload: "auto" };
      }
      return { src: item.src, alt: item.alt || "illustration", loading: "eager", decoding: "async" };
    });
    async function autoPlayIfVideo() {
      await nextTick();
      const el = modalEl.value?.querySelector("video");
      if (!el) return;
      try {
        el.muted = true;
        el.loop = true;
        el.playsInline = true;
        el.currentTime = 0;
        await el.play();
      } catch {
      }
    }
    function pauseOthers(e) {
      const me = e.target;
      const vids = modalEl.value?.querySelectorAll("video") || [];
      vids.forEach((v) => {
        if (v !== me) v.pause();
      });
    }
    watch([activeStep, currentSlide], async () => {
      await autoPlayIfVideo();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "instructions",
        class: "relative text-white py-16 sm:py-20 overflow-hidden",
        "aria-label": unref(t)("instructionsSection.ariaLabel")
      }, _attrs))} data-v-27100816><div class="absolute inset-0 -z-10 pointer-events-none" data-v-27100816><div class="absolute inset-0 animate-bgShift" data-v-27100816></div><div class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]" data-v-27100816></div><div class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" data-v-27100816></div><div class="absolute inset-0" data-v-27100816></div><div class="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#0b0b0c]" data-v-27100816></div><div class="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#050505]" data-v-27100816></div></div><div class="container mx-auto px-5 sm:px-6 relative" data-v-27100816><div class="pointer-events-none absolute -top-6 right-4 opacity-0 translate-y-2 select-none" data-v-27100816><span class="inline-flex items-center gap-2 text-xs md:text-sm bg-white/10 border border-white/15 rounded-full px-3 py-1 text-yellow-300 backdrop-blur" data-v-27100816><i class="fa-solid fa-hand-pointer" data-v-27100816></i><span class="hidden sm:inline" data-v-27100816>${ssrInterpolate(unref(t)("instructionsSection.hint.desktop"))}</span><span class="sm:hidden" data-v-27100816>${ssrInterpolate(unref(t)("instructionsSection.hint.mobile"))}</span></span></div><h2 class="text-3xl md:text-5xl font-extrabold text-center mb-10 sm:mb-12" data-v-27100816>${ssrInterpolate(unref(t)("instructionsSection.header.title"))}</h2><div class="timeline relative flex flex-col md:flex-row justify-between gap-12 md:gap-8" data-v-27100816><span class="timeline-bar hidden absolute top-1/2 left-[6%] right-[6%] h-1 bg-gradient-to-r from-green-500 via-yellow-400 via-blue-500 to-red-500 scale-x-0 origin-left rounded" data-v-27100816></span><!--[-->`);
      ssrRenderList(steps, (s, index) => {
        _push(`<div class="step group relative flex flex-col items-center text-center max-w-xs mx-auto cursor-pointer focus:outline-none" role="button" tabindex="0" data-v-27100816><span class="absolute -inset-2 rounded-2xl ring-0 group-focus:ring-2 ring-yellow-400/40 transition" data-v-27100816></span><div class="relative" data-v-27100816><i class="${ssrRenderClass([s.icon, "text-5xl mb-4 drop-shadow-[0_8px_20px_rgba(250,200,80,0.08)]"])}" style="${ssrRenderStyle({ color: s.color })}" data-v-27100816></i><i class="fa-solid fa-hand-pointer absolute -right-5 -top-3 text-yellow-300/90 opacity-0 step-hint" data-v-27100816></i></div><h3 class="font-bold text-lg mb-2" data-v-27100816>${ssrInterpolate(s.title)}</h3><p class="text-gray-300 text-sm" data-v-27100816>${ssrInterpolate(s.text)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (activeStep.value !== null && steps?.[activeStep.value]) {
        _push(`<div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm" data-v-27100816><div role="dialog"${ssrRenderAttr("aria-label", steps?.[activeStep.value]?.title || "Details")} class="w-sm lg:h-145 md:h-145 sm:w-3xl sm:max-w-3xl md:max-w-3xl rounded-t-2xl sm:rounded-2xl overflow-hidden bg-[#0d0d0e] text-white shadow-[0_20px_60px_rgba(0,0,0,.45)] ring-1 ring-white/10 sm:mx-0 mx-0" data-v-27100816><button${ssrRenderAttr("aria-label", unref(t)("instructionsSection.timeline.aria.closeModal"))} class="absolute top-2 z-50 right-2 sm:top-3 sm:right-3 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white p-2 sm:p-2.5 shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70" data-v-27100816> ✕ </button><div class="relative select-none bg-[#0a0a0b]" data-v-27100816><div class="overflow-hidden h-[42vh] xs:h-[48vh] sm:h-[56vh] md:h-[60vh] flex items-center justify-center" data-v-27100816>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(currentItem.value?.type === "video" ? "video" : "img"), mergeProps({
          key: activeStep.value + ":" + currentSlide.value,
          class: "w-full h-full object-contain"
        }, currentItemProps.value, { onPlay: pauseOthers }), null), _parent);
        _push(`</div>`);
        if ((mediaList.value?.length || 0) > 1) {
          _push(`<button aria-label="Previous" class="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70" data-v-27100816> ‹ </button>`);
        } else {
          _push(`<!---->`);
        }
        if ((mediaList.value?.length || 0) > 1) {
          _push(`<button aria-label="Next" class="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70" data-v-27100816> › </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute bottom-2 inset-x-0 flex justify-center sm:hidden" data-v-27100816><span class="text-[11px] px-2 py-0.5 rounded-full bg-black/40 text-white" data-v-27100816>${ssrInterpolate(unref(t)("instructionsSection.timeline.swipeHelper"))}</span></div><div class="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" data-v-27100816></div></div><div class="p-4 sm:p-6 max-h-[54vh] sm:max-h-[44vh] overflow-y-auto" data-v-27100816>`);
        if (steps?.[activeStep.value]?.title) {
          _push(`<h3 class="text-base sm:text-xl font-bold leading-snug tracking-tight mb-2 bg-gradient-to-r from-yellow-300 via-amber-200 to-emerald-200 bg-clip-text text-transparent" data-v-27100816>${ssrInterpolate(steps[activeStep.value].title)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        if (steps?.[activeStep.value]?.details) {
          _push(`<p class="text-gray-200/90 text-sm sm:text-base leading-relaxed" data-v-27100816>${ssrInterpolate(steps[activeStep.value].details)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (steps?.[activeStep.value]?.subtitle1 || steps?.[activeStep.value]?.text1SubText1 || steps?.[activeStep.value]?.text1SubText2) {
          _push(`<div class="mt-4 sm:mt-5" data-v-27100816>`);
          if (steps?.[activeStep.value]?.subtitle1) {
            _push(`<h4 class="text-sm sm:text-lg font-semibold mb-2 text-yellow-300" data-v-27100816>${ssrInterpolate(steps[activeStep.value].subtitle1)}</h4>`);
          } else {
            _push(`<!---->`);
          }
          if (steps?.[activeStep.value]?.text1SubText1) {
            _push(`<p class="text-gray-200/90 text-sm sm:text-base leading-relaxed" data-v-27100816>${ssrInterpolate(steps[activeStep.value].text1SubText1)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (steps?.[activeStep.value]?.text1SubText2) {
            _push(`<p class="text-gray-200/90 text-sm sm:text-base leading-relaxed mt-1.5" data-v-27100816>${ssrInterpolate(steps[activeStep.value].text1SubText2)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (steps?.[activeStep.value]?.subtitle2 || steps?.[activeStep.value]?.text2_subTitle1) {
          _push(`<div class="mt-5 sm:mt-6" data-v-27100816>`);
          if (steps?.[activeStep.value]?.subtitle2) {
            _push(`<h4 class="text-sm sm:text-lg font-semibold mb-2 text-yellow-300" data-v-27100816>${ssrInterpolate(steps[activeStep.value].subtitle2)}</h4>`);
          } else {
            _push(`<!---->`);
          }
          if (steps[activeStep.value].text2_subTitle1) {
            _push(`<h5 class="text-sm sm:text-base font-semibold mb-2 text-emerald-300" data-v-27100816>${ssrInterpolate(steps[activeStep.value].text2_subTitle1)}</h5>`);
          } else {
            _push(`<!---->`);
          }
          if (steps[activeStep.value].text2_subTitle1) {
            _push(`<ul class="list-disc pl-5 space-y-1.5 text-gray-200/90 text-sm sm:text-base" data-v-27100816>`);
            if (steps[activeStep.value].text2_li1) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text2_li1)}</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text2_li2) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text2_li2)}</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text2_li3) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text2_li3)}</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text2_nb) {
              _push(`<li class="list-none" data-v-27100816><span class="inline-block text-[12px] sm:text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-200 ring-1 ring-inset ring-blue-400/30" data-v-27100816>${ssrInterpolate(steps[activeStep.value].text2_nb)}</span></li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text2_warning) {
              _push(`<li class="list-none" data-v-27100816><span class="inline-block text-[12px] sm:text-xs px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-200 ring-1 ring-inset ring-rose-400/30" data-v-27100816>${ssrInterpolate(steps[activeStep.value].text2_warning)}</span></li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text2_li4) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text2_li4)}</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text2_li5) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text2_li5)}</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text2_li6) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text2_li6)}</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text2_li7) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text2_li7)}</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text2_li8) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text2_li8)}</li>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (steps[activeStep.value].subtitle3 || steps[activeStep.value].text3) {
          _push(`<div class="mt-5 sm:mt-6" data-v-27100816>`);
          if (steps[activeStep.value].subtitle3) {
            _push(`<h4 class="text-sm sm:text-lg font-semibold mb-2 text-yellow-300" data-v-27100816>${ssrInterpolate(steps[activeStep.value].subtitle3)}</h4>`);
          } else {
            _push(`<!---->`);
          }
          if (steps[activeStep.value].text3) {
            _push(`<p class="text-gray-200/90 text-sm sm:text-base leading-relaxed" data-v-27100816>${ssrInterpolate(steps[activeStep.value].text3)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (steps[activeStep.value].text3_li1) {
            _push(`<ul class="mt-2 list-disc pl-5 space-y-1.5 text-sm sm:text-base text-gray-200/90" data-v-27100816>`);
            if (steps[activeStep.value].text3_li1) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text3_li1)} `);
              if (steps[activeStep.value].text3_text1) {
                _push(`<p class="mt-1 text-gray-300" data-v-27100816>${ssrInterpolate(steps[activeStep.value].text3_text1)}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text3_li2) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text3_li2)} `);
              if (steps[activeStep.value].text3_text2) {
                _push(`<p class="mt-1 text-gray-300" data-v-27100816>${ssrInterpolate(steps[activeStep.value].text3_text2)}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text3_li3) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text3_li3)} `);
              if (steps[activeStep.value].text3_text3) {
                _push(`<p class="mt-1 text-gray-300" data-v-27100816>${ssrInterpolate(steps[activeStep.value].text3_text3)}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text3_nb) {
              _push(`<li class="list-none" data-v-27100816><span class="inline-block text-[12px] sm:text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-200 ring-1 ring-inset ring-blue-400/30" data-v-27100816>${ssrInterpolate(steps[activeStep.value].text3_nb)}</span></li>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (steps[activeStep.value].subtitle4 || steps[activeStep.value].text4_subText) {
          _push(`<div class="mt-5 sm:mt-6" data-v-27100816>`);
          if (steps[activeStep.value].subtitle4) {
            _push(`<h4 class="text-sm sm:text-lg font-semibold mb-2 text-yellow-300" data-v-27100816>${ssrInterpolate(steps[activeStep.value].subtitle4)}</h4>`);
          } else {
            _push(`<!---->`);
          }
          if (steps[activeStep.value].text4_subText) {
            _push(`<ul class="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-gray-200/90" data-v-27100816>`);
            if (steps[activeStep.value].text4_subText) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text4_subText)}</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text4_li1) {
              _push(`<li data-v-27100816>${ssrInterpolate(steps[activeStep.value].text4_li1)}</li>`);
            } else {
              _push(`<!---->`);
            }
            if (steps[activeStep.value].text4_nb) {
              _push(`<li class="list-none" data-v-27100816><span class="inline-block text-[12px] sm:text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-200 ring-1 ring-inset ring-blue-400/30" data-v-27100816>${ssrInterpolate(steps[activeStep.value].text4_nb)}</span></li>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/howItWorksSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const howItWorksSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27100816"]]);

export { howItWorksSection as default };
//# sourceMappingURL=howItWorksSection-BYe6W3FX.mjs.map

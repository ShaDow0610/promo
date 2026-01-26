import { _ as __nuxt_component_0$1 } from './nuxt-link-DwjXfCQI.mjs';
import { mergeProps, ref, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, a as useI18n, g as useLocalePath } from './server.mjs';
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

const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale, setLocale } = useI18n();
    const localePath = useLocalePath();
    const navRef = ref(null);
    const navOpen = ref(false);
    const hideNav = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        ref_key: "navRef",
        ref: navRef,
        class: ["fixed top-0 inset-x-0 z-40 transition-transform duration-300 will-change-transform", hideNav.value ? "-translate-y-full" : "translate-y-0"]
      }, _attrs))} data-v-6db67be4><div class="mx-auto max-w-6xl px-4" data-v-6db67be4><div class="mt-3 mb-2 bg-black/40 backdrop-blur border border-white/10 rounded-xl px-3 sm:px-2 py-1.5" data-v-6db67be4><div class="flex items-center justify-between" data-v-6db67be4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-300/90 group-hover:bg-yellow-200 transition" data-v-6db67be4${_scopeId}></span><span class="font-semibold tracking-wide text-sm sm:text-base" data-v-6db67be4${_scopeId}>${ssrInterpolate(unref(t)("heroSection.brand"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "inline-block w-2.5 h-2.5 rounded-full bg-yellow-300/90 group-hover:bg-yellow-200 transition" }),
              createVNode("span", { class: "font-semibold tracking-wide text-sm sm:text-base" }, toDisplayString(unref(t)("heroSection.brand")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center gap-1.5" data-v-6db67be4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nav-link",
        "active-class": "!text-white !bg-white/10 !border-white/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Acceuille`);
          } else {
            return [
              createTextVNode(" Acceuille")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/hacks"),
        "no-prefetch": "",
        class: "nav-link",
        "active-class": "!text-white !bg-white/10 !border-white/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nos hacks`);
          } else {
            return [
              createTextVNode(" Nos hacks")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/about"),
        class: "nav-link",
        "active-class": "!text-white !bg-white/10 !border-white/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` À propos`);
          } else {
            return [
              createTextVNode(" À propos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact"),
        class: "nav-link",
        "active-class": "!text-white !bg-white/10 !border-white/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-2" data-v-6db67be4><div data-v-6db67be4><label class="sr-only" for="lang" data-v-6db67be4>${ssrInterpolate(unref(t)("heroSection.aria.langSelect"))}</label><select id="lang" class="sm:block bg-black/30 backdrop-blur border border-gray-700/70 text-xs sm:text-sm rounded-lg px-2 py-1 focus:outline-none focus:border-yellow-400/80 text-gray-200"${ssrRenderAttr("value", unref(locale))}${ssrRenderAttr("aria-label", unref(t)("heroSection.aria.langSelect"))} data-v-6db67be4><option value="fr" data-v-6db67be4>${ssrInterpolate(unref(t)("heroSection.lang.fr"))}</option><option value="en" data-v-6db67be4>${ssrInterpolate(unref(t)("heroSection.lang.en"))}</option><option value="es" data-v-6db67be4>${ssrInterpolate(unref(t)("heroSection.lang.es"))}</option><option value="ru" data-v-6db67be4>${ssrInterpolate(unref(t)("heroSection.lang.ru"))}</option><option value="ar" data-v-6db67be4>${ssrInterpolate(unref(t)("heroSection.lang.ar"))}</option><option value="az" data-v-6db67be4>${ssrInterpolate(unref(t)("heroSection.lang.az"))}</option><option value="hi" data-v-6db67be4>${ssrInterpolate(unref(t)("heroSection.lang.hi"))}</option><option value="so" data-v-6db67be4>${ssrInterpolate(unref(t)("heroSection.lang.so"))}</option><option value="tr" data-v-6db67be4>${ssrInterpolate(unref(t)("heroSection.lang.tr"))}</option><option value="pt" data-v-6db67be4>${ssrInterpolate(unref(t)("heroSection.lang.pt"))}</option></select></div><button class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15"${ssrRenderAttr("aria-expanded", navOpen.value ? "true" : "false")} aria-label="Menu" data-v-6db67be4><i class="${ssrRenderClass([navOpen.value ? "fa-xmark" : "fa-bars", "fa-solid"])}" data-v-6db67be4></i></button></div></div>`);
      if (navOpen.value) {
        _push(`<div class="md:hidden mt-2 grid grid-cols-2 gap-2" data-v-6db67be4>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "nav-pill",
          onClick: ($event) => navOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Acceuille `);
            } else {
              return [
                createTextVNode(" Acceuille ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/hacks"),
          class: "nav-pill",
          onClick: ($event) => navOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Nos hacks `);
            } else {
              return [
                createTextVNode("Nos hacks ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/about"),
          class: "nav-pill",
          onClick: ($event) => navOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`À propos `);
            } else {
              return [
                createTextVNode("À propos ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/contact"),
          class: "nav-pill",
          onClick: ($event) => navOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contact `);
            } else {
              return [
                createTextVNode("Contact ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6db67be4"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_navbar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#0b0b0c] text-white" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_navbar, null, null, _parent));
  _push(`<main class="pt-20">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-Bgw2THK4.mjs.map

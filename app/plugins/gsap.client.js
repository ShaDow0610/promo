import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(CSSPlugin);
  return {
    provide: {
      gsap,
    },
  };
});

<template>
  <section class="bg-black text-white py-12 overflow-hidden">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-4xl font-bold text-center mb-8">
        Résultats des joueurs
      </h2>

      <!-- Bande défilante -->
      <div class="relative w-full overflow-hidden">
        <div
          ref="marquee"
          class="flex gap-8 whitespace-nowrap will-change-transform"
          aria-label="Résultats défilants des joueurs"
        >
          <!-- Duplication pour effet infini -->
          <div v-for="n in 2" :key="n" class="flex gap-8">
            <article
              v-for="(r, index) in results"
              :key="index + '-' + n"
              class="result-card bg-white/10 border border-white/10 rounded-2xl p-4 md:p-5 min-w-[320px] sm:min-w-[400px] md:min-w-[520px] hover:shadow-2xl hover:shadow-yellow-500/10 transition-transform duration-300 cursor-pointer flex flex-col"
              @mouseenter="pause()"
              @mouseleave="play()"
            >
              <!-- Capture (TOP) -->
              <div class="relative w-full h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/15">
                <img
                  :src="r.screenshot"
                  :alt="`Capture du pari de ${r.name}`"
                  class="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <!-- léger voile doré en hover -->
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-yellow-500/0 via-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              <!-- Infos (BOTTOM) -->
              <div class="mt-4 flex items-center gap-3">
                <img
                  :src="r.avatar"
                  :alt="`Avatar de ${r.name}`"
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-yellow-400 object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div class="flex-1">
                  <p class="font-semibold text-base sm:text-lg leading-tight">
                    {{ r.name }}
                  </p>
                  <p class="text-xs sm:text-sm text-gray-300">
                    Mise :
                    <span class="text-yellow-400 font-bold">{{ r.bet }}$</span>
                    &nbsp;→&nbsp; Gain :
                    <span class="text-green-400 font-bold">{{ r.win }}$</span>
                  </p>
                </div>
                <div class="hidden sm:flex items-center gap-2 text-green-400 font-semibold">
                  <i class="fa-solid fa-arrow-trend-up"></i>
                  <span>+{{ Math.round((r.win / r.bet) * 100) - 100 }}%</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- Légende douce -->
      <p class="mt-6 text-center text-xs text-gray-400">
        Captures d’écran fournies par les joueurs — à titre illustratif.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import gsap from "gsap";

/** Données d’exemple — remplace par tes vraies images */
const results = [
  { name: "Kevin",  bet: 20,  win: 150, avatar: "/img/avatar1.jpg", screenshot: "/img/bet1.jpg" },
  { name: "Sonia",  bet: 50,  win: 320, avatar: "/img/avatar2.jpg", screenshot: "/img/bet2.jpg" },
  { name: "Arthur", bet: 10,  win: 90,  avatar: "/img/avatar3.jpg", screenshot: "/img/bet3.jpg" },
  { name: "Fatima", bet: 100, win: 600, avatar: "/img/avatar4.jpg", screenshot: "/img/bet4.jpg" },
  { name: "Lucas",  bet: 15,  win: 70,  avatar: "/img/avatar5.jpg", screenshot: "/img/bet5.jpg" },
];

const marquee = ref(null);
let tween = null;
let resizeObserver = null;

function buildMarquee(speed = 30) {
  if (!marquee.value) return;
  // largeur de la moitié (car on a 2 blocs clonés)
  const distance = marquee.value.scrollWidth / 2;

  // nettoie l’ancien tween
  if (tween) tween.kill();

  tween = gsap.to(marquee.value, {
    x: -distance,
    duration: speed, // plus grand = plus lent
    ease: "linear",
    repeat: -1,
  });
}

function pause() {
  if (tween) tween.pause();
}
function play() {
  if (tween) tween.resume();
}

onMounted(async () => {
  await nextTick();

  // démarrage initial
  buildMarquee(32);

  // pause globale si l’utilisateur préfère moins d’animations
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches && tween) tween.timeScale(0.5);

  // ré-étalonnage au resize (contenu / images pouvant changer la largeur)
  resizeObserver = new ResizeObserver(() => buildMarquee(32));
  resizeObserver.observe(marquee.value);

  // pause au survol du conteneur (desktop)
  marquee.value.addEventListener("mouseenter", pause);
  marquee.value.addEventListener("mouseleave", play);
});

onBeforeUnmount(() => {
  if (tween) tween.kill();
  if (resizeObserver) resizeObserver.disconnect();
  marquee.value?.removeEventListener?.("mouseenter", pause);
  marquee.value?.removeEventListener?.("mouseleave", play);
});
</script>

<style scoped>
.result-card {
  /* pour des transitions douces et nettes */
  will-change: transform, box-shadow;
}
</style>

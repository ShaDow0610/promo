<template>
  <section
    class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0c] text-white"
    aria-label="Bienvenue sur Bet PronostikerX"
  >
    <!-- Fond -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-b from-black via-[#0e0e11] to-black opacity-100"></div>
      <div class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_40%,rgba(255,200,80,0.25),transparent_70%)]"></div>
      <div class="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]"></div>
    </div>

    <!-- Sélecteur langue -->
    <div ref="langRef" class="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 text-gray-300">
      <i class="fa-solid fa-globe text-sm"></i>
      <select
        class="bg-black/30 backdrop-blur border border-gray-700/70 text-xs sm:text-sm rounded-lg px-2 py-1 focus:outline-none focus:border-yellow-400/80"
        aria-label="Choix de langue"
      >
        <option value="fr">🇫🇷 Français</option>
        <option value="en">🇬🇧 English</option>
        <option value="es">🇪🇸 Español</option>
        <option value="ru">🇷🇺 Русский</option>
      </select>
    </div>

    <!-- Contenu -->
    <div class="relative z-10 w-full max-w-6xl px-5 sm:px-8 text-center">
      <!-- Marqueur -->
      <div class="mx-auto mb-4 sm:mb-6 w-max px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-[10px] sm:text-xs tracking-widest text-yellow-300/90">
        PREMIUM • SPORT • BONUS
      </div>

      <!-- Titre -->
      <h1
        ref="titleRef"
        class="font-display text-[34px] leading-[1.05] sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] drop-shadow-[0_6px_18px_rgba(255,215,100,.18)]"
      >
        Bienvenue sur <span class="whitespace-nowrap">Bet PronostikerX</span>
      </h1>

      <!-- Sous-texte -->
      <p ref="subtitleRef" class="mt-3 sm:mt-4 max-w-2xl mx-auto text-[13px] sm:text-base text-gray-300">
        Accède à des <span class="text-yellow-300">codes promo</span> puissants et des
        <span class="text-yellow-300">instructions claires</span> pour capitaliser tes pronostics.
      </p>

      <!-- Boutons -->
      <div class="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <!-- CTA principal -->
        <button
          :ref="(el) => setBtnRef(el, 0)"
          @click="scrollTo('game')"
          class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-bold
                 bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A]
                 text-black shadow-[0_8px_24px_rgba(255,210,90,0.25)]
                 ring-1 ring-yellow-500/40 hover:brightness-105 active:brightness-95 transition"
        >
          <i class="fa-solid fa-rocket-launch mr-2"></i> Commencer à gagner
        </button>

        <!-- Boutons secondaires -->
        <button
          :ref="(el) => setBtnRef(el, 1)"
          @click="scrollTo('instructions')"
          class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold
                 bg-black/50 backdrop-blur border border-yellow-500/30 text-yellow-300
                 hover:bg-yellow-500/10 hover:border-yellow-400/60 hover:text-yellow-200 transition"
        >
          <i class="fa-solid fa-book-open mr-2"></i> Instructions
        </button>

        <button
          :ref="(el) => setBtnRef(el, 2)"
          @click="scrollTo('results')"
          class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold
                 bg-black/50 backdrop-blur border border-yellow-500/30 text-yellow-300
                 hover:bg-yellow-500/10 hover:border-yellow-400/60 hover:text-yellow-200 transition"
        >
          <i class="fa-solid fa-chart-line mr-2"></i> Résultats clients
        </button>

        <button
          :ref="(el) => setBtnRef(el, 3)"
          @click="scrollTo('signup')"
          class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold
                 bg-black/50 backdrop-blur border border-yellow-500/30 text-yellow-300
                 hover:bg-yellow-500/10 hover:border-yellow-400/60 hover:text-yellow-200 transition"
        >
          <i class="fa-solid fa-user-plus mr-2"></i> Créer un compte
        </button>
      </div>

      <!-- Statistiques -->
      <div class="mt-7 sm:mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">PAYS COUVERTS</div>
          <div class="mt-1 text-lg sm:text-2xl font-extrabold text-yellow-300">150+</div>
        </div>
        <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">DÉPÔTS BOOSTÉS</div>
          <div class="mt-1 text-lg sm:text-2xl font-extrabold text-yellow-300">$2.5M+</div>
        </div>
        <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">JOUEURS ACTIFS</div>
          <div class="mt-1 text-lg sm:text-2xl font-extrabold text-yellow-300">15 000+</div>
        </div>
        <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">TAUX DE SUCCÈS</div>
          <div class="mt-1 text-lg sm:text-2xl font-extrabold text-yellow-300">87%</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue"
import gsap from "gsap"
import VanillaTilt from "vanilla-tilt"

const titleRef = ref(null)
const subtitleRef = ref(null)
const langRef = ref(null)
const btnRefs = ref([])

const isTouch = typeof window !== "undefined"
  ? window.matchMedia("(pointer: coarse)").matches
  : false

function setBtnRef (el, i) {
  if (!el) return
  btnRefs.value[i] = el
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

let tiltInstances = []

onMounted(async () => {
  await nextTick()

  if (langRef.value) {
    gsap.from(langRef.value, { y: -24, opacity: 0, duration: 0.9, ease: "power3.out" })
  }
  if (titleRef.value) {
    gsap.from(titleRef.value, { scale: 0.92, opacity: 0, duration: 1.1, ease: "power3.out" })
  }
  if (subtitleRef.value) {
    gsap.from(subtitleRef.value, { y: 12, opacity: 0, delay: 0.15, duration: 0.7, ease: "power2.out" })
  }

  const targets = btnRefs.value.filter(Boolean)
  if (targets.length) {
    gsap.from(targets, {
      y: 18,
      opacity: 1,
      delay: 0.25,
      duration: 0.7,
      ease: "back.out(1.6)",
      stagger: 0.12,
    })
  }

  if (!isTouch) {
    tiltInstances = targets.map(el => {
      VanillaTilt.init(el, {
        max: 14,
        speed: 350,
        scale: 1.02,
        glare: true,
        "max-glare": 0.25,
        perspective: 900,
      })
      return el.vanillaTilt
    })
  }
})

onBeforeUnmount(() => {
  tiltInstances.forEach(t => t?.destroy?.())
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=Manrope:wght@400;700&display=swap');
.font-display{ font-family: 'Orbitron', system-ui, sans-serif; }
body{ font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif; }
</style>
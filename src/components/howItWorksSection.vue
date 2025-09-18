<template>
  <section
    id="instructions"
    class="relative text-white py-16 sm:py-20 overflow-hidden"
    aria-label="Comment ça marche"
  >
    <!-- BG -->
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <div class="absolute inset-0 animate-bgShift"></div>
      <div class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]"></div>
      <div class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <div ref="particlesEl" class="absolute inset-0"></div>
      <div class="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#0b0b0c]"></div>
      <div class="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#050505]"></div>
    </div>

    <div class="container mx-auto px-5 sm:px-6 relative">
      <div ref="hintEl" class="pointer-events-none absolute -top-6 right-4 opacity-0 translate-y-2 select-none">
        <span class="inline-flex items-center gap-2 text-xs md:text-sm bg-white/10 border border-white/15 rounded-full px-3 py-1 text-yellow-300 backdrop-blur">
          <i class="fa-solid fa-hand-pointer"></i>
          <span class="hidden sm:inline">Clique sur une icône pour voir les détails</span>
          <span class="sm:hidden">Swipe/Touch pour voir</span>
        </span>
      </div>

      <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-10 sm:mb-12">
        Comment ça marche ?
      </h2>

      <div class="timeline relative flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        <span class="timeline-bar hidden md:block absolute top-1/2 left-[6%] right-[6%] h-1
                     bg-gradient-to-r from-green-500 via-yellow-400 via-blue-500 to-red-500
                     scale-x-0 origin-left rounded"></span>

        <div v-for="(s, index) in steps"
             :key="s.title"
             class="step group relative flex flex-col items-center text-center max-w-xs mx-auto cursor-pointer focus:outline-none"
             role="button" tabindex="0"
             @click="openModal(index)"
             @keyup.enter.stop.prevent="openModal(index)"
             @keyup.space.stop.prevent="openModal(index)">
          <span class="absolute -inset-2 rounded-2xl ring-0 group-focus:ring-2 ring-yellow-400/40 transition"></span>
          <div class="relative">
            <i :class="s.icon" :style="{ color: s.color }"
               class="text-5xl mb-4 drop-shadow-[0_8px_20px_rgba(250,200,80,0.08)]"></i>
            <i class="fa-solid fa-hand-pointer absolute -right-5 -top-3 text-yellow-300/90 opacity-0 step-hint"></i>
          </div>
          <h3 class="font-bold text-lg mb-2">{{ s.title }}</h3>
          <p class="text-gray-300 text-sm">{{ s.text }}</p>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <div v-if="activeStep !== null"
         class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
         @click.self="closeModal">
      <div ref="modalEl" class="bg-white text-black rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden">
        <button @click="closeModal"
                class="absolute top-2 right-2 p-2 text-gray-600 hover:text-black z-10 bg-black/40 text-white rounded-full"
                aria-label="Fermer">✕</button>

        <!-- CARROUSEL -->
        <div class="relative select-none">
          <div class="overflow-hidden h-64 sm:h-72 flex items-center justify-center">
            <transition name="fadeFast" mode="out-in">
              <component
                :is="currentItem?.type === 'video' ? 'video' : 'img'"
                :key="activeStep + ':' + currentSlide"
                class="w-full h-full object-cover"
                v-bind="currentItemProps"
                @play="pauseOthers"
              />
            </transition>
          </div>

          <!-- nav -->
          <button @click="prevSlide" class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">‹</button>
          <button @click="nextSlide" class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">›</button>

          <!-- helper swipe -->
          <div class="absolute bottom-2 inset-x-0 flex justify-center sm:hidden">
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-black/35 text-white">Swipe ◀ ▶</span>
          </div>
        </div>

        <!-- Texte -->
        <div class="p-6">
          <h3 class="font-bold text-xl mb-2">{{ steps[activeStep].title }}</h3>
          <p class="text-gray-700">{{ steps[activeStep].details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

/* ---------- DATA (exemple) ---------- */
const steps = [
  {
    title: "Apple of Fortune — Hack (démo)",
    text: "Repère précisément où se trouve la pomme à chaque tour.",
    details:
      "Dans cette démonstration pédagogique, nous te montrons comment lire nos pronostics pour Apple of Fortune. " +
      "Tu vois l’emplacement suggéré de la pomme, étape par étape…",
    icon: "fa-solid fa-apple-whole",
    color: "#22c55e",
    media: [
      { type: "image", src: "/img/step1-1.jpg", alt: "Grille Apple of Fortune" },
      { type: "video", src: "/video/apple-demo.mp4", poster: "/img/step1-poster.jpg", alt: "Démo vidéo" },
      { type: "image", src: "/img/step1-2.jpg", alt: "Tour avec pomme révélée" }
    ]
  },
  {
    title: "Inscription avec code promo",
    text: "Entre notre code pour débloquer immédiatement les bonus.",
    details: "Crée ton compte puis saisis le code promo…",
    icon: "fa-solid fa-ticket",
    color: "#facc15",
    media: [
      { type: "image", src: "/apple-fortune.jpg", alt: "Écran code promo" },
      { type: "video", src: "/video/signup-walkthrough.mp4", poster: "/img/step2-poster.jpg", alt: "Tutoriel vidéo" },
      { type: "image", src: "/img/step2-2.jpg", alt: "Bonus activé" }
    ]
  },
  {
    title: "Pronostics de matchs et autres sports",
    text: "Analyses quotidiennes et sélections à valeur.",
    details: "Stats, contexte, bankroll…",
    icon: "fa-solid fa-futbol",
    color: "#3b82f6",
    media: [
      { type: "image", src: "/img/step3-1.jpg", alt: "Fiche d’analyse" },
      { type: "video", src: "/video/analysis-sample.mp4", poster: "/img/step3-poster.jpg", alt: "Analyse pré-match" },
      { type: "image", src: "/img/step3-2.jpg", alt: "Sélection de paris" }
    ]
  },
  {
    title: "Joue & gagne",
    text: "Parie intelligemment, encaisse, fais évoluer ta bankroll.",
    details: "Discipline, retraits réguliers, gestion du risque…",
    icon: "fa-solid fa-trophy",
    color: "#ef4444",
    media: [
      { type: "image", src: "/apple-fortune.jpg", alt: "Historique de gains" },
      { type: "video", src: "/apple-search.mp4", poster: "/img/step4-poster.jpg", alt: "Payout flow" },
      { type: "video", src: "/apple-wins.mp4", alt: "Série de gains" }
    ]
  }
]

/* ---------- STATE ---------- */
const activeStep = ref(null)
const currentSlide = ref(0)
const modalEl = ref(null)
const hintEl = ref(null)
const particlesEl = ref(null)
const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

/* ---------- MEDIA HELPERS ---------- */
const mediaList = computed(() => {
  if (activeStep.value === null) return []
  const s = steps[activeStep.value]
  return Array.isArray(s.media) && s.media.length ? s.media : []
})
const currentItem = computed(() => mediaList.value[currentSlide.value])

// Props pour img/video
const currentItemProps = computed(() => {
  const item = currentItem.value
  if (!item) return {}
  if (item.type === 'video') {
    return {
      src: item.src,
      poster: item.poster,
      // autoplay & loop rapides
      autoplay: true,
      muted: true,
      loop: true,
      playsinline: true,
      controls: true,
      preload: 'auto' // charge plus vite
    }
  } else {
    return {
      src: item.src,
      alt: item.alt || 'illustration',
      loading: 'eager',     // affiche vite
      decoding: 'async'     // rendu rapide
    }
  }
})

/* ---------- PRELOAD (accélère le slide) ---------- */
function preloadItem (item) {
  if (!item) return
  if (item.type === 'image') {
    const img = new Image()
    img.decoding = 'async'
    img.loading = 'eager'
    img.src = item.src
  } else if (item.type === 'video') {
    const vid = document.createElement('video')
    vid.src = item.src
    vid.preload = 'auto'
    // ne pas l'ajouter au DOM, juste déclencher la mise en cache
    vid.load()
  }
}
function preloadAround(index) {
  const list = mediaList.value
  if (!list.length) return
  const next = (index + 1) % list.length
  const prev = (index - 1 + list.length) % list.length
  preloadItem(list[index])
  preloadItem(list[next])
  preloadItem(list[prev])
}

/* ---------- LECTURE AUTO VIDÉO ---------- */
async function autoPlayIfVideo () {
  await nextTick()
  const el = modalEl.value?.querySelector('video')
  if (!el) return
  try {
    el.muted = true
    el.loop = true
    el.playsInline = true
    // relance propre
    el.currentTime = 0
    await el.play()
  } catch (e) {
    // certains navigateurs bloquent — l’utilisateur peut cliquer play
  }
}

// pause les autres vidéos si une joue
function pauseOthers (e) {
  const me = e.target
  const vids = modalEl.value?.querySelectorAll('video') || []
  vids.forEach(v => { if (v !== me) v.pause() })
}
function pauseAllVideos () {
  const vids = modalEl.value?.querySelectorAll('video') || []
  vids.forEach(v => v.pause())
}

/* ---------- MODAL ---------- */
const openModal = (index) => {
  activeStep.value = index
  currentSlide.value = 0
  // précharge le flux
  preloadAround(0)

  requestAnimationFrame(() => {
    if (modalEl.value) {
      gsap.fromTo(
        modalEl.value,
        { opacity: 0, y: 24, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" }
      )
    }
  })
}
const closeModal = () => {
  pauseAllVideos()
  if (!modalEl.value) { activeStep.value = null; return }
  gsap.to(modalEl.value, {
    opacity: 0, y: 16, scale: 0.98, duration: 0.16, ease: "power1.inOut",
    onComplete: () => (activeStep.value = null),
  })
}

function nextSlide () {
  if (activeStep.value === null || !mediaList.value.length) return
  pauseAllVideos()
  const next = (currentSlide.value + 1) % mediaList.value.length
  currentSlide.value = next
  preloadAround(next)
}
function prevSlide () {
  if (activeStep.value === null || !mediaList.value.length) return
  pauseAllVideos()
  const len = mediaList.value.length
  const prev = (currentSlide.value - 1 + len) % len
  currentSlide.value = prev
  preloadAround(prev)
}

/* ---------- SWIPE MOBILE ---------- */
let startX = 0, startY = 0
const onTouchStart = (e) => {
  const t = e.changedTouches?.[0]; if (!t) return
  startX = t.clientX; startY = t.clientY
}
const onTouchEnd = (e) => {
  const t = e.changedTouches?.[0]; if (!t) return
  const dx = t.clientX - startX, dy = t.clientY - startY
  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) dx < 0 ? nextSlide() : prevSlide()
}

/* ---------- EFFETS ---------- */
watch([activeStep, currentSlide], async () => {
  // à chaque changement de slide/step : autoplay si vidéo
  await autoPlayIfVideo()
})

onMounted(() => {
  // Particules / animations (inchangées)
  if (!prefersReduced && hintEl.value) {
    gsap.to(hintEl.value, {
      scrollTrigger: { trigger: "#instructions", start: "top 80%" },
      opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      onComplete: () => gsap.to(hintEl.value, { opacity: 0, duration: 0.6, delay: 3 })
    })
  }

  gsap.utils.toArray(".step").forEach((step, i) => {
    gsap.from(step, {
      scrollTrigger: { trigger: step, start: "top 82%", toggleActions: "play none none reverse" },
      opacity: 0, y: 44, filter: "blur(8px)", scale: 0.98,
      duration: 0.6, delay: i * 0.08, ease: "power3.out",
      onComplete: () => gsap.to(step, { filter: "blur(0px)", duration: 0.15 })
    })
  })

  gsap.fromTo(".timeline-bar", { scaleX: 0 }, {
    scrollTrigger: { trigger: ".timeline", start: "top 80%", end: "bottom 70%", scrub: true },
    scaleX: 1, ease: "none"
  })

  window.addEventListener("touchstart", onTouchStart, { passive: true })
  window.addEventListener("touchend", onTouchEnd, { passive: true })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((st) => st.kill())
  window.removeEventListener("touchstart", onTouchStart)
  window.removeEventListener("touchend", onTouchEnd)
})
</script>

<style scoped>
@keyframes bgShift {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}
.animate-bgShift {
  background: linear-gradient(120deg, #050505 0%, #0b0b0c 40%, #020202 100%);
  background-size: 200% 200%;
  animation: bgShift 18s linear infinite;
}
.gold-dot {
  position: absolute;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, rgba(255,200,80,0.9), rgba(255,140,40,0.35), transparent 70%);
  filter: blur(1px);
  opacity: 0.85;
  will-change: transform, opacity;
}

/* transition plus rapide */
.fadeFast-enter-active, .fadeFast-leave-active { transition: opacity .12s ease }
.fadeFast-enter-from, .fadeFast-leave-to { opacity: 0 }

/* hint */
.step-hint { animation: hintFloat 1.6s ease-in-out infinite }
@keyframes hintFloat {
  0%, 100% { transform: translateY(0) rotate(-6deg) }
  50%      { transform: translateY(-2px) rotate(0deg) }
}
</style>

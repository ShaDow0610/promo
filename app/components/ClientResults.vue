<template>
  <section id="results" class="relative text-white py-14 sm:py-16 overflow-hidden">
    <!-- BACKGROUND cohérent -->
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <div class="absolute inset-0 animate-bgShift"></div>
      <div
        class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]">
      </div>
      <div
        class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]">
      </div>
      <div ref="particlesEl" class="absolute inset-0"></div>

      <!-- Seam TOP / BOTTOM -->
      <div class="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#0b0b0c]">
      </div>
      <div
        class="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#050505]">
      </div>
    </div>

    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-4xl font-bold text-center mb-8">
        {{ t('resultsSection.ariaLabel') }}
      </h2>

      <!-- Bande défilante -->
      <div class="relative w-full overflow-hidden">
        <!-- Fades aux bords -->
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-[#0b0b0c] to-transparent z-10">
        </div>
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-[#0b0b0c] to-transparent z-10">
        </div>

        <div ref="marquee" class="flex gap-6 sm:gap-8 whitespace-nowrap will-change-transform"
          aria-label="Résultats défilants des joueurs" @mouseenter="pause" @mouseleave="play"
          @click="openModal(hoverIndex)">
          <!-- Duplication pour effet infini -->
          <div v-for="n in 2" :key="n" class="flex gap-6 sm:gap-8">
            <article v-for="(r, index) in results" :key="index + '-' + n"
              class="group result-card bg-white/10 border border-white/10 rounded-2xl p-3 sm:p-4 md:p-5
                     min-w-[82vw] sm:min-w-[420px] md:min-w-[540px]
                     hover:shadow-2xl hover:shadow-yellow-500/10 transition-transform duration-300 cursor-pointer flex flex-col" @mouseenter="hoverIndex = index"
              @touchstart.passive="hoverIndex = index" @click.stop="openModal(index)">
              <!-- Capture (TOP) -->
              <div class="relative w-full h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/15">
                <img :src="r.screenshot" :alt="`Capture du pari de ${r.name}`"
                  class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <!-- léger voile doré en hover -->
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-yellow-500/0 via-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition">
                </div>
              </div>

              <!-- Infos (BOTTOM) -->
              <div class="mt-4 flex items-center gap-3">
                <img :src="r.avatar" :alt="`Avatar de ${r.name}`"
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-yellow-400 object-cover flex-shrink-0"
                  loading="lazy" />
                <div class="flex-1">
                  <p class="font-semibold text-base sm:text-lg leading-tight">{{ r.name }}</p>
                  <p class="text-xs sm:text-sm text-gray-300">
                    {{ t('resultsSection.card.labels.stake') }} :
                    <span class="text-yellow-400 font-bold">{{ r.bet }}$</span>
                    &nbsp;→&nbsp; {{ t('resultsSection.card.labels.gain') }} :
                    <span class="text-green-400 font-bold">{{ r.win }}$</span>
                  </p>
                </div>
                <div class="hidden sm:flex items-center gap-2 text-green-400 font-semibold">
                  <i class="fa-solid fa-arrow-trend-up"></i>
                  <span>+{{ Math.round((r.win / r.bet - 1) * 100) }}%</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- Légende -->
      <p class="mt-6 text-center text-xs text-gray-400">
        {{ t('resultsSection.legend') }}
      </p>
    </div>

    <!-- MODAL plein écran -->
    <div v-if="activeIndex !== null"
      class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      @click.self="closeModal">
      <div ref="modalEl"
        class="bg-[#0d0d0e] text-white rounded-2xl shadow-2xl max-w-3xl w-full relative overflow-hidden border border-white/10">
        <!-- close -->
        <button @click="closeModal" class="absolute top-2 right-2 p-2 text-gray-300 hover:text-white z-10"
          aria-label="Fermer">✕</button>

        <!-- image -->
        <div class="relative">
          <div class="overflow-hidden h-[55vh] sm:h-[65vh] flex items-center justify-center">
            <img :src="results[activeIndex].screenshot" class="w-full h-full object-contain"
              :alt="`Capture du pari de ${results[activeIndex].name}`" />
          </div>

          <!-- nav -->
          <button @click="prev"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
            aria-label="Précédent">‹</button>
          <button @click="next"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
            aria-label="Suivant">›</button>

          <!-- swipe hint mobile -->
          <div class="absolute bottom-2 inset-x-0 flex justify-center sm:hidden">
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-black/35 text-white">
              {{ t('resultsSection.modal.swipeHint') }}
            </span>
          </div>
        </div>

        <!-- infos -->
        <div class="p-4 sm:p-6 flex items-center gap-3">
          <img :src="results[activeIndex].avatar" :alt="`Avatar de ${results[activeIndex].name}`"
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-yellow-400 object-cover" />
          <div class="flex-1">
            <p class="font-semibold">{{ results[activeIndex].name }}</p>
            <p class="text-sm text-gray-300">
              {{ t('resultsSection.modal.infoLine') }} <span class="text-yellow-400 font-bold">{{
                results[activeIndex].bet }}$</span>
              • {{ t('resultsSection.modal.infoLine1') }} <span class="text-green-400 font-bold">{{
                results[activeIndex].win }}$</span>
              • +{{ Math.round((results[activeIndex].win / results[activeIndex].bet - 1) * 100) }}%
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "vue-i18n"


const {t} =useI18n()
gsap.registerPlugin(ScrollTrigger)

/** Démo — remplace par tes vraies images */
const results = [
  { name: "Kevin", bet: 20, win: 150, avatar: "/apple-fortune.jpg", screenshot: "/proof1.jpg" },
  { name: "Sonia", bet: 50, win: 320, avatar: "/apple-fortune.jpg", screenshot: "/proof2.jpg" },
  { name: "Arthur", bet: 10, win: 90, avatar: "/apple-fortune.jpg", screenshot: "/proof3.jpg" },
  { name: "Fatima", bet: 100, win: 600, avatar: "/apple-fortune.jpg", screenshot: "/proof4.jpg" },
  { name: "Lucas", bet: 15, win: 70, avatar: "/apple-fortune.jpg", screenshot: "/proof5.jpg" },
]

const marquee = ref(null)
const sectionRef = ref(null)
const particlesEl = ref(null)
let tween = null
let resizeObserver = null
let visHandler = null
let st = null
const hoverIndex = ref(null)

// Modal
const activeIndex = ref(null)
const modalEl = ref(null)
let touchStartX = 0, touchStartY = 0

const openModal = (i) => {
  if (i == null) return
  activeIndex.value = i
  // anim
  requestAnimationFrame(() => {
    if (modalEl.value) {
      gsap.fromTo(
        modalEl.value, { opacity: 0, y: 22, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out" }
      )
    }
  })
}
const closeModal = () => {
  if (!modalEl.value) { activeIndex.value = null; return }
  gsap.to(modalEl.value, {
    opacity: 0, y: 14, scale: 0.985, duration: 0.18, ease: "power1.inOut",
    onComplete: () => (activeIndex.value = null),
  })
}
const next = () => { activeIndex.value = (activeIndex.value + 1) % results.length }
const prev = () => { activeIndex.value = (activeIndex.value - 1 + results.length) % results.length }

function buildMarquee(pxPerSec = 70) {
  if (!marquee.value) return
  const distance = marquee.value.scrollWidth / 2 // 2 blocs clonés
  if (tween) tween.kill()
  const duration = distance / pxPerSec
  tween = gsap.to(marquee.value, { x: -distance, duration, ease: "linear", repeat: -1 })
}
const pause = () => tween?.pause()
const play  = () => tween?.resume()

onMounted(async () => {
  await nextTick()
  // Particules (légères)
  if (particlesEl.value) {
    const host = particlesEl.value
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 10 : 16
    for (let i = 0; i < count; i++) {
      const d = document.createElement("div")
      d.className = "gold-dot"
      d.style.left = `${Math.random() * 100}%`
      d.style.top = `${10 + Math.random() * 80}%`
      const size = 4 + Math.random() * (isMobile ? 6 : 8)
      d.style.width = `${size}px`
      d.style.height = `${size}px`
      host.appendChild(d)
      gsap.to(d, {
        y: `-=${8 + Math.random() * 26}`,
        x: `+=${(Math.random() - 0.5) * 28}`,
        opacity: 0.55 + Math.random() * 0.35,
        duration: 4 + Math.random() * 6,
        ease: "sine.inOut",
        repeat: -1, yoyo: true, delay: Math.random() * 1.2
      })
    }
  }

  // Marquee
  const pxPerSec = window.innerWidth < 768 ? 55 : 70
  buildMarquee(pxPerSec)

  // Resize recalcul
  resizeObserver = new ResizeObserver(() => buildMarquee(pxPerSec))
  resizeObserver.observe(marquee.value)

  // Pause si section hors écran
  st = ScrollTrigger.create({
    trigger: "#results",
    start: "top bottom",
    end: "bottom top",
    onEnter: play,
    onEnterBack: play,
    onLeave: pause,
    onLeaveBack: pause,
  })

  // Visibility change (onglet)
  visHandler = () => (document.hidden ? pause() : play())
  document.addEventListener("visibilitychange", visHandler)

  // Swipe modal (mobile)
  window.addEventListener("touchstart", e => {
    if (activeIndex.value === null) return
    const t = e.changedTouches?.[0]; if (!t) return
    touchStartX = t.clientX; touchStartY = t.clientY
  }, { passive: true })
  window.addEventListener("touchend", e => {
    if (activeIndex.value === null) return
    const t = e.changedTouches?.[0]; if (!t) return
    const dx = t.clientX - touchStartX, dy = t.clientY - touchStartY
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) (dx < 0 ? next() : prev())
  }, { passive: true })
})

onBeforeUnmount(() => {
  tween?.kill()
  resizeObserver?.disconnect()
  st?.kill()
  document.removeEventListener("visibilitychange", visHandler)
})
</script>

<style scoped>
/* gradient animé – cohérent avec les autres sections */
@keyframes bgShift {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}
.animate-bgShift{
  background: linear-gradient(120deg, #050505 0%, #0b0b0c 40%, #020202 100%);
  background-size: 200% 200%;
  animation: bgShift 18s linear infinite;
}

/* particules */
.gold-dot {
  position: absolute;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, rgba(255,200,80,0.9), rgba(255,140,40,0.35), transparent 70%);
  filter: blur(1px);
  opacity: 0.85;
  will-change: transform, opacity;
}

.result-card { will-change: transform, box-shadow }
</style>

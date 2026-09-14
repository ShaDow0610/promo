<template>
  <section id="instructions" class="relative text-white py-16 sm:py-20 overflow-hidden"
    :aria-label="t('instructionsSection.ariaLabel')">
    <!-- BG -->
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <div class="absolute inset-0 animate-bgShift"></div>
      <div
        class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]">
      </div>
      <div
        class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]">
      </div>
      <div ref="particlesEl" class="absolute inset-0"></div>
      <div class="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#0b0b0c]">
      </div>
      <div
        class="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#050505]">
      </div>
    </div>

    <div class="container mx-auto px-5 sm:px-6 relative">
      <div ref="hintEl" class="pointer-events-none absolute -top-6 right-4 opacity-0 translate-y-2 select-none">
        <span
          class="inline-flex items-center gap-2 text-xs md:text-sm bg-white/10 border border-white/15 rounded-full px-3 py-1 text-yellow-300 backdrop-blur">
          <i class="fa-solid fa-hand-pointer"></i>
          <span class="hidden sm:inline"> {{ t('instructionsSection.hint.desktop') }} </span>
          <span class="sm:hidden"> {{ t('instructionsSection.hint.mobile') }} </span>
        </span>
      </div>

      <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-10 sm:mb-12">
        {{ t('instructionsSection.header.title') }}
      </h2>

      <div class="timeline relative flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        <span class="timeline-bar hidden absolute top-1/2 left-[6%] right-[6%] h-1
                     bg-gradient-to-r from-green-500 via-yellow-400 via-blue-500 to-red-500
                     scale-x-0 origin-left rounded"></span>

        <div v-for="(s, index) in steps" :key="s.title"
          class="step group relative flex flex-col items-center text-center max-w-xs mx-auto cursor-pointer focus:outline-none"
          role="button" tabindex="0" @click="openModal(index)" @keyup.enter.stop.prevent="openModal(index)"
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
    <!-- MODAL — dark theme + subtle vivid accents (GIF-ready) -->
    <div v-if="activeStep !== null && steps?.[activeStep]" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4
         bg-black/70 backdrop-blur-sm" @click.self="closeModal">
      <div ref="modalEl" role="dialog" :aria-label="steps?.[activeStep]?.title || 'Details'" class="w-sm lg:h-145 md:h-145 sm:w-3xl sm:max-w-3xl md:max-w-3xl rounded-t-2xl sm:rounded-2xl overflow-hidden
           bg-[#0d0d0e] text-white shadow-[0_20px_60px_rgba(0,0,0,.45)]
           ring-1 ring-white/10 sm:mx-0 mx-0">
        <!-- Close -->
        <button @click="closeModal" :aria-label="t('instructionsSection.timeline.aria.closeModal')" class="absolute top-2 z-50 right-2 sm:top-3 sm:right-3 inline-flex items-center justify-center
             rounded-full bg-white/10 hover:bg-white/15 text-white
             p-2 sm:p-2.5 shadow-lg transition
             focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70">
          ✕
        </button>

        <!-- MEDIA / CAROUSEL -->
        <div class="relative select-none bg-[#0a0a0b]">
          <!-- media area (supports GIF as image) -->
          <div class="overflow-hidden h-[42vh] xs:h-[48vh] sm:h-[56vh] md:h-[60vh] flex items-center justify-center">
            <transition name="fadeFast" mode="out-in">
              <component :is="currentItem?.type === 'video' ? 'video' : 'img'" :key="activeStep + ':' + currentSlide"
                class="w-full h-full object-contain" v-bind="currentItemProps" @play="pauseOthers" />
            </transition>
          </div>

          <!-- nav arrows -->
          <button v-if="(mediaList?.length || 0) > 1" @click="prevSlide" aria-label="Previous" class="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2
               bg-white/10 hover:bg-white/20 text-white
               p-2.5 rounded-full shadow-lg transition
               focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70">
            ‹
          </button>
          <button v-if="(mediaList?.length || 0) > 1" @click="nextSlide" aria-label="Next" class="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2
               bg-white/10 hover:bg-white/20 text-white
               p-2.5 rounded-full shadow-lg transition
               focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70">
            ›
          </button>

          <!-- mobile swipe hint -->
          <div class="absolute bottom-2 inset-x-0 flex justify-center sm:hidden">
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-black/40 text-white">
              {{ t('instructionsSection.timeline.swipeHelper') }}
            </span>
          </div>

          <!-- top glow accent -->
          <div
            class="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent">
          </div>
        </div>

        <!-- CONTENT -->
        <div class="p-4 sm:p-6 max-h-[54vh] sm:max-h-[44vh] overflow-y-auto">
          <!-- Title -->
          <h3 v-if="steps?.[activeStep]?.title" class="text-base sm:text-xl font-bold leading-snug tracking-tight mb-2
               bg-gradient-to-r from-yellow-300 via-amber-200 to-emerald-200 bg-clip-text text-transparent">
            {{ steps[activeStep].title }}
          </h3>

          <!-- Details -->
          <p v-if="steps?.[activeStep]?.details" class="text-gray-200/90 text-sm sm:text-base leading-relaxed">
            {{ steps[activeStep].details }}
          </p>

          <!-- Block 1 -->
          <div
            v-if="steps?.[activeStep]?.subtitle1 || steps?.[activeStep]?.text1SubText1 || steps?.[activeStep]?.text1SubText2"
            class="mt-4 sm:mt-5">
            <h4 v-if="steps?.[activeStep]?.subtitle1" class="text-sm sm:text-lg font-semibold mb-2 text-yellow-300">
              {{ steps[activeStep].subtitle1 }}
            </h4>

            <p v-if="steps?.[activeStep]?.text1SubText1" class="text-gray-200/90 text-sm sm:text-base leading-relaxed">
              {{ steps[activeStep].text1SubText1 }}
            </p>
            <p v-if="steps?.[activeStep]?.text1SubText2"
              class="text-gray-200/90 text-sm sm:text-base leading-relaxed mt-1.5">
              {{ steps[activeStep].text1SubText2 }}
            </p>
          </div>

          <!-- Block 2 -->
          <div v-if="steps?.[activeStep]?.subtitle2 || steps?.[activeStep]?.text2_subTitle1" class="mt-5 sm:mt-6">
            <h4 v-if="steps?.[activeStep]?.subtitle2" class="text-sm sm:text-lg font-semibold mb-2 text-yellow-300">
              {{ steps[activeStep].subtitle2 }}
            </h4>

            <!-- list title -->
            <h5 v-if="steps[activeStep].text2_subTitle1"
              class="text-sm sm:text-base font-semibold mb-2 text-emerald-300">
              {{ steps[activeStep].text2_subTitle1 }}
            </h5>

            <!-- list items -->
            <ul v-if="steps[activeStep].text2_subTitle1"
              class="list-disc pl-5 space-y-1.5 text-gray-200/90 text-sm sm:text-base">
              <li v-if="steps[activeStep].text2_li1">{{ steps[activeStep].text2_li1 }}</li>
              <li v-if="steps[activeStep].text2_li2">{{ steps[activeStep].text2_li2 }}</li>
              <li v-if="steps[activeStep].text2_li3">{{ steps[activeStep].text2_li3 }}</li>

              <!-- info / warning badges -->
              <li v-if="steps[activeStep].text2_nb" class="list-none">
                <span class="inline-block text-[12px] sm:text-xs px-2 py-0.5 rounded-full
                     bg-blue-500/15 text-blue-200 ring-1 ring-inset ring-blue-400/30">
                  {{ steps[activeStep].text2_nb }}
                </span>
              </li>
              <li v-if="steps[activeStep].text2_warning" class="list-none">
                <span class="inline-block text-[12px] sm:text-xs px-2 py-0.5 rounded-full
                     bg-rose-500/15 text-rose-200 ring-1 ring-inset ring-rose-400/30">
                  {{ steps[activeStep].text2_warning }}
                </span>
              </li>

              <li v-if="steps[activeStep].text2_li4">{{ steps[activeStep].text2_li4 }}</li>
              <li v-if="steps[activeStep].text2_li5">{{ steps[activeStep].text2_li5 }}</li>
              <li v-if="steps[activeStep].text2_li6">{{ steps[activeStep].text2_li6 }}</li>
              <li v-if="steps[activeStep].text2_li7">{{ steps[activeStep].text2_li7 }}</li>
              <li v-if="steps[activeStep].text2_li8">{{ steps[activeStep].text2_li8 }}</li>
            </ul>
          </div>

          <!-- Block 3 -->
          <div v-if="steps[activeStep].subtitle3 || steps[activeStep].text3" class="mt-5 sm:mt-6">
            <h4 v-if="steps[activeStep].subtitle3" class="text-sm sm:text-lg font-semibold mb-2 text-yellow-300">
              {{ steps[activeStep].subtitle3 }}
            </h4>

            <p v-if="steps[activeStep].text3" class="text-gray-200/90 text-sm sm:text-base leading-relaxed">
              {{ steps[activeStep].text3 }}
            </p>

            <ul v-if="steps[activeStep].text3_li1"
              class="mt-2 list-disc pl-5 space-y-1.5 text-sm sm:text-base text-gray-200/90">
              <li v-if="steps[activeStep].text3_li1">
                {{ steps[activeStep].text3_li1 }}
                <p v-if="steps[activeStep].text3_text1" class="mt-1 text-gray-300">{{ steps[activeStep].text3_text1 }}
                </p>
              </li>
              <li v-if="steps[activeStep].text3_li2">
                {{ steps[activeStep].text3_li2 }}
                <p v-if="steps[activeStep].text3_text2" class="mt-1 text-gray-300">{{ steps[activeStep].text3_text2 }}
                </p>
              </li>
              <li v-if="steps[activeStep].text3_li3">
                {{ steps[activeStep].text3_li3 }}
                <p v-if="steps[activeStep].text3_text3" class="mt-1 text-gray-300">{{ steps[activeStep].text3_text3 }}
                </p>
              </li>
              <li v-if="steps[activeStep].text3_nb" class="list-none">
                <span class="inline-block text-[12px] sm:text-xs px-2 py-0.5 rounded-full
                     bg-blue-500/15 text-blue-200 ring-1 ring-inset ring-blue-400/30">
                  {{ steps[activeStep].text3_nb }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Block 4 -->
          <div v-if="steps[activeStep].subtitle4 || steps[activeStep].text4_subText" class="mt-5 sm:mt-6">
            <h4 v-if="steps[activeStep].subtitle4" class="text-sm sm:text-lg font-semibold mb-2 text-yellow-300">
              {{ steps[activeStep].subtitle4 }}
            </h4>

            <ul v-if="steps[activeStep].text4_subText"
              class="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-gray-200/90">
              <li v-if="steps[activeStep].text4_subText">{{ steps[activeStep].text4_subText }}</li>
              <li v-if="steps[activeStep].text4_li1">{{ steps[activeStep].text4_li1 }}</li>
              <li v-if="steps[activeStep].text4_nb" class="list-none">
                <span class="inline-block text-[12px] sm:text-xs px-2 py-0.5 rounded-full
                     bg-blue-500/15 text-blue-200 ring-1 ring-inset ring-blue-400/30">
                  {{ steps[activeStep].text4_nb }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useI18n } from "vue-i18n"

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()

/* ---------- DATA ---------- */
const steps = [
  {
    title: t('instructionsSection.steps.one.title'),
    text: t('instructionsSection.steps.one.text'),
    details: t('instructionsSection.steps.one.details'),
    subtitle1: t('instructionsSection.steps.one.subtitle1'),
    text1SubText1: t('instructionsSection.steps.one.text1.subText1'),
    text1SubText2: t('instructionsSection.steps.one.text1.subText2'),
    subtitle2: t('instructionsSection.steps.one.subtitle2'),
    text2_subTitle1: t('instructionsSection.steps.one.text2.subTitle1'),
    text2_li1: t('instructionsSection.steps.one.text2.li1'),
    text2_li2: t('instructionsSection.steps.one.text2.li2'),
    text2_li3: t('instructionsSection.steps.one.text2.li3'),
    text2_nb: t('instructionsSection.steps.one.text2.NB'),
    text2_warning: t('instructionsSection.steps.one.text2.warning'),
    text2_li4: t('instructionsSection.steps.one.text2.li4'),
    text2_li5: t('instructionsSection.steps.one.text2.li5'),
    text2_li6: t('instructionsSection.steps.one.text2.li6'),
    text2_li7: t('instructionsSection.steps.one.text2.li7'),
    text2_li8: t('instructionsSection.steps.one.text2.li8'),
    subtitle3: t('instructionsSection.steps.one.subtitle3'),
    text3: t('instructionsSection.steps.one.text3'),
    text3_li1: t('instructionsSection.steps.one.ul.li1'),
    text3_text1: t('instructionsSection.steps.one.ul.text1'),
    text3_li2: t('instructionsSection.steps.one.ul.li2'),
    text3_text2: t('instructionsSection.steps.one.ul.text2'),
    text3_li3: t('instructionsSection.steps.one.ul.li3'),
    text3_text3: t('instructionsSection.steps.one.ul.text3'),
    text3_nb: t('instructionsSection.steps.one.ul.NB'),
    subtitle4: t('instructionsSection.steps.one.details'),
    text4_subText: t('instructionsSection.steps.one.text4.subText'),
    text4_li1: t('instructionsSection.steps.one.text4.li1'),
    text4_nb: t('instructionsSection.steps.one.text4.NB'),
    icon: "fa-solid fa-apple-whole",
    color: "#22c55e",
    media: [{ type: "video", src: "/hack.webm", alt: "Grille Apple of Fortune" }]
  },
  {
    title: t('instructionsSection.steps.two.title'),
    text: t('instructionsSection.steps.two.text'),
    details: t('instructionsSection.steps.two.details'),
    icon: "fa-solid fa-ticket",
    color: "#facc15",
    media: [{ type: "video", src: "/inscription.mp4", alt: "Historique de gains" }]
  },
  {
    title: t('instructionsSection.steps.three.title'),
    text: t('instructionsSection.steps.three.text'),
    details: t('instructionsSection.steps.three.details'),
    icon: "fa-solid fa-futbol",
    color: "#3b82f6",
    media: [{ type: "image", src: "/apple-fortune.jpg", alt: "Historique de gains" }]
  },
  {
    title: t('instructionsSection.steps.four.title'),
    text: t('instructionsSection.steps.four.text'),
    details: t('instructionsSection.steps.four.details'),
    icon: "fa-solid fa-trophy",
    color: "#ef4444",
    media: [{ type: "video", src: "/wins.webm", alt: "Historique de gains" }]
  }
]

/* ---------- STATE ---------- */
const activeStep = ref(null)
const currentSlide = ref(0)
const modalEl = ref(null)
const hintEl = ref(null)
const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

/* ---------- MEDIA HELPERS ---------- */
const mediaList = computed(() => {
  if (activeStep.value === null) return []
  const s = steps[activeStep.value]
  return Array.isArray(s.media) ? s.media : []
})

const currentItem = computed(() => mediaList.value[currentSlide.value] || {})

const currentItemProps = computed(() => {
  const item = currentItem.value
  if (!item) return {}
  if (item.type === "video") {
    return { src: item.src, autoplay: true, muted: true, loop: true, playsinline: true, controls: true, preload: "auto" }
  }
  return { src: item.src, alt: item.alt || "illustration", loading: "eager", decoding: "async" }
})

/* ---------- PRELOAD ---------- */
function preloadItem(item) {
  if (!item) return
  if (item.type === "image") {
    const img = new Image()
    img.src = item.src
    img.decoding = "async"
    img.loading = "eager"
  } else if (item.type === "video") {
    const vid = document.createElement("video")
    vid.src = item.src
    vid.preload = "auto"
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

/* ---------- VIDEO HANDLING ---------- */
async function autoPlayIfVideo() {
  await nextTick()
  const el = modalEl.value?.querySelector("video")
  if (!el) return
  try {
    el.muted = true
    el.loop = true
    el.playsInline = true
    el.currentTime = 0
    await el.play()
  } catch { }
}

function pauseOthers(e) {
  const me = e.target
  const vids = modalEl.value?.querySelectorAll("video") || []
  vids.forEach(v => { if (v !== me) v.pause() })
}

function pauseAllVideos() {
  const vids = modalEl.value?.querySelectorAll("video") || []
  vids.forEach(v => v.pause())
}

/* ---------- MODAL CONTROL ---------- */
function openModal(index) {
  activeStep.value = index
  currentSlide.value = 0
  preloadAround(0)
  requestAnimationFrame(() => {
    if (modalEl.value && !prefersReduced) {
      gsap.fromTo(modalEl.value, { opacity: 0, y: 24, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" })
    }
  })
}

function closeModal() {
  pauseAllVideos()
  if (!modalEl.value) { activeStep.value = null; return }
  gsap.to(modalEl.value, { opacity: 0, y: 16, scale: 0.98, duration: 0.16, ease: "power1.inOut", onComplete: () => activeStep.value = null })
}

function nextSlide() {
  if (activeStep.value === null || !mediaList.value.length) return
  pauseAllVideos()
  const next = (currentSlide.value + 1) % mediaList.value.length
  currentSlide.value = next
  preloadAround(next)
}

function prevSlide() {
  if (activeStep.value === null || !mediaList.value.length) return
  pauseAllVideos()
  const len = mediaList.value.length
  const prev = (currentSlide.value - 1 + len) % len
  currentSlide.value = prev
  preloadAround(prev)
}

/* ---------- MOBILE SWIPE ---------- */
let startX = 0, startY = 0
function onTouchStart(e) { const t = e.changedTouches?.[0]; if (!t) return; startX = t.clientX; startY = t.clientY }
function onTouchEnd(e) { 
  const t = e.changedTouches?.[0]; if (!t) return
  const dx = t.clientX - startX, dy = t.clientY - startY
  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) dx < 0 ? nextSlide() : prevSlide()
}

/* ---------- WATCHERS ---------- */
watch([activeStep, currentSlide], async () => { await autoPlayIfVideo() })

/* ---------- GSAP ANIMATIONS ---------- */
onMounted(() => {
  if (prefersReduced) return

  if (hintEl.value) {
    gsap.to(hintEl.value, { scrollTrigger: { trigger: "#instructions", start: "top 80%" }, opacity: 1, y: 0, duration: 7.6, ease: "power2.out" })
  }

  gsap.utils.toArray(".step").forEach((step, i) => {
    gsap.from(step, { scrollTrigger: { trigger: step, start: "top 82%", toggleActions: "play none none reverse" }, opacity: 1, y: 44, filter: "blur(8px)", scale: 0.98, duration: 0.6, delay: i * 0.08, ease: "power3.out", onComplete: () => gsap.to(step, { filter: "blur(0px)", duration: 0.15 }) })
  })

  gsap.fromTo(".timeline-bar", { scaleX: 0 }, { scrollTrigger: { trigger: ".timeline", start: "top 80%", end: "bottom 70%", scrub: true }, scaleX: 1, ease: "none" })

  window.addEventListener("touchstart", onTouchStart, { passive: true })
  window.addEventListener("touchend", onTouchEnd, { passive: true })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(st => st.kill())
  window.removeEventListener("touchstart", onTouchStart)
  window.removeEventListener("touchend", onTouchEnd)
})
</script>

<style scoped>
@keyframes bgShift {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

.animate-bgShift {
  background: linear-gradient(120deg, #050505 0%, #0b0b0c 40%, #020202 100%);
  background-size: 200% 200%;
  animation: bgShift 18s linear infinite;
}

.gold-dot {
  position: absolute;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, rgba(255, 200, 80, 0.9), rgba(255, 140, 40, 0.35), transparent 70%);
  filter: blur(1px);
  opacity: 0.85;
  will-change: transform, opacity;
}

/* transition plus rapide */
.fadeFast-enter-active,
.fadeFast-leave-active {
  transition: opacity .12s ease
}

.fadeFast-enter-from,
.fadeFast-leave-to {
  opacity: 0
}

/* hint */
.step-hint {
  animation: hintFloat 1.6s ease-in-out infinite
}

@keyframes hintFloat {

  0%,
  100% {
    transform: translateY(0) rotate(-6deg)
  }

  50% {
    transform: translateY(-2px) rotate(0deg)
  }
}
</style>

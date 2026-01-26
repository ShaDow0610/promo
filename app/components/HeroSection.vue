<template>
  <section
    class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0c] text-white"
    :aria-label="t('heroSection.aria.heroLabel', { brand: t('heroSection.brand') })">
    <!-- Fond (inchangé visuellement) -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 bg-gradient-to-b from-black via-[#0e0e11] to-black opacity-100"></div>
      <div
        class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_40%,rgba(255,200,80,0.25),transparent_70%)]">
      </div>
      <div
        class="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]">
      </div>
      <div
        class="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0))]">
      </div>
    </div>

    <!-- Sélecteur langue -->
    <div ref="langRef" class="hidden absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 text-gray-300">
      <i class="fa-solid fa-globe text-sm" aria-hidden="true"></i>
      <label class="sr-only" for="lang">{{ t('heroSection.aria.langSelect') }}</label>
      <select id="lang"
        class="bg-black/30 backdrop-blur border border-gray-700/70 text-xs sm:text-sm rounded-lg px-2 py-1 focus:outline-none focus:border-yellow-400/80"
        aria-label="Choix de langue" :value="locale" @change="change($event.target.value)">
        <option value="fr">{{ t('heroSection.lang.fr') }}</option>
        <option value="en">{{ t('heroSection.lang.en') }}</option>
        <option value="es">{{ t('heroSection.lang.es') }}</option>
        <option value="ru">{{ t('heroSection.lang.ru') }}</option>
        <option value="ae">{{ t('heroSection.lang.ar') }}</option>
        <option value="az">{{ t('heroSection.lang.az') }}</option>
        <option value="in">{{ t('heroSection.lang.hi') }}</option>
        <option value="so">{{ t('heroSection.lang.so') }}</option>
        <option value="tr">{{ t('heroSection.lang.tr') }}</option>
        <option value="pt">{{ t('heroSection.lang.pt') }}</option>
      </select>
    </div>

    <!-- Contenu -->
    <div class="relative z-10 w-full max-w-6xl px-5 sm:px-8 text-center">
      <!-- Marqueur -->
      <div
        class="mx-auto mb-4 sm:mb-6 w-max px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-[10px] sm:text-xs tracking-widest text-yellow-300/90">
        {{ t('heroSection.hero.marker') }}
      </div>

      <!-- Titre -->
      <h1 ref="titleRef"
        class="font-display text-[34px] leading-[1.05] sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] drop-shadow-[0_6px_18px_rgba(255,215,100,.18)]">
        {{ t('heroSection.aria.heroLabel') }} <span class="whitespace-nowrap">{{ t('heroSection.brand') }}</span>
      </h1>

      <!-- Sous-texte -->
      <p ref="subtitleRef" class="mt-3 sm:mt-4 max-w-2xl mx-auto text-[13px] sm:text-base text-gray-300">
        {{ t('heroSection.hero.subtitleBefore') }}
        <span class="text-yellow-300"> {{ t('heroSection.hero.subtitlePromo') }} </span>
        {{ t('heroSection.hero.subtitleMiddle') }}
        <span class="text-yellow-300"> {{ t('heroSection.hero.subtitleInstructions') }} </span>
        {{ t('heroSection.hero.subtitleAfter') }}
      </p>

      <!-- Boutons -->
      <div class="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <!-- CTA principal -->
        <NuxtLink :to="localePath('/hacks')" :ref="(el) => setBtnRef(el, 0)" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-bold
                 bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A]
                 text-black shadow-[0_8px_24px_rgba(255,210,90,0.25)]
                 ring-1 ring-yellow-500/40 hover:brightness-105 active:brightness-95 transition">
          <i class="fa-solid fa-rocket mr-2" aria-hidden="true"></i>{{ t('heroSection.buttons.ctaPrimary') }}
        </NuxtLink>

        <!-- Boutons secondaires -->
        <button :ref="(el) => setBtnRef(el, 1)" @click="scrollTo('instructions')" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold
                 bg-black/50 backdrop-blur border border-yellow-500/30 text-yellow-300
                 hover:bg-yellow-500/10 hover:border-yellow-400/60 hover:text-yellow-200 transition">
          <i class="fa-solid fa-book-open mr-2" aria-hidden="true"></i> {{ t('heroSection.buttons.instructions') }}
        </button>

        <button :ref="(el) => setBtnRef(el, 2)" @click="scrollTo('results')" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold
                 bg-black/50 backdrop-blur border border-yellow-500/30 text-yellow-300
                 hover:bg-yellow-500/10 hover:border-yellow-400/60 hover:text-yellow-200 transition">
          <i class="fa-solid fa-chart-line mr-2" aria-hidden="true"></i> {{ t('heroSection.buttons.results') }}
        </button>

        <!-- Bouton 4 — Ouvre le modal (scrollTo retiré) -->
        <button :ref="(el) => setBtnRef(el, 3)" @click="openSignupModal" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold
                 bg-black/50 backdrop-blur border border-yellow-500/30 text-yellow-300
                 hover:bg-yellow-500/10 hover:border-yellow-400/60 hover:text-yellow-200 transition">
          <i class="fa-solid fa-user-plus mr-2" aria-hidden="true"></i> {{ t('heroSection.buttons.bookmakers') }}
        </button>
      </div>

      <!-- Statistiques -->
      <div class="mt-7 sm:mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div
          class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">
            {{ t('heroSection.stats.countries.label') }}
          </div>
          <div class="mt-1 text-lg sm:text-2xl font-extrabold text-yellow-300">
            {{ t('heroSection.stats.countries.value') }}
          </div>
        </div>
        <div
          class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">
            {{ t('heroSection.stats.deposits.label') }}
          </div>
          <div class="mt-1 text-lg sm:text-2xl font-extrabold text-yellow-300">
            {{ t('heroSection.stats.deposits.value') }}
          </div>
        </div>
        <div
          class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">
            {{ t('heroSection.stats.players.label') }}
          </div>
          <div class="mt-1 text-lg sm:text-2xl font-extrabold text-yellow-300">
            {{ t('heroSection.stats.players.value') }}
          </div>
        </div>
        <div
          class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">
            {{ t('heroSection.stats.success.label') }}
          </div>
          <div class="mt-1 text-lg sm:text-2xl font-extrabold text-yellow-300">
            {{ t('heroSection.stats.success.value') }}
          </div>
        </div>
      </div>
    </div>

    <!-- ========= MODAL CRÉATION COMPTE / PROMO ========= -->
    <div v-if="showSignup"
      class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
      @click.self="closeSignupModal">
      <div ref="signupModalEl"
        class="bg-[#0d0d0e] text-white w-full max-w-screen-md md:max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        role="dialog" aria-label="Créer votre compte officiel">
        <!-- Header -->
        <div
          class="flex items-center justify-between px-4 sm:px-5 py-3 bg-white/5 backdrop-blur border-b border-white/10">
          <div class="flex items-center gap-3">
            <div
              class="w-9 h-9 rounded-lg bg-yellow-500/15 border border-yellow-400/30 flex items-center justify-center text-yellow-300">
              <i class="fa-solid fa-id-card"></i>
            </div>
            <div>
              <p class="font-semibold text-lg leading-tight">
                {{ t('heroSection.modal.part1.title') }}
              </p>
              <p class="text-md text-gray-300">
                {{ t('heroSection.modal.part1.reason') }}
              </p>
            </div>
          </div>
          <button @click="closeSignupModal" class="p-2 text-white bg-black/40 hover:bg-black/60 rounded-full"
            aria-label="Fermer">
            ✕
          </button>
        </div>

        <!-- Body (scrollable) -->
        <div class="max-h-[78vh] overflow-y-auto">
          <!-- PART 1 : raisons -->
          <div class="p-4 sm:p-6">
            <ul class="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-gray-200">
              <li>{{ t('heroSection.modal.part1.arg1') }}</li>
              <li>{{ t('heroSection.modal.part1.arg2') }}</li>
              <li>{{ t('heroSection.modal.part1.arg3') }}</li>
              <li>{{ t('heroSection.modal.part1.arg4') }}</li>
              <li>{{ t('heroSection.modal.part1.arg5') }}</li>
            </ul>
          </div>

          <!-- Illustration GIF -->
          <div class="bg-black">
            <div class="h-[38vh] sm:h-[46vh] md:h-[52vh] flex items-center justify-center">
              <NuxtImage format="webp" lazy v-if="modalContent.gifSrc" :src="modalContent.gifSrc"
                :alt="t('heroSection.modal.part1.title')"
                class="w-full h-full object-contain select-none" loading="eager" decoding="async" />
              <div v-else class="text-white/80 text-sm p-4">Aucun GIF fourni</div>
            </div>
          </div>

          <!-- PART 2 : texte + warning -->
          <div class="p-4 sm:p-6">
            <p class="text-gray-200 text-sm sm:text-base">
              {{ t('heroSection.modal.part2.title') }}
            </p>
            <p
              class="mt-2 text-[13px] sm:text-sm text-red-200 bg-red-700/25 ring-1 ring-red-500/30 inline-block px-2 py-1 rounded">
              {{ t('heroSection.modal.part2.warning') }}
            </p>
          </div>

          <!-- CARTE PROMO + BOUTONS BOOKMAKERS -->
          <div class="px-4 sm:px-6 pb-4 sm:pb-6">
            <div
              class="rounded-xl border border-yellow-500/30 bg-gradient-to-r from-[#1c1c19] via-[#12100a] to-[#120e01] text-black p-4 sm:p-5 shadow-[0_8px_24px_rgba(255,210,90,0.15)]">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p class="text-lg flex text-white/70">
                    <span class="mt-1 flex flex-wrap items-center gap-3">{{ t('heroSection.modal.pm') }}</span>
                    <!-- Template -->
                    <span class="mt-1 flex flex-wrap items-center gap-3">
                      <button type="button" @click="copyPromo('GLE44')" @touchend.prevent="copyPromo('GLE44')" class="relative inline-flex items-center gap-1 px-4 py-2 rounded-full
                        bg-yellow-500/15 text-black-800 border border-yellow-500/30
                       text-lg font-semibold hover:brightness-110 active:scale-[.98] transition"
                        aria-label="Copier le code promo GLE44">
                        <i class="fa-regular fa-copy"></i>
                        GLE44
                        <!-- feedback -->
                        <span v-if="copied" class="absolute -top-7 right-0 text-xs px-2 py-0.5 rounded
                           bg-black/80 text-white shadow" aria-live="polite">
                          Copié ✓
                        </span>
                      </button>
                    </span>

                  </p>
                </div>
                <div class="text-xs text-white/70">
                  {{ t('heroSection.modal.notice') }}
                </div>
              </div>

              <!-- Boutons plateformes -->
              <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                <a :href="bookmakersLinks.x1bet" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-lg px-3 py-2 font-semibold
                     bg-blue-600/70 text-white ring-1 ring-white/15 hover:bg-blue-600/80 transition">
                  1xBet
                </a>
                <a :href="bookmakersLinks.melbet" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-lg px-3 py-2 font-semibold
                     bg-yellow-600/70 text-white ring-1 ring-white/15 hover:bg-yellow-600/80 transition">
                  Melbet
                </a>
                <a :href="bookmakersLinks.betwinner" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-lg px-3 py-2 font-semibold
                     bg-green-600/70 text-white ring-1 ring-white/15 hover:bg-green-600/80 transition">
                  Betwinner
                </a>
                <a :href="bookmakersLinks.win1" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-lg px-3 py-2 font-semibold
                     bg-black/70 text-white ring-1 ring-white/15 hover:bg-black/80 transition">
                  1win
                </a>
              </div>
            </div>

            <!-- PART 3 : NB -->
            <p class="mt-3 text-[12px] sm:text-sm text-gray-300">
              {{ t('heroSection.modal.part3.nb') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- ========= /MODAL ========= -->
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue"
const { $gsap } = useNuxtApp()
import { useI18n } from "vue-i18n"
import VanillaTilt from "vanilla-tilt"
import { setLocaleAsync } from "../i18n"
const localePath = useLocalePath()

const titleRef = ref(null)
const subtitleRef = ref(null)
const langRef = ref(null)
const btnRefs = ref([])

const { t, locale } = useI18n({ useScope: 'global' })
const copied = ref(false)

// Côté client uniquement
const isTouch = typeof window !== "undefined" ? window.matchMedia("(pointer: coarse)").matches : false
const prefersReduced = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false

async function copyPromo(code) {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(code)
    } else if (typeof document !== "undefined") {
      const ta = document.createElement("textarea")
      ta.value = code
      ta.setAttribute("readonly", "")
      ta.style.position = "fixed"
      ta.style.top = "-9999px"
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
    }
    copied.value = true
    setTimeout(() => { copied.value = false }, 1400)
  } catch (e) {
    alert("Copie impossible automatiquement. Code : " + code)
  }
}

// ===== Langues =====
function change(next) { setLocaleAsync(next) }
function setBtnRef(el, i) { if (el) btnRefs.value[i] = el }
function scrollTo(id) {
  if (typeof document !== "undefined") {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

// ===== VanillaTilt =====
let tiltInstances = []

// ===== Modal Signup =====
const showSignup = ref(false)
const signupModalEl = ref(null)
const modalContent = { /* ton JSON inchangé */ }
const bookmakersLinks = { /* tes URLs */ }

function openSignupModal() {
  showSignup.value = true
  nextTick(() => {
    if (!prefersReduced && signupModalEl.value) {
      $gsap.fromTo(signupModalEl.value, 
        { y: 20, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" }
      )
    }
    signupModalEl.value?.querySelector("video")?.play?.()
  })
}

function closeSignupModal() {
  if (!signupModalEl.value || prefersReduced) { showSignup.value = false; return }
  $gsap.to(signupModalEl.value, {
    y: 12, opacity: 0, scale: 0.985, duration: 0.18, ease: "power1.inOut",
    onComplete: () => (showSignup.value = false)
  })
}

// ===== Animations $GSAP et Tilt =====
onMounted(async () => {
  await nextTick()
  if (prefersReduced || !$gsap) return

  if (langRef.value) $gsap.from(langRef.value, { y: -24, opacity: 0, duration: 0.9, ease: "power3.out" })
  if (titleRef.value) $gsap.from(titleRef.value, { scale: 0.92, opacity: 0, duration: 1.1, ease: "power3.out" })
  if (subtitleRef.value) $gsap.from(subtitleRef.value, { y: 12, opacity: 0, delay: 0.15, duration: 0.7, ease: "power2.out" })

  const targets = btnRefs.value.filter(Boolean)
  if (targets.length) {
    $gsap.from(targets, {
      y: 18, opacity: 1, delay: 0.25, duration: 0.7, ease: "back.out(1.6)", stagger: 0.12
    })

    if (!isTouch) {
      tiltInstances = targets.map(el => {
        VanillaTilt.init(el, {
          max: 14, speed: 350, scale: 1.02, glare: true, "max-glare": 0.25, perspective: 900
        })
        return el.vanillaTilt
      })
    }
  }
})

onBeforeUnmount(() => {
  tiltInstances.forEach(t => t?.destroy?.())
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=Manrope:wght@400;700&display=swap');

.font-display {
  font-family: 'Orbitron', system-ui, sans-serif;
}

body {
  font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif;
}

/* focus visible */
button:focus-visible,
select:focus-visible {
  outline: 2px solid rgba(247, 215, 116, 0.7);
  outline-offset: 2px;
}
/* transition media rapide */
.fadeFast-enter-active,
.fadeFast-leave-active {
  transition: opacity .12s ease
}

.fadeFast-enter-from,
.fadeFast-leave-to {
  opacity: 0
}
</style>
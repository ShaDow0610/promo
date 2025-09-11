<template>
  <section
    id="instructions"
    class="relative text-white py-16 sm:py-20 overflow-hidden"
    aria-label="Comment ça marche"
  >
    <!-- BACKGROUND (cohérent avec la section 1) -->
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <!-- couche 1 : base gradient animé -->
      <div class="absolute inset-0 animate-bgShift"></div>
      <!-- couche 2 : halo doré subtil (haut-centre) -->
      <div class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]"></div>
      <!-- couche 3 : grille douce -->
      <div class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <!-- particules (très subtiles) -->
      <div ref="particlesEl" class="absolute inset-0"></div>

      <!-- Seam TOP (fondu depuis la section précédente) -->
      <div class="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#0b0b0c]"></div>
      <!-- Seam BOTTOM (fondu vers la section suivante) -->
      <div class="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#050505]"></div>
    </div>

    <div class="container mx-auto px-5 sm:px-6 relative">
      <!-- Hint -->
      <div ref="hintEl"
           class="pointer-events-none absolute -top-6 right-4 opacity-0 translate-y-2 select-none">
        <span class="inline-flex items-center gap-2 text-xs md:text-sm bg-white/10 border border-white/15
                     rounded-full px-3 py-1 text-yellow-300 backdrop-blur">
          <i class="fa-solid fa-hand-pointer"></i>
          <span class="hidden sm:inline">Clique sur une icône pour voir les détails</span>
          <span class="sm:hidden">Tape pour voir les détails</span>
        </span>
      </div>

      <!-- Titre -->
      <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-10 sm:mb-12">
        Comment ça marche ?
      </h2>

      <!-- Timeline -->
      <div class="timeline relative flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        <!-- barre timeline (desktop uniquement) -->
        <span
          class="timeline-bar hidden md:block absolute top-1/2 left-[6%] right-[6%] h-1
                 bg-gradient-to-r from-green-500 via-yellow-400 via-blue-500 to-red-500
                 scale-x-0 origin-left rounded"
        ></span>

        <!-- Étapes -->
        <div v-for="(s, index) in steps"
             :key="s.title"
             class="step group relative flex flex-col items-center text-center max-w-xs mx-auto
                    cursor-pointer focus:outline-none"
             role="button"
             tabindex="0"
             @click="openModal(index)"
             @keyup.enter.stop.prevent="openModal(index)"
             @keyup.space.stop.prevent="openModal(index)"
        >
          <!-- Halo de focus -->
          <span class="absolute -inset-2 rounded-2xl ring-0 group-focus:ring-2 ring-yellow-400/40 transition"></span>

          <!-- Icône principale -->
          <div class="relative">
            <i :class="s.icon"
               :style="{ color: s.color }"
               class="text-5xl mb-4 drop-shadow-[0_8px_20px_rgba(250,200,80,0.08)]"></i>

            <!-- Main indicatrice -->
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
      <div ref="modalEl"
           class="bg-white text-black rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden">
        <!-- Close -->
        <button @click="closeModal"
                class="absolute top-2 right-2 p-2 text-gray-600 hover:text-black z-10"
                aria-label="Fermer">
          ✕
        </button>

        <!-- Carousel -->
        <div class="relative select-none">
          <div class="overflow-hidden h-64 sm:h-72 flex items-center justify-center">
            <img :src="steps[activeStep].images[currentSlide]"
                 class="w-full h-full object-cover transition-all duration-500"
                 alt="illustration"/>
          </div>

          <!-- nav -->
          <button @click="prevSlide"
                  class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
            ‹
          </button>
          <button @click="nextSlide"
                  class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
            ›
          </button>

          <!-- indicateur swipe (mobile) -->
          <div class="absolute bottom-2 inset-x-0 flex justify-center sm:hidden">
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-black/35 text-white">
              Swipe ◀ ▶
            </span>
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
import { ref, onMounted, onBeforeUnmount } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

// --- DATA (même contenu) ---
const steps = [
  {
    title: "Crée ton compte",
    text: "Inscris-toi rapidement chez nos bookmakers partenaires.",
    details:
      "Crée ton compte en quelques clics. Une fois validé, tu accèdes aux bonus exclusifs.",
    icon: "fas fa-user",
    color: "#22c55e",
    images: ["/img/step1-1.jpg", "/img/step1-2.jpg"],
  },
  {
    title: "Entre ton code promo",
    text: "Ajoute notre code pour débloquer le bonus.",
    details:
      "Entre le code promo pour activer les offres réservées à nos membres.",
    icon: "fas fa-gift",
    color: "#facc15",
    images: ["/img/step2-1.jpg", "/img/step2-2.jpg"],
  },
  {
    title: "Dépose ton argent",
    text: "Recharge ton compte et prépare-toi à jouer.",
    details:
      "Dépose via des moyens sécurisés. Le solde est crédité instantanément.",
    icon: "fas fa-wallet",
    color: "#3b82f6",
    images: ["/img/step3-1.jpg", "/img/step3-2.jpg"],
  },
  {
    title: "Joue & gagne",
    text: "Profite de tes victoires et encaisse tes gains.",
    details:
      "Joue responsable, encaisse rapidement, et maximise ton bonus.",
    icon: "fas fa-trophy",
    color: "#ef4444",
    images: ["/img/step4-1.jpg", "/img/step4-2.jpg"],
  },
]

// --- STATE ---
const activeStep = ref(null)
const currentSlide = ref(0)
const modalEl = ref(null)
const hintEl = ref(null)
const particlesEl = ref(null)

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

// --- Modal controls ---
const openModal = (index) => {
  activeStep.value = index
  currentSlide.value = 0

  requestAnimationFrame(() => {
    if (modalEl.value) {
      gsap.fromTo(
        modalEl.value,
        { opacity: 0, y: 24, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power2.out" }
      )
    }
  })
}
const closeModal = () => {
  if (!modalEl.value) { activeStep.value = null; return }
  gsap.to(modalEl.value, {
    opacity: 0, y: 16, scale: 0.98, duration: 0.18, ease: "power1.inOut",
    onComplete: () => (activeStep.value = null),
  })
}
const nextSlide = () => {
  if (activeStep.value !== null) {
    currentSlide.value =
      (currentSlide.value + 1) % steps[activeStep.value].images.length
  }
}
const prevSlide = () => {
  if (activeStep.value !== null) {
    const len = steps[activeStep.value].images.length
    currentSlide.value = (currentSlide.value - 1 + len) % len
  }
}

// --- swipe (mobile) ---
let startX = 0
let startY = 0
const onTouchStart = (e) => {
  const t = e.changedTouches?.[0]
  if (!t) return
  startX = t.clientX
  startY = t.clientY
}
const onTouchEnd = (e) => {
  const t = e.changedTouches?.[0]
  if (!t) return
  const dx = t.clientX - startX
  const dy = t.clientY - startY
  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
    dx < 0 ? nextSlide() : prevSlide()
  }
}

onMounted(() => {
  // Particules dorées (légeres)
  if (particlesEl.value && !prefersReduced) {
    const host = particlesEl.value
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 10 : 18
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
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 1.5,
      })
    }
  }

  if (!prefersReduced) {
    // Hint à l’entrée
    if (hintEl.value) {
      gsap.to(hintEl.value, {
        scrollTrigger: { trigger: "#instructions", start: "top 80%" },
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        onComplete: () => gsap.to(hintEl.value, { opacity: 0, duration: 0.6, delay: 3 })
      })
    }

    // Étapes : reveal + micro interactions
    gsap.utils.toArray(".step").forEach((step, i) => {
      gsap.from(step, {
        scrollTrigger: { trigger: step, start: "top 82%", toggleActions: "play none none reverse" },
        opacity: 0, y: 44, filter: "blur(8px)", scale: 0.98,
        duration: 0.7, delay: i * 0.08, ease: "power3.out",
        onComplete: () => gsap.to(step, { filter: "blur(0px)", duration: 0.2 })
      })

      const icon = step.querySelector("i")
      const hand = step.querySelector(".step-hint")
      if (icon) {
        gsap.from(icon, {
          scrollTrigger: { trigger: step, start: "top 82%" },
          scale: 0.5, opacity: 0, ease: "bounce.out", duration: 0.6, delay: 0.2
        })
      }
      if (hand) {
        gsap.to(hand, {
          scrollTrigger: { trigger: step, start: "top 82%" },
          opacity: 1, y: -2, duration: 0.4, ease: "power2.out",
          repeat: 6, yoyo: true, delay: 0.4 + i * 0.1,
          onComplete: () => gsap.to(hand, { opacity: 0, duration: 0.4 })
        })
      }

      // Hover feedback
      step.addEventListener("mouseenter", () => {
        gsap.to(step, {
          scale: 1.04,
          filter: "drop-shadow(0 12px 28px rgba(250,200,80,0.10))",
          duration: 0.18, ease: "power2.out",
        })
      })
      step.addEventListener("mouseleave", () => {
        gsap.to(step, {
          scale: 1,
          filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
          duration: 0.2, ease: "power2.out",
        })
      })

      // Pulse ring unique
      const ring = step.querySelector("span")
      if (ring) {
        gsap.to(ring, {
          scrollTrigger: { trigger: step, start: "top 78%" },
          boxShadow: "0 0 0 8px rgba(250,200,80,0.0)",
          duration: 1.2, ease: "power1.out", repeat: 1,
          onStart: () => ring.classList.add("ring-2"),
          onComplete: () => ring.classList.remove("ring-2"),
        })
      }
    })

    // timeline bar
    gsap.fromTo(
      ".timeline-bar",
      { scaleX: 0 },
      {
        scrollTrigger: { trigger: ".timeline", start: "top 80%", end: "bottom 70%", scrub: true },
        scaleX: 1, ease: "none"
      }
    )
  }

  // swipe listeners (sur le document pour simplicité)
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
/* gradient animé – identique à la section 1 pour cohérence */
@keyframes bgShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-bgShift {
  background: linear-gradient(120deg, #050505 0%, #0b0b0c 40%, #020202 100%);
  background-size: 200% 200%;
  animation: bgShift 18s linear infinite;
}

/* particules dorées */
.gold-dot {
  position: absolute;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, rgba(255,200,80,0.9), rgba(255,140,40,0.35), transparent 70%);
  filter: blur(1px);
  opacity: 0.85;
  will-change: transform, opacity;
}

/* hint hand animation */
.step-hint { animation: hintFloat 1.6s ease-in-out infinite; }
@keyframes hintFloat {
  0%, 100% { transform: translateY(0) rotate(-6deg); }
  50% { transform: translateY(-2px) rotate(0deg); }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger" // ← named import is safest
gsap.registerPlugin(ScrollTrigger)

const particlesContainer = ref(null)
let particleEls = []

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

// Demo data (unchanged)
const bookmakers = [
  { name: "Melbet", logo: "/logo.png", code: "Viva2025", note: "Bonus jusqu’à 200%" },
  { name: "1xbet",  logo: "/logo.png", code: "Viva2025", note: "100% sur le premier dépôt" },
  { name: "1win",   logo: "/logo.png", code: "Viva2025", note: "Jusqu’à 500$ de bonus" },
]
const reasons = [
  { icon: "fa-solid fa-gift",       title: "Bonus musclés",   text: "Codes promo exclusifs pour maximiser le premier dépôt." },
  { icon: "fa-solid fa-shield",     title: "Fiabilité",       text: "Plateformes réputées, sécurité et paiements rapides." },
  { icon: "fa-solid fa-chart-line", title: "Gains optimisés", text: "Promos régulières, cashbacks, cotes compétitives." },
]

onMounted(() => {
  // Particules dorées (identique, juste un petit guard)
  const host = particlesContainer.value
  if (host && !prefersReduced) {
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 12 : Math.min(Math.floor(window.innerWidth / 80), 28)

    for (let i = 0; i < count; i++) {
      const d = document.createElement("div")
      d.className = "gold-dot"
      d.style.left = `${Math.random() * 100}%`
      d.style.top = `${10 + Math.random() * 80}%`
      const size = 4 + Math.random() * (isMobile ? 6 : 8)
      d.style.width = `${size}px`
      d.style.height = `${size}px`
      host.appendChild(d)
      particleEls.push(d)

      gsap.to(d, {
        y: `-=${10 + Math.random() * 30}`,
        x: `+=${(Math.random() - 0.5) * 30}`,
        opacity: 0.6 + Math.random() * 0.4,
        duration: 4 + Math.random() * 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2,
      })
    }
  }

  if (prefersReduced) return

  // ✅ FIX: use toArray without generics and store result first
  const logoCards = gsap.utils.toArray(".bookmaker")
  logoCards.forEach((card) => {
    const reveal = (dir = "down") => {
      gsap.fromTo(
        card,
        { opacity: 0, y: dir === "down" ? 28 : -28, filter: "blur(8px)", scale: 0.96 },
        { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 0.6, ease: "power3.out" }
      )
    }
    const disperse = () => {
      gsap.to(card, { opacity: 0.0, y: 36, scale: 0.94, duration: 0.35, ease: "power2.inOut" })
    }

    ScrollTrigger.create({
      trigger: card,
      start: "top 85%",
      end: "bottom 40%",
      onEnter: () => reveal("down"),
      onEnterBack: () => reveal("up"),
      onLeave: disperse,
      onLeaveBack: disperse,
    })
  })

  const reasonCards = gsap.utils.toArray(".reason")
  reasonCards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" },
      opacity: 0,
      y: 22,
      filter: "blur(6px)",
      scale: 0.98,
      duration: 0.5,
      ease: "power2.out",
      delay: i * 0.06,
      onComplete: () => gsap.to(card, { filter: "blur(0px)", duration: 0.2 }),
    })
  })
})

onBeforeUnmount(() => {
  particleEls.forEach((p) => p.remove())
  particleEls = []
  ScrollTrigger.getAll().forEach((t) => t.kill())
})
</script>


<template>
  <section id="bookmakers" class="relative w-full text-white overflow-hidden py-14 sm:py-16">
    <!-- BACKGROUND : cohérent avec la section 1 -->
    <div class="absolute inset-0 -z-10">
      <!-- plume haute qui fond la section 1 vers celle-ci -->
      <div class="absolute top-0 inset-x-0 h-24 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85),rgba(0,0,0,0))]"></div>

      <!-- même famille de tons + animation lente -->
      <div class="absolute inset-0 bg-gradient-to-b from-black via-[#0e0e11] to-black"></div>
      <div class="absolute inset-0 opacity-20 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.20),transparent_70%)]"></div>
      <div class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <div class="absolute inset-0 animate-bgShift"></div>

      <!-- particules -->
      <div ref="particlesContainer" class="absolute inset-0 pointer-events-none"></div>

      <!-- plume basse vers la section suivante -->
      <div class="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0))]"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <header class="text-center mb-8 sm:mb-12">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          ⚡ Pourquoi ces <span class="text-yellow-400">bookmakers</span> ?
        </h2>
        <p class="mt-3 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Sélectionnés pour leurs <span class="text-yellow-300">bonus</span>,
          leur <span class="text-yellow-300">fiabilité</span> et des
          <span class="text-yellow-300">gains</span> mieux valorisés.
        </p>
      </header>

      <!-- Logos grid (mobile-first) -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-14">
        <article
          v-for="b in bookmakers"
          :key="b.name"
          class="bookmaker bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center shadow-xl backdrop-blur-[2px]"
        >
          <img :src="b.logo" :alt="b.name" class="h-12 sm:h-14 md:h-16 mx-auto mb-3 sm:mb-4 object-contain" />
          <h3 class="text-lg sm:text-xl font-bold">{{ b.name }}</h3>
          <p class="text-xs sm:text-sm text-gray-300 mt-1">{{ b.note }}</p>

          <div
            class="mt-3 inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-300 border border-yellow-400/30
                   px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
          >
            <i class="fa-solid fa-ticket"></i>
            CODE : {{ b.code }}
          </div>
        </article>
      </div>

      <!-- Reasons : carrousel horizontal sur mobile, grille à partir de md -->
      <div class="md:hidden mb-2 text-center text-[11px] text-gray-400 select-none">Glisse →</div>
      <div class="md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory no-scrollbar mb-10">
        <div class="flex gap-4">
          <article
            v-for="r in reasons"
            :key="r.title + '-m'"
            class="reason min-w-[78%] snap-center bg-white/5 border border-white/10 rounded-xl p-5"
          >
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-yellow-500/10 text-yellow-300">
                <i :class="r.icon" class="text-lg"></i>
              </div>
              <div>
                <h4 class="text-base font-semibold">{{ r.title }}</h4>
                <p class="text-[13px] text-gray-300 mt-1">{{ r.text }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="hidden md:grid grid-cols-3 gap-6 md:gap-8 mb-4">
        <article
          v-for="r in reasons"
          :key="r.title + '-d'"
          class="reason bg-white/5 border border-white/10 rounded-xl p-6"
        >
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-yellow-500/10 text-yellow-300">
              <i :class="r.icon" class="text-lg"></i>
            </div>
            <div>
              <h4 class="text-lg font-semibold">{{ r.title }}</h4>
              <p class="text-sm text-gray-300 mt-1">{{ r.text }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Anim shift lent pour harmoniser avec la section 1 */
@keyframes bgShift {
  0% { background: linear-gradient(120deg, #050505 0%, #0b0b0c 40%, #020202 100%); background-size: 200% 200%; background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-bgShift { animation: bgShift 18s linear infinite; }

/* Particules */
.gold-dot {
  position: absolute;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, rgba(255,200,80,0.9), rgba(255,120,40,0.45), transparent 70%);
  filter: blur(1px);
  opacity: 0.85;
  will-change: transform, opacity;
}

/* Masquer scrollbars horizontal sur mobile */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>

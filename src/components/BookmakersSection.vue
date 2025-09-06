<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionEl = ref(null);
const logoCards = ref([]);
const reasonCards = ref([]);
const ctaEl = ref(null);

// Data
const bookmakers = [
  { name: "Melbet", logo: "/logo.png", code: "Viva2025", note: "Bonus jusqu’à 200%" },
  { name: "1xbet", logo: "/logo.png", code: "Viva2025", note: "100% sur le premier dépôt" },
  { name: "1win", logo: "/logo.png", code: "Viva2025", note: "Jusqu’à 500$ de bonus" },
];

const reasons = [
  { icon: "fa-solid fa-gift", title: "Bonus musclés", text: "Codes promo exclusifs pour maximiser le premier dépôt." },
  { icon: "fa-solid fa-shield", title: "Fiabilité", text: "Plateformes réputées, sécurité et paiements rapides." },
  { icon: "fa-solid fa-chart-line", title: "Gains optimisés", text: "Promos régulières, cashbacks, cotes compétitives." },
];

// Utilitaire
const setRef = (listRef, el) => {
  if (el) {
    if (!Array.isArray(listRef.value)) listRef.value = [];
    if (!listRef.value.includes(el)) listRef.value.push(el);
  }
};

onMounted(() => {
  // === Bookmakers (logos) ===
  gsap.utils.toArray(".bookmaker").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.1,
      ease: "power2.out",
    });
  });

  // === Reasons (icônes + texte) ===
  gsap.utils.toArray(".reason").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.1,
      ease: "power2.out",
    });

    const icon = card.querySelector("i");
    if (icon) {
      gsap.from(icon, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        scale: 0.5,
        opacity: 0,
        ease: "bounce.out",
        duration: 0.6,
        delay: 0.2,
      });
    }
  });

  // === CTA ===
  if (ctaEl.value) {
    gsap.from(ctaEl.value, {
      scrollTrigger: {
        trigger: ctaEl.value,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
    });
  }

  // === Timeline progress (exemple ligne décorative) ===
  gsap.from(".timeline-line", {
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
  <section
    ref="sectionEl"
    id="bookmakers"
    class="relative w-full py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white"
  >
    <div class="max-w-6xl mx-auto px-6">
      <!-- Titre -->
      <div class="text-center mb-12 timeline relative">
        <h2 class="text-3xl md:text-5xl font-extrabold mb-4">
          ⚡ Pourquoi ces <span class="text-yellow-400">bookmakers</span> ?
        </h2>
        <div class="timeline-line absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-32 bg-yellow-400 origin-left"></div>
        <p class="text-gray-300 max-w-2xl mx-auto mt-4">
          Sélectionnés pour leurs <span class="text-yellow-400">bonus</span>, leur
          <span class="text-yellow-400">fiabilité</span> et des
          <span class="text-yellow-400">gains</span> mieux valorisés.
        </p>
      </div>

      <!-- Logos -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-14">
        <div
          v-for="b in bookmakers"
          :key="b.name"
          class="bookmaker bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center
                 shadow-xl transition duration-300"
        >
          <img :src="b.logo" :alt="b.name" class="h-14 md:h-16 object-contain mb-4 opacity-95" />
          <h3 class="text-xl font-bold tracking-wide">{{ b.name }}</h3>
          <p class="text-sm text-gray-300 mt-1">{{ b.note }}</p>

          <div
            class="mt-4 inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 border border-yellow-400/30
                      px-3 py-1 rounded-full text-sm font-semibold"
          >
            <i class="fa-solid fa-ticket"></i>
            CODE&nbsp;: {{ b.code }}
          </div>
        </div>
      </div>

      <!-- Raisons -->
      <div class="flex flex-col md:flex-row gap-6 justify-center mb-10">
        <div
          v-for="r in reasons"
          :key="r.title"
          class="reason bg-white/5 border border-white/10 rounded-xl p-6 text-center flex-1"
        >
          <div class="flex flex-col items-center gap-3 mb-2">
            <i :class="r.icon" class="text-yellow-400 text-3xl"></i>
            <h4 class="text-lg font-bold">{{ r.title }}</h4>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed">{{ r.text }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div ref="ctaEl" class="flex flex-col items-center gap-4">
        <a
          href="https://t.me/ton_canal"
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold
                 bg-yellow-400 text-black shadow-xl hover:scale-105 transition"
        >
          <i class="fa-brands fa-telegram"></i> Rejoindre le canal Telegram
        </a>
        <p class="text-xs text-gray-400">
          Jouez de façon responsable. 18+. Vérifiez la disponibilité des offres dans votre pays.
        </p>
      </div>
    </div>
  </section>
</template>

<template>
  <section
    id="instructions"
    class="bg-black text-white py-20 relative overflow-hidden"
  >
    <div class="container mx-auto px-6">
      <!-- titre -->
      <h2 class="text-3xl md:text-5xl font-bold text-center mb-6">
        Comment ça marche ?
      </h2>

      <!-- timeline -->
      <div
        class="timeline relative flex flex-col md:flex-row justify-between gap-16 md:gap-8"
      >
        <!-- barre timeline -->
        <span
            class="timeline-bar hidden md:block absolute top-1/2 left-[5%] right-[5%] h-1 bg-gradient-to-r from-green-500 via-yellow-400 via-blue-500 to-red-500 scale-x-0 origin-left"
        ></span>

        <div
          v-for="(s, index) in steps"
          :key="s.title"
          class="step flex flex-col items-center text-center max-w-xs cursor-pointer"
          @click="openModal(index)"
        >
          <i :class="s.icon" :style="{ color: s.color }" class="text-5xl mb-4"></i>
          <h3 class="font-bold text-lg mb-2">{{ s.title }}</h3>
          <p class="text-gray-400">{{ s.text }}</p>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <div
      v-if="activeStep !== null"
      class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
    >
      <div
        class="bg-white text-black rounded-2xl shadow-xl max-w-lg w-full relative overflow-hidden"
      >
        <!-- close -->
        <button
          @click="closeModal"
          class="absolute top-3 right-3 text-gray-600 hover:text-black z-10"
        >
          ✕
        </button>

        <!-- carousel -->
        <div class="relative">
          <div class="overflow-hidden h-64 flex items-center justify-center">
            <img
              :src="steps[activeStep].images[currentSlide]"
              class="w-full h-full object-cover transition-all duration-500"
              alt="illustration"
            />
          </div>

          <!-- nav -->
          <button
            @click="prevSlide"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
          >
            ‹
          </button>
          <button
            @click="nextSlide"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
          >
            ›
          </button>
        </div>

        <!-- text -->
        <div class="p-6">
          <h3 class="font-bold text-xl mb-2">{{ steps[activeStep].title }}</h3>
          <p class="text-gray-700">{{ steps[activeStep].details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

// === DATA ===
const steps = [
  {
    title: "Crée ton compte",
    text: "Inscris-toi rapidement chez nos bookmakers partenaires.",
    details:
      "Tu peux créer ton compte en quelques clics, sans complication. Une fois validé, tu auras accès à tous les bonus.",
    icon: "fas fa-user",
    color: "#22c55e",
    images: ["/img/step1-1.jpg", "/img/step1-2.jpg"],
  },
  {
    title: "Entre ton code promo",
    text: "Ajoute mon code promo exclusif pour débloquer ton bonus.",
    details:
      "Le code promo te donne droit à des bonus exclusifs et des avantages réservés à nos membres.",
    icon: "fas fa-gift",
    color: "#facc15",
    images: ["/img/step2-1.jpg", "/img/step2-2.jpg"],
  },
  {
    title: "Dépose ton argent",
    text: "Recharge ton compte et prépare-toi à jouer.",
    details:
      "Effectue un dépôt sécurisé via les méthodes disponibles. Ton solde sera crédité instantanément.",
    icon: "fas fa-wallet",
    color: "#3b82f6",
    images: ["/img/step3-1.jpg", "/img/step3-2.jpg"],
  },
  {
    title: "Joue & gagne",
    text: "Profite de tes victoires et encaisse tes gains.",
    details:
      "Amuse-toi sur tes jeux favoris, encaisse tes gains rapidement et profite de ton bonus au maximum.",
    icon: "fas fa-trophy",
    color: "#ef4444",
    images: ["/img/step4-1.jpg", "/img/step4-2.jpg"],
  },
];

// === STATE modal ===
const activeStep = ref(null);
const currentSlide = ref(0);

const openModal = (index) => {
  activeStep.value = index;
  currentSlide.value = 0;
};
const closeModal = () => {
  activeStep.value = null;
};
const nextSlide = () => {
  if (activeStep.value !== null) {
    currentSlide.value =
      (currentSlide.value + 1) % steps[activeStep.value].images.length;
  }
};
const prevSlide = () => {
  if (activeStep.value !== null) {
    currentSlide.value =
      (currentSlide.value - 1 + steps[activeStep.value].images.length) %
      steps[activeStep.value].images.length;
  }
};

// === GSAP animations ===
onMounted(() => {
  gsap.utils.toArray(".step").forEach((step, i) => {
    gsap.from(step, {
      scrollTrigger: {
        trigger: step,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.1,
    });

    const icon = step.querySelector("i");
    if (icon) {
      gsap.from(icon, {
        scrollTrigger: {
          trigger: step,
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

  gsap.from(".timeline-bar", {
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
    },
    scaleX: 1,
    ease: "none",
  });
});
</script>

<style scoped>

</style>

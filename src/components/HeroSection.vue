<template>
  <section class="relative w-full h-screen overflow overflow-hidden">

    <!-- Loder ecran noir -->
     <transition name="fade">
      <div v-if="showLoader" class="absolute inset-0 bg-black flex flex-col justify-content-center items-center bg-gray-900 z-50">
        <h1 class="text-yellow-400 text-4xl md:text-6xl font-bold animate-pulse">Chargement...</h1>
      </div>
    </transition>
     <!-- Explosio particules -->
     <transition name="fade">
       <div v-if="showExplosion" ref="explosion" class="relative inset-0 flex justify-center items-center z-40 bg-black">
      </div>
     </transition>
    <!-- hero section -->
     
    <div v-show="!showLoader && !showExplosion" class="relative gap-6 w-full h-screen bg-gradient-to-b from-black via-gray-900 to-green-700 flex flex-col justify-center item-center overflow-hidden">
      <!-- Texte principal -->
      <h1 class="text-white text-5xl md:text-7xl font-bold text-center mb-8 animate-fadeIn">
        Ton match commencec ici.
        <span class="text-yellow-400 block">Obtiens ton bonus exlusif !</span>
      </h1>
      <p class="text-lg md:text-2xl text-gray-300">
        utilise mes code promo pour <span class="text-gray-400">Melbet, 1xbet, 1win</span>
      </p>
      <!-- boutton Cta -->
      <a href="" target="_blank" class="bg-yellow-400 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transform transition-all duration-500 flex item-center gap-3 animate-bounce">
        🔥 rejoindre le canal telegram
        <i class="fas fa-paper-plane"></i>
      </a>
    </div>
    <div ref="floatingObjects" class=" absolute inset-0 pointer-event-none "></div>
  </section>
</template>

<script setup>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const floatingObjects = ref(null);
const explosion = ref(null);
const showLoader =ref(true);
const showExplosion = ref(false)

onMounted(()=>{
  //loader 2 secondes
  setTimeout(()=>{
    showLoader.value = false
    showExplosion.value = true
  
  // explosion animee
  const container = explosion.value
  if (container){
    for (let i = 0; i< 20; i++){
      const particle = document.createElement('div')
      particle.className = "w-4 h-4 md:h-6 bg-yellow-400 rounded-full absolute"
      container.appendChild(particle)
      gsap.fromTo(particle,
        {x: 0, y:0, scale:1,opacity:1},
        {
          x:(Math.random() -0.5) * 600,
          y:(Math.random() -0.5) * 600,
          scale:0,
          opacity:0,
          duration:1.2 + Math.random(),
          ease:'Power3.out'
        }
      )
    }
  }
  // Masquer explosion apre 2s
  setTimeout(()=>{
    showExplosion.value = false
    startFloatingObjects()
  },2000)
},2000)
})
function startFloatingObjects(){
  const parent = floatingObjects.value;
  if (!parent) return
  const icons=[
    "fa-solid fa-futbol",
    "fa-solid fa-basketball",
    "fa-solid fa-volleyball",
    "fa-solid fa-coins",
    "fa-solid fa-fire",
    "fa-solid fa-star",
    "fa-solid fa-bullseye",
    "fa-solid fa-dumbbell",
    "fa-solid fa-dollar-sign",
    "fa-solid fa-trophy",
    "fa-solid fa-heart",
    "fa-solid fa-meal",

  ]
  const colors=[
    "text-red-400",
    "text-green-400",
    "text-yellow-400",
    "text-blue-400",
    "text-purple-400",
    "text-pink-400",
    "text-orange-400",
  ]
  //creer 10 Object floattants
  for(let i=0; i<10 ; i++){
    const obj = document.createElement('i');
    obj.className = `${icons[Math.floor(Math.random()* icons.length)]} 
                      ${colors[Math.floor(Math.random() * colors.length)]}
                      absolute
                      ${Math.random()> 0.5 ? "text-xl md:text-2xl ": "text-3xl md:text-5xl"} `;
    obj.style.left = `${Math.random()*100}%`;
    obj.style.top = `${Math.random()*100}%`;
    parent.appendChild(obj);
    // animation flottante
    gsap.to(obj,{
      y:"+=40",
      // x:"+=5",
      rotation: Math.random()>0.5 ? 15 :-15,
      duration:2 + Math.random()*3,
      yoyo:true,
      repeat:-1,
      ease:"sine.inOut"
    });
  }
  // Effet paralax sur la souris
  if (window.innerWidth > 768) {
  window.addEventListener('mousemove', e =>{
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    gsap.to(parent, {x: x, y: y, duration:0.5 , ease: "power1.out"});
  });
} else {
    // Effet idle auto-mouvement pour mobile
    gsap.to(parent, {
      x: "+=20",
      y: "+=20",
      duration: 6,  
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    })
  }
}
</script>

<style>
@keyframes fadeIn {
  0% {opacity: 0; transform: translateY(-20px);}
  100% { opacity: 1; transform: translateY(0);}
}
.animate-fadeIn {animation: fadeIn 1.5 ease forwards}
</style>
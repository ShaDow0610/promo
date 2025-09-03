<script setup>
    import VanillaTilt from 'vanilla-tilt';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

    gsap.registerPlugin(ScrollTrigger)

    const sectionEl = ref(null)
    const logoCards = ref([])
    const reasonCards = ref([])
    const ctaEl = ref(null)

    const isTouch = typeof window !== "undefined"
        ? window.matchMedia(" pointer: coarse").matches
        : false

    const bookmakers = [
        {name:"Melbet" , logo:"/logo.png", code:"Viva2025", note: "Bonus jusqu'a 200%"} ,
        {name:"1xbet" , logo:"/logo.png", code:"Viva2025",  note: "100% sur ton premier depot"} ,
        {name:"1win" , logo:"/logo.png", code:"Viva2025",  note: "jusqu'a 500$ de bonus"} ,

    ]

    const reasons = [
        {icon:"fa-solid fa-gift", title:"bonus muscles", text:"Codes promo exclusifs pour maximiser le premier depot."},
        {icon:"fa-solid fa-shield", title:"Fiabilite", text:"plateforme recuptees, securite et paiments rapides."},
        {icon:"fa-solid fa-chart-line", title:"Gains optimises", text:"Promos regulieres, cashbackks, cotes competitives."}
    ]
    onMounted( ()=>{
        const section = sectionEl.value 
        const logos = logoCards.value 
        const reasonEls = reasonCards.value 
        const cta = ctaEl.value 

        gsap.from(section.querySelectorAll(".bmk-head"),{
            scrollTrigger : {trigger:sectionEl.value, start: "top 80%"},
            opacity:0, y:20, duration:0.8, stagger:0.1, ease:"power3.out", 
            
        })
            console.log(section,logos,reasonEls,cta)
        gsap.from(logos,{
            y:20, opacity:0, duration:0.8, ease:"power3.out",stagger:0.12,
            scrollTrigger:{trigger:sectionEl.value,start:"top 70%"}
        })
        gsap.from(reasonEls,{
            y:30 , opacity:0, duration:0.8, ease:"power3.out",stagger:0.08, 
            scrollTrigger:{trigger:sectionEl.value,start:"top 65%"}
        })
        gsap.from(cta,{
            x: (i)=> (i%2 === 0?-50:50),
            y: 40, opacity:0,
            duration: 0.6, ease: "elastic.out(1,0.5)",
            scrollTrigger:{trigger: ctaEl.value,start: "top 80%"}
        })
        if(!isTouch ){
            VanillaTilt.init(logos.value,{
                max:20,
                speed:400,
                glare:true,
                "max-glare":0.4,
                scale:1.05,
                perspective:1000
            })
        }else{

            logos.value.forEach(el=>{
                el.addEventListener("touchstart",()=>{
                    gsap.to(el, {scale:0.95, duration:0.15})
                },{passive:true})
                el.addEventListener("touchend", ()=>{
                    gsap.to(el,{scale:1, duration: 0.2, ease: "back.out(2"})
                }, {passive:true})
            })
        }
    })
    onBeforeUnmount(()=>{
        ScrollTrigger.getAll().forEach( st => st.kill())
    })
</script>
<template>
    <section ref="sectionEl" id="bookmakers" class="relative w-full py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div class="max-w-6xl mx-auto px-6">
            <!-- titre & pitch -->
             <div class="text-center mb-12">
                <h2 class="bmk-head text-3xl md:text-5xl font-extrabold md-4">
                    Pourquoi ces <span>bookmakkers</span>
                </h2>
                <p class="bmk-head text-gray-300 max-w-2xl mx-auto">
                    selectionnes pour leur <span class="text-yellow-400">bonus</span>, leur <span class="text-yellow-400">fiabilie </span> et des
                    <span class="text-yellow-400">gains</span>                                                                                                                                                                                                                                               pan> mieux valorises. le spectacle commence ici.
                </p>
             </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-14">
                <div
                    v-for="(book,index) in bookmakers"
                    :key="index"
                    ref="logoCards"
                    class="group relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center shadow-xl hover:shadow-2xl transition duration-300 will-change-transform"
                >
                    <img :src="book.logo " :alt="book.name" class="h-14 md:h-16 mb-4 object-contain opacity-95 "/>
                    <h3 class="text-xl font-bold tracking-wide">{{ book.name }}</h3>
                    <p class="text-sm text-gray-300 mt-1">{{ book.note }}</p>

                    <!-- bbadge code promo -->
                     <div class="mt-4 inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 border-yellow-400/30 px-3 py-1 rounded-full text-sm font-semibold">
                        <i class="fa-solid fa-ticket"></i>
                        CODE&nbsp;:{{ book.code }}
                     </div>
                     <div class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20"></div>
                     <div class="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition"></div>
                </div>
            </div>

            <!-- les 3 raison : bonnu / fiabilite/ gains -->
             <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10" >
                <div
                    v-for="(r,i) in reasons"
                    :key="i"
                    ref="reasonCards"
                    class="bg-white/5 border border-white/10 rounded-xl p-5"
                >
                    <div class="flex items-center gap-3 mb-2">
                        <i :class="r.icon" class="text-yellow-400 text-2xl"></i>
                        <h4 class="text-lg font-hold">{{ r.title }}</h4>
                    </div>
                    <p class="text-gray-300 text-sm loading-relaxed">{{ r.text }}</p>
                </div>
             </div>

             <!-- CTA -->
             <div ref="ctaEl" class="flex flex-col items-center gap-4">
                <a href="#" target="_blank"
                    class="inline-flex items-center gap-2 px-3 py-3 rounded-full font-bold bg-yellow-400 text-black shadow-xl hover:scale-105 transition"
                >
                    <i class="fa-brands fa-telegram"></i> Rejoindre le canal telegram 
                </a>
                <p class="text-xs text-gray-400">
                    Jouez de facon responsable. 18+. Verifiez la disponibilite des offres dans votre pays.
                </p>
             </div>
        </div>
    </section>
</template>
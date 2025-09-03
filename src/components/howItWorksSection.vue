<template>
    <section id="how-it-works" class="bg-black text-white py-20 relative overflow-hidden ">
        <div class="container mx-auto px-6">
            <!-- titre -->
             <h2 class="text-3xl md:text-5xl font-bold text-center mb-6">
                comment  ca marche ?
             </h2>

            <!-- timeline -->
            <div class="timeline relative flex flex-col md:flex-col justify-between gap-16 md:gap-8">
                <!-- etape 1 -->
                <div class="step flex flex-col items-center text-center max-w-xs">
                    <i class="fas fa-user text-green-400 text-5xl mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">cree ton compte</h3>
                    <p class="text-gray-400">inscrit-toi rapidement ches nos bookmakers partenaires.</p>
                </div>
                <!-- etape 2 -->
                <div class="step flex flex-col items-center text-center max-w-xs">
                    <i class="fas fa-gift text-yellow-400 text-5xl mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">entre ton code promo</h3>
                    <p class="text-gray-400">Ajoute mon code promo exclusif pour debloquer ton bonus.</p>
                </div>
                <div class="step flex flex-col items-center text-center max-w-xs">
                    <i class="fas fa-wallet text-blue-400 text-5xl mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">depose ton argent </h3>
                    <p class="text-gray-400">recharge ton compte et prepare-toi a jouer.</p>
                </div>
                <div class="step flex flex-col items-center text-center max-w-xs">
                    <i class="fas fa-trophy text-red-400 text-5xl mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">joue & gagne</h3>
                    <p class="text-gray-400">Profite de tes victoirs et encaisse tes gains.</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(()=>{
    gsap.utils.toArray(".step").forEach((step,i)=>{
        gsap.from(step,{
            scrollTrigger:{
                trigger:step,
                start:"top 80%",
                toggleActions:"play none none reverse"
            },
            opacity:0,
            y:50,
            duration:0.8,
            delay:i*0.1
        });
        const icon = step.querySelector("i");
        if(icon){
            gsap.from(icon,{
                scrollTrigger:{
                    trigger:step,
                    start:"top 80%"
                },
                scale:0.5,
                opacity:0,
                ease:"bounce out",
                duration: 0.6,
                delay:0.2
            });
        }
    });
    gsap.from(".timeline::before",{
        scrollTrigger:{
            trigger:".timeline",
            start:"top 80%",
            end:"bottom 60%",
            scrub:true
        },
        scaleX:0,
        transformOrigin:"left center",
        ease:"none"
    })
})
</script>
<style scoped>
@media(min-width: 768px){
    .timeline::before{
        content:"";
        position:absolute;
        top:50%;
        left:5%;
        right:5%;
        height: 4px;
        background: linear-gradient(to right,#22c55e,#facc15, #3b82f6, #ef4444);
        z-index:-1;
        transform:scaleX(1);
        transform-origin: left center;
    }
}
</style>
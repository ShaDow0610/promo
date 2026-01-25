<template>
    <div id="about" class="relative overflow-hidden bg-[#0b0b0c] text-white">
        <!-- BG -->
        <div class="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
            <div class="absolute inset-0 animate-bgShift"></div>
            <div
                class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]">
            </div>
            <div
                class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]">
            </div>
            <div
                class="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0))]">
            </div>
        </div>

        <!-- HERO -->
        <header class="relative container mx-auto max-w-6xl px-5 sm:px-8 pt-24 sm:pt-28 pb-14 sm:pb-16 text-center">
            <div class="mx-auto mb-4 sm:mb-6 w-max px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-[10px] sm:text-xs tracking-widest text-yellow-300/90"
                v-reveal>
                À PROPOS
            </div>

            <h1 class="font-display text-[34px] leading-[1.05] sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] drop-shadow-[0_6px_18px_rgba(255,215,100,.18)]"
                v-reveal>
                Notre vision du <span class="whitespace-nowrap">prono sportif</span>
            </h1>

            <p class="mt-4 max-w-3xl mx-auto text-gray-300 text-[13px] sm:text-base" v-reveal delay="0.08">
                Chez <span class="text-yellow-300/90 font-semibold">PronostikerX</span>, nous allions données,
                discipline et pédagogie pour aider les parieurs à <span class="text-yellow-300/90">mieux décider</span>.
                Notre approche : simple, premium, efficace — partout dans le monde.
            </p>

            <!-- CTA Telegram animé -->
            <div class="mt-7 sm:mt-9" v-reveal delay="0.12">
                <a :href="telegramUrl" target="_blank" rel="noopener" class="tele-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-bold
                 bg-[#229ED9] text-white shadow-[0_8px_24px_rgba(34,158,217,0.35)]
                 ring-1 ring-[#229ED9]/50 hover:brightness-110 active:brightness-95 transition">
                    <i class="fa-brands fa-telegram"></i>
                    Rejoindre le canal Telegram
                </a>
            </div>
        </header>

        <!-- STATS (counters) -->
        <section class="container mx-auto max-w-6xl px-5 sm:px-8 pb-12 sm:pb-16">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    v-reveal>
                    <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">PAYS COUVERTS</div>
                    <div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300"><span
                            ref="cCountries">0</span>+</div>
                </div>
                <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    v-reveal>
                    <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">DÉPÔTS BOOSTÉS</div>
                    <div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300">$<span
                            ref="cDeposits">0</span>M+</div>
                </div>
                <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    v-reveal>
                    <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">JOUEURS ACTIFS</div>
                    <div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300"><span ref="cPlayers">0</span>+
                    </div>
                </div>
                <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    v-reveal>
                    <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">TAUX DE SUCCÈS</div>
                    <div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300"><span ref="cSuccess">0</span>%
                    </div>
                </div>
            </div>
            <p class="mt-3 text-[11px] sm:text-xs text-gray-400 text-center" v-reveal delay="0.05">
                * Indicateurs agrégés et évolutifs — ils ne constituent pas une garantie de gains.
            </p>
        </section>

        <!-- MÉTHODE -->
        <section class="container mx-auto max-w-6xl px-5 sm:px-8 pb-12 sm:pb-16">
            <div class="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                <article class="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5" v-reveal>
                    <h2 class="text-2xl sm:text-3xl font-extrabold mb-2">Notre méthode</h2>
                    <p class="text-gray-300 text-sm sm:text-base">
                        Nous combinons analyses de forme, statistiques avancées, gestion de bankroll et retours terrain.
                        Chaque sélection est conçue pour une <span class="text-yellow-300/90">valeur réelle</span>
                        plutôt
                        qu’un simple feeling.
                    </p>
                    <ul class="mt-4 space-y-2 text-sm sm:text-base text-gray-200">
                        <li class="flex gap-2"><i class="fa-solid fa-chart-line text-emerald-300 mt-1"></i> Modèles de
                            probabilité &
                            contextes de match</li>
                        <li class="flex gap-2"><i class="fa-solid fa-wallet text-yellow-300 mt-1"></i> Bankroll
                            management clair &
                            progressif</li>
                        <li class="flex gap-2"><i class="fa-solid fa-bell text-sky-300 mt-1"></i> Alertes Telegram en
                            temps réel
                        </li>
                        <li class="flex gap-2"><i class="fa-solid fa-shield-halved text-purple-300 mt-1"></i> Pédagogie
                            & discipline
                            avant tout</li>
                    </ul>
                </article>

                <article class="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5" v-reveal delay="0.05">
                    <h2 class="text-2xl sm:text-3xl font-extrabold mb-2">L’esprit PronostikerX</h2>
                    <p class="text-gray-300 text-sm sm:text-base">
                        Une marque <span class="text-yellow-300/90">premium & minimaliste</span> : design soigné,
                        messages clairs,
                        résultats mesurables. Notre ambition : vous donner un cadre pour progresser durablement.
                    </p>
                    <div class="mt-4 grid grid-cols-2 gap-3 text-sm sm:text-base">
                        <div
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90">
                            <i class="fa-solid fa-leaf"></i> Simplicité
                        </div>
                        <div
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90">
                            <i class="fa-solid fa-bolt"></i> Efficacité
                        </div>
                        <div
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90">
                            <i class="fa-solid fa-compass-drafting"></i> Méthode
                        </div>
                        <div
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90">
                            <i class="fa-solid fa-globe"></i> International
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <!-- TIMELINE -->
        <section class="container mx-auto max-w-6xl px-5 sm:px-8 pb-12 sm:pb-16">
            <h2 class="text-center text-2xl sm:text-3xl font-extrabold mb-6" v-reveal>Feuille de route</h2>
            <ol class="relative border-s border-white/10 max-w-3xl mx-auto">
                <li class="mb-8 ms-6 relative" v-reveal>
                    <span
                        class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15"
                        style="box-shadow:0 0 0 4px rgba(255,210,106,.08)"></span>
                    <h3 class="text-lg sm:text-xl font-bold">Fondations</h3>
                    <p class="text-gray-300 text-sm sm:text-base">Structure claire, design sobre, base de contenus
                        solides.</p>
                </li>
                <li class="mb-8 ms-6 relative" v-reveal delay="0.06">
                    <span
                        class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15"
                        style="box-shadow:0 0 0 4px rgba(255,210,106,.08)"></span>
                    <h3 class="text-lg sm:text-xl font-bold">Analyses & canaux</h3>
                    <p class="text-gray-300 text-sm sm:text-base">Sélections quotidiennes, notifications, pédagogie sur
                        Telegram.
                    </p>
                </li>
                <li class="mb-8 ms-6 relative" v-reveal delay="0.12">
                    <span
                        class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15"
                        style="box-shadow:0 0 0 4px rgba(255,210,106,.08)"></span>
                    <h3 class="text-lg sm:text-xl font-bold">Expériences démo</h3>
                    <p class="text-gray-300 text-sm sm:text-base">Démonstrations guidées pour comprendre la logique et
                        éviter les
                        erreurs.</p>
                </li>
                <li class="ms-6 relative" v-reveal delay="0.18">
                    <span
                        class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15"
                        style="box-shadow:0 0 0 4px rgba(255,210,106,.08)"></span>
                    <h3 class="text-lg sm:text-xl font-bold">Améliorations continues</h3>
                    <p class="text-gray-300 text-sm sm:text-base">Itérations basées sur données, retours de la
                        communauté et
                        résultats.</p>
                </li>
            </ol>
        </section>

        <!-- TEAM / CONTACT -->
        <section id="about-team" class="container mx-auto max-w-6xl px-5 sm:px-8 pb-14 sm:pb-20">
            <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div class="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5" v-reveal>
                    <h2 class="text-2xl sm:text-3xl font-extrabold mb-2">Équipe & éthique</h2>
                    <p class="text-gray-300 text-sm sm:text-base">
                        Nous défendons un jeu responsable. Fixez des objectifs réalistes, sachez faire une pause,
                        et ne misez que ce que vous pouvez vous permettre de perdre.
                    </p>
                    <ul class="mt-4 space-y-2 text-sm sm:text-base text-gray-200">
                        <li class="flex gap-2"><i class="fa-solid fa-user-shield text-rose-300 mt-1"></i> Transparence &
                            pédagogie
                        </li>
                        <li class="flex gap-2"><i class="fa-solid fa-scale-balanced text-blue-300 mt-1"></i> Pas de
                            promesse
                            irréaliste</li>
                        <li class="flex gap-2"><i class="fa-solid fa-hands-holding-circle text-green-300 mt-1"></i>
                            Focus long terme
                        </li>
                    </ul>
                </div>

                <div class="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5" v-reveal delay="0.06"
                    id="contact">
                    <h2 class="text-2xl sm:text-3xl font-extrabold mb-2">Contact</h2>
                    <p class="text-gray-300 text-sm sm:text-base">
                        Une question, une suggestion, un partenariat ? Écrivez-nous ou rejoignez le canal.
                    </p>
                    <div class="mt-4 grid gap-3">
                        <a :href="telegramUrl" target="_blank" rel="noopener"
                            class="bg-[#229ED9] text-white ring-1 ring-[#229ED9]/50 hover:brightness-110 transition inline-flex items-center gap-2 px-4 py-2 rounded-lg">
                            <i class="fa-brands fa-telegram text-xl"></i> Telegram
                        </a>
                        <a href="mailto:contact@pronostikerx.com"
                            class="bg-white/5 hover:bg-white/10 border border-white/10 text-white transition inline-flex items-center gap-2 px-4 py-2 rounded-lg">
                            <i class="fa-solid fa-envelope text-yellow-300"></i> contact@pronostikerx.com
                        </a>
                    </div>
                    <p class="mt-3 text-[11px] sm:text-xs text-gray-400">
                        Temps de réponse indicatif : 24–48h ouvrées.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, getCurrentInstance } from 'vue'
import gsap from 'gsap'

const telegramUrl = 'https://t.me/+09RmIt4oNn41ZWVk'

// ---- Counters
const cCountries = ref(null)
const cDeposits = ref(null)
const cPlayers = ref(null)
const cSuccess = ref(null)

function animateCounter(el, end, duration = 1.2, decimals = 0) {
    if (!el) return
    const obj = { val: 0 }
    gsap.to(obj, {
        val: end,
        duration,
        ease: 'power2.out',
        onUpdate: () => { el.textContent = obj.val.toFixed(decimals) }
    })
}

let io
const vReveal = {
    mounted(el, binding) {
        const delay = parseFloat(binding?.value?.delay ?? binding?.value ?? el.getAttribute('delay') ?? 0) || 0
        el.style.opacity = 0
        el.style.transform = 'translateY(16px)'
        observe(el, delay)
    },
    unmounted(el) { unobserve(el) }
}

function observe(el, delay) {
    if (!io) {
        io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const d = parseFloat(entry.target.dataset.revealDelay || 0)
                    gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.5, delay: d, ease: 'power2.out' })
                    io.unobserve(entry.target)
                }
            })
        }, { threshold: 0.2 })
    }
    el.dataset.revealDelay = delay
    io.observe(el)
}

function unobserve(el) { if (io) io.unobserve(el) }

// registre la directive une seule fois
const app = getCurrentInstance()?.appContext.app
if (app && !app._context.directives?.reveal) { app.directive('reveal', vReveal) }

// animate counters when visible
let countersIO
function setupCountersIO() {
    const targets = [cCountries.value, cDeposits.value, cPlayers.value, cSuccess.value].filter(Boolean)
    if (!targets.length) return
    countersIO = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                if (e.target === cCountries.value) animateCounter(e.target, 150, 1.1)
                if (e.target === cDeposits.value) animateCounter(e.target, 2.5, 1.2, 1)
                if (e.target === cPlayers.value) animateCounter(e.target, 15000, 1.4)
                if (e.target === cSuccess.value) animateCounter(e.target, 87, 1.2)
                countersIO.unobserve(e.target)
            }
        })
    }, { threshold: 0.6 })
    targets.forEach(t => countersIO.observe(t))
}

onMounted(async () => { await nextTick(); setupCountersIO() })
onBeforeUnmount(() => { countersIO?.disconnect?.(); io?.disconnect?.() })
</script>

<style scoped>
/* BG animated gradient */
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

/* Telegram CTA subtle pulse + nudge */
.tele-btn {
    animation: telePulse 2.2s ease-in-out infinite, teleNudge 6s ease-in-out infinite;
}

@keyframes telePulse {

    0%,
    100% {
        box-shadow: 0 0 0 0 rgba(34, 158, 217, .35);
        transform: translateZ(0)
    }

    50% {
        box-shadow: 0 0 0 14px rgba(34, 158, 217, 0)
    }
}

@keyframes teleNudge {

    0%,
    90%,
    100% {
        transform: translate3d(0, 0, 0)
    }

    92% {
        transform: translate3d(1px, 0, 0)
    }

    94% {
        transform: translate3d(-1px, 0, 0)
    }

    96% {
        transform: translate3d(1px, 0, 0)
    }

    98% {
        transform: translate3d(0, 0, 0)
    }
}
</style>

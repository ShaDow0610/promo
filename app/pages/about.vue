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
                {{ t('aboutPage.badge') }}
            </div>

            <h1 class="font-display text-[34px] leading-[1.05] sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] drop-shadow-[0_6px_18px_rgba(255,215,100,.18)]"
                v-reveal>
                {{ t('aboutPage.title1') }} <span class="whitespace-normal sm:whitespace-nowrap">{{ t('aboutPage.titleHighlight') }}</span>
            </h1>

            <p class="mt-4 max-w-3xl mx-auto text-gray-300 text-[13px] sm:text-base" v-reveal delay="0.08">
                {{ t('aboutPage.subtitleBefore') }}<span class="text-yellow-300/90 font-semibold">{{ t('aboutPage.brand') }}</span>{{ t('aboutPage.subtitleMiddle') }}<span class="text-yellow-300/90">{{ t('aboutPage.subtitleHighlight') }}</span>{{ t('aboutPage.subtitleAfter') }}
            </p>

            <!-- CTA Telegram animé -->
            <div class="mt-7 sm:mt-9" v-reveal delay="0.12">
                <a :href="telegramUrl" target="_blank" rel="noopener" class="tele-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-bold
                 bg-[#229ED9] text-white shadow-[0_8px_24px_rgba(34,158,217,0.35)]
                 ring-1 ring-[#229ED9]/50 hover:brightness-110 active:brightness-95 transition">
                    <i class="fa-brands fa-telegram"></i>
                    {{ t('aboutPage.telegramCta') }}
                </a>
            </div>
        </header>

        <!-- STATS (counters) -->
        <section class="container mx-auto max-w-6xl px-5 sm:px-8 pb-12 sm:pb-16">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    v-reveal>
                    <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">{{ t('aboutPage.stats.countries') }}</div>
                    <div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300"><span
                            ref="cCountries">0</span>+</div>
                </div>
                <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    v-reveal>
                    <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">{{ t('aboutPage.stats.deposits') }}</div>
                    <div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300">$<span
                            ref="cDeposits">0</span>M+</div>
                </div>
                <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    v-reveal>
                    <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">{{ t('aboutPage.stats.players') }}</div>
                    <div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300"><span ref="cPlayers">0</span>+
                    </div>
                </div>
                <div class="rounded-2xl bg-[#111318]/90 border border-white/10 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    v-reveal>
                    <div class="text-[10px] sm:text-xs tracking-wider text-gray-400">{{ t('aboutPage.stats.success') }}</div>
                    <div class="mt-1 text-2xl sm:text-3xl font-extrabold text-yellow-300"><span ref="cSuccess">0</span>%
                    </div>
                </div>
            </div>
            <p class="mt-3 text-[11px] sm:text-xs text-gray-400 text-center" v-reveal delay="0.05">
                {{ t('aboutPage.statsNote') }}
            </p>
        </section>

        <!-- MÉTHODE -->
        <section class="container mx-auto max-w-6xl px-5 sm:px-8 pb-12 sm:pb-16">
            <div class="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                <article class="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5" v-reveal>
                    <h2 class="text-2xl sm:text-3xl font-extrabold mb-2">{{ t('aboutPage.method.title') }}</h2>
                    <p class="text-gray-300 text-sm sm:text-base">
                        {{ t('aboutPage.method.textBefore') }}<span class="text-yellow-300/90">{{ t('aboutPage.method.textHighlight') }}</span>{{ t('aboutPage.method.textAfter') }}
                    </p>
                    <ul class="mt-4 space-y-2 text-sm sm:text-base text-gray-200">
                        <li class="flex gap-2"><i class="fa-solid fa-chart-line text-emerald-300 mt-1"></i> {{ t('aboutPage.method.li1') }}</li>
                        <li class="flex gap-2"><i class="fa-solid fa-wallet text-yellow-300 mt-1"></i> {{ t('aboutPage.method.li2') }}</li>
                        <li class="flex gap-2"><i class="fa-solid fa-bell text-sky-300 mt-1"></i> {{ t('aboutPage.method.li3') }}
                        </li>
                        <li class="flex gap-2"><i class="fa-solid fa-shield-halved text-purple-300 mt-1"></i> {{ t('aboutPage.method.li4') }}</li>
                    </ul>
                </article>

                <article class="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5" v-reveal delay="0.05">
                    <h2 class="text-2xl sm:text-3xl font-extrabold mb-2">{{ t('aboutPage.spirit.title') }}</h2>
                    <p class="text-gray-300 text-sm sm:text-base">
                        {{ t('aboutPage.spirit.textBefore') }}<span class="text-yellow-300/90">{{ t('aboutPage.spirit.textHighlight') }}</span>{{ t('aboutPage.spirit.textAfter') }}
                    </p>
                    <div class="mt-4 grid grid-cols-2 gap-3 text-sm sm:text-base">
                        <div
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90">
                            <i class="fa-solid fa-leaf"></i> {{ t('aboutPage.spirit.tag1') }}
                        </div>
                        <div
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90">
                            <i class="fa-solid fa-bolt"></i> {{ t('aboutPage.spirit.tag2') }}
                        </div>
                        <div
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90">
                            <i class="fa-solid fa-compass-drafting"></i> {{ t('aboutPage.spirit.tag3') }}
                        </div>
                        <div
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/90">
                            <i class="fa-solid fa-globe"></i> {{ t('aboutPage.spirit.tag4') }}
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <!-- TIMELINE -->
        <section class="container mx-auto max-w-6xl px-5 sm:px-8 pb-12 sm:pb-16">
            <h2 class="text-center text-2xl sm:text-3xl font-extrabold mb-6" v-reveal>{{ t('aboutPage.roadmap.title') }}</h2>
            <ol class="relative border-s border-white/10 max-w-3xl mx-auto">
                <li class="mb-8 ms-6 relative" v-reveal>
                    <span
                        class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15"
                        style="box-shadow:0 0 0 4px rgba(255,210,106,.08)"></span>
                    <h3 class="text-lg sm:text-xl font-bold">{{ t('aboutPage.roadmap.step1Title') }}</h3>
                    <p class="text-gray-300 text-sm sm:text-base">{{ t('aboutPage.roadmap.step1Text') }}</p>
                </li>
                <li class="mb-8 ms-6 relative" v-reveal delay="0.06">
                    <span
                        class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15"
                        style="box-shadow:0 0 0 4px rgba(255,210,106,.08)"></span>
                    <h3 class="text-lg sm:text-xl font-bold">{{ t('aboutPage.roadmap.step2Title') }}</h3>
                    <p class="text-gray-300 text-sm sm:text-base">{{ t('aboutPage.roadmap.step2Text') }}
                    </p>
                </li>
                <li class="mb-8 ms-6 relative" v-reveal delay="0.12">
                    <span
                        class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15"
                        style="box-shadow:0 0 0 4px rgba(255,210,106,.08)"></span>
                    <h3 class="text-lg sm:text-xl font-bold">{{ t('aboutPage.roadmap.step3Title') }}</h3>
                    <p class="text-gray-300 text-sm sm:text-base">{{ t('aboutPage.roadmap.step3Text') }}</p>
                </li>
                <li class="ms-6 relative" v-reveal delay="0.18">
                    <span
                        class="absolute -start-3 top-1.5 w-5 h-5 rounded-full border border-yellow-400/30 bg-yellow-400/15"
                        style="box-shadow:0 0 0 4px rgba(255,210,106,.08)"></span>
                    <h3 class="text-lg sm:text-xl font-bold">{{ t('aboutPage.roadmap.step4Title') }}</h3>
                    <p class="text-gray-300 text-sm sm:text-base">{{ t('aboutPage.roadmap.step4Text') }}</p>
                </li>
            </ol>
        </section>

        <!-- TEAM / CONTACT -->
        <section id="about-team" class="container mx-auto max-w-6xl px-5 sm:px-8 pb-14 sm:pb-20">
            <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div class="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5" v-reveal>
                    <h2 class="text-2xl sm:text-3xl font-extrabold mb-2">{{ t('aboutPage.team.title') }}</h2>
                    <p class="text-gray-300 text-sm sm:text-base">
                        {{ t('aboutPage.team.text') }}
                    </p>
                    <ul class="mt-4 space-y-2 text-sm sm:text-base text-gray-200">
                        <li class="flex gap-2"><i class="fa-solid fa-user-shield text-rose-300 mt-1"></i> {{ t('aboutPage.team.li1') }}
                        </li>
                        <li class="flex gap-2"><i class="fa-solid fa-scale-balanced text-blue-300 mt-1"></i> {{ t('aboutPage.team.li2') }}</li>
                        <li class="flex gap-2"><i class="fa-solid fa-hands-holding-circle text-green-300 mt-1"></i>
                            {{ t('aboutPage.team.li3') }}
                        </li>
                    </ul>
                </div>

                <div class="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5" v-reveal delay="0.06"
                    id="contact">
                    <h2 class="text-2xl sm:text-3xl font-extrabold mb-2">{{ t('aboutPage.contactBlock.title') }}</h2>
                    <p class="text-gray-300 text-sm sm:text-base">
                        {{ t('aboutPage.contactBlock.text') }}
                    </p>
                    <div class="mt-4 grid gap-3">
                        <a :href="telegramUrl" target="_blank" rel="noopener"
                            class="bg-[#229ED9] text-white ring-1 ring-[#229ED9]/50 hover:brightness-110 transition inline-flex items-center gap-2 px-4 py-2 rounded-lg">
                            <i class="fa-brands fa-telegram text-xl"></i> {{ t('aboutPage.contactBlock.telegram') }}
                        </a>
                        <a href="mailto:contact@pronostikerx.com"
                            class="bg-white/5 hover:bg-white/10 border border-white/10 text-white transition inline-flex items-center gap-2 px-4 py-2 rounded-lg">
                            <i class="fa-solid fa-envelope text-yellow-300"></i> contact@pronostikerx.com
                        </a>
                    </div>
                    <p class="mt-3 text-[11px] sm:text-xs text-gray-400">
                        {{ t('aboutPage.contactBlock.responseTime') }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const siteUrl = 'https://ultimatepronos.com'
const ogLocaleMap = { fr: 'fr_FR', en: 'en_US', es: 'es_ES', hi: 'hi_IN', ar: 'ar_AR', az: 'az_AZ', pt: 'pt_PT', ru: 'ru_RU', so: 'so_SO', tr: 'tr_TR' }
const ogLocale = ogLocaleMap[locale.value] || 'fr_FR'

useHead({
    title: t('aboutPage.seo.title'),
    meta: [
        {
            name: 'description',
            content: t('aboutPage.seo.description')
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'UltimatePronos' },
        { name: 'keywords', content: 'pronostics sportifs, pari sportif, conseils paris sportifs, méthode de pronostic, jeux d\'argent, xbet, melbet, 1win, betwinner, code promo' },

        // Open Graph
        { property: 'og:title', content: t('aboutPage.seo.ogTitle') },
        { property: 'og:description', content: t('aboutPage.seo.ogDescription') },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'UltimatePronos' },
        { property: 'og:url', content: siteUrl + '/about' },
        { property: 'og:image', content: siteUrl + '/logo.png' },
        { property: 'og:locale', content: ogLocale },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: t('aboutPage.seo.twitterTitle') },
        { name: 'twitter:description', content: t('aboutPage.seo.twitterDescription') },
        { name: 'twitter:image', content: siteUrl + '/logo.png' }
    ],
    link: [
        { rel: 'canonical', href: siteUrl + '/about' },

        // hreflang
        { rel: 'alternate', hreflang: 'fr', href: siteUrl + '/fr/about' },
        { rel: 'alternate', hreflang: 'en', href: siteUrl + '/en/about' },
        { rel: 'alternate', hreflang: 'es', href: siteUrl + '/es/about' },
        { rel: 'alternate', hreflang: 'hi', href: siteUrl + '/hi/about' },
        { rel: 'alternate', hreflang: 'ar', href: siteUrl + '/ar/about' },
        { rel: 'alternate', hreflang: 'az', href: siteUrl + '/az/about' },
        { rel: 'alternate', hreflang: 'pt', href: siteUrl + '/pt/about' },
        { rel: 'alternate', hreflang: 'ru', href: siteUrl + '/ru/about' },
        { rel: 'alternate', hreflang: 'so', href: siteUrl + '/so/about' },
        { rel: 'alternate', hreflang: 'tr', href: siteUrl + '/tr/about' },
        { rel: 'alternate', hreflang: 'x-default', href: siteUrl + '/about' }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": t('aboutPage.seo.jsonLdName'),
                "url": siteUrl + '/about',
                "description": t('aboutPage.seo.jsonLdDescription'),
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": t('hacksPage.seo.breadcrumbHome'), "item": siteUrl },
                        { "@type": "ListItem", "position": 2, "name": t('aboutPage.badge'), "item": siteUrl + '/about' }
                    ]
                }
            })
        },
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "UltimatePronos",
                "url": siteUrl,
                "logo": siteUrl + '/logo.png',
                "sameAs": [
                    "https://t.me/+09RmIt4oNn41ZWVk",
                    "https://www.facebook.com/ultimatepronos",
                    "https://www.twitter.com/ultimatepronos"
                ]
            })
        }
    ]
})
import { ref, onMounted, onBeforeUnmount, nextTick, getCurrentInstance } from 'vue'
import { gsap } from 'gsap'


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

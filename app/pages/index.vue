<script setup>
import { defineAsyncComponent } from 'vue';
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'))
const BookmakersSection = defineAsyncComponent(() => import('@/components/BookmakersSection.vue'))
const howItWorksSection = defineAsyncComponent(() => import('@/components/howItWorksSection.vue'))
const ClientResults = defineAsyncComponent(() => import('@/components/ClientResults.vue'))
const CallToAction = defineAsyncComponent(() => import('@/components/CallToAction.vue'))
const siteUrl = 'https://ultimatepronos.com'

useHead({
    title: 'UltimatePronos – Codes Promo & Pronostics Foot Fiables',
    meta: [
        {
            name: 'description',
            content: 'Profitez des meilleurs codes promo XBET, MELBET, 1WIN, BetWinner et top jeux (Apple of Fortune, Aviator). Rejoignez notre canal Telegram pour coupons gagnants !'
        },
        {
            name: 'keywords',
            content: 'pronostics, paris sportifs, foot, xbet, melbet, 1win, betwinner, apple of fortune, aviator, code promo, coupons gagnants, algorithme de pronostics'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Shadow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

        // Open Graph
        { property: 'og:title', content: 'UltimatePronos – Codes Promo et Pronostics Sportifs Fiables' },
        { property: 'og:description', content: 'Découvrez les meilleurs codes promo pour XBET, MELBET, 1WIN, BetWinner et top jeux comme Apple of Fortune, Aviator. Algorithme de pronostics fiable, coupons gagnants et cadeaux exclusifs sur notre canal Telegram.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: siteUrl + '/logo.png' },
        { property: 'og:locale', content: 'fr_FR' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'UltimatePronos – Codes Promo et Pronostics Sportifs Fiables' },
        { name: 'twitter:description', content: 'Découvrez les meilleurs codes promo pour XBET, MELBET, 1WIN, BetWinner et top jeux comme Apple of Fortune, Aviator. Algorithme de pronostics fiable, coupons gagnants et cadeaux exclusifs sur notre canal Telegram.' },
        { name: 'twitter:image', content: siteUrl + '/logo.png' }
    ],
    link: [
        // Canonical
        { rel: 'canonical', href: siteUrl },

        // hreflang pour langues
        { rel: 'alternate', hreflang: 'fr', href: siteUrl + '/fr' },
        { rel: 'alternate', hreflang: 'en', href: siteUrl + '/en' },
        { rel: 'alternate', hreflang: 'es', href: siteUrl + '/es' },
        { rel: 'alternate', hreflang: 'hi', href: siteUrl + '/hi' },
        { rel: 'alternate', hreflang: 'ar', href: siteUrl + '/ar' },
        { rel: 'alternate', hreflang: 'az', href: siteUrl + '/az' },
        { rel: 'alternate', hreflang: 'pt', href: siteUrl + '/pt' },
        { rel: 'alternate', hreflang: 'ru', href: siteUrl + '/ru' },
        { rel: 'alternate', hreflang: 'so', href: siteUrl + '/so' },
        { rel: 'alternate', hreflang: 'tr', href: siteUrl + '/tr' },
        { rel: 'alternate', hreflang: 'x-default', href: siteUrl }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": siteUrl,
                "name": "UltimatePronos",
                "author": {
                    "@type": "Organization",
                    "name": "UltimatePronos"
                },
                "description": "Codes promo et pronostics sportifs fiables pour XBET, MELBET, 1WIN, BetWinner, Apple of Fortune, Aviator et plus. Algorithme exclusif et coupons gagnants.",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": siteUrl + '/search?query={search_term_string}',
                    "query-input": "required name=search_term_string"
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
                "logo": siteUrl + '/images/logo.png',
                "sameAs": [
                    "https://t.me/+09RmIt4oNn41ZWVk",
                    "https://www.facebook.com/ultimatepronos",
                    "https://www.twitter.com/ultimatepronos"
                ]
            })
        }
    ]
})

</script>
<template>
    <div>
        <!-- hero -->
        <Suspense>
            <template #default>
                <HeroSection />
            </template>
            <template #fallback>
                <section class="h-[40vh] flex item-center justify-center text-withe/60">Loading...</section>
            </template>
        </Suspense>
        <!-- Bookmakers -->
         <Suspense>
            <template #default>
                <BookmakersSection />
            </template>
            <template #fallback>
                <section class="h-[40vh] flex item-center justify-center text-withe/60">Loading bookmakers...</section>
            </template>
        </Suspense>
        <!-- howItWorks -->
        <Suspense>
            <template #default>
                <howItWorksSection />
            </template>
            <template #fallback>
                <section class="h-[40vh] flex item-center justify-center text-withe/60">Loading guide...</section>
            </template>
        </Suspense>
        <!-- ClientResults -->
        <Suspense>
            <template #default>
                <ClientResults />
            </template>
            <template #fallback>
                <section class="h-[40vh] flex item-center justify-center text-withe/60">Loading results...</section>
            </template>
        </Suspense>
        <!-- CallToAction -->
        <Suspense>
            <template #default>
                <CallToAction />
            </template>
            <template #fallback>
                <section class="h-[40vh] flex item-center justify-center text-withe/60">Loading predictions...</section>
            </template>
        </Suspense>
    </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n'
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'))
const BookmakersSection = defineAsyncComponent(() => import('@/components/BookmakersSection.vue'))
const howItWorksSection = defineAsyncComponent(() => import('@/components/howItWorksSection.vue'))
const ClientResults = defineAsyncComponent(() => import('@/components/ClientResults.vue'))
const CallToAction = defineAsyncComponent(() => import('@/components/CallToAction.vue'))
const FaqSection = defineAsyncComponent(() => import('@/components/FaqSection.vue'))
const { t, locale } = useI18n()
const siteUrl = 'https://ultimatepronos.com'
const ogLocaleMap = { fr: 'fr_FR', en: 'en_US', es: 'es_ES', hi: 'hi_IN', ar: 'ar_AR', az: 'az_AZ', pt: 'pt_PT', ru: 'ru_RU', so: 'so_SO', tr: 'tr_TR' }
const ogLocale = ogLocaleMap[locale.value] || 'fr_FR'

useHead({
    title: t('homePage.seo.title'),
    meta: [
        {
            name: 'description',
            content: t('homePage.seo.description')
        },
        {
            name: 'keywords',
            content: 'pronostics sportifs, pari sportif, pronostic foot, code promo paris sportifs, xbet, melbet, 1win, betwinner, jeux d\'argent, apple of fortune, aviator, conseils paris sportifs, algorithme de pronostics, coupons gagnants'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Shadow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

        // Open Graph
        { property: 'og:title', content: t('homePage.seo.ogTitle') },
        { property: 'og:description', content: t('homePage.seo.ogDescription') },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'UltimatePronos' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: siteUrl + '/logo.png' },
        { property: 'og:locale', content: ogLocale },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: t('homePage.seo.twitterTitle') },
        { name: 'twitter:description', content: t('homePage.seo.twitterDescription') },
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
                "description": t('homePage.seo.jsonLdDescription'),
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
                "logo": siteUrl + '/logo.png',
                "sameAs": [
                    "https://t.me/+09RmIt4oNn41ZWVk",
                    "https://www.facebook.com/ultimatepronos",
                    "https://www.twitter.com/ultimatepronos"
                ]
            })
        },
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'].map(key => ({
                    "@type": "Question",
                    "name": t(`faqSection.items.${key}.question`),
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": t(`faqSection.items.${key}.answer`)
                    }
                }))
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
                <section class="h-[40vh] flex items-center justify-center text-white/60">Loading...</section>
            </template>
        </Suspense>
        <!-- Bookmakers -->
         <Suspense>
            <template #default>
                <BookmakersSection />
            </template>
            <template #fallback>
                <section class="h-[40vh] flex items-center justify-center text-white/60">Loading bookmakers...</section>
            </template>
        </Suspense>
        <!-- howItWorks -->
        <Suspense>
            <template #default>
                <howItWorksSection />
            </template>
            <template #fallback>
                <section class="h-[40vh] flex items-center justify-center text-white/60">Loading guide...</section>
            </template>
        </Suspense>
        <!-- ClientResults -->
        <Suspense>
            <template #default>
                <ClientResults />
            </template>
            <template #fallback>
                <section class="h-[40vh] flex items-center justify-center text-white/60">Loading results...</section>
            </template>
        </Suspense>
        <!-- CallToAction -->
        <Suspense>
            <template #default>
                <CallToAction />
            </template>
            <template #fallback>
                <section class="h-[40vh] flex items-center justify-center text-white/60">Loading predictions...</section>
            </template>
        </Suspense>
        <!-- FAQ -->
        <Suspense>
            <template #default>
                <FaqSection />
            </template>
            <template #fallback>
                <section class="h-[40vh] flex items-center justify-center text-white/60">Loading FAQ...</section>
            </template>
        </Suspense>
    </div>
</template>
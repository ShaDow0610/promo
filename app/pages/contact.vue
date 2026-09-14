<!-- src/views/ContactView.vue -->
<template>
  <section class="relative min-h-screen bg-[#0b0b0c] text-white overflow-hidden" aria-labelledby="contact-title">
    <!-- BG -->
    <div class="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 animate-bgShift"></div>
      <div
        class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]">
      </div>
      <div
        class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]">
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
      <!-- Header -->
      <header ref="headRef" class="text-center">
        <div
          class="mx-auto mb-4 w-max px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-[10px] sm:text-xs tracking-widest text-yellow-300/90">
          {{ t('heroSection.hero.marker') }}
        </div>
        <h1 id="contact-title"
          class="font-display text-[34px] leading-[1.05] sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] drop-shadow-[0_6px_18px_rgba(255,215,100,.18)]">
          {{ t('contactPage.titlePrefix') }}<span class="whitespace-normal sm:whitespace-nowrap">{{ t('heroSection.brand') }}</span>
        </h1>
        <p class="mt-3 sm:mt-4 max-w-3xl mx-auto text-gray-300 text-[13px] sm:text-base">
          {{ t('contactPage.subtitle') }}
        </p>
      </header>

      <!-- Cards: channels -->
      <div ref="cardsRef" class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6" role="list">
        <!-- Telegram channel -->
        <article role="listitem"
          class="group rounded-2xl p-5 bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(250,200,80,0.06)]">
          <div class="flex items-start gap-3">
            <div
              class="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
              <i class="fa-brands fa-telegram" aria-hidden="true"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold">{{ t('contactPage.cards.telegram.title') }}</h3>
              <p class="text-sm text-gray-300">{{ t('contactPage.cards.telegram.text') }}</p>
            </div>
          </div>
          <a :href="telegramUrl" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-bold
                   bg-[#229ED9] text-white ring-1 ring-white/10 hover:brightness-110
                   shadow-[0_10px_30px_rgba(34,158,217,.25)] transition telegram-wiggle" @mouseenter="pulseOnce">
            <i class="fa-brands fa-telegram mr-2" aria-hidden="true"></i>
            <span>{{ t('contactPage.cards.telegram.cta') }}</span>
          </a>
        </article>

        <!-- Telegram support -->
        <article role="listitem" class="rounded-2xl p-5 bg-white/5 border border-white/10">
          <div class="flex items-start gap-3">
            <div
              class="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
              <i class="fa-regular fa-life-ring" aria-hidden="true"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold">{{ t('contactPage.cards.support.title') }}</h3>
              <p class="text-sm text-gray-300">{{ t('contactPage.cards.support.text') }}</p>
            </div>
          </div>
          <a :href="supportTelegram" target="_blank" rel="noopener noreferrer"
            class="mt-4 inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-semibold bg-white/10 hover:bg-white/15 border border-white/10"
            :aria-label="t('contactPage.cards.support.ariaLabel')">
            @king_of_apple_hack_support
          </a>
        </article>

        <!-- Email -->
        <article role="listitem" class="rounded-2xl p-5 bg-white/5 border border-white/10">
          <div class="flex items-start gap-3">
            <div
              class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <i class="fa-regular fa-envelope" aria-hidden="true"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold">{{ t('contactPage.cards.email.title') }}</h3>
              <p class="text-sm text-gray-300">{{ t('contactPage.cards.email.text') }}</p>
            </div>
          </div>
          <a :href="`mailto:${supportEmail}`"
            class="mt-4 inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-semibold bg-white/10 hover:bg-white/15 border border-white/10"
            :aria-label="t('contactPage.cards.email.ariaLabel', { email: supportEmail })">
            {{ supportEmail }}
          </a>
        </article>
      </div>

      <!-- Promo & quick links -->
      <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <!-- Promo copy -->
        <div class="rounded-2xl p-5 bg-white/5 border border-white/10">
          <h4 class="text-lg font-semibold">{{ t('contactPage.promo.title') }}</h4>
          <p class="text-sm text-gray-300">{{ t('contactPage.promo.text') }}</p>
          <button type="button" :disabled="copied" @click="copyPromo(promoCode)"
            @touchend.prevent="copyPromo(promoCode)"
            class="mt-3 relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/15 text-yellow-200 border border-yellow-500/30 text-base font-semibold hover:brightness-110 active:scale-[.98] transition disabled:opacity-60 disabled:cursor-not-allowed"
            :aria-label="t('contactPage.promo.ariaLabel', { code: promoCode })">
            <i class="fa-regular fa-copy" aria-hidden="true"></i>
            <span aria-live="polite">{{ promoCode }}</span>
            <span v-if="copied"
              class="absolute -top-7 right-0 text-xs px-2 py-0.5 rounded bg-black/80 text-white shadow"
              aria-live="assertive">{{ t('contactPage.promo.copied') }}</span>
          </button>
          <p class="mt-3 text-xs text-gray-400 italic">
            {{ t('contactPage.promo.note') }}
          </p>
        </div>

        <!-- Office / Localisation -->
        <div class="rounded-2xl p-5 bg-white/5 border border-white/10">
          <h4 class="text-lg font-semibold">{{ t('contactPage.location.title') }}</h4>
          <p class="text-sm text-gray-300">{{ t('contactPage.location.text') }}</p>
          <div class="mt-3 rounded-xl overflow-hidden border border-white/10" role="img" :aria-label="t('contactPage.location.mapPlaceholder')">
            <div
              class="h-40 bg-[radial-gradient(80%_60%_at_50%_30%,#202328,#0f1115)] flex items-center justify-center text-white/50 text-sm">
              {{ t('contactPage.location.mapPlaceholder') }}
            </div>
          </div>
        </div>

        <!-- Quick links (bookmakers) -->
        <div class="rounded-2xl p-5 bg-white/5 border border-white/10">
          <h4 class="text-lg font-semibold">{{ t('contactPage.links.title') }}</h4>
          <ul class="mt-3 space-y-2 text-sm">
            <li v-for="(href, key) in safeBookmakers" :key="key">
              <a :href="href" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 hover:underline" :class="linkColor(key)">
                <span class="inline-block w-2 h-2 rounded-full" :class="dotColor(key)"></span>
                <span>{{ labelFor(key) }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Contact form -->
      <form class="mt-10 rounded-2xl p-5 sm:p-6 bg-white/5 border border-white/10" @submit.prevent="submitForm"
        novalidate>
        <h3 class="text-2xl font-bold mb-1">{{ t('contactPage.form.title') }}</h3>
        <p class="text-sm text-gray-300 mb-4">{{ t('contactPage.form.subtitle') }}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label class="block text-xs text-gray-400 mb-1" for="name">{{ t('contactPage.form.nameLabel') }}</label>
            <input id="name" v-model.trim="form.name" name="name" type="text" autocomplete="name"
              class="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" />
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1" for="email">{{ t('contactPage.form.emailLabel') }}</label>
            <input id="email" v-model.trim="form.email" name="email" required type="email" autocomplete="email"
              inputmode="email"
              class="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" />
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1" for="subject">{{ t('contactPage.form.subjectLabel') }}</label>
            <select id="subject" v-model="form.subject" name="subject"
              class="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/40">
              <option value="Support">{{ t('contactPage.form.subjectOptions.support') }}</option>
              <option value="Partenariat">{{ t('contactPage.form.subjectOptions.partnership') }}</option>
              <option value="Presse">{{ t('contactPage.form.subjectOptions.press') }}</option>
              <option value="Autre">{{ t('contactPage.form.subjectOptions.other') }}</option>
            </select>
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1" for="userid">{{ t('contactPage.form.useridLabel') }}</label>
            <input id="userid" v-model.trim="form.userId" name="userId" type="text" :placeholder="t('contactPage.form.useridPlaceholder')"
              autocomplete="off"
              class="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" />
          </div>
          <div class="sm:col-span-2">
            <label class="block text-xs text-gray-400 mb-1" for="message">{{ t('contactPage.form.messageLabel') }}</label>
            <textarea id="message" v-model.trim="form.message" name="message" required rows="5"
              class="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"></textarea>
          </div>
        </div>

        <div class="mt-4 flex items-center gap-3">
          <button type="submit" :disabled="sending"
            class="inline-flex items-center justify-center rounded-full px-6 py-3 font-bold
                   bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] text-black
                   shadow-[0_8px_24px_rgba(255,210,90,0.25)] ring-1 ring-yellow-500/40 hover:brightness-105 active:brightness-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
            :aria-busy="sending ? 'true' : 'false'">
            <i class="fa-regular fa-paper-plane mr-2" aria-hidden="true"></i>
            <span v-if="!sending">{{ t('contactPage.form.submit') }}</span>
            <span v-else>{{ t('contactPage.form.sending') }}</span>
          </button>
          <a :href="telegramUrl" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold bg-[#229ED9] text-white ring-1 ring-white/10 hover:brightness-110 telegram-pulse">
            <i class="fa-brands fa-telegram mr-2" aria-hidden="true"></i> {{ t('contactPage.form.telegramCta') }}
          </a>
        </div>
        <p v-if="formError" class="mt-3 text-sm text-red-300" role="alert">{{ formError }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const siteUrl = 'https://ultimatepronos.com'
const ogLocaleMap = { fr: 'fr_FR', en: 'en_US', es: 'es_ES', hi: 'hi_IN', ar: 'ar_AR', az: 'az_AZ', pt: 'pt_PT', ru: 'ru_RU', so: 'so_SO', tr: 'tr_TR' }
const ogLocale = ogLocaleMap[locale.value] || 'fr_FR'

useHead({
  title: t('contactPage.seo.title'),
  meta: [
    {
      name: 'description',
      content: t('contactPage.seo.description')
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'UltimatePronos' },
    { name: 'keywords', content: 'contact paris sportifs, code promo, conseils jeux d\'argent, xbet, melbet, 1win, betwinner, support pronostics' },

    // Open Graph
    { property: 'og:title', content: t('contactPage.seo.ogTitle') },
    { property: 'og:description', content: t('contactPage.seo.ogDescription') },
    { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'UltimatePronos' },
    { property: 'og:url', content: siteUrl + '/contact' },
    { property: 'og:image', content: siteUrl + '/logo.png' },
    { property: 'og:locale', content: ogLocale },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('contactPage.seo.twitterTitle') },
    { name: 'twitter:description', content: t('contactPage.seo.twitterDescription') },
    { name: 'twitter:image', content: siteUrl + '/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: siteUrl + '/contact' },

    // hreflang
    { rel: 'alternate', hreflang: 'fr', href: siteUrl + '/fr/contact' },
    { rel: 'alternate', hreflang: 'en', href: siteUrl + '/en/contact' },
    { rel: 'alternate', hreflang: 'es', href: siteUrl + '/es/contact' },
    { rel: 'alternate', hreflang: 'hi', href: siteUrl + '/hi/contact' },
    { rel: 'alternate', hreflang: 'ar', href: siteUrl + '/ar/contact' },
    { rel: 'alternate', hreflang: 'az', href: siteUrl + '/az/contact' },
    { rel: 'alternate', hreflang: 'pt', href: siteUrl + '/pt/contact' },
    { rel: 'alternate', hreflang: 'ru', href: siteUrl + '/ru/contact' },
    { rel: 'alternate', hreflang: 'so', href: siteUrl + '/so/contact' },
    { rel: 'alternate', hreflang: 'tr', href: siteUrl + '/tr/contact' },
    { rel: 'alternate', hreflang: 'x-default', href: siteUrl + '/contact' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": t('contactPage.seo.jsonLdName'),
        "url": siteUrl + '/contact',
        "description": t('contactPage.seo.jsonLdDescription'),
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": t('hacksPage.seo.breadcrumbHome'), "item": siteUrl },
                { "@type": "ListItem", "position": 2, "name": t('siteFooter.links.contact'), "item": siteUrl + '/contact' }
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

import { ref, onMounted, nextTick, computed } from 'vue'
import { gsap } from 'gsap'

/** Constantes (passe-les idéalement via env) */
const telegramUrl = 'https://t.me/+09RmIt4oNn41ZWVk'
const supportTelegram = 'https://t.me/+09RmIt4oNn41ZWVk'
const supportEmail = 'Arnoldpc3@gmail.com'
const promoCode = 'GLE44'

/** Liens partenaires (avec fallback) */
const bookmakers = {
  x1bet: 'https://reffpa.com/L?tag=d_4135466m_97c_&site=4135466&ad=97',
  melbet: 'https://refpa3665.com/L?tag=d_4135872m_66329c_&site=4135872&ad=66329',
  betwinner: 'https://bwredir.com/1xK9?p=%2Fregistration%2F',
  win1: 'https://1wvdmy.life/?p=l6cr'
}
const safe = href => (typeof href === 'string' && href.startsWith('http')) ? href : '#'
const safeBookmakers = computed(() => ({
  x1bet: safe(bookmakers.x1bet),
  melbet: safe(bookmakers.melbet),
  betwinner: safe(bookmakers.betwinner),
  win1: safe(bookmakers.win1)
}))
const labelFor = key => ({ x1bet: '1xBet', melbet: 'Melbet', betwinner: 'Betwinner', win1: '1win' }[key] || key)
const linkColor = key => ({
  x1bet: 'text-blue-300',
  melbet: 'text-yellow-300',
  betwinner: 'text-emerald-300',
  win1: 'text-gray-300'
}[key] || 'text-gray-300')
const dotColor = key => ({
  x1bet: 'bg-blue-400',
  melbet: 'bg-yellow-400',
  betwinner: 'bg-emerald-400',
  win1: 'bg-gray-400'
}[key] || 'bg-gray-400')

/** Refs */
const headRef = ref(null)
const cardsRef = ref(null)

/** Copy promo */
const copied = ref(false)
let copyTimer
async function copyPromo(code) {
  if (copied.value) return
  try {
    if (typeof navigator !== 'undefined' && navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(code)
    } else {
      const ta = document.createElement('textarea')
      ta.value = code
      ta.setAttribute('readonly', '')
      ta.style.position = 'fixed'
      ta.style.top = '-9999px'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    copied.value = true
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => (copied.value = false), 1200)
  } catch {
    alert(t('contactPage.copyFallbackAlert', { code }))
  }
}

/** Form (mailto) */
const form = ref({
  name: '',
  email: '',
  subject: 'Support',
  userId: '',
  message: ''
})
const sending = ref(false)
const formError = ref('')

function validEmail(v) {
  // Simple, robuste et rapide (évite les faux positifs/negatifs agressifs)
  return /\S+@\S+\.\S+/.test(v)
}

function submitForm() {
  formError.value = ''
  if (!form.value.email || !validEmail(form.value.email)) {
    formError.value = t('contactPage.form.errors.invalidEmail')
    return
  }
  if (!form.value.message?.trim()) {
    formError.value = t('contactPage.form.errors.messageRequired')
    return
  }

  try {
    sending.value = true

    const to = supportEmail
    const subject = encodeURIComponent(
      `${form.value.subject} ${form.value.name || t('contactPage.form.mail.defaultName')} — ${t('heroSection.brand')}`
    )
    const body = encodeURIComponent(
      `${t('contactPage.form.mail.greeting')}

${form.value.message}

— ${t('contactPage.form.mail.emailLabel')} : ${form.value.email}
— ${t('contactPage.form.mail.useridLabel')} : ${form.value.userId || t('contactPage.form.mail.notProvided')}
— ${t('contactPage.form.mail.promoLabel')} : ${promoCode}

${t('contactPage.form.mail.closing')}`
    )

    // Redirection mailto (aucun espace parasite)
    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    }
  } finally {
    // On relâche l'état après un court délai, pour UX
    setTimeout(() => { sending.value = false }, 600)
  }
}

/** Animations */
function pulseOnce(e) {
  const el = e?.currentTarget
  if (!el) return
  gsap.fromTo(el, { scale: 1 }, { scale: 1.035, yoyo: true, repeat: 1, duration: 0.14, ease: 'power1.inOut' })
}

onMounted(async () => {
  await nextTick()
  if (headRef.value) {
    gsap.from(headRef.value, { opacity: 0, y: 18, duration: 0.8, ease: 'power3.out' })
  }
  if (cardsRef.value) {
    const children = cardsRef.value.querySelectorAll('article')
    gsap.from(children, { opacity: 0, y: 18, stagger: 0.08, duration: 0.6, ease: 'power2.out', delay: 0.05 })
  }
})
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

/* Motion preferences: respect accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-bgShift {
    animation: none;
  }

  .telegram-wiggle {
    animation: none;
  }

  .telegram-pulse {
    animation: none;
    box-shadow: none;
  }
}

/* Telegram CTA motion */
@keyframes wiggle {

  0%,
  100% {
    transform: rotate(0) translateZ(0)
  }

  25% {
    transform: rotate(1.2deg)
  }

  75% {
    transform: rotate(-1.2deg)
  }
}

.telegram-wiggle {
  animation: wiggle 1.4s ease-in-out infinite;
  animation-delay: .6s;
}

.telegram-pulse {
  box-shadow: 0 0 0 0 rgba(34, 158, 217, .45);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(34, 158, 217, .45);
    transform: translateZ(0)
  }

  70% {
    box-shadow: 0 0 0 14px rgba(34, 158, 217, 0)
  }

  100% {
    box-shadow: 0 0 0 0 rgba(34, 158, 217, 0)
  }
}

/* Form focus */
input,
textarea,
select {
  transition: box-shadow .18s ease, transform .12s ease;
}

input:focus,
textarea:focus,
select:focus {
  transform: translateZ(0);
}
</style>
  
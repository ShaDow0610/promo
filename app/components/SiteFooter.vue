<template>
  <footer class="relative border-t border-white/10 bg-black/40 text-white pt-10 pb-6">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-2">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-300/90"></span>
            <span class="font-semibold tracking-wide">{{ t('heroSection.brand') }}</span>
          </div>
          <p class="mt-3 text-sm text-gray-400">{{ t('siteFooter.tagline') }}</p>
        </div>

        <nav :aria-label="t('siteFooter.columns.navigation')">
          <h3 class="text-sm font-semibold text-white/90 mb-3">{{ t('siteFooter.columns.navigation') }}</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink :to="localePath('/')" class="hover:text-white transition">{{ t('siteFooter.links.home') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/hacks')" class="hover:text-white transition">{{ t('siteFooter.links.hacks') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/about')" class="hover:text-white transition">{{ t('siteFooter.links.about') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/contact')" class="hover:text-white transition">{{ t('siteFooter.links.contact') }}</NuxtLink></li>
          </ul>
        </nav>

        <nav :aria-label="t('siteFooter.columns.bookmakers')">
          <h3 class="text-sm font-semibold text-white/90 mb-3">{{ t('siteFooter.columns.bookmakers') }}</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="https://reffpa.com/L?tag=d_4135466m_97c_&site=4135466&ad=97" target="_blank" rel="noopener" class="hover:text-white transition">1xBet</a></li>
            <li><a href="https://refpa3665.com/L?tag=d_4135872m_66329c_&site=4135872&ad=66329" target="_blank" rel="noopener" class="hover:text-white transition">Melbet</a></li>
            <li><a href="https://1wvdmy.life/?p=l6cr" target="_blank" rel="noopener" class="hover:text-white transition">1win</a></li>
            <li><a href="https://bwredir.com/1xK9?p=%2Fregistration%2F" target="_blank" rel="noopener" class="hover:text-white transition">Betwinner</a></li>
          </ul>
        </nav>

        <div>
          <h3 class="text-sm font-semibold text-white/90 mb-3">{{ t('siteFooter.columns.legal') }}</h3>
          <a :href="telegramUrl" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200 transition">
            <i class="fa-brands fa-telegram"></i> {{ t('siteFooter.links.telegram') }}
          </a>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-gray-500 text-center sm:text-left max-w-2xl">{{ t('siteFooter.responsibleGambling') }}</p>
        <p class="text-xs text-gray-500 whitespace-nowrap">{{ t('siteFooter.copyright', { year }) }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()
const telegramUrl = 'https://t.me/+09RmIt4oNn41ZWVk'
const year = new Date().getFullYear()
</script>

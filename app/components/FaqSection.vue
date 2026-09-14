<template>
  <section id="faq" class="relative text-white py-14 sm:py-16 overflow-hidden" aria-labelledby="faq-title">
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <div class="absolute inset-0 animate-bgShift"></div>
      <div
        class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]">
      </div>
    </div>

    <div class="container mx-auto px-4 max-w-4xl">
      <header class="text-center mb-8 sm:mb-10">
        <div
          class="mx-auto mb-4 w-max px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-[10px] sm:text-xs tracking-widest text-yellow-300/90">
          {{ t('faqSection.badge') }}
        </div>
        <h2 id="faq-title" class="text-2xl sm:text-4xl font-extrabold">{{ t('faqSection.title') }}</h2>
        <p class="mt-3 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">{{ t('faqSection.subtitle') }}</p>
      </header>

      <div class="space-y-3">
        <div v-for="key in itemKeys" :key="key" class="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <button type="button" class="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-4 text-left"
            :aria-expanded="openKey === key ? 'true' : 'false'" :aria-controls="`faq-panel-${key}`"
            @click="toggle(key)">
            <span class="font-semibold text-sm sm:text-base">{{ t(`faqSection.items.${key}.question`) }}</span>
            <i class="fa-solid fa-chevron-down text-yellow-300 transition-transform shrink-0"
              :class="{ 'rotate-180': openKey === key }"></i>
          </button>
          <div v-show="openKey === key" :id="`faq-panel-${key}`" class="px-4 sm:px-5 pb-4 text-sm sm:text-base text-gray-300">
            {{ t(`faqSection.items.${key}.answer`) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const itemKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6']
const openKey = ref('q1')
function toggle(key) {
  openKey.value = openKey.value === key ? null : key
}
</script>

<style scoped>
@keyframes bgShift {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}
.animate-bgShift {
  background: linear-gradient(120deg, #050505 0%, #0b0b0c 40%, #020202 100%);
  background-size: 200% 200%;
  animation: bgShift 18s linear infinite;
}
</style>

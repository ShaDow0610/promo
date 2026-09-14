<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const rtlLocales = ['ar']

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
    dir: computed(() => rtlLocales.includes(locale.value) ? 'rtl' : 'ltr')
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>

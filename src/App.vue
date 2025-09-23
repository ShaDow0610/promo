<template>
  <div class="min-h-screen bg-[#0b0b0c] text-white">
    <AppNavbar />
    <main class="pt-20">
      <RouterView />
    </main>
  </div>
</template>
<script setup>
import AppNavbar from './components/AppNavbar.vue';

</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>

<script setup>
import { defineAsyncComponent } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import BookmakersSection from '../components/BookmakersSection.vue';
import howItWorksSection from '../components/howItWorksSection.vue';
import ClientResults from '../components/ClientResults.vue';
import CallToAction from '../components/CallToAction.vue';
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
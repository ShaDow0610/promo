<template>
    <nav ref="navRef" class="fixed top-0 inset-x-0 z-40 transition-transform duration-300 will-change-transform"
        :class="hideNav ? '-translate-y-full' : 'translate-y-0'">
        <div class="mx-auto max-w-6xl px-4">
            <div class="mt-3 mb-2 bg-black/40 backdrop-blur border border-white/10 rounded-xl px-3 sm:px-2 py-1.5">
                <div class="flex items-center justify-between">
                    <!-- Brand -->
                    <NuxtLink to="/" class="flex items-center gap-2 group">
                        <span
                            class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-300/90 group-hover:bg-yellow-200 transition"></span>
                        <span class="font-semibold tracking-wide text-sm sm:text-base">
                            {{ t('heroSection.brand') }}
                        </span>
                    </NuxtLink>

                    <!-- Desktop links -->
                    <div class="hidden md:flex items-center gap-1.5">
                        <NuxtLink to="/" class="nav-link" active-class="!text-white !bg-white/10 !border-white/10">
                            Acceuille</NuxtLink>
                        <NuxtLink to="/hacks" class="nav-link" active-class="!text-white !bg-white/10 !border-white/10">
                            Nos hacks</NuxtLink>
                        <NuxtLink to="/about" class="nav-link" active-class="!text-white !bg-white/10 !border-white/10">
                            À propos</NuxtLink>
                        <NuxtLink to="/contact" class="nav-link"
                            active-class="!text-white !bg-white/10 !border-white/10">Contact</NuxtLink>
                    </div>

                    <!-- Right: language + burger -->
                    <div class="flex items-center  gap-2">
                        <!-- Lang -->
                        <div>
                            <label class="sr-only" for="lang">{{ t('heroSection.aria.langSelect') }}</label>
                            <select id="lang"
                                class=" sm:block bg-black/30 backdrop-blur border border-gray-700/70 text-xs sm:text-sm rounded-lg px-2 py-1 focus:outline-none focus:border-yellow-400/80 text-gray-200"
                                :value="locale" @change="change($event.target.value)"
                                :aria-label="t('heroSection.aria.langSelect')">
                                <option value="fr">{{ t('heroSection.lang.fr') }}</option>
                                <option value="en">{{ t('heroSection.lang.en') }}</option>
                                <option value="es">{{ t('heroSection.lang.es') }}</option>
                                <option value="ru">{{ t('heroSection.lang.ru') }}</option>
                                <option value="ae">{{ t('heroSection.lang.ar') }}</option>
                                <option value="az">{{ t('heroSection.lang.az') }}</option>
                                <option value="in">{{ t('heroSection.lang.hi') }}</option>
                                <option value="so">{{ t('heroSection.lang.so') }}</option>
                                <option value="tr">{{ t('heroSection.lang.tr') }}</option>
                                <option value="pt">{{ t('heroSection.lang.pt') }}</option>
                            </select>
                        </div>
                        <!-- Mobile toggle -->
                        <button
                            class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15"
                            @click="navOpen = !navOpen" :aria-expanded="navOpen ? 'true' : 'false'" aria-label="Menu">
                            <i class="fa-solid" :class="navOpen ? 'fa-xmark' : 'fa-bars'"></i>
                        </button>
                    </div>
                </div>

                <!-- Mobile menu -->
                <transition name="fadeFast">
                    <div v-if="navOpen" class="md:hidden mt-2 grid grid-cols-2 gap-2">
                       <NuxtLink to="/" class="nav-pill" @click="navOpen = false"> Acceuille
                        </NuxtLink>
                       <NuxtLink to="/hacks" class="nav-pill" @click="navOpen = false">Nos hacks
                        </NuxtLink>
                        <NuxtLink to="/about" class="nav-pill" @click="navOpen = false">À propos
                        </NuxtLink>
                        <NuxtLink to="/contact" class="nav-pill" @click="navOpen = false">Contact
                        </NuxtLink>
                    </div>
                </transition>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const { t, locale, setLocale } = useI18n()
const localePath = useLocalePath()

const navRef = ref(null)
const navOpen = ref(false)
const hideNav = ref(false)
let lastY = 0
const SCROLL_DELTA = 8

function change(next) { setLocale(next) }

function handleScroll() {
    const y = window.scrollY || 0
    const diff = Math.abs(y - lastY)
    if (diff > SCROLL_DELTA) {
        hideNav.value = (y > lastY) && y > 24
        lastY = y
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
    @apply px-3 py-1.5 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition;
}

.nav-pill {
    @apply w-full px-3 py-2 rounded-lg text-sm text-white/90 bg-white/10 border border-white/10 text-left;
}

.fadeFast-enter-active,
.fadeFast-leave-active {
    transition: opacity .12s ease
}

.fadeFast-enter-from,
.fadeFast-leave-to {
    opacity: 0
}
</style>
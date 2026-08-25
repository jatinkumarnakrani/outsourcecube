<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { HomePageSection } from '@/router/routes'
import { useWebsiteStore } from "@/stores/website"
import DesktopNavigationBar from "@/layout/DesktopNavigationBar.vue";
import MobileNavigationBar from "@/layout/MobileNavigationBar.vue";

const websiteStore = useWebsiteStore();
const website = computed(() => websiteStore.content);
const contact:any = HomePageSection.find((s) => s.id === 'contact');

const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <!-- <header class="sticky top-0 z-50 border-b border-white/10 bg-brand-deep backdrop-blur-xl"> -->
    <header :class="[
      'sticky top-0 z-50 transition-all duration-300',
      isScrolled ? 'backdrop-blur-xl border-white/10 shadow-xl bg-white' : 'bg-transparent'
    ]">
        <nav class="container-shell flex h-20 items-center justify-between gap-6" :class="{'border-b border-sky-100':!isScrolled}">
            <RouterLink :to="'/'" :class="['flex','items-center','gap-3']">
                <img class="brand-logo" :src="websiteStore.getImagePath(website?.brand.logoImage)" :alt="website?.brand.logoAlt" />
            </RouterLink>
            <DesktopNavigationBar />
            <MobileNavigationBar />
        </nav>
    </header>
</template>

<style scoped></style>

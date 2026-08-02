<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import { ShieldCheck, ArrowRight, LayoutGrid } from '@lucide/vue';
import { HomePageSection, contactUs } from '@/router/routes'
import FloatingCube from '@/components/commen/Floatingcube.vue';

const websiteStore = useWebsiteStore();
const hero = computed(() => websiteStore.content.pages.home.hero);
const services:any = HomePageSection.find((s) => s.id === 'services');

const props = defineProps({
  id: String,
})

function getImagePath(name: string): string {
  return `${import.meta.env.BASE_URL}images/${name}`
}
</script>
<template>
    <section class="relative overflow-hidden pt-14 sm:pt-20 pb-0">
        <div class="container-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div class="max-w-3xl">
                <div class="chip mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold">
                    <ShieldCheck class="h-4 w-4 text-brand" />
                    {{ hero.badge }}
                </div>
                <h1 class="font-display text-5xl font-extrabold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl">
                    {{ hero.headline.accent }}
                    <span class="block text-brand-deep">{{ hero.headline.outline }}</span>
                </h1>
                <p class="mt-7 max-w-2xl text-lg leading-8 text-muted">
                    {{ hero.intro }}
                </p>
                <div class="mt-9 flex flex-col gap-4 sm:flex-row">
                    <RouterLink :to="contactUs[0].path" :class="['inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-7 py-4 text-sm font-extrabold text-white shadow-lift transition hover:-translate-y-0.5']">
                        {{ hero.conversection }}
                        <ArrowRight class="h-4 w-4" />
                    </RouterLink>
                    <RouterLink :to="services.path" :class="['inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-7 py-4 text-sm font-extrabold text-brand-deep transition hover:border-brand hover:text-brand']">
                        {{hero.services }}
                        <LayoutGrid class="h-4 w-4" />
                    </RouterLink>
                </div>
            </div>
            <div class="hero-figure">
                <div class="person relative flex justify-center" aria-hidden="true">
                    <!-- Floating shapes -->
                    <FloatingCube
                        top="5%"
                        left="0"
                        :size="44"
                        :color="['#a78bfa', '#818cf8']"
                        :animation-delay="-5"
                        :classNames="['shape-float-a']"
                    />
                    <FloatingCube
                        top="15%"
                        right="5%"
                        :size="28"
                        :color="['#38bdf8', '#0ea5e9']"
                        :animation-delay="-5"
                        :classNames="['shape-float-b']"
                    />
                    <FloatingCube
                        bottom="20%"
                        left="5%"
                        :size="42"
                        :color="['#34d399', '#34d399']"
                        :animation-delay="-5"
                        :classNames="['shape-float-c']"
                    />
                    <FloatingCube
                        bottom="10%"
                        right="8%"
                        :size="40"
                        :color="['#f472b6', '#ec4899']"
                        :animation-delay="-3"
                        :classNames="['shape-float-a']"
                    />
                    <FloatingCube
                        top="50%"
                        left="-2%"
                        :size="36"
                        :color="['#fbbf24']"
                        :animation-delay="-5"
                        :classNames="['shape-float-b']"
                    />
                    <FloatingCube
                        top="35%"
                        right="2%"
                        :size="30"
                        :color="['#a78bfa']"
                        :animation-delay="-2"
                        :classNames="['shape-float-c']"
                    />
                    <img
                        :src="getImagePath(hero.bannerImg)"
                        alt="Hero Image"
                        class="hero-image w-full max-w-md h-auto object-cover scale-x-[-1]"
                    />
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden border-y border-line bg-brand-deep py-4 text-white">
            <!-- Left fade -->
            <div class="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
            <div class="marquee-track flex w-max gap-5 text-xs font-extrabold uppercase tracking-[0.2em] text-white/88">
                <span class="flex items-center gap-5" v-for="(item, index) in [...hero.ticker, ...hero.ticker, ...hero.ticker]" :key="`${item}-${index}`">
                    <b class="text-accent">+</b> {{ item }}
                </span>
            </div>
            <!-- Right fade -->
            <div class="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>
    </section>
</template>
<style scoped>
</style>
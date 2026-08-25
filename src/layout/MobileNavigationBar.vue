<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useWebsiteStore } from "@/stores/website";
import { HomePageSection, hipaaCompliance, contactUs, services } from "@/router/routes";
import NavDropdown from './NavDropdown.vue';
import * as LucideIcons from '@lucide/vue';

import { ref } from "vue";

const websiteStore = useWebsiteStore();
const { activeTab } = storeToRefs(websiteStore) // activeTab is now a reactive ref

const isMenuOpen = ref(false);
</script>
<template>
    <!-- Mobile hamburger -->
    <button class="lg:hidden inline-block" @click="isMenuOpen = !isMenuOpen">
        <svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="33" height="3.71429" rx="1.85714" fill="#F5A623"></rect>
            <rect y="22.2857" width="33" height="3.71429" rx="1.85714" fill="#F5A623"></rect>
            <rect x="9" y="11.1429" width="24" height="3.71429" rx="1.85714" fill="#5DCFCF"></rect>
        </svg>
    </button>

    <div :class="['fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col lg:hidden gap-6 text-gray-800 transition-all duration-500', isMenuOpen ? 'translate-x-0' : '-translate-x-full']">
        <button class="absolute top-4 right-4" @click="isMenuOpen = false"><component :is="(LucideIcons as Record<string, any>)['X']" class="h-8 w-8 text-gray-500" /></button>

        <div class="flex-1 overflow-y-auto overflow-x-hidden py-10 px-5 space-y-6">
            <div class="pt-7">
                <template v-for="link in HomePageSection.filter((l) => l.showInNav === true)">
                    <RouterLink :to="link.path" @click="isMenuOpen = false" :class="['flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group relative text-slate-400 hover:text-slate-400 hover:bg-white/5',{ active: link.id === activeTab }]">
                        <component :is="(LucideIcons as Record<string, any>)[link.menuIcon]" class="h-4 w-4" />
                        {{ link.label}}
                    </RouterLink>
                </template>

                <NavDropdown title="Our Services" :services="services" v-model:isMainMenuOpen="isMenuOpen" />

                <RouterLink :to="hipaaCompliance[0]?.path ?? ''" @click="isMenuOpen = false" :class="['flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group relative text-slate-400 hover:text-slate-400 hover:bg-white/5',{active: activeTab === 'hipaaCompliance'}]">
                    <component :is="(LucideIcons as Record<string, any>)[hipaaCompliance[0]?.meta?.menuIcon as string]" class="h-4 w-4" />
                    {{ hipaaCompliance[0]?.name}}
                </RouterLink>
                <RouterLink :to="contactUs[0]?.path ?? ''" @click="isMenuOpen = false" :class="['mt-1 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lift']">
                    <component :is="(LucideIcons as Record<string, any>)[contactUs[0]?.meta?.menuIcon as string]" class="h-4 w-4" />
                    {{ contactUs[0]?.name}}
                </RouterLink>
            </div>
        </div>
    </div>
</template>

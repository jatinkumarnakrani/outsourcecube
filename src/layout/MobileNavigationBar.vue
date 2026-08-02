<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useWebsiteStore } from "@/stores/website";
import { ChevronRight, X } from "@lucide/vue";
import { HomePageSection, hipaaCompliance, contactUs, services } from "@/router/routes";

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

    <div :class="['fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col lg:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500', isMenuOpen ? 'translate-x-0' : '-translate-x-full']">
        <button class="absolute top-4 right-4" @click="isMenuOpen = false"><X class="h-8 w-8" /></button>

        <template v-for="link in HomePageSection.filter((l) => l.showInNav === true)">
            <RouterLink :to="link.path" @click="isMenuOpen = false" :class="['transition','hover:text-brand-deep',{ active: link.id === activeTab }]">{{ link.label}}</RouterLink>
        </template>

        <details class="group">
            <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                <span>Our Services</span>
                <ChevronRight class="w-5 h-5 text-gray-500 transition group-open:rotate-90" />
            </summary>
            <article class="px-4 pb-4">
                <ul class="flex flex-col gap-4 pl-2 mt-4">
                    <li v-for="service in services">
                        <RouterLink :key="service.name" :to="service.path">{{ service.name }}</RouterLink>
                    </li>
                </ul>
            </article>
        </details>

        <RouterLink :to="hipaaCompliance[0].path" @click="isMenuOpen = false" :class="['transition','hover:text-brand-deep',{active: activeTab === 'hipaaCompliance'}]">{{ hipaaCompliance[0].name}}</RouterLink>
        <RouterLink :to="contactUs[0].path" @click="isMenuOpen = false" :class="['inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lift']">
            <MessageCircle class="h-4 w-4" />
            {{ contactUs[0].name}}
        </RouterLink>
    </div>
</template>

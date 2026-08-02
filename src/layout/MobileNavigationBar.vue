<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useWebsiteStore } from "@/stores/website";
// import { MessageCircle } from 'lucide-vue-next';
import { MessageCircle } from "@lucide/vue";
import { HomePageSection, hipaaCompliance, contactUs, services } from "@/router/routes";

import { computed, ref } from "vue";

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

    <div
        :class="[
            'fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col lg:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500',
            isMenuOpen ? 'translate-x-0' : '-translate-x-full',
        ]"
    >
        <button class="absolute top-4 right-4" @click="isMenuOpen = false">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </button>

        <template v-for="link in HomePageSection.filter((l) => l.showInNav === true)">
            <RouterLink :to="link.path" @click="isMenuOpen = false" :class="['transition','hover:text-brand-deep',{ active: link.id === activeTab }]">{{ link.label}}</RouterLink>
        </template>
        <RouterLink :to="services[0].path" @click="isMenuOpen = false" :class="['transition','hover:text-brand-deep',{active: activeTab === 'services'}]">{{ services[0].name}}</RouterLink>
        <RouterLink :to="hipaaCompliance[0].path" @click="isMenuOpen = false" :class="['transition','hover:text-brand-deep',{active: activeTab === 'hipaaCompliance'}]">{{ hipaaCompliance[0].name}}</RouterLink>
        <RouterLink :to="contactUs[0].path" @click="isMenuOpen = false" :class="['inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lift']">
            <MessageCircle class="h-4 w-4" />
            {{ contactUs[0].name}}
        </RouterLink>
    </div>
</template>
<style scoped></style>

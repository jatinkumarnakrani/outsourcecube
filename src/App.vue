<script setup lang="ts">
import AppLayout from '@/layout/AppLayout.vue';
import { useWebsiteStore } from "@/stores/website";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({once: false});

const websiteStore = useWebsiteStore();
websiteStore.loadwebsiteContent();
</script>

<template>
    <div v-if="!websiteStore.initialized">Loading...</div>
    <AppLayout v-else />
</template>

<style scoped></style>

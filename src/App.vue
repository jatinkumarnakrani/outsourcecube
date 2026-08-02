<script setup lang="ts">
import AppLayout from '@/layout/AppLayout.vue';
import { useWebsiteStore } from "@/stores/website";
const websiteStore = useWebsiteStore();
websiteStore.loadwebsiteContent();
</script>

<template>
    <div v-if="!websiteStore.initialized">Loading...</div>
    <AppLayout v-else />
</template>

<style scoped></style>

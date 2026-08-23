<script setup lang="ts">
import { HomePageSection } from '@/router/routes'
import AOS from 'aos';
import { onMounted } from "vue";

// onMounted(async() => await AOS.refresh())
</script>

<template>
    <template v-for="section in HomePageSection">
        <component :id="section.id" :is="section.component"  />
    </template>
</template>

<style scoped></style>

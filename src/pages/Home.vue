<script setup lang="ts">
import { HomePageSection } from '@/router/routes'
</script>

<template>
    <template v-for="section in HomePageSection">
        <component :id="section.id" :is="section.component"  />
    </template>
</template>

<style scoped></style>

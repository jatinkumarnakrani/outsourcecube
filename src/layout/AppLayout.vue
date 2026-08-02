<script setup lang="ts">
import AppHeader from '@/layout/AppHeader.vue';
import AppFooter from '@/layout/AppFooter.vue';
</script>

<template>
    <div class="app-layout">
        <AppHeader />
        <main>
            <RouterView></RouterView>
        </main>
        <AppFooter />
    </div>
</template>

<style scoped></style>

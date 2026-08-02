<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import * as LucideIcons from '@lucide/vue';
import Badge from '@/components/commen/Badge.vue'

const props = defineProps({
  id: String,
})
const websiteStore = useWebsiteStore();
const serviceOverview = computed(() => websiteStore.content.pages.home.serviceOverview);
</script>
<template>
    <section :id="id" class="section-pad bg-surface">
        <div class="container-shell">
            <div class="mx-auto max-w-2xl text-center">
                <Badge :class="['bg-white text-brand-deep']">{{serviceOverview.badge}}</Badge>
                <h2 class="mt-5 font-display text-4xl font-extrabold text-ink sm:text-5xl">{{serviceOverview.title}}</h2>
                <p class="mt-5 text-base leading-7 text-muted">{{serviceOverview.description}}</p>
            </div>

            <div class="mt-12 grid gap-5 md:grid-cols-3">
                <article v-for="service in serviceOverview.cards" class="service-card rounded-[var(--radius)] p-7 transition hover:-translate-y-1 hover:shadow-lift" :key="service.title">
                    <span class="grid h-12 w-12 place-items-center rounded-2xl" :class="service.iconClass">
                        <component :is="(LucideIcons as Record<string, any>)[service.icon]" />
                    </span>
                    <h3 class="mt-6 text-xl font-extrabold text-brand-deep">{{ service.title }}</h3>
                    <p class="mt-3 leading-7 text-muted">{{ service.description }}</p>
                </article>
            </div>
        </div>
    </section>
</template>
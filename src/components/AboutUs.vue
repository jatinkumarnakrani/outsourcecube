<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import FloatingCube from "@/components/commen/Floatingcube.vue";
import Badge from '@/components/commen/Badge.vue'

const props = defineProps({
  id: String,
});

const websiteStore = useWebsiteStore();
const about = computed(() => websiteStore.content.pages.home.about);

function getImagePath(name: string): string {
  return `${import.meta.env.BASE_URL}images/${name}`
}
</script>

<template>
    <section :id="id" class="section-pad bg-hero-glow overflow-x-clip">
        <div class="container-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div class="text min-w-0">
                <Badge :class="['bg-surface text-brand-deep']">{{about.badge}}</Badge>
                <h2 class="mt-5 font-display text-4xl font-extrabold text-ink sm:text-5xl">{{ about.title }}</h2>
                <p class="mt-6 text-base leading-8 text-muted">{{ about.description }}</p>
            </div>
            <div class="relative min-w-0 min-h-[320px] sm:min-h-[420px] p-8">
                <img :src="getImagePath(about.image)" :alt="about.imageAlt" class="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-96 h-auto object-contain"/>
                <FloatingCube
                    top="-20px"
                    left="-20px"
                    :size="80"
                    color="#34d399"
                    :animation-delay="-5"
                />
            </div>
        </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import FloatingCube from "@/components/commen/Floatingcube.vue";
import whyChoosUsImg from "/images/about_us_man.png";
// const whyChoosUsImg = "/images/about_us_man.png";

const props = defineProps({
  id: String,
  sectionVisible: Boolean,
});

const websiteStore = useWebsiteStore();
const website = computed(() => websiteStore.content);
</script>

<template>
    <section :id="id" class="section-pad bg-hero-glow overflow-x-clip">
        <div class="container-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div class="text min-w-0">
                <span class="chip inline-flex rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em]">{{ website.about.badge }}</span>
                <h2 class="mt-5 font-display text-4xl font-extrabold text-ink sm:text-5xl">{{ website.about.title }}</h2>
                <p class="mt-6 text-base leading-8 text-muted">{{ website.about.description }}</p>
            </div>
            <div class="relative min-w-0 min-h-[320px] sm:min-h-[420px] p-8">
                <img :src="whyChoosUsImg" alt="" class="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-96 h-auto object-contain"/>
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
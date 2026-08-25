<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import * as LucideIcons from '@lucide/vue';
import FloatingCube from '@/components/commen/Floatingcube.vue';
import Badge from '@/components/commen/Badge.vue'


const props = defineProps({
  id: String,
})
const websiteStore = useWebsiteStore();
const whyUs = computed(() => websiteStore.content?.pages.home.whyUs);
</script>
<template>
    <section :id="id" class="section-pad bg-hero-glow">
        <div class="container-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div class="relative min-h-[420px]" data-aos="flip-right">
                <img :src="websiteStore.getImagePath(whyUs?.image)" :alt="whyUs?.imageAlt" class="max-w-[75%]" />
                <FloatingCube top="-20px" right="-20px" :size="80" color="#fab500"  :animation-delay="-5" />
            </div>
            <div data-aos="flip-left">
                <Badge :className="['bg-surface text-brand-deep']">{{whyUs?.badge}}</Badge>
                <h2 class="mt-5 font-display text-4xl font-extrabold text-ink sm:text-5xl">{{whyUs?.title }}</h2>
                <p class="mt-6 max-w-2xl text-base leading-8 text-muted">{{ whyUs?.description }}</p>

                <div class="mt-8 grid gap-4 sm:grid-cols-1">
                    <div v-for="feature in whyUs?.features" class="flex gap-4 p-3">
                        <component :is="(LucideIcons as Record<string, any>)[feature.icon]" :class="['mt-1','h-5','w-5','shrink-0','text-brand']" />
                        <div>
                            <h3 class="font-extrabold text-brand-deep">{{feature.title}}</h3>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </section>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { ServiceOfferingCard } from '@/types/website'
import Badge from '@/components/commen/Badge.vue'
import * as LucideIcons from '@lucide/vue';
import FloatingCube from '@/components/commen/Floatingcube.vue';

defineProps({
    badge: {
        type: String,
        required: false,
    },
    heading: {
        type: String,
        required: false,
    },
    cards: {
        type: Array as PropType<ServiceOfferingCard[]>,
        required: false,
        default: () => []
    }
})
</script>
<template>
    <section class="py-12 bg-surface sm:py-12 lg:py-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
                <Badge v-if="badge" :className="['bg-white text-brand-deep']" data-aos="zoom-out-up" data-aos-delay="100">{{badge}}</Badge>
                <h2 class="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-ink" data-aos="fade-up" data-aos-delay="300">{{ heading }}</h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-16">
                <div class="service-card reveal rounded-2xl bg-white border border-line shadow-card p-8 text-center justify-items-center transition hover:-translate-y-1 hover:shadow-lift" v-for="(card, index) in cards" :key="card.title" data-aos="zoom-in" :data-aos-delay="(index + 1) * 100">
                    <span class=" relative flex h-12 w-12 items-center justify-center rounded-xl text-brand-deep">
                        <!-- <component :is="(LucideIcons as Record<string, any>)[card.icon]" class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" /> -->
                        <FloatingCube
                            :color="card.cubeColor"
                            :animation-delay="-5"
                            :size="80"
                        />
                    </span>
                    <h3 class="mt-6 text-xl font-display font-bold text-ink">{{ card.title }}</h3>
                    <p class="mt-3 text-muted leading-relaxed">{{ card.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { ProcessStep } from '@/types/website'
import Badge from '@/components/commen/Badge.vue'
defineProps({
    badge: {
        type: String,
        required: false,
    },
    heading: {
        type: String,
        required: false,
    },
    steps: {
        type: Array as PropType<ProcessStep[]>,
        required: false,
        default: () => []
    }
})
</script>
<template>
    <section class="py-12 bg-surface sm:py-12 lg:py-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
                <Badge v-if="badge" :className="['bg-white text-brand-deep']" data-aos="zoom-out-up"  data-aos-delay="100">{{badge}}</Badge>
                <h2 class="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-ink" data-aos="fade-up" data-aos-delay="300">{{ heading }}</h2>
            </div>
            <ul class="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-5">
                <li class="flex-start group relative flex lg:flex-col" v-for="(step, index) in steps" data-aos="fade-up" :data-aos-delay="(index + 1) * 200">
                    <span v-if="steps.length-2 >= index"  class="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"></span>
                    <div class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:bg-brand-deep group-hover:bg-brand-deep group-hover:text-white">{{step.number}}</div>
                    <div class="ml-6 lg:ml-0 lg:mt-5">
                        <h3 class="text-lg font-display font-bold text-ink">{{ step.title }}</h3>
                        <p class="mt-2 text-sm text-muted leading-relaxed">{{step.description}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
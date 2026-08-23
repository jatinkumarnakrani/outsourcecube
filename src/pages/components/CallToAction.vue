<script setup lang="ts">
import * as LucideIcons from '@lucide/vue';
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";

defineProps({
    heading: {
        type: String,
        required: false,
    },
    introduction: {
        type: String,
        required: false,
    },
    callToActionButtonText: {
        type: String,
        required: false,
    },
    callToActionButtonURL: {
        type: String,
        required: false,
    },
    callToActionButtonIcon: {
        type: String,
        required: false,
        default: 'ArrowRight'
    }
})
</script>
<template>
    <div class="container-shell my-10" data-aos="fade-up" data-aos-delay="200">
        <div class="relative isolate overflow-hidden bg-brand-deep px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm">
            <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ heading }}</h2>

            <h3 class="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/68">
                {{ introduction }}
            </h3>

            <div class="mt-8 flex items-center justify-center gap-x-6">
                <a :href="callToActionButtonURL" target="_blank" class="inline-flex items-center justify-center gap-2 rounded-xl bg-coral px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:-translate-y-0.5 hover:shadow-lift">
                    {{ callToActionButtonText }}
                    <component :is="(LucideIcons as Record<string, any>)[callToActionButtonIcon]" class="h-4 w-4" />
                </a>
            </div>

            <!-- gradient svg -->
            <svg class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" viewBox="0 0 1024 1024" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7"></circle>
                <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stop-color="#f1e7e6"></stop>
                        <stop offset="1" stop-color="#ff4646"></stop>
                    </radialGradient>
                </defs>
            </svg>
        </div>
    </div>
</template>
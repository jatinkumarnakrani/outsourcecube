<script setup lang="ts">
import Badge from '@/components/commen/Badge.vue'
import { Check } from "@lucide/vue";
defineProps({
    badge: {
        type: String,
        required: false,
    },
    heading: {
        type: String,
        required: false,
    },
    paragraph: {
        type: String,
        required: false,
    },
    cards: {
        type: Array,
        required: false,
    }
})
</script>
<template>
    <section class="relative overflow-hidden bg-white py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-10">
            <div class="grid items-start gap-14 lg:grid-cols-12">
        
                <!-- Left Content -->
                <div class="lg:col-span-5">
                    <Badge v-if="badge" :class="['bg-surface text-brand-deep']">{{badge}}</Badge>
                    <h2 class="mt-6 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-ink max-w-xl">{{ heading }}</h2>
                    <p class="mt-6 max-w-xl text-lg leading-8 text-muted">{{ paragraph }}</p>
                </div>

                <!-- Right Benefits -->
                <div class="lg:col-span-7">
                    <ul class="grid gap-4 sm:grid-cols-2">
                        <li class="group rounded-xl border border-line bg-surface/60 p-5 transition hover:-translate-y-1 hover:border-brand hover:shadow-card" v-for="card in cards">
                            <div class="flex gap-4 items-center">
                                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-deep text-white text-sm">
                                    <Check class="p-1 shrink-0 text-white rounded-full" />
                                </span>
                                <span class="font-semibold text-ink">{{ card }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
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
    paragraph: {
        type: String,
        required: false,
    },
    cards: {
        type: Array,
        required: false,
        default: () => [],
    },
})
</script>
<template>
    <section class="bg-white py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-10">
            <div class="grid items-center gap-14 lg:grid-cols-12">
                <!-- Left Content -->
                <div class="lg:col-span-5" data-aos="fade-down">
                    <Badge v-if="badge" :className="['bg-surface text-brand-deep']">{{badge}}</Badge>
                    <h2 class="mt-6 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-ink max-w-xl"> {{ heading }}</h2>
                    <p class="mt-6 max-w-xl text-lg leading-8 text-muted">{{ paragraph }}</p>
                </div>


                <!-- Right Cards -->
                <div class="lg:col-span-7" data-aos="fade-down">
                    <div class="grid gap-5 sm:grid-cols-2">          
                        <div v-for="(card, index) in cards" class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-deep hover:shadow-lg" data-aos="flip-up" :data-aos-delay="((index +1) * 100)">
                            <div class="flex items-start justify-between gap-4">
                                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-sm font-display font-bold text-brand-deep group-hover:bg-brand-deep group-hover:text-white">{{ card.number}}</span>
                            </div>
                            <h3 class="mt-6 text-lg font-display font-bold text-ink">{{ card.heading}}</h3>
                            <p class="mt-2 text-sm text-muted leading-relaxed">{{ card.paragraph}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
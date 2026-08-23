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
    paragraph1: {
        type: String,
        required: false,
    },
    paragraph2: {
        type: String,
        required: false,
    }
})
</script>
<template>
    <!-- WHY IT MATTERS -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 bg-[url('/images/shape-08.svg')]">
        <div class="grid lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-5 reveal" data-aos="zoom-in-right">
                <Badge v-if="badge" :className="['bg-surface text-brand-deep']">{{badge}}</Badge>
                <h2 class="font-display font-extrabold text-3xl sm:text-4xl mt-5 leading-tight text-brand-deep">{{ heading }}</h2>
            </div>
            <div class="lg:col-span-7 reveal" data-aos="zoom-in-up">
                <p class="text-lg leading-relaxed text-muted">{{ paragraph1 }}</p>
                <p class="text-lg leading-relaxed text-muted mt-5">{{ paragraph2 }}</p>
            </div>
        </div>
    </section>
</template>
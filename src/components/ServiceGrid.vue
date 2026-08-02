<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import * as LucideIcons from '@lucide/vue';
import Badge from '@/components/commen/Badge.vue'

const props = defineProps({
    id: String,
})
const websiteStore = useWebsiteStore();
const expertise = computed(() => websiteStore.content.pages.home.expertise);

function getImagePath(name: string): string {
  return `${import.meta.env.BASE_URL}images/${name}`
}
</script>
<template>
    <section :id="id" class="section-pad bg-surface">
        <div class="container-shell">
            <div class="mx-auto max-w-2xl text-center">
                <Badge :class="['bg-white text-brand-deep']">{{expertise.badge}}</Badge>
                <h2 class="mt-5 font-display text-4xl font-extrabold text-ink sm:text-5xl">{{ expertise.title }}</h2>
                <p class="mt-5 leading-7 text-muted">{{ expertise.description }}</p>
            </div>

            <div class="mt-12 mx-auto max-w-7xl px-5 lg:px-8">
                <div class="expertise-layout">
                    <div class="grid gap-5">
                        <article v-for="service in expertise.items.filter((s: any) => s.side === 'left')" :key="service.id" class="service-card rounded-[var(--radius)] p-6" :style="{ '--arc': service.arcX + 'px' }">
                            <component :is="(LucideIcons as Record<string, any>)[service.icon]" class="h-7 w-7 text-brand" />
                            <h3 class="mt-5 font-extrabold uppercase tracking-[0.08em] text-brandDeep">{{ service.title }}</h3>
                            <p class="mt-3 text-sm leading-6 text-muted">{{ service.description }}</p>
                        </article>
                    </div>
                    <div class="expertise-art">
                        <img :src="getImagePath(expertise.image)" :alt="expertise.imageAlt" />
                    </div>
                    <div class="grid gap-5">
                        <article v-for="service in expertise.items.filter((s: any) => s.side === 'right')" :key="service.id" class="service-card rounded-[var(--radius)] p-6" :style="{ '--arc': service.arcX + 'px' }">
                            <component :is="(LucideIcons as Record<string, any>)[service.icon]" class="h-7 w-7 text-brand" />
                            <h3 class="mt-5 font-extrabold uppercase tracking-[0.08em] text-brandDeep">{{ service.title }}</h3>
                            <p class="mt-3 text-sm leading-6 text-muted">{{ service.description }}</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.expertise-layout {
    align-items: center;
    display: grid;
    gap: clamp(18px, 3vw, 38px);
    grid-template-columns: minmax(260px, 1fr) minmax(220px, 330px) minmax(
            260px,
            1fr
        );
}
@media (max-width: 1023px) {
    .expertise-layout {
        grid-template-columns: 1fr;
    }

    .expertise-art {
        order: -1;
    }
    
    .service-card {
        transform: none !important;
    }
}

.service-card {
    transform: translateX(var(--arc));
    transition: transform 0.25s ease, background 0.25s ease; 
    border: none !important;
}

.service-card:hover {
    background: linear-gradient(135deg, #0a2e2a, #0d7a6b);
    transform: translateX(var(--arc)) translateY(-6px) scale(1.02);
}

.service-card:hover svg {
    color: #f5a623;
    transform: scale(1.08);
}
.service-card:hover h3 {
    color: #f5a623;
}
.service-card:hover p {
    color: rgba(255, 255, 255, 0.82);
}


.expertise-art {
    display: flex;
    justify-content: center;
    position: relative;
}
.expertise-art::before {
    background: radial-gradient(
        circle,
        rgba(23, 184, 166, 0.22),
        rgba(245, 166, 35, 0.08) 52%,
        transparent 72%
    );
    border-radius: 999px;
    content: "";
    height: min(360px, 78vw);
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: min(360px, 78vw);
}
.expertise-art img {
    animation: center-float 5s ease-in-out infinite alternate;
    max-width: min(360px, 80vw);
    position: relative;
    width: 100%;
    z-index: 1;
}
@keyframes center-float {
    0% {
        transform: translateY(0) rotate(-1.5deg);
    }
    100% {
        transform: translateY(-22px) rotate(1.5deg);
    }
}
@media (prefers-reduced-motion: reduce) {
    .service-card,
    .service-icon,
    .expertise-art img {
        animation: none;
        transition: none;
    }
}
</style>
<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import { CheckCircle, LockKeyhole, WalletCards, UsersRound, IdCardLanyard } from '@lucide/vue';
import * as LucideIcons from '@lucide/vue';
import whyChoosUsImg from "/images/why_choos_us_man.png";
import FloatingCube from '@/components/commen/Floatingcube.vue';


const props = defineProps({
  id: String,
  sectionVisible: Boolean
})
const websiteStore = useWebsiteStore();
const website = computed(() => websiteStore.content);
const icons = [CheckCircle, LockKeyhole, WalletCards, UsersRound, IdCardLanyard];
</script>
<template>
    <section :id="id" class="section-pad bg-hero-glow">
        <div class="container-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div class="relative min-h-[420px]">
                <img :src="whyChoosUsImg" alt="" />
                <FloatingCube top="-20px" right="-20px" :size="80" color="#fab500"  :animation-delay="-5" />
            </div>
            <div>
                <span class="chip inline-flex rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em]">{{ website?.whyUs?.eyebrow }}</span>
                <h2 class="mt-5 font-display text-4xl font-extrabold text-ink sm:text-5xl">{{ website?.whyUs?.title }}</h2>
                <p class="mt-6 max-w-2xl text-base leading-8 text-muted">{{ website?.whyUs?.description }}</p>

                <div class="mt-8 grid gap-4 sm:grid-cols-1">
                    <div v-for="feature in website?.whyUs?.features" class="flex gap-4 p-3">
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
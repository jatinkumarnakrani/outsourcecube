<script setup lang="ts">
import {type PropType } from 'vue'
import Badge from '@/components/commen/Badge.vue'
interface ImgProp {
  src?: string
  style?: Record<string, string | number>
  class?: string[]
  alt?: string
  imgSectionClass?: string[]
  firstDivClass?: string[]
}

defineProps({
    badge: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    intro: {
        type: String,
        required: true,
    },
    img: {
        type: Object as PropType<ImgProp>,
        required: false,
        default: () => ({}),
    },
})
</script>
<template>
    <section class="legal-hero">
        <div class="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden py-8">
            <div class="sm:block col-span-12 lg:col-span-6 self-center">
                <div class="w-full" data-v-b444fb2c="">
                    <img :src="img?.src" :style="img?.style" :class="img?.class"  />
                </div>
            </div>
            <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
                <Badge v-if="badge" :class="['border border-white/15 bg-white/10 text-mint']">{{badge}}</Badge>
                <h1 class="font-display font-extrabold leading-[1.05] text-[2.35rem] sm:text-5xl xl:text-[3.5rem] tracking-tight">{{ title}}</h1>
                <p class="text-base sm:text-lg leading-relaxed text-white/75 max-w-xl mx-auto lg:mx-0">{{ intro }}</p>
            </div>
        </div>
    </section>
</template>
<style scoped>
.legal-hero {
  position: relative;
  overflow: hidden;
  color: rgb(255, 255, 255);
  background:
    radial-gradient(circle at 18% 18%, rgb(140 232 219 / 0.28), transparent 24rem),
    radial-gradient(circle at 82% 20%, rgb(255 70 70 / 0.12), transparent 28rem),
    linear-gradient(120deg, rgb(30 181 171), rgb(10 75 72) 72%);
}

.legal-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgb(255 255 255 / 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 0.055) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(90deg, rgb(0 0 0 / 0.9), transparent 92%);
}

.legal-title {
  max-width: 980px;
  margin: 28px 0 0;
  color: rgb(255 255 255);
  font-family: Manrope, Inter, system-ui, sans-serif;
  font-size: clamp(54px, 8vw, 112px);
  font-weight: 900;
  line-height: 0.94;
  letter-spacing: 0;
}

.legal-subtitle {
  max-width: 720px;
  margin: 28px 0 0;
  color: rgb(255 255 255 / 0.78);
  font-size: clamp(17px, 2vw, 21px);
  line-height: 1.65;
}

.page-section {
  padding: clamp(70px, 9vw, 112px) 0;
  background:
    radial-gradient(circle at 92% 8%, rgb(140 232 219 / 0.26), transparent 28rem),
    rgb(231 249 246);
}

</style>

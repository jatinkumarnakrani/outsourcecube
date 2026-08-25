<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useWebsiteStore } from "@/stores/website";
import { HomePageSection, hipaaCompliance, contactUs, services } from '@/router/routes'
import * as LucideIcons from '@lucide/vue';

const websiteStore = useWebsiteStore();
const { activeTab } = storeToRefs(websiteStore) // activeTab is now a reactive ref


import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref<boolean>(false)
const activeIndex = ref<number>(0)
let closeTimer: ReturnType<typeof setTimeout> | null = null
const navRef = ref<HTMLElement | null>(null)

function handleClickOutside(e: MouseEvent) {
  if (navRef.value && !navRef.value.contains(e.target as Node)) isOpen.value = false
}

function openDropdown(): void {
    if (closeTimer) {
        clearTimeout(closeTimer)
        closeTimer = null
    }
    isOpen.value = true
}

function scheduleClose(): void {
    closeTimer = setTimeout(() => {
        isOpen.value = false
    }, 150)
}


onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))

</script>
<template>
    <div class="hidden items-center gap-8 text-sm font-semibold text-white/70 lg:flex">
        <template v-for="link in HomePageSection.filter((l) => l.showInNav === true)">
                <RouterLink :to="link.path" :class="['transition','hover:text-brand-deep group', 'text-brand-deep', 'relative',{ active: link.id === activeTab }]">
                    {{ link.label}}
                    <span class="absolute left-0 -bottom-1 h-0.5 w-full bg-brand-deep scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </RouterLink>
        </template>
        <div ref="navRef" class="relative"  @mouseenter="openDropdown" @mouseleave="scheduleClose">
            <button type="button" class="flex items-center gap-1 font-medium text-brand-deep relative hover:text-brand-deep group" @click="isOpen = !isOpen">
                Our Services
                <component :is="(LucideIcons as Record<string, any>)['ChevronDown']" class="h-4 w-4 transition-transform" :class="{ 'rotate-180': isOpen }" />
                <span class="absolute left-0 -bottom-1 h-0.5 w-full bg-brand-deep scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </button>

            <Transition
                enter-active-class="transition ease-out duration-150"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
            >
                <div v-if="isOpen" class="fixed left-1/2 top-20 w-181 -translate-x-1/2 rounded-2xl bg-hero-glow shadow-2xl" @mouseenter="openDropdown" @mouseleave="scheduleClose">
                    <div class="flex gap-x-4 gap-y-4 rounded-[1.6rem] justify-start items-stretch p-[1.2rem]">
                        <div class="flex p-4.8 gap-4">
                            <div class="nav_drop-covers w-80 relative">
                                <img
                                    v-for="(service, index) in services"
                                    :key="service.name as string + '-img'"
                                    :src="(service.meta?.icon as string) ?? undefined"
                                    class="img-cover absolute inset-0 w-full object-cover transition-opacity duration-300 self-center"
                                    :class="{ 'active opacity-100': activeIndex === index, 'opacity-0': activeIndex !== index }"
                                    alt=""
                                >
                            </div>
                            <div class="nav_drop-content flex flex-col flex-1 justify-start items-start pb-4">
                                <div class="nav_drop-links flex flex-col" bis_skin_checked="1">
                                    <RouterLink
                                        v-for="(service, index) in services"
                                        :key="service.name"
                                        :to="service.path"
                                        class="hover:bg-surface active:outline-none hover:outline-none rounded-[1.2rem] py-[1.2rem] px-[1.6rem] max-w-full inline-block"
                                        @click="isOpen = false"
                                        @mouseenter="activeIndex = index"
                                    >
                                        <span class="font-bold text-gray-900 mb-8">{{ service.name }}</span>
                                        <span class="mt-1 block max-w-xs text-sm text-gray-500">{{ service.meta?.description }}</span>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
        <RouterLink :to="hipaaCompliance[0]?.path ?? ''" :class="['transition','hover:text-brand-deep group', 'text-brand-deep', 'relative', {active: activeTab === 'hipaaCompliance'}]">
            {{ hipaaCompliance[0]?.name}}
            <span class="absolute left-0 -bottom-1 h-0.5 w-full bg-brand-deep scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </RouterLink>
    </div>
    <RouterLink :to="contactUs[0]?.path ?? ''" :class="['hidden lg:inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lift']">
        <component :is="(LucideIcons as Record<string, any>)[contactUs[0]?.meta?.menuIcon as string]" class="h-4 w-4" />
        {{ contactUs[0]?.name}}
    </RouterLink>
</template>
<style scoped>
</style>

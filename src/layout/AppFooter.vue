<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import { termsAndConditions, privacyPolicy, services } from '@/router/routes'

const websiteStore = useWebsiteStore();
const website = computed(() => websiteStore.content);
</script>

<template>
    <footer class="bg-brand-deep py-12 text-white">
        <div class="container-shell">
            <div class="grid gap-7 md:grid-cols-4">
                <div class="">
                    <RouterLink :to="'/'" :class="['inline-flex', 'items-center', 'gap-3']">
                        <img class="footer-logo" :src="websiteStore.getImagePath(website?.brand.logoImage)" :alt="website?.brand.logoAlt" />
                    </RouterLink>
                    <p class="mt-5 max-w-sm text-sm leading-7 text-white/68">{{ website?.footer.description }}</p>
                </div>
                <div>
                    <h3 class="text-sm font-extrabold uppercase tracking-[0.18em] text-accent border-b-1 border-accent pb-2 mb-2 inline-block">Services</h3>
                    <div class="mt-5 grid gap-3 text-sm text-white/68">
                        <template v-for="(service, listIndex) in services" :key="listIndex">
                            <RouterLink :to="service.path" :class="['hover:text-white']">
                                {{ service.name }}
                            </RouterLink>
                        </template>
                    </div>
                </div>
                <div class="md:justify-items-center">
                    <h3 class="text-sm font-extrabold uppercase tracking-[0.18em] text-accent border-b-1 border-accent pb-2 mb-2 inline-block md:block ">{{ website?.footer.socialMedia.title}}</h3>
                    <div class="flex items-center space-x-3 my-4">
                        <template v-for="(media, listIndex) in website?.footer.socialMedia.list" :key="listIndex">
                            <a :href="media.path" target="_blank" class="router-link-active router-link-exact-active hover:-translate-y-0.5 hover:shadow-lift">
                                <img :src="websiteStore.getImagePath(media.icon)" :alt="media.label" class="h-10 w-10" />
                            </a>
                        </template>
                    </div>
                </div>
                <div>
                    <div class="flex justify-center">
                        <img :src="websiteStore.getImagePath(website?.footer.treeimg)"  :alt="website?.footer.treeAltText"  class="w-20 h-20 object-contain flex-shrink-0" />
                    </div>
                    <div>
                        <p class="max-w-sm text-sm leading-7 text-white/68">
                            <span class="text-amber-400 font-semibold">Every tree matters. Every action counts.</span>
                        </p>
                        <p class="max-w-sm text-sm leading-7 text-white/68">Let's plant hope, protect nature, and leave a better planet for future generations.</p>
                    </div>
                </div>
            </div>
            <div class="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
                <p>© {{ new Date().getFullYear() }} {{ website?.footer.allRightsReserved }}</p>
                <div class="flex gap-5">
                    <RouterLink :to="privacyPolicy[0]?.path ?? ''" :class="['hover:text-white']">{{ privacyPolicy[0]?.name}}</RouterLink>
                    <RouterLink :to="termsAndConditions[0]?.path ?? ''" :class="['hover:text-white']">{{ termsAndConditions[0]?.name}}</RouterLink>
                </div>
            </div>
        </div>
    </footer>
</template>

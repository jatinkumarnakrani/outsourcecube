<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useWebsiteStore } from "@/stores/website";
import * as LucideIcons from '@lucide/vue';
import type { ContactUsPage } from '@/types/website'


const websiteStore = useWebsiteStore();
const contactUs = computed(() => websiteStore?.content?.pages.contactUs);
const options = computed( () => contactUs.value?.form.fields.serviceOptions);
const selected = defineModel<string[]>({ default: () => [] })

const open = ref(false);
const query = ref('');
const rootRef = ref<HTMLElement | null>(null)
const placeholder = ref("Select services…")


const filtered = computed(() => options.value?.filter((o) => o.toLowerCase().includes(query.value.toLowerCase())))
const isSelected = (opt: string): boolean => selected.value.some((s) => s === opt)

const toggle = (opt: string): void => {
  if (isSelected(opt)) {
    selected.value = selected.value.filter((s) => s !== opt)
  } else {
    selected.value = [...selected.value, opt]
  }
  open.value = false
}
const handleClickOutside = (e: MouseEvent): void => {
  if (rootRef.value && !rootRef.value.contains(e.target as Node)) {
    open.value = false
  }
}
onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>
<template>
    <div class="relative" ref="rootRef">
        <button type="button" @click="open = !open" class="mt-2 h-[52px] w-full rounded-2xl border border-line bg-paper px-4 py-4 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 transition flex flex-wrap items-center gap-1.5">
            <template v-if="selected.length">
                <span class="text-slate-400">{{ selected.length }} selected</span>
            </template>
            <span v-else class="text-slate-400 text-sm">{{ placeholder }}</span>
            <component :is="(LucideIcons as Record<string, any>)['ChevronDown']" class="ml-auto w-4 h-4 text-slate-400 shrink-0 transition-transform" :class="{ 'rotate-180': open }" />
        </button>
        <!-- Panel -->
        <div v-show="open" class="absolute z-20 mt-2 w-full rounded-2xl border border-line bg-paper shadow-lg overflow-hidden">
            <div class="p-2 border-b border-slate-100">
                <input
                    v-model="query"
                    type="text"
                    placeholder="Search…"
                    class="w-full rounded-2xl border border-line bg-paper px-3 py-1.5 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
                />
                <ul class="max-h-56 overflow-y-auto scrollbar-thin py-1">
                    <li
                        v-for="opt in filtered"
                        :key="opt"
                        @click="toggle(opt)"
                        class="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-brand"
                    >
                        <input
                            type="checkbox"
                            :checked="isSelected(opt)"
                            class="h-4 w-4 rounded border-slate-300 focus:ring-brand/10 accent-brand"
                            @click.stop="toggle(opt)"
                        />
                        <span class="text-slate-700">{{ opt }}</span>
                    </li>
                    <li v-if="!filtered?.length" class="px-3 py-4 text-sm text-slate-400 text-center">
                        No matches
                    </li>
                </ul>
                <div class="flex items-center justify-between px-3 py-2 border-t border-slate-100 text-xs">
                    <button type="button" @click="selected = []" class="text-slate-500 hover:text-slate-700">
                        Clear all
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
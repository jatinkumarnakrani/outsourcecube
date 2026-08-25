<script setup lang="ts">
import { ref} from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import * as LucideIcons from '@lucide/vue';
import { type RouteRecordRaw } from 'vue-router'

interface Props {
  title: string
  services: RouteRecordRaw[]
}

const props = defineProps<Props>()

const route = useRoute()
const isOpen = ref(false)
const panelId = `nav-panel-${Math.random().toString(36).slice(2, 9)}`

function toggle() {
  isOpen.value = !isOpen.value
}

// Smooth height animation without hardcoding a max-height
function onEnter(el: Element) {
  const element = el as HTMLElement
  element.style.height = '0px'
  requestAnimationFrame(() => {
    element.style.height = `${element.scrollHeight}px`
  })
}

function onAfterEnter(el: Element) {
  ;(el as HTMLElement).style.height = 'auto'
}

function onLeave(el: Element) {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight}px`
  requestAnimationFrame(() => {
    element.style.height = '0px'
  })
}

function isActive(path: string) {
  return route.path === path
}


const isMainMenuOpen = defineModel<boolean>('isMainMenuOpen', { default: false })

</script>

<template>
  <div>
    <button
        type="button"
        class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group text-slate-400 hover:text-slate-200 hover:bg-white/5"
        :aria-expanded="isOpen"
        :aria-controls="panelId"
        @click="toggle"
    >
        <component :is="(LucideIcons as Record<string, any>)['Briefcase']" class="h-4 w-4" />
        <span class="flex-1 text-left">{{ props.title }}</span>
        <component :is="(LucideIcons as Record<string, any>)['ChevronRight']" class="w-4 h-4 text-gray-500 transition-transform duration-200" :class="{ 'rotate-90': isOpen }" />
    </button>

    <Transition @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave">
      <div
        v-show="isOpen"
        :id="panelId"
        class="overflow-hidden transition-[height] duration-300 ease-in-out ml-6 mt-1 border-l border-slate-400/50 pl-3 space-y-0.5 text-slate-400"
      >
        <ul class="flex flex-col gap-4 pl-2 pb-2 px-4 text-sm">
          <li v-for="service in props.services" :key="service.path">
            <RouterLink
              :to="service.path"
              class="block text-slate-400 hover:text-gray-900 transition-colors flex gap-3"
              :class="{ 'text-gray-900 font-semibold': isActive(service.path) }"
              @click="isMainMenuOpen = false"
            >
                <component :is="(LucideIcons as Record<string, any>)[service.meta?.menuIcon as string]" class="h-4 w-4" />
                {{ service.name }}
                </RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>
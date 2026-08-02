<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import * as LucideIcons from '@lucide/vue';

const props = defineProps({
  id: String,
  sectionVisible: Boolean
})
const websiteStore = useWebsiteStore();
const contactUs = computed(() => websiteStore.content.pages.contactUs);
</script>
<template>
    <section :id="id" class="section-pad bg-surface">
      <div class="container-shell">
        <div class="grid overflow-hidden rounded-[calc(var(--radius)*1.4)] bg-white shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
          <div class="bg-brand-deep p-8 text-white sm:p-10 lg:p-12">
            <span class="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">{{ contactUs.badge }}</span>
            <h2 class="mt-6 font-display text-4xl font-extrabold sm:text-5xl"> {{ contactUs.title }}</h2>
            <p class="mt-5 leading-8 text-white/74">{{ contactUs.description }}</p>
            
            <div class="mt-10 space-y-5">
                <div class="flex gap-4" v-for="card in contactUs.cards">
                    <span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-accent">
                        <component :is="(LucideIcons as Record<string, any>)[card.icon]" class="h-5 w-5" />
                    </span>
                    <div>
                        <p class="font-extrabold">{{card.label}}</p>
                        <p class="mt-1 text-sm text-white/70">{{card.value}}</p>
                    </div>
                </div>
            </div>
          </div>

          <form class="grid gap-5 p-8 sm:grid-cols-2 sm:p-10 lg:p-12">
            <label class="block">
              <span class="text-xs font-extrabold uppercase tracking-[0.16em] text-muted">{{ contactUs.form.fields.firstname }}</span>
              <input class="mt-2 h-[52px] w-full rounded-2xl border border-line bg-paper px-4 py-4 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10" placeholder="John" type="text">
            </label>
            <label class="block">
              <span class="text-xs font-extrabold uppercase tracking-[0.16em] text-muted">{{ contactUs.form.fields.lastname }}</span>
              <input class="mt-2 h-[52px] w-full rounded-2xl border border-line bg-paper px-4 py-4 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10" placeholder="Doe" type="text">
            </label>
            <label class="block sm:col-span-2">
              <span class="text-xs font-extrabold uppercase tracking-[0.16em] text-muted">{{ contactUs.form.fields.email }}</span>
              <input class="mt-2 h-[52px] w-full rounded-2xl border border-line bg-paper px-4 py-4 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10" placeholder="john@company.com" type="email">
            </label>
            <label class="block sm:col-span-2">
              <span class="text-xs font-extrabold uppercase tracking-[0.16em] text-muted">{{ contactUs.form.fields.projectType }}</span>
              <select class="mt-2 h-[52px] w-full rounded-2xl border border-line bg-paper px-4 py-4 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10">
                <option>Select a service</option>
                <option v-for="s in contactUs.form.fields.serviceOptions" :key="s">{{ s }}</option>
              </select>
            </label>
            <label class="block sm:col-span-2">
              <span class="text-xs font-extrabold uppercase tracking-[0.16em] text-muted">{{ contactUs.form.fields.message }}</span>
              <textarea class="mt-2 min-h-36 w-full resize-y rounded-2xl border border-line bg-paper px-4 py-4 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10" placeholder="Tell us what your team needs help with..."></textarea>
            </label>
            <button class="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-extrabold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-brand-deep sm:col-span-2" type="button">
                {{ contactUs.form.fields.sendButton }}
                <component :is="(LucideIcons as Record<string, any>)['Send']" class="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <slot></slot>
    </section>
</template>
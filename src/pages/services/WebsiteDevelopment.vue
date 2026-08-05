<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import ShellHeroLegel from "@/pages/components/ShellHeroLegel.vue";
import WhyItMatters from "@/pages/components/WhyItMatters.vue";
import WhatWeOffer from "@/pages/components/WhatWeOffer.vue";
import WhyChooseUs from "@/pages/components/WhyChooseUs.vue";
import ProcessWithSteps from "@/pages/components/ProcessWithSteps.vue";
import CallToAction from "@/pages/components/CallToAction.vue";

const websiteStore = useWebsiteStore();
const website = computed(() => websiteStore.content.pages.service.websiteDevelopment);

function getImagePath(name: string): string {
  return `${import.meta.env.BASE_URL}images/${name}`
}
</script>
<template>
    <ShellHeroLegel
        :badge="website.badge"
        :title="website.title"
        :intro="website.intro"
        :img="{ src: getImagePath(website.bannerImg), alt: 'Illustration', class:['pe-4'], imgSectionClass:['order-first','w-1/2'] , firstDivClass:['w-1/2'] }"
    />
    <WhyItMatters 
        :badge="website.whyitMatters.badge"
        :heading="website.whyitMatters.heading"
        :paragraph1="website.whyitMatters.paragraph1"
        :paragraph2="website.whyitMatters.paragraph2"
    />
    <WhatWeOffer 
        :badge="website.whatWeOffer.badge"
        :heading="website.whatWeOffer.heading"
        :cards="website.whatWeOffer.cards"
    />
    <WhyChooseUs
        :badge="website.whyChooseUs.badge"
        :heading="website.whyChooseUs.heading"
        :paragraph="website.whyChooseUs.paragraph"
        :cards="website.whyChooseUs.cards"
    />
    <ProcessWithSteps 
        :badge="website.processWithSteps.badge"
        :heading="website.processWithSteps.heading"
        :steps="website.processWithSteps.steps"
    />
    <CallToAction 
        :heading="website.callToAction.title"
        :introduction="website.callToAction.intro"
        :callToActionButtonText="website.callToAction.button.label"
        :callToActionButtonURL="website.callToAction.button.link"
        :callToActionButtonIcon="website.callToAction.button.icon"
    />
</template>

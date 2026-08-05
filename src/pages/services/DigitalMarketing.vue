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
const digitalMarketing = computed(() => websiteStore.content.pages.service.digitalMarketing);

function getImagePath(name: string): string {
  return `${import.meta.env.BASE_URL}images/${name}`
}

const whyChooseUsDetails = {
  
};
</script>
<template>
    <ShellHeroLegel
        :badge="digitalMarketing.badge"
        :title="digitalMarketing.title"
        :intro="digitalMarketing.intro"
        :img="{ src: getImagePath(digitalMarketing.bannerImg), alt: 'Illustration', class:['pe-4'], imgSectionClass:['order-first','w-1/2'] , firstDivClass:['w-1/2'] }"
    />
    <WhyItMatters 
        :badge="digitalMarketing.whyitMatters.badge"
        :heading="digitalMarketing.whyitMatters.heading"
        :paragraph1="digitalMarketing.whyitMatters.paragraph1"
        :paragraph2="digitalMarketing.whyitMatters.paragraph2"
    />
    <WhatWeOffer 
        :badge="digitalMarketing.whatWeOffer.badge"
        :heading="digitalMarketing.whatWeOffer.heading"
        :cards="digitalMarketing.whatWeOffer.cards"
    />
    <WhyChooseUs
        :badge="digitalMarketing.whyChooseUs.badge"
        :heading="digitalMarketing.whyChooseUs.heading"
        :paragraph="digitalMarketing.whyChooseUs.paragraph"
        :cards="digitalMarketing.whyChooseUs.cards"
    />
    <ProcessWithSteps 
        :badge="digitalMarketing.processWithSteps.badge"
        :heading="digitalMarketing.processWithSteps.heading"
        :steps="digitalMarketing.processWithSteps.steps"
    />
    <CallToAction 
        :heading="digitalMarketing.callToAction.title"
        :introduction="digitalMarketing.callToAction.intro"
        :callToActionButtonText="digitalMarketing.callToAction.button.label"
        :callToActionButtonURL="digitalMarketing.callToAction.button.link"
        :callToActionButtonIcon="digitalMarketing.callToAction.button.icon"
    />
</template>

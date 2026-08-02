<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import ShellHeroLegel from "@/pages/components/ShellHeroLegel.vue";
import WhyItMatters from "@/pages/components/WhyItMatters.vue";
import WhatWeOffer from "@/pages/components/WhatWeOffer.vue";
import WhyChooseUs from "@/pages/components/WhyChooseUs.vue";
import ProcessWithSteps from "@/pages/components/ProcessWithSteps.vue";
import CallToAction from "@/pages/components/CallToAction.vue";
import WhoWeWorkWith from "@/pages/components/WhoWeWorkWith.vue";

const websiteStore = useWebsiteStore();
const socialMedia = computed(() => websiteStore.content.pages.service.socialMediaManagement);

function getImagePath(name: string): string {
  return `${import.meta.env.BASE_URL}images/${name}`
}

const whoWeWorkWithDetails = {
    
}
</script>
<template>
    <ShellHeroLegel
        :badge="socialMedia.badge"
        :title="socialMedia.title"
        :intro="socialMedia.intro"
        :img="{ src: getImagePath(socialMedia.bannerImg), alt: 'Illustration', class:['pe-4'], imgSectionClass:['order-first','w-1/2'] , firstDivClass:['w-1/2'] }"
    />
    <WhyItMatters 
        :badge="socialMedia.whyitMatters.badge"
        :heading="socialMedia.whyitMatters.heading"
        :paragraph1="socialMedia.whyitMatters.paragraph1"
        :paragraph2="socialMedia.whyitMatters.paragraph2"
    />
    <WhatWeOffer 
        :badge="socialMedia.whatWeOffer.badge"
        :heading="socialMedia.whatWeOffer.heading"
        :cards="socialMedia.whatWeOffer.cards"
    />
    <WhyChooseUs
        :badge="socialMedia.whyChooseUs.badge"
        :heading="socialMedia.whyChooseUs.heading"
        :paragraph="socialMedia.whyChooseUs.paragraph"
        :cards="socialMedia.whyChooseUs.cards"
    />
    <ProcessWithSteps 
        :badge="socialMedia.processWithSteps.badge"
        :heading="socialMedia.processWithSteps.heading"
        :steps="socialMedia.processWithSteps.steps"
    />
    <WhoWeWorkWith
        :badge="socialMedia.whoWeWorkWith.badge"
        :heading="socialMedia.whoWeWorkWith.heading"
        :paragraph="socialMedia.whoWeWorkWith.paragraph"
        :cards="socialMedia.whoWeWorkWith.cards"
    />
    <CallToAction 
        :heading="socialMedia.callToAction.title"
        :introduction="socialMedia.callToAction.title"
        :callToActionButtonText="socialMedia.callToAction.button.label"
        :callToActionButtonURL="socialMedia.callToAction.button.link"
        :callToActionButtonIcon="socialMedia.callToAction.button.icon"
    />
 
</template>
<style scoped></style>

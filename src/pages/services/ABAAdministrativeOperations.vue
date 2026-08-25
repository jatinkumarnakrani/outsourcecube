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
const aba = computed(() => websiteStore.content?.pages.service.abaAdministrativeOperations);
</script>
<template>
    <ShellHeroLegel
        :badge="aba?.badge ?? ''"
        :title="aba?.title ?? ''"
        :intro="aba?.intro ?? ''"
        :img="{ src: websiteStore.getImagePath(aba?.bannerImg), alt: 'Illustration', class:['pe-4'], imgSectionClass:['order-first','w-1/2'] , firstDivClass:['w-1/2'] }"
    />
    <WhyItMatters 
        :badge="aba?.whyitMatters.badge"
        :heading="aba?.whyitMatters.heading"
        :paragraph1="aba?.whyitMatters.paragraph1"
        :paragraph2="aba?.whyitMatters.paragraph2"
    />
    <WhatWeOffer 
        :badge="aba?.whatWeOffer.badge"
        :heading="aba?.whatWeOffer.heading"
        :cards="aba?.whatWeOffer.cards"
    />
    <WhyChooseUs
        :badge="aba?.whyChooseUs.badge"
        :heading="aba?.whyChooseUs.heading"
        :paragraph="aba?.whyChooseUs.paragraph"
        :cards="aba?.whyChooseUs.cards"
    />
    <ProcessWithSteps 
        :badge="aba?.processWithSteps.badge"
        :heading="aba?.processWithSteps.heading"
        :steps="aba?.processWithSteps.steps"
    />
    <CallToAction 
        :heading="aba?.callToAction.title"
        :introduction="aba?.callToAction.intro"
        :callToActionButtonText="aba?.callToAction.button.label"
        :callToActionButtonURL="aba?.callToAction.button.link"
        :callToActionButtonIcon="aba?.callToAction.button.icon"
    />
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import CallToAction from "@/pages/components/CallToAction.vue";
import ShellHeroLegel from "@/pages/components/ShellHeroLegel.vue";
import Contact from "@/components/Contact.vue";

const websiteStore = useWebsiteStore();
const contactUs = computed(() => websiteStore.content.pages.contactUs);

function getImagePath(name: string): string {
  return `${import.meta.env.BASE_URL}images/${name}`
}
</script>
<template>
    <ShellHeroLegel
        :badge="contactUs.heading.badge"
        :title="contactUs.heading.title"
        :intro="contactUs.heading.intro"
        :img="{ src: getImagePath(contactUs.heading.bannerImg), alt: 'Illustration', class:['lg:ms-auto lg:me-20', 'h-120', 'mx-auto d-block'], imgSectionClass:['order-first','w-1/2'] , firstDivClass:['w-1/2'] }"
    />
    <Contact id="contact-us" :sectionVisible="true">
        <CallToAction 
            :heading="contactUs.callToAction.title"
            :introduction="contactUs.callToAction.title"
            :callToActionButtonText="contactUs.callToAction.button.label"
            :callToActionButtonURL="contactUs.callToAction.button.link"
            :callToActionButtonIcon="contactUs.callToAction.button.icon"
        />
    </Contact>
</template>
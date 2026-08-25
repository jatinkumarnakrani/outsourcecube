// ---------- Shared / reusable shapes ----------

export interface CtaButton {
    label: string;
    link: string;
    icon: string;
}

export interface CallToAction {
    title: string;
    intro: string;
    button: CtaButton;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface ServiceOfferingCard {
    cubeColor: [string, string];
    title: string;
    description: string;
}

export interface WhyChooseUsBlock {
    badge: string;
    heading: string;
    paragraph: string;
    cards: string[];
}

export interface ProcessWithSteps {
    badge: string;
    heading: string;
    steps: ProcessStep[];
}

export interface WhyItMattersBlock {
    badge: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
}

export interface WhatWeOfferBlock {
    badge: string;
    heading: string;
    cards: ServiceOfferingCard[];
}

// ---------- Brand / Footer ----------

export interface Brand {
    name: string;
    logoImage: string;
    logoAlt: string;
}

export interface SocialMediaLink {
    icon: string;
    label: string;
    path: string;
}

export interface Footer {
    description: string;
    socialMedia: {
        title: string;
        list: SocialMediaLink[];
    };
    treeimg: string;
    treeAltText: string;
    allRightsReserved: string;
}

// ---------- Home page ----------

export interface HomeHero {
    bannerImg: string;
    badge: string;
    headline: {
        accent: string;
        outline: string;
    };
    introStrong: string;
    intro: string;
    conversection: string;
    services: string;
    ticker: string[];
}

export interface HomeServiceOverviewCard {
    title: string;
    description: string;
    icon: string;
    iconClass: string;
}

export interface HomeServiceOverview {
    badge: string;
    title: string;
    description: string;
    cards: HomeServiceOverviewCard[];
}

export interface HomeWhyUsFeature {
    title: string;
    icon: string;
}

export interface HomeWhyUs {
    backgroundWord: string;
    badge: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    features: HomeWhyUsFeature[];
}

export interface HomeExpertiseItem {
    id: number;
    title: string;
    description: string;
    icon: string;
    side: "left" | "right";
    arcX: number;
}

export interface HomeExpertise {
    badge: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    items: HomeExpertiseItem[];
}

export interface HomeAbout {
    badge: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
}

export interface HomePage {
    hero: HomeHero;
    serviceOverview: HomeServiceOverview;
    whyUs: HomeWhyUs;
    expertise: HomeExpertise;
    about: HomeAbout;
}

// ---------- HIPAA Compliance page ----------

export interface HipaaSafeguard {
    icon: string;
    title: string;
    text: string;
}

export interface HipaaCompliancePage {
    badge: string;
    title: string;
    intro: string;
    bannerImg: string;
    eyebrow: string;
    heading: string;
    description: string;
    safeguards: HipaaSafeguard[];
    process: {
        eyebrow: string;
        heading: string;
        steps: string[];
    };
}

// ---------- Privacy Policy / Terms pages ----------

export interface LegalSection {
    title: string;
    body: string;
}

export interface LegalPage {
    badge: string;
    title: string;
    intro: string;
    updated: string;
    contactLabel: string;
    sections: LegalSection[];
    notice: string;
}

// ---------- Service sub-pages ----------

export interface WhoWeWorkWithCard {
    number: string;
    heading: string;
    paragraph: string;
}

export interface ServiceDetailPage {
    badge: string;
    title: string;
    intro: string;
    bannerImg: string;
    whyitMatters: WhyItMattersBlock;
    whatWeOffer: WhatWeOfferBlock;
    whyChooseUs: WhyChooseUsBlock;
    processWithSteps: ProcessWithSteps;
    whoWeWorkWith?: {
        badge: string;
        heading: string;
        paragraph: string;
        cards: WhoWeWorkWithCard[];
    };
    callToAction: CallToAction;
}

export interface ServicePage {
    abaAdministrativeOperations: ServiceDetailPage;
    digitalMarketing: ServiceDetailPage;
    websiteDevelopment: ServiceDetailPage;
    socialMediaManagement: ServiceDetailPage;
}

// ---------- Contact Us page ----------

export interface ContactUsCard {
    icon: string;
    label: string;
    value: string;
}

export interface ContactUsPage {
    heading: {
        badge: string;
        title: string;
        intro: string;
        bannerImg: string;
    };
    badge: string;
    title: string;
    description: string;
    form: {
        fields: {
            firstname: string;
            lastname: string;
            email: string;
            projectType: string;
            message: string;
            serviceOptions: string[];
            sendButton: string;
        };
    };
    cards: ContactUsCard[];
    callToAction: CallToAction;
}

// ---------- Root ----------

export interface WebsitePages {
    home: HomePage;
    hipaaCompliance: HipaaCompliancePage;
    privacyPolicy: LegalPage;
    termsConditions: LegalPage;
    service: ServicePage;
    contactUs: ContactUsPage;
}

export interface WebsiteContent {
    brand: Brand;
    footer: Footer;
    pages: WebsitePages;
}
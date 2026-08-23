import { defineAsyncComponent, type Component } from 'vue'
import { type RouteRecordRaw } from 'vue-router'

import ABATherapyOperations from '/images/ABA_Therapy_Operations.png'
import socialMediaManagementIcon from '/images/Social_Media_Management_Icon_2.png'
import websiteDevelopmentIcon from '/images/Website_Development_Icon.png'
import digitalMarketingIcon from '/images/Digital_Marketing_Icon.png'

import { h } from 'vue'


export interface SectionConfig {
  id:        string
  label:     string
  path:      string
  component: Component
  showInNav: Boolean
  menuIcon:  string
}

export const hipaaCompliance: RouteRecordRaw[] = [
    {
        path: '/hipaa-compliance',
        name: 'HIPAA Compliance',
        component: () => import('@/pages/HipaaCompliance.vue'),
        meta: {
            menuIcon: 'ShieldCheck'
        }
    }
]
export const termsAndConditions: RouteRecordRaw[] = [
    {
        path: '/terms-and-conditions',
        name: 'Terms & Conditions',
        component: () => import('@/pages/TermsConditions.vue'),
    }
]
export const privacyPolicy: RouteRecordRaw[] = [
    {
        path: '/privacy',
        name: 'Privacy Policy',
        component: () => import('@/pages/PrivacyPolicy.vue'),
    }
]
export const contactUs: RouteRecordRaw[] = [
    {
        path: '/contact',
        name: 'Contact Us',
        component: () => import('@/pages/ContactUs.vue'),
        meta: {
            menuIcon: 'MessageCircle'
        }
    }
]
export const services: RouteRecordRaw[] = [
    {
        path: '/ABATherapyOperations',
        name: 'ABA Administrative & Operations',
        component: () => import('@/pages/services/ABAAdministrativeOperations.vue'),
        meta: {
            icon: ABATherapyOperations,
            description: 'Streamlining operations with reliable administrative support.',
            menuIcon: 'ClipboardList'
        }
    },
    {
        path: '/socialMediaManagement',
        name: 'Social Media Management',
        component: () => import('@/pages/services/SocialMediaManagement.vue'),
        meta: {
            icon: socialMediaManagementIcon,
            description: 'Building your brand with engaging digital content.',
            menuIcon: 'Share2'
        }
    },
    {
        path: '/digitalMarketing',
        name: 'Digital Marketing',
        component: () => import('@/pages/services/DigitalMarketing.vue'),
        meta: {
            icon: digitalMarketingIcon,
            description: 'Driving measurable growth through smart digital strategies.',
            menuIcon: 'Megaphone'
        }
    },
    {
        path: '/websiteDevelopment',
        name: 'Website Development',
        component: () => import('@/pages/services/WebsiteDevelopment.vue'),
        meta: {
            icon: websiteDevelopmentIcon,
            description: 'Building modern websites that drive business success.',
            menuIcon: 'Code'
        }
    }
]

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
    },
    ...hipaaCompliance,
    ...termsAndConditions,
    ...privacyPolicy,
    ...contactUs,
    ...services,
    {
        // Fallback for unknown routes
        path: '/:pathMatch(.*)*',
        redirect: '/PageNotFound',
    },
    {
        path: '/PageNotFound',
        name: 'Page not found',
        component: () => import('@/pages/PageNotFound.vue'),
    },
]

export const HomePageSection: SectionConfig[] = [
    {
        id: 'home',
        label: 'Home',
        path: '/',
        component:  defineAsyncComponent(() => import('@/components/Hero.vue')),
        showInNav: false,
        menuIcon: 'Home'
    },
    {
        id: 'serviceOverview',
        label: 'Our Expertise',
        path: '/#serviceOverview',
        component:  defineAsyncComponent(() => import('@/components/ServiceOverview.vue')),
        showInNav: true,
        menuIcon: 'Award'
    },
    {
        id: 'whyus',
        label: 'Why Us',
        path: '/#whyus',
        component:  defineAsyncComponent(() => import('@/components/WhyUs.vue')),
        showInNav: true,
        menuIcon: 'ThumbsUp'
    },
    {
        id: 'services',
        label: 'Areas of Expertise',
        path: '/#services',
        component:  defineAsyncComponent(() => import('@/components/ServiceGrid.vue')),
        showInNav: false,
        menuIcon: 'Home'
    },
    {
        id: 'about',
        label: 'About',
        path: '/#about',
        component:  defineAsyncComponent(() => import('@/components/AboutUs.vue')),
        showInNav: true,
        menuIcon: 'Info'
    },
    {
        id: 'contact',
        label: 'Contact Us',
        path: '/#contact',
        component:  defineAsyncComponent(() => import('@/components/Contact.vue')),
        showInNav: false,
        menuIcon: 'Home'
    }
]
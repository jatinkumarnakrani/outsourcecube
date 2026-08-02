import { defineAsyncComponent, type Component } from 'vue'
import { type RouteRecordRaw } from 'vue-router'

import ABATherapyOperations from '/images/ABA_Therapy_Operations.png'
import socialMediaManagementIcon from '/images/Social_Media_Management_Icon_2.png'
import websiteDevelopmentIcon from '/images/Website_Development_Icon.png'
import digitalMarketingIcon from '/images/Digital_Marketing_Icon.png'


export interface SectionConfig {
  id:        string
  label:     string
  path:      string
  component: Component
  showInNav: Boolean
}

export const hipaaCompliance: RouteRecordRaw[] = [
    {
        path: '/hipaa-compliance',
        name: 'HIPAA Compliance',
        component: () => import('@/pages/HipaaCompliance.vue'),
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
    }
]
export const services: RouteRecordRaw[] = [
    {
        path: '/ABATherapyOperations',
        name: 'ABA Administrative & Operations',
        component: () => import('@/pages/services/ABAAdministrativeOperations.vue'),
        props: {
            icon: ABATherapyOperations,
            description: 'DevDort offers unparalleled Executive Search services, connecting you with elite......'
        }
    },
    {
        path: '/socialMediaManagement',
        name: 'Social Media Management',
        component: () => import('@/pages/services/SocialMediaManagement.vue'),
        props: {
            icon: socialMediaManagementIcon,
            description: 'Simplify your payroll processes and ensure compliance with DevDort\u2019s comprehensive.....'
        }
    },
    {
        path: '/digitalMarketing',
        name: 'Digital Marketing',
        component: () => import('@/pages/services/DigitalMarketing.vue'),
        props: {
            icon: digitalMarketingIcon,
            description: 'DevDort offers unparalleled Executive Search services, connecting you with elite......'
        }
    },
    {
        path: '/websiteDevelopment',
        name: 'Website Development',
        component: () => import('@/pages/services/WebsiteDevelopment.vue'),
        props: {
            icon: websiteDevelopmentIcon,
            description: 'At DevDort, we recognize that every business has unique staffing needs that can fluctuate.....'
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
        showInNav: false
    },
    {
        id: 'serviceOverview',
        label: 'Our Expertise',
        path: '/#serviceOverview',
        component:  defineAsyncComponent(() => import('@/components/ServiceOverview.vue')),
        showInNav: true
    },
    {
        id: 'whyus',
        label: 'Why Us',
        path: '/#whyus',
        component:  defineAsyncComponent(() => import('@/components/WhyUs.vue')),
        showInNav: true
    },
    {
        id: 'services',
        label: 'Areas of Expertise',
        path: '/#services',
        component:  defineAsyncComponent(() => import('@/components/ServiceGrid.vue')),
        showInNav: false
    },
    {
        id: 'about',
        label: 'About',
        path: '/#about',
        component:  defineAsyncComponent(() => import('@/components/AboutUs.vue')),
        showInNav: true
    },
    {
        id: 'contact',
        label: 'Contact Us',
        path: '/#contact',
        component:  defineAsyncComponent(() => import('@/components/Contact.vue')),
        showInNav: false
    }
]
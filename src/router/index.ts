import { createRouter, createWebHistory } from 'vue-router'
import {routes } from '@/router/routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // history: createWebHistory('/jatin/'),
    routes,
    scrollBehavior(to,_from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                // top: 80
            }
        }
        return { top: 0,  behavior: 'smooth' }
    },
})

export default router

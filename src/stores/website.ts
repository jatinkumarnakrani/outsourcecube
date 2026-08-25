import { defineStore } from "pinia";
import { ref } from 'vue';
import type { WebsiteContent } from '@/types/website'

export const useWebsiteStore = defineStore('website', () => {
    const content = ref<WebsiteContent | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)
    const initialized = ref(false)
    const activeTab = ref<string | null>(null)

    async function loadwebsiteContent() {
        if (content.value || loading.value) return
        loading.value = true
        error.value = null

        try {
            const response = await fetch(`${import.meta.env.BASE_URL}siteContent.json`)
            if (!response.ok) {
                throw new Error(`Unable to load website content: ${response.status} ${response.statusText}`)
            }

            const data: WebsiteContent = await response.json()
            content.value = data
            initialized.value = true
        } catch (err) {
            error.value = err instanceof Error ? err.message : String(err)
            console.error('Failed to load website content:', err)
            initialized.value = true 
        } finally {
            loading.value = false
        }
    }

    async function setActiveTab(tabName:string) {
        activeTab.value = tabName;
    }

    function getImagePath(name: string | undefined): string {
        return `${import.meta.env.BASE_URL}images/${name}`
    }

    return {
        content,
        loading,
        error,
        initialized,
        activeTab,
        loadwebsiteContent,
        setActiveTab,
        getImagePath
    }
})

export type WebsiteStore = ReturnType<typeof useWebsiteStore>
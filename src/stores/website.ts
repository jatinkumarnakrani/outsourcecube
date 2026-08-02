import { defineStore } from "pinia";
import { ref } from 'vue';

export const useWebsiteStore = defineStore('website', () => {
    const content = ref<Record<string, unknown> | null>(null)
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

            const data = await response.json()
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

    return {
        content,
        loading,
        error,
        initialized,
        activeTab,
        loadwebsiteContent,
        setActiveTab
    }
})

export type WebsiteStore = ReturnType<typeof useWebsiteStore>
<script setup lang="ts">
import ShellHeroLegel from "@/pages/components/ShellHeroLegel.vue";
import * as LucideIcons from '@lucide/vue';
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";
import { HomePageSection } from '@/router/routes'

const websiteStore = useWebsiteStore();
const website = computed(() => websiteStore.content);
const contact:any = HomePageSection.find((s) => s.id === 'contact');
</script>
<template>
    <ShellHeroLegel
        :badge="website?.pages.termsConditions.badge ?? ''"
        :title="website?.pages.termsConditions.title ?? ''"
        :intro="website?.pages.termsConditions.intro ?? ''"
    />
    <section class="page-section">
      <div class="container-shell legal-layout">
        <aside class="legal-sidebar">
          <small>Last updated</small>
          <strong>{{ website?.pages.termsConditions.updated }}</strong>
          <RouterLink :to="contact.path" >{{ website?.pages.termsConditions.contactLabel }}</RouterLink>
        </aside>

        <div class="policy-stack">
          <article class="policy-card" v-for="sec in website?.pages.termsConditions.sections">
            <h2>{{ sec.title }}</h2>
            <p>{{ sec.body }}</p>
          </article>
          <div class="notice-card">
            <component :is="(LucideIcons as Record<string, any>)['Info']" />
            <p>{{ website?.pages.termsConditions.notice }} </p>
          </div>
        </div>
      </div>
    </section>
</template>
<style scoped>
.page-section {
  padding: clamp(70px, 9vw, 112px) 0;
  background:
    radial-gradient(circle at 92% 8%, rgb(140 232 219 / 0.26), transparent 28rem),
    var(--color-surface);
}

.legal-layout {
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  gap: 48px;
  align-items: start;
  max-width: 980px;
  margin-inline: auto;
}



.legal-sidebar {
  position: sticky;
  top: 112px;
  border-radius: 24px;
  background: var(--color-brand-deep);
  color: var(--color-white);
  padding: 26px;
  box-shadow: 0 22px 56px rgb(10 75 72 / 0.18);
}

.legal-sidebar small {
  display: block;
  color: var(--color-mint);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.legal-sidebar strong {
  display: block;
  margin-top: 12px;
  font-size: 17px;
}

.legal-sidebar a {
  display: inline-flex;
  margin-top: 18px;
  color: var(--color-accent);
  font-weight: 900;
}



.policy-stack {
  display: grid;
  gap: 18px;
}


.info-card,
.policy-card,
.notice-card {
  border: 1px solid var(--color-line);
  border-radius: 24px;
  background: var(--color-white);
  box-shadow: 0 18px 45px rgb(10 75 72 / 0.08);
}


.info-card h3,
.policy-card h2 {
  margin: 22px 0 0;
  color: var(--color-ink);
  font-size: 19px;
  font-weight: 900;
  line-height: 1.3;
}

.info-card p,
.policy-card p,
.notice-card p {
  margin: 14px 0 0;
  color: var(--color-muted);
  font-size: 15.5px;
  line-height: 1.75;
}


.notice-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 24px;
}

.notice-card svg {
  color: var(--color-accent);
  flex: 0 0 auto;
  margin-top: 3px;
}

.policy-card {
  padding: clamp(26px, 4vw, 36px);
}

.policy-card h2 {
  margin: 0;
  font-family: Manrope, Inter, system-ui, sans-serif;
  font-size: clamp(25px, 4vw, 36px);
  line-height: 1.04;
  letter-spacing: 0;
  text-transform: uppercase;
}


@media (max-width: 920px) {
  .nav-links {
    display: none;
  }

  .card-grid,
  .process-panel,
  .legal-layout,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .legal-sidebar {
    position: static;
  }
}

@media (max-width: 640px) {
  .nav {
    min-height: 76px;
  }

  .brand-logo {
    max-width: 180px;
  }

  .nav-cta {
    padding: 11px 14px;
    font-size: 12px;
  }

  .legal-hero-inner {
    min-height: 360px;
  }

  .footer-bottom {
    flex-direction: column;
  }
}
</style>
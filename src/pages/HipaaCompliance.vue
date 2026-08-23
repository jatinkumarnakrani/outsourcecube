<script setup lang="ts">
import ShellHeroLegel from "@/pages/components/ShellHeroLegel.vue";
import * as LucideIcons from '@lucide/vue';
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/website";

const websiteStore = useWebsiteStore();
const hipaaCompliance = computed(() => websiteStore.content.pages.hipaaCompliance);

function getImagePath(name: string): string {
  return `${import.meta.env.BASE_URL}images/${name}`
}
</script>
<template>
    <ShellHeroLegel
        :badge="hipaaCompliance.badge"
        :title="hipaaCompliance.title"
        :intro="hipaaCompliance.intro"
        :img="{ src: getImagePath(hipaaCompliance.bannerImg), alt: 'Illustration', class:['pe-4'], imgSectionClass:['order-first','w-1/2'] , firstDivClass:['w-1/2'] }"
    />
    <section class="page-section">
        <div class="container-shell">
            <p class="section-kicker" data-aos="zoom-in-up" data-aos-delay="200">{{ hipaaCompliance.eyebrow }}</p>
            <h2 class="section-title" data-aos="zoom-in-up" data-aos-delay="300">{{ hipaaCompliance.heading }}</h2>
            <p class="section-copy" data-aos="zoom-in-up" data-aos-delay="400">{{ hipaaCompliance.description }}</p>

            <div class="card-grid">
                <article class="info-card" v-for="(card, index) in hipaaCompliance.safeguards" data-aos="flip-left" :data-aos-delay="(index+4) * 100">
                    <span class="icon-badge"><component :is="(LucideIcons as Record<string, any>)[card.icon]" /></span>
                    <h3>{{ card.title }}</h3>
                    <p>{{ card.text }}</p>
                </article>
            </div>
            <div class="process-panel" data-aos="fade-up" data-aos-delay="400">
                <div>
                    <p class="section-kicker">{{ hipaaCompliance.process.eyebrow}}</p>
                    <h2 class="section-title">{{ hipaaCompliance.process.heading}}</h2>
                </div>
                <ol class="process-list">
                    <li v-for="(step, index) in hipaaCompliance.process.steps">
                        <strong>{{ String(index+1).padStart(2, '0') }}</strong>
                        <span>{{ step }}</span>
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>
<style>

.page-section {
  padding: clamp(70px, 9vw, 112px) 0;
  background:
    radial-gradient(circle at 92% 8%, rgb(140 232 219 / 0.26), transparent 28rem),
    rgb(231 249 246);
}

.section-kicker {
  color: var(--color-brand);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.18em;
  margin: 0 0 16px;
  text-transform: uppercase;
}

.section-title {
  max-width: 780px;
  margin: 0;
  color: var(--color-ink);
  font-family: Manrope, Inter, system-ui, sans-serif;
  font-size: clamp(36px, 5vw, 68px);
  font-weight: 900;
  line-height: 1.02;
}

.section-copy {
  max-width: 760px;
  color: var(--color-muted);
  font-size: 17px;
  line-height: 1.8;
  margin: 22px 0 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 44px;
}

.info-card,
.policy-card,
.notice-card {
  border: 1px solid var(--color-line);
  border-radius: 24px;
  background: var(--color-white);
  box-shadow: 0 18px 45px rgb(10 75 72 / 0.08);
}

.info-card {
  padding: 28px;
}

.icon-badge {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 16px;
  background: rgb(140 232 219 / 0.42);
  color: var(--color-brand-deep);
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

.process-panel {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 36px;
  margin-top: 42px;
  border-radius: calc(24px * 1.25);
  background:
    radial-gradient(circle at 20% 0%, rgb(140 232 219 / 0.2), transparent 18rem),
    linear-gradient(135deg, var(--color-brand-deep), rgb(8 92 84));
  color: var(--color-white);
  padding: clamp(28px, 5vw, 48px);
  box-shadow: 0 28px 80px rgb(10 75 72 / 0.22);
}

.process-panel .section-kicker,
.process-panel .section-title {
  color: var(--color-white);
}

.process-panel .section-kicker {
  color: var(--color-mint);
}

.process-list {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.process-list li {
  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 16px;
  align-items: start;
  border: 1px solid rgb(255 255 255 / 0.12);
  border-radius: 18px;
  background: rgb(255 255 255 / 0.08);
  padding: 18px;
  color: rgb(255 255 255 / 0.82);
  line-height: 1.65;
}

.process-list strong {
  color: var(--color-accent);
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.12em;
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
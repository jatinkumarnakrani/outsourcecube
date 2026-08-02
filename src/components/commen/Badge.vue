<script setup lang="ts">
defineProps({
    class: {
        type: Array,
        required: false,
        default: []
    }
})
</script>
<template>
    <span class="eyebrow rounded-full px-4 py-2" :class="class">
        <slot></slot>
    </span>
</template>
<style scoped>
.eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}


.eyebrow::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: #FFC426;
    flex-shrink: 0;
}
</style>
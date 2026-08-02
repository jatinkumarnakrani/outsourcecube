<script setup lang="ts">
import { computed, ref, toRef, type CSSProperties } from 'vue'
import { useFloatingCube } from '@/composable/UseFloatingCube'

// Optional Pinia integration — uncomment to auto-pause for users who
// prefer reduced motion (see stores/uiPreferences.ts):
//
// import { storeToRefs } from 'pinia'
// import { useUiPreferencesStore } from '../stores/uiPreferences'

interface FloatingCubeProps {
  /** CSS position values, e.g. "-20px" or "10%". Omit any side you don't need. */
  top?: string
  right?: string
  bottom?: string
  left?: string
  /** Pixel size of the square canvas container. */
  size?: number
  /** Two (or more) hex/CSS colors for the gradient. Accepts an array or a "a, b" string. */
  color?: string[] | string
  /** Gradient angle in degrees. */
  angle?: number
  /** Three.js geometry size (world units, not pixels). */
  cubeSize?: number
  /** RoundedBoxGeometry segment count — higher is smoother but costs more. */
  segments?: number
  /** RoundedBoxGeometry corner radius. */
  radius?: number
  /** Seconds. Negative = start already mid-animation (like CSS animation-delay). Positive = wait before rotating. */
  animationDelay?: number
  rotationSpeedX?: number
  rotationSpeedY?: number
  /** Force-pause the rotation regardless of visibility. */
  paused?: boolean

  classNames?: string[] | string
}

const props = withDefaults(defineProps<FloatingCubeProps>(), {
  size: 300,
  color: () => ['#fab500', '#fab100'],
  angle: 135,
  cubeSize: 2,
  segments: 4,
  radius: 0.15,
  animationDelay: 0,
  rotationSpeedX: 0.005,
  rotationSpeedY: 0.008,
  paused: false,
  classNames: ''
})

const containerRef = ref<HTMLElement | null>(null)

function normalizeColors(color: string[] | string): string[] {
  if (Array.isArray(color)) return color
  return color
    .replace(/[[\]]/g, '')
    .split(',')
    .map((c) => c.trim())
    .filter(Boolean)
}

const colors = computed(() => normalizeColors(props.color))
const rotationSpeed = computed(() => ({ x: props.rotationSpeedX, y: props.rotationSpeedY }))

// const { reduceMotion } = storeToRefs(useUiPreferencesStore())
// const effectivePaused = computed(() => props.paused || reduceMotion.value)
const effectivePaused = toRef(props, 'paused')

useFloatingCube(containerRef, {
  size: toRef(props, 'size'),
  colors,
  angle: toRef(props, 'angle'),
  cubeSize: toRef(props, 'cubeSize'),
  segments: toRef(props, 'segments'),
  radius: toRef(props, 'radius'),
  animationDelay: toRef(props, 'animationDelay'),
  rotationSpeed,
  paused: effectivePaused,
})

const containerStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    width: `${props.size}px`,
    height: `${props.size}px`,
  }
  if (props.top !== undefined) style.top = props.top
  if (props.right !== undefined) style.right = props.right
  if (props.bottom !== undefined) style.bottom = props.bottom
  if (props.left !== undefined) style.left = props.left
  return style
})
</script>

<template>
  <div
    ref="containerRef"
    class="pointer-events-none absolute select-none [&>canvas]:block"
    :class="classNames"
    :style="containerStyle"
    aria-hidden="true"
  />
</template>
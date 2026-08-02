import { onMounted, onBeforeUnmount, watch, type Ref } from 'vue'
import * as THREE from 'three'
// Requires three >= 0.152. For older versions use:
// import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'

export interface FloatingCubeOptions {
  size: Ref<number>
  colors: Ref<string[]>
  angle: Ref<number>
  cubeSize: Ref<number>
  segments: Ref<number>
  radius: Ref<number>
  animationDelay: Ref<number>
  rotationSpeed: Ref<{ x: number; y: number }>
  /** External pause switch (e.g. driven by a Pinia "reduce motion" preference) */
  paused: Ref<boolean>
}

/**
 * Encapsulates a single self-contained Three.js scene rendering one
 * rotating rounded cube with a canvas-generated linear-gradient texture.
 * Designed to be mounted into a small absolutely-positioned container,
 * so many instances can coexist on one page cheaply.
 */
export function useFloatingCube(containerRef: Ref<HTMLElement | null>, options: FloatingCubeOptions) {
  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene | null = null
  let camera: THREE.PerspectiveCamera | null = null
  let cube: THREE.Mesh<RoundedBoxGeometry, THREE.MeshStandardMaterial> | null = null
  let texture: THREE.CanvasTexture | null = null

  let frameId = 0
  let lastTime = 0
  let pendingDelayMs = 0
  let isIntersecting = true
  let intersectionObserver: IntersectionObserver | null = null

  function createGradientTexture(colorStops: string[], angleDeg: number): THREE.CanvasTexture {
    const size = 256
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('2D context unavailable for gradient texture')

    const angle = (angleDeg * Math.PI) / 180
    const x1 = size / 2 - (Math.cos(angle) * size) / 2
    const y1 = size / 2 - (Math.sin(angle) * size) / 2
    const x2 = size / 2 + (Math.cos(angle) * size) / 2
    const y2 = size / 2 + (Math.sin(angle) * size) / 2

    const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
    const stops = colorStops.length > 1 ? colorStops : [colorStops[0], colorStops[0]]
    stops.forEach((color:any, i) => {
      gradient.addColorStop(i / (stops.length - 1), color)
    })

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)

    const tex = new THREE.CanvasTexture(canvas)
    tex.needsUpdate = true
    return tex
  }

  function buildGeometry(): RoundedBoxGeometry {
    return new RoundedBoxGeometry(
      options.cubeSize.value,
      options.cubeSize.value,
      options.cubeSize.value,
      options.segments.value,
      options.radius.value,
    )
  }

  function init() {
    const el = containerRef.value
    if (!el) return

    const width = options.size.value
    const height = options.size.value

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.set(3, 3, 5)
    camera.lookAt(0, 0, 0)

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 2))
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 10, 7)
    scene.add(light)

    texture = createGradientTexture(options.colors.value, options.angle.value)
    const material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.4 })
    const geometry = buildGeometry()
    cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // Mimic CSS animation-delay semantics:
    // negative delay -> jump forward as if already playing for |delay| seconds
    // positive delay -> wait before the rotation starts
    const delaySec = options.animationDelay.value
    if (delaySec < 0) {
      const preFrames = -delaySec * 60
      cube.rotation.x = options.rotationSpeed.value.x * preFrames
      cube.rotation.y = options.rotationSpeed.value.y * preFrames
      pendingDelayMs = 0
    } else {
      pendingDelayMs = delaySec * 1000
    }

    lastTime = performance.now()
    setupIntersectionObserver(el)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    frameId = requestAnimationFrame(tick)
  }

  function setupIntersectionObserver(el: Element) {
    if (typeof IntersectionObserver === 'undefined') return
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        isIntersecting = entries[0]?.isIntersecting ?? true
      },
      { threshold: 0 },
    )
    intersectionObserver.observe(el)
  }

  function handleVisibilityChange() {
    // no-op state holder; document.hidden is checked directly in tick()
  }

  function tick(now: number) {
    frameId = requestAnimationFrame(tick)
    const dt = now - lastTime
    lastTime = now

    if (!renderer || !scene || !camera || !cube) return

    // Skip work entirely when off-screen, tab hidden, or externally paused
    if (options.paused.value || !isIntersecting || document.hidden) return

    if (pendingDelayMs > 0) {
      pendingDelayMs -= dt
      renderer.render(scene, camera)
      return
    }

    // Normalize to "frame units at 60fps" so speed matches the original
    // per-frame increments regardless of the display's actual refresh rate.
    const frameUnits = dt / (1000 / 60)
    cube.rotation.x += options.rotationSpeed.value.x * frameUnits
    cube.rotation.y += options.rotationSpeed.value.y * frameUnits
    renderer.render(scene, camera)
  }

  function resize() {
    if (!renderer || !camera) return
    const width = options.size.value
    const height = options.size.value
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  function regenerateTexture() {
    if (!cube) return
    texture?.dispose()
    texture = createGradientTexture(options.colors.value, options.angle.value)
    cube.material.map = texture
    cube.material.needsUpdate = true
  }

  function regenerateGeometry() {
    if (!cube) return
    cube.geometry.dispose()
    cube.geometry = buildGeometry()
  }

  function dispose() {
    cancelAnimationFrame(frameId)
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    intersectionObserver?.disconnect()
    intersectionObserver = null

    if (cube) {
      cube.geometry.dispose()
      cube.material.map?.dispose()
      cube.material.dispose()
    }
    texture?.dispose()

    if (renderer) {
      renderer.dispose()
      if (containerRef.value?.contains(renderer.domElement)) {
        containerRef.value.removeChild(renderer.domElement)
      }
    }

    renderer = null
    scene = null
    camera = null
    cube = null
    texture = null
  }

  onMounted(init)
  onBeforeUnmount(dispose)

  watch(options.size, resize)
  watch([options.colors, options.angle], regenerateTexture, { deep: true })
  watch([options.cubeSize, options.segments, options.radius], regenerateGeometry)

  return { dispose }
}
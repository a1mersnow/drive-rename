<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()

const triggerRef = ref<HTMLButtonElement>()
const popupVisible = ref(false)

useEventListener('keydown', (e) => {
  if (e.key === 'Escape')
    close()
})

function close() {
  if (main.running)
    return
  popupVisible.value = false
  main.clearHelper()
}
</script>

<template>
  <button
    v-if="main.shouldShowEntry"
    ref="triggerRef"
    class="mt-2 min-h-61px w-60px flex flex-col items-center justify-center gap-y-1 rounded-lg px-2px py-6px text-primary-500 transition hover:bg-primary-500 hover:text-white"
    @click="popupVisible = true"
  >
    <i class="i-carbon:batch-job text-xl" />
    <span class="text-xs font-medium">重命名</span>
  </button>

  <!-- control popup -->
  <transition name="clip">
    <ControlPanel v-if="popupVisible" />
  </transition>

  <!-- visual drawer -->
  <transition name="fade-left">
    <PreviewPanel v-if="popupVisible" />
  </transition>

  <!-- visual drawer -->
  <transition name="fade">
    <div v-if="popupVisible" class="fixed inset-0 z-99 backdrop-blur-5" @click="close" />
  </transition>
</template>

<style>
.clip-enter-from, .clip-leave-to {
  clip-path: inset(0 100% 100% 0 round 8px);
}
.clip-enter-to, .clip-leave-from {
  clip-path: inset(0 0 0 0 round 8px);
}
.clip-enter-active, .clip-leave-active {
  transition: clip-path 0.3s ease;
}

.fade-left-enter-from, .fade-left-leave-to {
  opacity: 0;
  transform: translateX(10%);
}
.fade-left-enter-to, .fade-left-leave-from {
  opacity: 1;
  transform: none;
}
.fade-left-enter-active, .fade-left-leave-active {
  transition: opacity 0.3s, transform 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
</style>

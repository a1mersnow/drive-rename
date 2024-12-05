<script setup lang="ts">
const button = ref<HTMLElement>()
onMounted(() => {
  const el = button.value!.parentElement!
  el.style.cssText = `float: left; margin-right: 24px;`
})
</script>

<template>
  <button
    ref="button"
    class="my5 h9 flex items-center justify-center gap-x-2 border border-current rd-sm border-solid px5 text-#3181f9 lh-9 transition hover:bg-#3181f9/50 hover:text-white"
  >
    <i class="i-carbon:batch-job text-sm" />
    <span class="text-xs font-medium">重命名</span>
  </button>
</template>

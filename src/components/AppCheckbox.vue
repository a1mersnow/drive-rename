<script setup lang="ts">
withDefaults(defineProps<{
  disabled?: boolean
}>(), { disabled: false })

const checked = defineModel<boolean>({ required: true })
</script>

<template>
  <span
    :class="[
      checked ? 'i-carbon:checkbox-checked-filled' : 'i-carbon:checkbox',
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
    class="text-sm text-primary-600"
    @click="!disabled && (checked = !checked)"
  />
</template>

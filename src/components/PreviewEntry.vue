<script setup lang="ts">
const { newName, oldName, done, error } = defineProps<{
  oldName: string
  newName: string
  done: boolean
  error: boolean
}>()

const isSame = toRef(() => oldName === newName)

const checked = defineModel<boolean>()
</script>

<template>
  <li
    class="contents"
  >
    <span
      :class="[
        checked && newName && !isSame ? 'i-carbon:checkbox-checked-filled' : 'i-carbon:checkbox',
        isSame ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ]"
      class="text-sm text-purple-600"
      @click="checked = !checked"
    />
    <span :title="oldName" class="truncate">{{ oldName }}</span>
    <span v-if="!isSame" class="i-carbon:arrow-right justify-self-center text-purple-600" />
    <span v-else class="i-carbon:arrows-horizontal justify-self-center text-green-500" />
    <span :title="newName" class="truncate">{{ newName }} <span v-if="error">❌</span><span v-else-if="done">✅</span></span>
  </li>
</template>

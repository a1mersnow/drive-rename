<script setup lang="ts">
const { id, newName, oldName, done, error, showPick = false } = defineProps<{
  oldName: string
  id: string
  newName: string
  done: boolean
  error: boolean
  showPick: boolean
}>()

const emit = defineEmits<{
  pick: [id: string]
}>()

const isSame = toRef(() => oldName === newName)
const disabled = toRef(() => isSame.value || !newName)

const checked = defineModel<boolean>()
</script>

<template>
  <li
    class="contents"
  >
    <span
      :class="[
        checked && newName && !isSame ? 'i-carbon:checkbox-checked-filled' : 'i-carbon:checkbox',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ]"
      class="text-sm text-purple-600"
      @click="checked = !checked"
    />
    <span :class="disabled ? 'opacity-50' : ''" :title="oldName" class="truncate">
      {{ oldName }}
      <i
        v-if="showPick"
        class="i-carbon:pointer-text [vertical-align:-0.2em] inline-block cursor-pointer text-sm text-green-700"
        title="填充到剧名"
        @click="emit('pick', id)"
      />
    </span>
    <span v-if="!isSame" class="i-carbon:arrow-right justify-self-center text-purple-600" />
    <span v-else class="i-carbon:arrows-horizontal justify-self-center text-green-500" />
    <span :class="disabled ? 'opacity-50' : ''" :title="newName" class="truncate">
      {{ newName }}
      <span v-if="error">❌</span><span v-else-if="done">✅</span>
    </span>
  </li>
</template>

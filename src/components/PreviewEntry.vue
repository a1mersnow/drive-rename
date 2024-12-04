<script setup lang="ts">
const props = defineProps<{
  oldName: string
  id: string
  newName: string
  done: boolean
  error: boolean
  conflict: boolean
}>()

const emit = defineEmits<{
  pick: [id: string]
}>()

const isSame = toRef(() => props.oldName === props.newName)
const disabled = toRef(() => isSame.value || !props.newName)

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
      class="text-sm text-primary-600"
      @click="checked = !checked"
    />
    <span :title="oldName" class="truncate whitespace-pre">
      <span :class="disabled ? 'opacity-50' : ''">{{ oldName }}</span>
      <i
        class="i-carbon:pointer-text [vertical-align:-0.2em] inline-block cursor-pointer text-xs text-green-700"
        title="填充到剧名"
        @click="emit('pick', id)"
      />
    </span>
    <span v-if="!isSame" class="i-carbon:arrow-right justify-self-center text-primary-600" />
    <span v-else class="i-carbon:arrows-horizontal justify-self-center text-green-500" />
    <span :class="[disabled ? 'opacity-50' : '', conflict ? 'text-red-500 font-bold' : '']" :title="newName" class="truncate whitespace-pre">
      {{ newName }}
      <span v-if="error">❌</span><span v-else-if="done">✅</span>
    </span>
  </li>
</template>

<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()

function handleCheckChange(fileId: string, checked: boolean) {
  if (checked)
    main.uncheckList.add(fileId)
  else
    main.uncheckList.delete(fileId)
}

function manualPickName(id: string) {
  if (id) {
    const found = main.videoList.find(x => x.file_id === id)
    if (found)
      main.prefix = found.name.replace(`.${found.file_extension}`, '')
  }
}

const { loadingDots } = useLoadingDots()
</script>

<template>
  <div
    class="custom-scrollbar fixed bottom-2 right-0 top-2 z-100 w-[max(500px,50vw)] overflow-y-auto border-y-3px border-l-3px border-primary-600 rounded-l-lg border-solid bg-white px-4 py-3 font-mono shadow"
  >
    <div v-if="main.listLoading" class="absolute inset-0 z-2 flex flex-col items-center justify-center bg-white/80 text-primary-600">
      <div class="i-carbon:circle-packing animate-spin text-4xl" />
      <p class="py-3 text-sm">
        正在获取文件列表<span class="absolute">{{ loadingDots }}</span>
      </p>
    </div>
    <div class="pb-1 text-xs text-gray">
      <span v-if="main.hasConflict">❌ 文件名有冲突！</span>
      <span v-else-if="main.selectedList.length">✅ 准备就绪</span>
      <span v-else>⌛ 暂无改动</span>
    </div>
    <div class="flex items-center gap-x-3 pb-2">
      <button class="text-sm text-primary-600" @click="main.uncheckList.clear()">
        全选
      </button>
      <button class="text-sm text-primary-600" @click="main.displayList.forEach(x => main.uncheckList.add(x.file_id))">
        全不选
      </button>
      <div v-if="main.activeMode === 'extract' && main.videoList.length" class="ml-4 text-sm text-gray-600">
        点击
        <i
          class="i-carbon:pointer-text [vertical-align:-0.2em] inline-block text-sm text-green-700"
        />
        可将其填充到“剧名”
      </div>

      <div v-if="main.displayList.length" class="ml-auto text-xs text-gray-600 font-sans">
        共 <span class="text-primary-600 font-bold">{{ main.displayList.length }}</span> 个文件
      </div>
    </div>
    <ul
      v-if="main.displayList.length" class="grid grid-cols-[20px_auto_30px_minmax(200px,1fr)] items-center gap-x-2 gap-y-1 text-xs"
    >
      <PreviewEntry
        v-for="item in main.displayList"
        :id="item.file_id"
        :key="item.file_id"
        :old-name="item.name"
        :new-name="main.newNameMap.get(item.file_id) || ''"
        :model-value="!main.uncheckList.has(item.file_id)"
        :done="main.doneList.has(item.file_id)"
        :error="main.errorList.has(item.file_id)"
        :show-pick="main.activeMode === 'extract'"
        @update:model-value="handleCheckChange(item.file_id, $event)"
        @pick="manualPickName"
      />
    </ul>
    <div v-else class="py-8 text-center text-xs text-primary-600">
      当前<span class="font-bold">目录</span>和<span class="font-bold">模式</span>下，没有满足要求的条目~
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  --at-apply: bg-primary-100;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  --at-apply: bg-primary-400 rounded-full transition;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  --at-apply: bg-primary-600;
}
</style>

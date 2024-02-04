<script setup lang="ts">
import PreviewEntry from './components/PreviewEntry.vue'
import { random } from './utils/tools'
import { VideoExts } from './utils/video-exts'
import * as aliyun from '~/utils/aliyun'
import { getNewNameByExp, getNewNameByExtract, guessPrefix, guessSeason } from '~/utils/rename'

const url = useUrl()
const shouldShowEntry = computed(() => ['/drive/file/backup', '/drive/file/resource'].some(x => new URL(url.value).pathname.startsWith(x)))

const uncheckList = ref<string[]>([])
const doneList = ref<string[]>([])
const errorList = ref<string[]>([])
const newNameMap = ref<Record<string, string>>({})

const running = ref(false)
const activeMode = ref('extract')
const from = ref('')
const to = ref('')
const prefix = ref('')
const season = ref('')

const error = ref('')
const warning = ref('')
const processData = ref({
  total: 0,
  skip: 0,
  done: 0,
})

const { list, loading: listLoading, refetch } = useFileList()

watch(url, (v, ov) => {
  if (
    v && v !== ov
    && shouldShowEntry.value
  ) {
    refetch()
    initRunState()
  }
}, { immediate: true })

watch(list, () => {
  uncheckList.value = []
  doneList.value = []
  errorList.value = []
  newNameMap.value = {}
  guessPrefixAndSeason()
})

function handleCheckChange(fileId: string, checked: boolean) {
  if (uncheckList.value.includes(fileId))
    uncheckList.value = uncheckList.value.filter(x => x !== fileId || !checked)
  else
    uncheckList.value = uncheckList.value.concat(fileId)
}

// 剧集模式下使用该列表
const videoList = computed(() => {
  return list.value.filter(x => x.type === 'file' && VideoExts.includes(x.file_extension.toLowerCase())) as aliyun.FileResource[]
})

const popupRef = ref<HTMLDivElement>()
const previewRef = ref<HTMLDivElement>()
const triggerRef = ref<HTMLButtonElement>()
const popupVisible = ref(false)

onClickOutside(popupRef, () => {
  popupVisible.value = false
}, { ignore: [triggerRef, previewRef] })

const displayList = computed(() => activeMode.value === 'extract' ? videoList.value : list.value)
const selectedList = computed(() => displayList.value.filter(x => !uncheckList.value.includes(x.file_id) && newNameMap.value[x.file_id] && x.name !== newNameMap.value[x.file_id]))

// 命名冲突检测
const hasConflict = computed(() => {
  const l = selectedList.value
  const newNames = new Set<string>()
  for (const item of l) {
    if (!uncheckList.value.includes(item.file_id) && newNameMap.value[item.file_id]) {
      if (newNames.has(newNameMap.value[item.file_id]))
        return true
      newNames.add(newNameMap.value[item.file_id])
    }
  }
  return false
})

// 不能 run 的情况：
// 正则模式下，from to 任一为空
// 剧集模式下，prefix 为空
// 正在请求列表
// 已选列表为空
// 有命名冲突
const disabled = computed(() =>
  (activeMode.value === 'regexp' && (!from.value || !to.value))
  || (activeMode.value === 'extract' && (!prefix.value || !season.value))
  || listLoading.value
  || !selectedList.value.length
  || hasConflict.value)

watch(activeMode, () => {
  initRunState()
})

watch(popupVisible, async (v) => {
  if (v) {
    await nextTick()
    popupRef.value?.querySelector('input')?.focus()
  }
  else {
    initRunState()
  }
})

function guessPrefixAndSeason() {
  prefix.value = guessPrefix(videoList.value)
  season.value = guessSeason(videoList.value)
}

const MaxConcurrent = 3

async function run() {
  if (disabled.value || running.value)
    return
  initRunState()
  running.value = true

  processData.value.total = displayList.value.length
  processData.value.skip = displayList.value.length - selectedList.value.length

  const queue = selectedList.value.slice()

  while (queue.length) {
    const subQueue: aliyun.Resource[] = []
    for (let i = 0; i < MaxConcurrent; i++) {
      const x = queue.shift()
      if (x)
        subQueue.push(x)
      else
        break
    }
    await Promise.all(subQueue.map(async (item) => {
      const newName = newNameMap.value[item.file_id]
      await aliyun.renameOne(item, newName).then(() => {
        doneList.value.push(item.file_id)
      }).catch(() => {
        errorList.value.push(item.file_id)
      })
      processData.value.done++
    }))
    await new Promise(r => setTimeout(r, aliyun.API_DELAY))
  }

  running.value = false

  if (!import.meta.env.DEV) {
    warning.value = '即将刷新页面...'
    setTimeout(() => {
      location.reload()
    }, 1000)
  }
}

function initRunState() {
  running.value = false
  error.value = ''
  processData.value = {
    total: 0,
    skip: 0,
    done: 0,
  }
}

function getNewName(oldName: string, season: string) {
  if (activeMode.value === 'extract')
    return getNewNameByExtract(oldName, prefix.value.trim(), season)
  else
    return getNewNameByExp(oldName, from.value, to.value)
}

// 生成新命名
watch([list, activeMode, prefix, season, from, to], () => {
  if (list.value.length) {
    newNameMap.value = {}
    if (
      (activeMode.value === 'extract' && prefix.value)
      || (activeMode.value === 'regexp' && from.value && to.value)
    ) {
      list.value.forEach((item) => {
        newNameMap.value[item.file_id] = getNewName(item.name, season.value.trim())
      })
    }
  }
}, { immediate: true })

function fillRandomName() {
  const len = videoList.value.length
  if (!len)
    return
  const found = videoList.value[random(len)]
  if (found)
    prefix.value = found.name.replace(`.${found.file_extension}`, '')
}

function manualPickName(id: string) {
  if (id) {
    const found = videoList.value.find(x => x.file_id === id)
    if (found)
      prefix.value = found.name.replace(`.${found.file_extension}`, '')
  }
}

const { loadingDots } = useLoadingDots()
const updateMsg = useUpdate()
</script>

<template>
  <button
    v-if="shouldShowEntry"
    ref="triggerRef"
    class="mt-2 min-h-61px w-60px flex flex-col items-center justify-center gap-y-1 rounded-lg px-2px py-6px text-primary-500 transition hover:bg-primary-500 hover:text-white"
    @click="popupVisible = true"
  >
    <i class="i-carbon:batch-job text-xl" />
    <span class="text-xs font-medium">重命名</span>
  </button>

  <!-- control popup -->
  <transition name="clip">
    <div
      v-if="popupVisible"
      ref="popupRef"
      class="absolute z-9999 mt-2 w-300px rounded-lg bg-primary-100 p-3 shadow"
      @keyup.esc="popupVisible = false"
    >
      <p class="pb-2">
        批量重命名当前目录下的所有文件。<br>
        <a v-if="updateMsg" class="text-xs text-red-600 underline underline-dashed hover:text-red-600 hover:underline hover:underline-dashed" href="https://update.greasyfork.org/scripts/479295/%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D.user.js" target="_blank">{{ updateMsg }}</a>
      </p>

      <div class="mb-3 flex items-center gap-x-4">
        <div class="w-fit flex gap-x-1px overflow-hidden rounded text-xs text-white">
          <div
            class="cursor-pointer bg-primary px-2 py-1" :class="activeMode === 'extract' ? 'bg-primary-600' : ''"
            @click="activeMode = 'extract'"
          >
            剧集模式
          </div>
          <div
            class="cursor-pointer bg-primary px-2 py-1" :class="activeMode === 'regexp' ? 'bg-primary-600' : ''"
            @click="activeMode = 'regexp'"
          >
            正则模式
          </div>
        </div>

        <template v-if="activeMode === 'regexp'">
          <a
            class="text-xs text-primary-600 font-medium underline"
            href="https://regex101.com/"
            target="_blank"
          >
            正则可视化
          </a>

          <a
            class="text-xs text-primary-600 font-medium underline"
            href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace"
            target="_blank"
          >
            文档
          </a>
        </template>
      </div>

      <div class="grid gap-y-3 text-sm">
        <template v-if="activeMode === 'regexp'">
          <div>
            <label class="mb-1 block">From</label>
            <input v-model="from" placeholder="正则表达式" class="h-8 w-full rounded bg-white px-3 outline-none">
          </div>

          <div>
            <label class="mb-1 block">To</label>
            <input v-model="to" placeholder="替换表达式" class="h-8 w-full rounded bg-white px-3 outline-none">
          </div>

          <div class="text-xs font-mono">
            <span class="text-#b07d48">原文件名</span><span class="text-#999">.</span><span class="text-#59873a">replace</span><span class="text-#2993a3">(</span><span class="text-#ab5959">new</span> <span class="text-#59873a">RegExp</span><span class="text-#1e754f">(</span><span class="text-#b07d48">From</span><span class="text-#1e754f">)</span><span class="text-#999">,</span> <span class="text-#b07d48">To</span><span class="text-#2993a3">)</span>
          </div>
        </template>

        <template v-else>
          <div>
            <label class="mb-1 block flex items-center gap-x-2">
              剧名
              <i
                class="i-ion:dice block text-sm text-primary-700"
                title="随机填充原文件名"
                :class="videoList.length ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'"
                @click="fillRandomName"
              />
            </label>
            <input v-model="prefix" placeholder="请输入" class="h-8 w-full rounded bg-white px-3 outline-none">
          </div>
          <div>
            <label class="mb-1 block">季</label>
            <input v-model="season" placeholder="0~99" class="h-8 w-full rounded bg-white px-3 outline-none">
          </div>
        </template>

        <div class="min-h-40px">
          <div v-if="error" class="text-xs text-red">
            {{ error }}
          </div>
          <div v-else-if="processData.total" class="text-xs text-gray">
            总共 {{ processData.total }} | 跳过 {{ processData.skip }} | 完成 {{ processData.done }}
          </div>

          <div v-if="warning" class="text-xs text-primary">
            {{ warning }}
          </div>
        </div>

        <div class="flex">
          <button
            class="flex items-center justify-center gap-x-1 bg-primary-600 px-3 py-2 text-xs text-white btn"
            :disabled="disabled || running"
            @click="run"
          >
            <i v-if="running" class="i-carbon:contour-finding block animate-spin" />
            Run It!
          </button>
        </div>
      </div>
    </div>
  </transition>

  <!-- visual drawer -->
  <transition name="fade">
    <div
      v-if="popupVisible"
      ref="previewRef"
      class="custom-scrollbar fixed bottom-2 right-0 top-2 z-9999 w-[max(500px,50vw)] overflow-y-auto border-y-3px border-l-3px border-primary-600 rounded-l-lg border-solid bg-white px-4 py-3 font-mono shadow"
    >
      <div v-if="listLoading" class="absolute inset-0 z-2 flex flex-col items-center justify-center bg-white/80 text-primary-600">
        <div class="i-carbon:circle-packing animate-spin text-4xl" />
        <p class="py-3 text-sm">
          正在获取文件列表<span class="absolute">{{ loadingDots }}</span>
        </p>
      </div>
      <div class="pb-1 text-xs text-gray">
        <span v-if="hasConflict">❌ 文件名有冲突！</span>
        <span v-else-if="selectedList.length">✅ 准备就绪</span>
        <span v-else>⌛ 暂无改动</span>
      </div>
      <div class="flex items-center gap-x-3 pb-2">
        <button class="text-sm text-primary-600" @click="uncheckList = []">
          全选
        </button>
        <button class="text-sm text-primary-600" @click="uncheckList = displayList.map(x => x.file_id)">
          全不选
        </button>
        <div v-if="activeMode === 'extract' && videoList.length" class="ml-4 text-sm text-gray-600">
          点击
          <i
            class="i-carbon:pointer-text [vertical-align:-0.2em] inline-block text-sm text-green-700"
          />
          可将其填充到“剧名”
        </div>

        <div v-if="displayList.length" class="ml-auto text-xs text-gray-600 font-sans">
          共 <span class="text-primary-600 font-bold">{{ displayList.length }}</span> 个文件
        </div>
      </div>
      <ul
        v-if="displayList.length" class="grid grid-cols-[20px_auto_30px_minmax(200px,1fr)] items-center gap-x-2 gap-y-1 text-xs"
      >
        <PreviewEntry
          v-for="item in displayList"
          :id="item.file_id"
          :key="item.file_id"
          :old-name="item.name"
          :new-name="newNameMap[item.file_id] || ''"
          :model-value="!uncheckList.includes(item.file_id)"
          :done="doneList.includes(item.file_id)"
          :error="errorList.includes(item.file_id)"
          :show-pick="activeMode === 'extract'"
          @update:model-value="handleCheckChange(item.file_id, $event)"
          @pick="manualPickName"
        />
      </ul>
      <div v-else class="py-8 text-center text-xs text-primary-600">
        当前目录和模式下，没有满足要求的条目~
      </div>
    </div>
  </transition>
</template>

<style>
.clip-enter-from, .clip-leave-to {
  clip-path: inset(0 100% 100% 0);
}
.clip-enter-to, .clip-leave-from {
  clip-path: inset(0 0 0 0);
}
.clip-enter-active, .clip-leave-active {
  transition: clip-path 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateX(10%);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s ease;
}
</style>

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

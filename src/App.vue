<script setup lang="ts">
import PreviewEntry from './components/PreviewEntry.vue'
import * as aliyun from '~/utils/aliyun'
import { getNewNameByExp, getNewNameByExtract } from '~/utils/rename'

const url = ref(location.href)
setInterval(() => {
  url.value = location.href
}, 1000)
// 智能模式下隐藏此插件
const isSmart = computed(() => /\/smart\/?$/.test(url.value))

const uncheckList = ref<string[]>([])
const doneList = ref<string[]>([])
const newNameMap = ref<Record<string, string>>({})

const { state: list, execute: fetchList, isReady: listReady } = useAsyncState(() => {
  return aliyun.getFileListOfCurrentDir()
}, [], {
  immediate: false,
  onSuccess: () => {
    uncheckList.value = []
    doneList.value = []
    newNameMap.value = {}
    guessPrefix()
  },
})

function handleCheckChange(fileId: string, checked: boolean) {
  return uncheckList.value = uncheckList.value.filter(x => x !== fileId || !checked)
}

const VideoExts = [
  'mp4',
  'flv',
  'f4v',
  'webm',
  'm4v',
  'mov',
  'cpk',
  'dirac',
  '3gp',
  '3g2',
  'rm',
  'rmvb',
  'wmv',
  'avi',
  'asf',
  'mpg',
  'mpeg',
  'mpe',
  'vob',
  'mkv',
  'ram',
  'qt',
  'fli',
  'flc',
  'mod',
  'iso',
  'ts',
]
// 剧集模式下使用该列表
const videoList = computed(() => {
  return list.value.filter(x => x.type === 'file' && VideoExts.includes(x.file_extension)) as aliyun.FileResource[]
})

const popupVisible = ref(false)
const popup = ref<HTMLDivElement>()
const previewRef = ref<HTMLDivElement>()
const trigger = ref<HTMLButtonElement>()

function handleClickRenameBtn() {
  popupVisible.value = true
}

onClickOutside(popup, () => {
  popupVisible.value = false
}, { ignore: [trigger, previewRef] })

const running = ref(false)
const from = ref('')
const to = ref('')
const activeMode = ref('extract')
const prefix = ref('')
const season = ref('')

const showList = computed(() => activeMode.value === 'extract' ? videoList.value : list.value)
const selectedList = computed(() => showList.value.filter(x => !uncheckList.value.includes(x.file_id) && newNameMap.value[x.file_id] && x.name !== newNameMap.value[x.file_id]))

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
  || (activeMode.value === 'extract' && !prefix.value)
  || !listReady.value
  || !selectedList.value.length
  || hasConflict.value)

watch(url, (v, ov) => {
  if (v && v !== ov)
    fetchList()
}, { immediate: true })

watch(activeMode, () => {
  initRunState()
})

watch(popupVisible, async (v) => {
  if (v) {
    await nextTick()
    popup.value?.querySelector('input')?.focus()
  }
  else {
    initRunState()
  }
})

const Chinese = /([\u4E00-\u9FA5A-Z0-9]+)/i

// 猜剧集名：
// 1.如果有中文字符，则取中文字符
// 2.否则取最长公共子串，并尝试把季集数去除
function guessPrefix() {
  const m = videoList.value[0].name.match(Chinese)
  if (m?.[1]) {
    prefix.value = m[1]
    return
  }
  const [a, b] = videoList.value.slice(0, 2).map(x => x.name.replace(`.${x.file_extension}`, ''))
  const lcs = getLcstr(a, b)
  if (lcs)
    prefix.value = lcs.replace(/\s*S[0-9]+E[0-9]*|\s*E[0-9]+/i, '').trim()
}

function getLcstr(a: string, b: string) {
  if (!a || !b)
    return ''
  const lenA = a.length
  const lenB = b.length
  let cache = [[], []] as number[][]
  let maxLen = 0
  let maxBEnd: number
  for (let i = 0; i < lenA; i++)
    cache[0][i] = a[0] === b[i] ? 1 : 0
  for (let i = 1; i < lenA; i++) {
    cache[1][0] = a[i] === b[0] ? 1 : 0
    for (let j = 1; j < lenB; j++) {
      cache[1][j] = a[i] === b[j] ? cache[0][j - 1] + 1 : 0
      if (cache[1][j] > maxLen) {
        maxLen = cache[1][j]
        maxBEnd = j
      }
    }
    cache = [cache[1], []]
  }
  return b.slice(maxBEnd! - maxLen + 1, maxBEnd! + 1)
}

const error = ref('')
const warning = ref('')
const processData = ref({
  total: 0,
  skip: 0,
  done: 0,
})

async function run() {
  if (disabled.value || running.value)
    return
  initRunState()
  running.value = true

  processData.value.total = showList.value.length
  processData.value.skip = showList.value.length - selectedList.value.length

  for (const item of selectedList.value) {
    const newName = newNameMap.value[item.file_id]
    await aliyun.renameOne(item, newName)
    doneList.value.push(item.file_id)
    processData.value.done++
    await new Promise(r => setTimeout(r, aliyun.API_DELAY))
  }

  running.value = false

  warning.value = '即将刷新页面...'
  setTimeout(() => {
    location.reload()
  }, 1000)
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

function getNewName(oldName: string) {
  if (activeMode.value === 'extract')
    return getNewNameByExtract(oldName, prefix.value, season.value)
  else
    return getNewNameByExp(oldName, from.value, to.value)
}

// 生成新命名
watch([list, activeMode, prefix, season, from, to], () => {
  if (list.value.length) {
    if (
      (activeMode.value === 'extract' && prefix.value)
      || (activeMode.value === 'regexp' && from.value && to.value)
    ) {
      list.value.forEach((item) => {
        newNameMap.value[item.file_id] = getNewName(item.name)
      })
    }
  }
}, { immediate: true })
</script>

<template>
  <button
    v-if="!isSmart"
    ref="trigger"
    class="mt-2 min-h-61px w-60px flex flex-col items-center justify-center gap-y-1 rounded-lg px-2px py-6px text-purple-600 transition hover:bg-purple-600 hover:text-white"
    @click="handleClickRenameBtn"
  >
    <i class="i-carbon:batch-job text-xl" />
    <span class="text-xs font-medium">重命名</span>
  </button>

  <transition name="clip">
    <div
      v-if="popupVisible"
      ref="popup"
      class="absolute z-9999 mt-2 w-300px rounded-lg bg-purple-100 p-3 shadow"
      @keyup.esc="popupVisible = false"
    >
      <p class="pb-2">
        批量重命名当前目录下的所有文件。
      </p>

      <div class="mb-3 flex items-center gap-x-4">
        <div class="w-fit flex gap-x-1px overflow-hidden rounded text-xs text-white">
          <div
            class="cursor-pointer bg-purple px-2 py-1" :class="activeMode === 'extract' ? 'bg-purple-600' : ''"
            @click="activeMode = 'extract'"
          >
            剧集模式
          </div>
          <div
            class="cursor-pointer bg-purple px-2 py-1" :class="activeMode === 'regexp' ? 'bg-purple-600' : ''"
            @click="activeMode = 'regexp'"
          >
            正则模式
          </div>
        </div>

        <template v-if="activeMode === 'regexp'">
          <a
            class="text-xs font-medium text-purple-600 underline"
            href="https://regex101.com/"
            target="_blank"
          >
            正则可视化
          </a>

          <a
            class="text-xs font-medium text-purple-600 underline"
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
        </template>

        <template v-else>
          <div>
            <label class="mb-1 block">剧名</label>
            <input v-model="prefix" placeholder="请输入" class="h-8 w-full rounded bg-white px-3 outline-none">
          </div>
          <div>
            <label class="mb-1 block">季</label>
            <input v-model="season" type="number" placeholder="启发式提取" class="h-8 w-full rounded bg-white px-3 outline-none">
          </div>
        </template>

        <div class="min-h-40px">
          <div v-if="error" class="text-xs text-red">
            {{ error }}
          </div>
          <div v-else-if="processData.total" class="text-xs text-gray">
            总共 {{ processData.total }} | 跳过 {{ processData.skip }} | 完成 {{ processData.done }}
          </div>

          <div v-if="warning" class="text-xs text-purple">
            {{ warning }}
          </div>
        </div>

        <div class="flex">
          <button
            class="flex items-center justify-center gap-x-1 bg-purple-600 px-3 py-2 text-xs text-white btn"
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

  <transition name="fade">
    <div
      v-if="popupVisible"
      ref="previewRef"
      class="custom-scrollbar fixed bottom-2 right-0 top-2 z-9999 w-[max(500px,50vw)] overflow-y-auto border-y-3px border-l-3px border-purple-600 rounded-l-lg border-solid bg-white px-4 py-3 font-mono shadow"
    >
      <div v-if="hasConflict" class="text-xs text-red">
        更改后的文件名有冲突！
      </div>
      <div class="flex items-center gap-x-3 pb-2">
        <button class="text-sm text-purple-600" @click="uncheckList = []">
          全选
        </button>
        <button class="text-sm text-purple-600" @click="uncheckList = showList.map(x => x.file_id)">
          全不选
        </button>
      </div>
      <ul v-if="showList" class="grid grid-cols-[20px_auto_30px_minmax(200px,1fr)] items-center gap-x-2 gap-y-1 text-xs">
        <PreviewEntry
          v-for="item in showList" :key="item.file_id"
          :old-name="item.name"
          :new-name="newNameMap[item.file_id] || ''"
          :model-value="!uncheckList.includes(item.file_id)"
          :done="doneList.includes(item.file_id)"
          @update:model-value="handleCheckChange(item.file_id, $event)"
        />
      </ul>
      <div class="py-8 text-center text-xs text-purple-600">
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
  --at-apply: bg-purple-100;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  --at-apply: bg-purple-400 rounded-full transition;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  --at-apply: bg-purple-600;
}
</style>

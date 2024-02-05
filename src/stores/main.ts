import { defineStore } from 'pinia'
import { getNewNameByExp, getNewNameByExtract, guessPrefix, guessSeason } from '~/utils/rename'
import { VideoExts } from '~/utils/video-exts'
import * as aliyun from '~/utils/aliyun'
import { hasDup } from '~/utils/tools'

export const useMainStore = defineStore('main', () => {
  const uncheckList = reactive(new Set<string>())
  const doneList = reactive(new Set<string>())
  const errorList = reactive(new Set<string>())
  const newNameMap = reactive(new Map<string, string>())

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

  const url = useUrl()
  const shouldShowEntry = computed(() => ['/drive/file/backup', '/drive/file/resource'].some(x => new URL(url.value).pathname.startsWith(x)))

  const { list, loading: listLoading, refetch } = useFileList()

  const videoList = computed(() => {
    return list.value.filter(x => x.type === 'file' && VideoExts.includes(x.file_extension.toLowerCase())) as aliyun.FileResource[]
  })
  const displayList = computed(() => activeMode.value === 'extract' ? videoList.value : list.value)
  // a item is selected means:
  // > it is not unchecked
  // > it has a new name and the new name is not same as the old
  const selectedList = computed(() => displayList.value.filter(x => !uncheckList.has(x.file_id) && newNameMap.has(x.file_id) && x.name !== newNameMap.get(x.file_id)))

  const hasConflict = computed(() => {
    return hasDup(selectedList.value.map(x => newNameMap.get(x.file_id)))
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

  watch(url, (v, ov) => {
    if (
      v && v !== ov
      && shouldShowEntry.value
    )
      refetch()
  }, { immediate: true })

  watch(list, () => {
    uncheckList.clear()
    doneList.clear()
    errorList.clear()
    newNameMap.clear()
    guessPrefixAndSeason()
  })

  // generate new filenames
  watch([list, activeMode, prefix, season, from, to], () => {
    if (list.value.length) {
      newNameMap.clear()
      if (
        (activeMode.value === 'extract' && prefix.value)
        || (activeMode.value === 'regexp' && from.value && to.value)
      ) {
        list.value.forEach((item) => {
          newNameMap.set(item.file_id, getNewName(item.name, season.value.trim()))
        })
      }
    }
  }, { immediate: true })

  function guessPrefixAndSeason() {
    prefix.value = guessPrefix(videoList.value)
    season.value = guessSeason(videoList.value)
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
        const newName = newNameMap.get(item.file_id)
        if (!newName)
          return
        await aliyun.renameOne(item, newName).then(() => {
          doneList.add(item.file_id)
        }).catch(() => {
          errorList.add(item.file_id)
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

  function getNewName(oldName: string, season: string) {
    if (activeMode.value === 'extract')
      return getNewNameByExtract(oldName, prefix.value.trim(), season)
    else
      return getNewNameByExp(oldName, from.value, to.value)
  }

  return {
    list,
    listLoading,
    refetch,
    shouldShowEntry,
    uncheckList,
    videoList,
    displayList,
    selectedList,
    newNameMap,
    errorList,
    doneList,
    hasConflict,
    disabled,
    activeMode,
    from,
    to,
    prefix,
    season,
    error,
    warning,
    processData,
    run,
    running,
  }
})

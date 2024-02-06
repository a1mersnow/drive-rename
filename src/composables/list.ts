import * as provider from '~/utils/provider'

const RetryMax = 3

export function useFileList() {
  let remainRetryCount = RetryMax
  let hash = 0
  const list = ref<Resource[]>([])
  const loading = ref(false)

  async function fetch(h: number) {
    try {
      const res = await provider.getFileListOfCurrentDir()
      if (h !== hash)
        return
      list.value = res
    }
    catch {
      if (h !== hash)
        return
      setTimeout(() => {
        if (h !== hash)
          return
        if (--remainRetryCount)
          return fetch(hash)
      }, 1000)
    }
  }

  async function refetch() {
    hash++
    remainRetryCount = RetryMax
    loading.value = true
    await fetch(hash)
    loading.value = false
  }

  return {
    list,
    refetch,
    loading,
  }
}

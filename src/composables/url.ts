function _useUrl() {
  const url = ref(location.href)
  let timer: number | undefined = window.setInterval(() => {
    url.value = location.href
  }, 1000)
  onScopeDispose(() => {
    if (timer) {
      window.clearInterval(timer)
      timer = undefined
    }
  })
  return url
}

export const useUrl = createSharedComposable(_useUrl)

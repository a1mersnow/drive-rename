export function useLoadingDots() {
  const loadingDotsIndex = ref(0)
  const loadingDotsList = ['.', '..', '...']
  const loadingDots = toRef(() => loadingDotsList[loadingDotsIndex.value])
  let loadingDotsTimer: number
  onMounted(() => {
    loadingDotsTimer = window.setInterval(() => {
      loadingDotsIndex.value = (loadingDotsIndex.value + 1) % loadingDotsList.length
    }, 200)
  })
  onUnmounted(() => {
    window.clearInterval(loadingDotsTimer)
  })
  return { loadingDots }
}

import pkg from '../../package.json'

export function useUpdate() {
  const currentVersion = pkg.version
  const newVersion = ref('')
  const msg = computed(() => {
    if (currentVersion === newVersion.value)
      return ''
    else
      return `有新版本(${newVersion.value})啦！点击更新～`
  })

  onMounted(async () => {
    const res = await fetch('https://update.greasyfork.org/scripts/479295/%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D.meta.js')
    if (res.ok) {
      const raw = await res.text()
      const regular = /@version\s+([0-9]\.[0-9]\.[0-9])/
      const m = regular.exec(raw)
      if (m)
        newVersion.value = m[1]
    }
  })

  return msg
}

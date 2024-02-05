import pkg from '../../package.json'

export function useUpdate() {
  const currentVersion = ref(pkg.version)
  const newVersion = ref('')
  onMounted(async () => {
    const res = await fetch(`https://update.greasyfork.org/scripts/479295/%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D.meta.js?t=${Date.now()}`)
    if (res.ok) {
      const raw = await res.text()
      const regular = /@version\s+([0-9]\.[0-9]\.[0-9])/
      const m = regular.exec(raw)
      if (m)
        newVersion.value = m[1]
    }
  })

  const hasNew = computed(() => newVersion.value && newVersion.value !== currentVersion.value)

  return { currentVersion, newVersion, hasNew }
}

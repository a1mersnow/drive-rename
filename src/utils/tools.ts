export function random(n: number) {
  return Math.floor(Math.random() * n)
}

export function hasDup<T>(arr: T[]): boolean {
  const r = new Set()
  for (const item of arr) {
    if (r.has(item))
      return true
    else
      r.add(item)
  }
  return false
}

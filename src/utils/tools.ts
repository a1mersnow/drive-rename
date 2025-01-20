export function random(n: number) {
  return Math.floor(Math.random() * n)
}

export function getExtFromName(fileName: string) {
  const i = fileName.lastIndexOf('.')
  return i > -1 ? fileName.slice(i + 1) : ''
}

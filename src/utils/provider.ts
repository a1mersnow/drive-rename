import type { FetchMode, Provider, Resource } from '~/types'

const providers: Record<string, { default: Provider }> = import.meta.glob('/src/providers/*.ts', { eager: true })

function resolveProvider() {
  for (const path in providers) {
    const provider = providers[path].default
    if (provider.HOSTS.includes(location.host))
      return provider
  }
  throw new Error('unimplemented provider')
}

export function getApiDelay() {
  return resolveProvider().API_DELAY || 200
}

export function getFetchMode(): FetchMode {
  return resolveProvider().FETCH_MODE || 'listen-url'
}

export function shouldShowEntry(url: string) {
  return resolveProvider().shouldShowEntry(url)
}

export function getFileListOfCurrentDir() {
  return resolveProvider().getFileListOfCurrentDir()
}

export function renameOne(resource: Resource, newName: string) {
  return resolveProvider().renameOne(resource, newName)
}

export function setRequestHeader(key: string, value: string) {
  return resolveProvider().setRequestHeader(key, value)
}

export function getComponent() {
  return resolveProvider().ButtonComponent
}

export function getContainer() {
  return resolveProvider().getContainer()
}

import * as aliyun from '~/providers/aliyun'
import * as cmcc from '~/providers/cmcc'
import * as quark from '~/providers/quark'

function resolveProvider() {
  if (location.host === 'www.aliyundrive.com' || location.host === 'www.alipan.com')
    return aliyun
  else if (location.host === 'pan.quark.cn')
    return quark
  else if (location.host === 'yun.139.com')
    return cmcc
  else
    throw new Error('unimplemented provider')
}

export function getApiDelay() {
  return resolveProvider().API_DELAY
}

export type FetchMode = 'listen-url' | 'manual-trigger'

export function getFetchMode(): FetchMode {
  return resolveProvider().FETCH_MODE
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

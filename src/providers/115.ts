import type { Provider, Resource } from '~/types'
import ButtonComponent from '~/components/Button115.vue'
import { getExtFromName } from '~/utils/tools'

const PAGE_SIZE = 200

function getCurrentCid(url = location.href) {
  return new URL(url).searchParams.get('cid') || '0'
}

function createListApi(cid: string, offset: number) {
  const listApi = new URL('https://webapi.115.com/files')
  listApi.searchParams.set('aid', '1')
  listApi.searchParams.set('cid', cid)
  listApi.searchParams.set('offset', String(offset))
  listApi.searchParams.set('limit', String(PAGE_SIZE))
  listApi.searchParams.set('type', '0')
  listApi.searchParams.set('show_dir', '1')
  listApi.searchParams.set('fc_mix', '0')
  listApi.searchParams.set('natsort', '1')
  listApi.searchParams.set('count_folders', '1')
  listApi.searchParams.set('format', 'json')
  listApi.searchParams.set('custom_order', '0')
  return listApi
}

function toResource(item: any, parentId: string): Resource {
  const name = item.n || ''
  return {
    drive_id: 'whocare',
    file_id: String(item.fid),
    name,
    parent_file_id: String(item.cid || parentId),
    sync_device_flag: false,
    file_extension: getExtFromName(name),
    mime_type: item.class || 'whocare',
    type: 'file',
  }
}

async function getFileListOfCurrentDir(parentId = getCurrentCid()) {
  if (parentId === '0')
    return []

  const result: Resource[] = []
  let offset = 0
  let total = Number.POSITIVE_INFINITY

  while (result.length < total) {
    const { data, count, state } = await get(createListApi(parentId, offset))
    if (state === false)
      return Promise.reject(new Error('list failed'))
    if (!Array.isArray(data) || !data.length)
      break

    result.push(
      ...data
        .filter((item: any) => !!item.fid)
        .map((item: any) => toResource(item, parentId)),
    )
    const parsedCount = Number(count)
    total = Number.isFinite(parsedCount) ? parsedCount : result.length
    offset += data.length

    if (data.length < PAGE_SIZE)
      break
  }
  return result
}

function setRequestHeader() {}

function post(api: URL | string, payload: FormData) {
  return fetch(api, {
    method: 'POST',
    credentials: 'include',
    body: payload,
  }).then((res) => {
    if (res.ok)
      return res.json()
    else
      return Promise.reject(new Error('network error'))
  })
}

function get(api: URL | string) {
  return fetch(api, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => {
    if (res.ok)
      return res.json()
    else
      return Promise.reject(new Error('network error'))
  })
}

async function renameOne(resource: Resource, newName: string) {
  const payload = new FormData()
  payload.set(`files_new_name[${resource.file_id}]`, newName)
  payload.set('format', 'json')

  const res = await post('https://webapi.115.com/files/batch_rename', payload)
  if (!res?.state)
    throw new Error(res?.error || 'rename failed')
}

function shouldShowEntry(url: string) {
  const u = new URL(url)
  if (u.pathname !== '/storage/netdisk')
    return false
  if (u.searchParams.get('mode') !== 'wangpan')
    return false
  return getCurrentCid(url) !== '0'
}

function normalizeButtonText(text: string) {
  return text
    .replace(/\s+/g, '')
    .replace(/[▼▲▾▴]$/, '')
    .trim()
}

function isVisible(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return rect.width > 40 && rect.height > 24
}

function isTopToolbarRegion(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return rect.top >= 0 && rect.top < 280
}

function findUploadButton() {
  const candidates = Array.from(document.querySelectorAll('button, a, [role="button"]')) as HTMLElement[]
  const list = candidates
    .filter(isVisible)
    .filter(isTopToolbarRegion)
    .filter((el) => {
      const text = normalizeButtonText(el.textContent || '')
      return text === '上传'
    })
    .sort((a, b) => {
      const ra = a.getBoundingClientRect()
      const rb = b.getBoundingClientRect()
      if (ra.top !== rb.top)
        return ra.top - rb.top
      return ra.left - rb.left
    })
  return list[0] || null
}

function getContainer() {
  const action = findUploadButton()
  return {
    el: action?.parentElement || null,
    style: 'display: flex; align-items: center; gap: 8px;',
    front: true,
  }
}

const provider: Provider = {
  DRIVE_NAME: '115网盘',
  HOSTS: ['115.com'],
  shouldShowEntry,
  getContainer,
  renameOne,
  setRequestHeader,
  ButtonComponent,
  getFileListOfCurrentDir,
}

export default provider

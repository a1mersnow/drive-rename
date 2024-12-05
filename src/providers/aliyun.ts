import type { FetchMode } from '~/utils/provider'

// 接口调用太频繁会被拒
export const API_DELAY = 200
export const FETCH_MODE: FetchMode = 'listen-url'

function getToken() {
  const raw = window.localStorage.getItem('token')
  if (!raw)
    throw new Error('no token found')
  return JSON.parse(raw).access_token
}

async function getDriveId() {
  const res = await post('https://user.aliyundrive.com/v2/user/get', {})
  return location.pathname.startsWith('/drive/file/all/backup') ? res.backup_drive_id : res.resource_drive_id
}

const INITIAL_MARKER = 'INITIAL'
const PAGE_SIZE = 100
const listJsonMask = 'next_marker,items(name,file_id,drive_id,type,file_extension,parent_file_id,mime_type,trashed,sync_device_flag,punish_flag)'
export async function getFileListOfCurrentDir(parentId = getParentId()) {
  const listApi = new URL('https://api.aliyundrive.com/adrive/v3/file/list')
  listApi.searchParams.append('jsonmask', listJsonMask)
  const driveId = await getDriveId()
  const result = []
  let marker = INITIAL_MARKER

  while (marker) {
    const { items, next_marker } = await post(listApi.toString().replace('%28', '(').replace('%29', ')'), {
      all: true,
      limit: PAGE_SIZE,
      drive_id: driveId,
      fields: '*',
      order_by: 'name',
      order_direction: 'ASC',
      parent_file_id: parentId,
      url_expire_sec: 14400,
      marker: marker === INITIAL_MARKER ? '' : marker,
    })
    result.push(...items)
    marker = next_marker
  }

  return result.filter((x: any) => !x.sync_device_flag) as Resource[]
}

async function rename(driveId: string, fileId: string, newName: string) {
  return post('https://api.aliyundrive.com/v3/file/update', {
    check_name_mode: 'refuse',
    drive_id: driveId,
    file_id: fileId,
    name: newName,
  })
}

function getParentId() {
  const p = location.pathname
  const i = p.lastIndexOf('/')
  const lastSegment = p.slice(i + 1)
  return /[a-z0-9]{32,}/.test(lastSegment) ? lastSegment : 'root'
}

const headers: Record<string, string> = {}
export function setRequestHeader(key: string, value: string) {
  if (key.toLowerCase() === 'x-signature')
    headers['X-Signature'] = value
}

function post(api: URL | string, payload: object) {
  return fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
      'X-Device-Id': document.cookie.match(/cna=(.+?);/)?.[1] || '',
      ...headers,
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    if (res.ok)
      return res.json()
    else
      return Promise.reject(new Error('network error'))
  })
}

export async function renameOne(resource: Resource, newName: string) {
  await rename(resource.drive_id, resource.file_id, newName)
}

export function shouldShowEntry(url: string) {
  return [
    /^\/drive\/file\/all\/.+$/,
  ].some(re => re.test(new URL(url).pathname))
}

export function getContainer() {
  return {
    el: document.querySelector('[class^="nav-tab-content--"]'),
    style: '',
    front: false,
  }
}

export { default as ButtonComponent } from '~/components/ButtonAliyun.vue'

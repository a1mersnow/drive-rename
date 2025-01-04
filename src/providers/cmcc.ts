import type { Provider, Resource } from '~/types'
import dayjs from 'dayjs'
import { md5 } from 'js-md5'
import ButtonComponent from '~/components/ButtonCmcc.vue'

type CursorType = 'initial' | 'normal'

interface Cursor {
  type: CursorType
  value: string | null
}

async function getFileListOfCurrentDir() {
  const result: Resource[] = []
  let cursor: Cursor = { type: 'initial', value: null }

  while (cursor.type === 'initial' || cursor.value) {
    const { data: { items, nextPageCursor } } = await post('https://personal-kd-njs.yun.139.com/hcy/file/list', {
      pageInfo: { pageSize: 100, pageCursor: cursor.value },
      orderBy: 'updated_at',
      orderDirection: 'DESC',
      parentFileId: localStorage.getItem('currentCatalogID'),
      imageThumbnailStyleList: ['Small', 'Large'],
    }, {
      commonAccountInfo: {
        account: atob(getToken('ORCHES-I-ACCOUNT-ENCRYPT')),
        accountType: 1,
      },
      catalogID: localStorage.getItem('currentCatalogID'),
      catalogSortType: 0,
      contentSortType: 0,
      endNumber: 100,
      filterType: 0,
      sortDirection: 1,
      startNumber: cursor.type === 'initial' ? 1 : cursor.value,
    })
    cursor = { type: 'normal', value: nextPageCursor }
    result.push(...items.map((x: any) => ({
      drive_id: 'whocare',
      file_id: x.fileId,
      name: x.name,
      parent_file_id: x.parentFileId,
      file_extension: x.fileExtension,
      mime_type: 'whocare',
      type: x.type,
    })))
  }

  return result
}

async function rename(driveId: string, fileId: string, newName: string) {
  return post('https://personal-kd-njs.yun.139.com/hcy/file/update', {
    fileId,
    name: newName,
    description: '',
  }, {
    commonAccountInfo: {
      account: atob(getToken('ORCHES-I-ACCOUNT-ENCRYPT')),
      accountType: 1,
    },
    contentID: fileId,
    contentName: newName,
  })
}

const headers: Record<string, string> = {}
function setRequestHeader(key: string, value: string) {
  const l = [
    'caller',
    'Cms-Device',
    'Mcloud-Channel',
    'Mcloud-Client',
    'Mcloud-Route',
    'Mcloud-version',
    'X-Deviceinfo',
    'x-huawei-channelSrc',
    'x-m4c-src',
    'x-inner-ntwk',
    'x-m4c-caller',
    'x-inner-ntwk',
    'INNER-HCY-ROUTER-HTTPS',
    'hcy-cool-flag',
    'X-Svctype',
    'x-yun-Api-Version',
    'x-yun-channel-source',
    'x-yun-app-channel',
    'x-yun-client-info',
    'x-yun-module-type',
    'x-yun-svc-type',
  ]
  if (l.some(x => x.toLowerCase() === key.toLowerCase()))
    headers[key] = value
}

function getToken(key: string): string {
  return document.cookie.split('; ').map(x => x.split('=', 2)).find(x => x[0] === key)?.[1] || ''
}

function createMD5(s: string): string {
  const hash = md5.create()
  hash.update(s)
  return hash.hex()
}

function getNewSign(e: any, t: any, a: any, n: any) {
  let r = ''
  if (t) {
    let s = Object.assign({}, t)
    r = JSON.stringify(s)
    r = encodeURIComponent(r)
    s = r
    const c = r.split('')
    const l = c.sort()
    r = l.join('')
  }
  const d = createMD5(window.btoa(r))
  const f = createMD5(`${a}:${n}`)
  return createMD5(d + f).toUpperCase()
}

function getSign(params: { time: string, random: string, signPayload: object }) {
  const { time, random, signPayload } = params
  return getNewSign(undefined, signPayload, time, random)
}

function post(api: URL | string, payload: object, signPayload: object) {
  const time = dayjs().format('YYYY-MM-DD HH:mm:ss')
  const random = 'FO6ezlJ9BkwfHVZd'
  return fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': getToken('authorization'),
      'Mcloud-Sign': `${time},${random},${getSign({ time, random, signPayload })}`,
      ...headers,
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  }).then((res) => {
    if (res.ok)
      return res.json()
    else
      return Promise.reject(new Error('network error'))
  })
}

async function renameOne(resource: Resource, newName: string) {
  await rename(resource.drive_id, resource.file_id, newName)
}

function shouldShowEntry(url: string) {
  return ['/w/#/main', '/w/#/main', '/w/#/index'].some(x => url.includes(x))
}

function getContainer() {
  return {
    el: document.querySelector('.top_button'),
    style: '',
    front: true,
  }
}

const provider: Provider = {
  DRIVE_NAME: '移动云盘',
  HOSTS: ['yun.139.com'],
  FETCH_MODE: 'manual-trigger',
  ButtonComponent,
  shouldShowEntry,
  getContainer,
  renameOne,
  setRequestHeader,
  getFileListOfCurrentDir,
}

export default provider

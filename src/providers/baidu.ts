import type { Provider, Resource } from '~/types'
import ButtonComponent from '~/components/ButtonBaidu.vue'
import { getExtFromName } from '~/utils/tools'

let bdstoken = ''

function getDir() {
  const u = getURL(location.href)
  return u.searchParams.get('path') || '/'
}

async function getFileListOfCurrentDir(parentId = getDir()) {
  if (!bdstoken)
    initToken()

  const listApi = new URL('https://pan.baidu.com/api/list?clienttype=0&app_id=250528&web=1&order=name&desc=0&num=100')
  listApi.searchParams.set('dir', parentId)
  const result: Resource[] = []
  let page = 1
  let next = true

  while (next) {
    listApi.searchParams.set('page', String(page++))
    const { list } = await get(listApi)
    result.push(...list.map((x: any) => ({
      drive_id: 'whocare',
      file_id: String(x.fs_id),
      name: x.server_filename,
      parent_file_id: x.path,
      file_extension: getExtFromName(x.server_filename),
      mime_type: 'whocare',
      type: x.isdir === 1 ? 'folder' : 'file',
    })))
    next = list.length === 100
  }

  return result
}

function setRequestHeader() {}

function post(api: URL | string, payload: Record<string, string>) {
  return fetch(api, {
    method: 'POST',
    headers: {
      'accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-requested-with': 'XMLHttpRequest',
    },
    credentials: 'include',
    body: new URLSearchParams(payload).toString(),
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

interface RenameRecord {
  id: string
  path: string
  newName: string
  done: () => void
}

function createControledPromise() {
  let _resolve: () => void
  const promise = new Promise<void>((resolve) => {
    _resolve = resolve
  })
  return {
    promise,
    done: () => {
      _resolve()
    },
  }
}

let cache: RenameRecord[] = []
let timer: number | undefined
const BATCH_SIZE = 10
async function renameOne(resource: Resource, newName: string) {
  const { promise, done } = createControledPromise()

  cache.push({
    id: resource.file_id,
    path: resource.parent_file_id,
    newName,
    done,
  })

  if (timer) {
    window.clearTimeout(timer)
    timer = undefined
  }

  if (cache.length >= BATCH_SIZE) {
    triggerRename(cache)
    cache = []
  }
  else {
    timer = window.setTimeout(() => {
      triggerRename(cache)
      cache = []
    }, 100)
  }
  return promise
}

async function triggerRename(list: RenameRecord[]) {
  if (list.length === 0)
    return
  await post(`https://pan.baidu.com/api/filemanager?async=2&onnest=fail&opera=rename&bdstoken=${bdstoken}&clienttype=0&app_id=250528&web=1`, {
    filelist: JSON.stringify(list.map(x => ({
      id: +x.id,
      path: x.path,
      newname: x.newName,
    }))),
  })
  list.forEach(x => x.done())
}

async function initToken() {
  const { result } = await get('https://pan.baidu.com/api/gettemplatevariable?clienttype=0&app_id=250528&web=1&fields=[%22bdstoken%22]')
  bdstoken = result.bdstoken
}

function getURL(url: string) {
  const old = new URL(url)
  const hash = old.hash
  return new URL(old.origin + hash.replace(/^#/, ''))
}

function shouldShowEntry(url: string) {
  const fresh = getURL(url)
  return fresh.pathname === '/index' && fresh.searchParams.get('category') === 'all'
}

function getContainer() {
  return {
    el: document.querySelector('.wp-s-agile-tool-bar__header.is-header-tool'),
    style: '',
    front: true,
  }
}

const provider: Provider = {
  DRIVE_NAME: '百度网盘',
  HOSTS: ['pan.baidu.com/disk'],
  MAX_CONCURRENT: Infinity,
  shouldShowEntry,
  getContainer,
  getApiDelay: () => 0,
  getReloadingDelay: () => 4000,
  renameOne,
  setRequestHeader,
  ButtonComponent,
  getFileListOfCurrentDir,
}

export default provider

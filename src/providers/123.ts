import type { Provider, Resource } from '~/types'
import ButtonComponent from '~/components/Button123.vue'

function getExt(fileName: string) {
  const i = fileName.lastIndexOf('.')
  return i > -1 ? fileName.slice(i + 1) : ''
}

function getParentId() {
  const u = new URLSearchParams(location.search)
  const path = u.get('homeFilePath') || '0'
  const groups = path.split(',')
  const lastGroup = groups[groups.length - 1]
  return lastGroup
}

async function getFileListOfCurrentDir(parentId = getParentId()) {
  const listApi = new URL('https://www.123pan.com/b/api/file/list/new?driveId=0&limit=100&next=0&orderBy=file_name&orderDirection=asc&trashed=false&SearchData=&OnlyLookAbnormalFile=0&event=homeListFile&operateType=4&inDirectSpace=false')
  listApi.searchParams.set('parentFileId', parentId)
  const result: Resource[] = []
  let page = 1
  let next = true

  while (next) {
    listApi.searchParams.set('Page', String(page++))
    const { data: { InfoList, Next } } = await get(listApi)
    result.push(...InfoList.map((x: any) => ({
      drive_id: 'whocare',
      file_id: x.FileId,
      name: x.FileName,
      parent_file_id: x.ParentFileId,
      file_extension: getExt(x.FileName),
      mime_type: 'whocare',
      type: x.type === 1 ? 'folder' : 'file',
    })))
    next = Next !== '-1'
  }

  return result
}

const headers: Record<string, string> = {}

export function setRequestHeader(key: string, value: string) {
  if (key.toLowerCase() === 'authorization')
    headers.authorization = value
}

function post(api: URL | string, payload: object) {
  return fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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

function get(api: URL | string) {
  return fetch(api, {
    method: 'GET',
    headers: {
      ...headers,
    },
    credentials: 'include',
  }).then((res) => {
    if (res.ok)
      return res.json()
    else
      return Promise.reject(new Error('network error'))
  })
}

async function renameOne(resource: Resource, newName: string) {
  return post('https://www.123pan.com/b/api/file/rename', {
    driveId: 0,
    fileId: resource.file_id,
    fileName: newName,
    duplicate: 1,
    event: 'fileRename',
    operatePlace: 2,
    RequestSource: null,
  })
}

function shouldShowEntry(url: string) {
  return new URL(url).pathname === '/'
}

function getContainer() {
  return {
    el: document.querySelector('#app .homeClass > div:nth-child(1)'),
    style: '',
    front: true,
  }
}

const provider: Provider = {
  DRIVE_NAME: '123云盘',
  HOSTS: ['www.123pan.com'],
  ButtonComponent,
  shouldShowEntry,
  getContainer,
  renameOne,
  setRequestHeader,
  getFileListOfCurrentDir,
}

export default provider

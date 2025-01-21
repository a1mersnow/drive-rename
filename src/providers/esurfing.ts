import type { Provider, Resource } from '~/types'
import ButtonComponent from '~/components/ButtonEsurfing.vue'
import { getExtFromName } from '~/utils/tools'

function getDir() {
  const u = new URL(location.href)
  const m = u.pathname.match(/\/web\/main\/file\/folder\/([^/]+)/)
  return m![1]
}

async function getFileListOfCurrentDir(parentId = getDir()) {
  const listApi = new URL('https://cloud.189.cn/api/open/file/listFiles.action?pageSize=60&mediaType=0&iconOption=5&orderBy=filename&descending=false')
  listApi.searchParams.set('folderId', parentId)
  const result: Resource[] = []
  let page = 1
  let next = true

  while (next) {
    listApi.searchParams.set('pageNum', String(page++))
    const { fileListAO: { fileList: list } } = await get(listApi)
    result.push(...list.map((x: any) => ({
      drive_id: 'whocare',
      file_id: x.id,
      name: x.name,
      parent_file_id: 'whocare',
      file_extension: getExtFromName(x.name),
      mime_type: 'whocare',
      // this api only return files
      type: 'file',
    })))
    next = list.length === 60
  }

  return result
}

function setRequestHeader() {}

function post(api: URL | string, payload: Record<string, string>) {
  return fetch(api, {
    method: 'POST',
    headers: {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/x-www-form-urlencoded',
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
    headers: {
      'Accept': 'application/json;charset=UTF-8',
      'sign-type': '1',
    },
  }).then((res) => {
    if (res.ok)
      return res.json()
    else
      return Promise.reject(new Error('network error'))
  })
}

async function renameOne(resource: Resource, newName: string) {
  await post(`https://cloud.189.cn/api/open/file/renameFile.action`, {
    fileId: resource.file_id,
    destFileName: newName,
  })
}

function shouldShowEntry(url: string) {
  const u = new URL(url)
  return u.pathname.startsWith('/web/main/file')
}

function getContainer() {
  return {
    el: document.querySelector('[class^="FileHead_file-head-left_"]'),
    style: '',
    front: true,
  }
}

const provider: Provider = {
  DRIVE_NAME: '天翼云盘',
  HOSTS: ['cloud.189.cn'],
  shouldShowEntry,
  getContainer,
  renameOne,
  setRequestHeader,
  ButtonComponent,
  getFileListOfCurrentDir,
}

export default provider

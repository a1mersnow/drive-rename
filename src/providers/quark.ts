import type { Provider, Resource } from '~/types'
import ButtonComponent from '~/components/ButtonQuark.vue'
import { getExtFromName } from '~/utils/tools'

function getParentId() {
  const hash = location.hash.replace('#/list/all', '').replace(/^\//, '').replace(/\/$/, '')
  const groups = hash.split('/')
  const lastGroup = groups[groups.length - 1]
  return lastGroup ? lastGroup.replace(/-.*$/, '') : '0'
}

async function getFileListOfCurrentDir(parentId = getParentId()) {
  const listApi = new URL('https://drive-pc.quark.cn/1/clouddrive/file/sort?pr=ucpro&fr=pc&uc_param_str=&pdir_fid=0&_page=1&_size=50&_fetch_total=1&_fetch_sub_dirs=0&_sort=file_type:asc,updated_at:desc')
  listApi.searchParams.set('pdir_fid', parentId)
  const result: Resource[] = []
  let page = 1
  let total = -1

  while (total === -1 || result.length < total) {
    listApi.searchParams.set('_page', String(page++))
    const { data, metadata } = await get(listApi)
    result.push(...data.list.map((x: any) => ({
      drive_id: 'whocare',
      file_id: x.fid,
      name: x.file_name,
      parent_file_id: x.pdir_fid,
      file_extension: getExtFromName(x.file_name),
      mime_type: x.format_type,
      type: x.file ? 'file' : 'folder',
    })))
    total = metadata._total
  }

  return result
}

async function rename(driveId: string, fileId: string, newName: string) {
  return post('https://drive-pc.quark.cn/1/clouddrive/file/rename?pr=ucpro&fr=pc&uc_param_str=', {
    fid: fileId,
    file_name: newName,
  })
}

const headers: Record<string, string> = {}
// eslint-disable-next-line unused-imports/no-unused-vars
function setRequestHeader(key: string, value: string) {}

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
  await rename(resource.drive_id, resource.file_id, newName)
}

function shouldShowEntry(url: string) {
  return ['#/list/all'].some(x => new URL(url).hash.startsWith(x))
}

function getContainer() {
  return {
    el: document.querySelector('#ice-container .ant-layout .section-header .btn-operate .btn-main'),
    style: 'display: flex; align-items: center;',
    front: true,
  }
}

const provider: Provider = {
  DRIVE_NAME: '夸克云盘',
  HOSTS: ['pan.quark.cn'],
  ButtonComponent,
  shouldShowEntry,
  getContainer,
  renameOne,
  setRequestHeader,
  getFileListOfCurrentDir,
}

export default provider

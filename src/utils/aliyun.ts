const listJsonMask = 'ext_marker,items(name,file_id,drive_id,type,size,created_at,updated_at,category,file_extension,parent_file_id,mime_type,starred,thumbnail,url,streams_info,content_hash,user_tags,user_meta,trashed,video_media_metadata,video_preview_metadata,sync_meta,sync_device_flag,sync_flag,punish_flag)'

// 接口调用太频繁会被拒
export const API_DELAY = 100

function getToken() {
  const raw = window.localStorage.getItem('token')
  if (!raw)
    throw new Error('no token found')
  return JSON.parse(raw).access_token
}

async function getDriveId() {
  const res = await post('https://user.aliyundrive.com/v2/user/get', {})
  return res.backup_drive_id
}

export async function getCurrentDirName() {
  const driveId = await getDriveId()
  const res = await post('https://api.aliyundrive.com/adrive/v1/file/get_path', { drive_id: driveId, file_id: getParentId() })
  return res.items[0].name as string
}

export async function getFileListOfCurrentDir(parentId = getParentId()) {
  const listApi = new URL('https://api.aliyundrive.com/adrive/v3/file/list')
  listApi.searchParams.append('jsonmask', listJsonMask)
  const driveId = await getDriveId()
  const res = await post(listApi, {
    all: true,
    drive_id: driveId,
    fields: '*',
    order_by: 'name',
    order_direction: 'ASC',
    parent_file_id: parentId,
    url_expire_sec: 14400,
  })
  return res.items as Resource[]
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
  return p.slice(i + 1)
}

function post(api: URL | string, payload: object) {
  return fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
      'Authorization': `Bearer ${getToken()}`,
      // 'X-Device-Id': document.cookie.match(/cna=(.+?);/)?.[1] || '',
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    if (res.ok)
      return res.json()
    else
      return Promise.reject(new Error('network error'))
  })
}

type Resource = FileResource | FolderResource

interface BaseResource {
  drive_id: string
  file_id: string
  name: string
  parent_file_id: string
}

export interface FileResource extends BaseResource {
  // video
  category: string
  content_hash: string
  file_extension: string
  mime_type: string
  size: number
  type: 'file'
  thumbnail: string
  url: string
}

interface FolderResource extends BaseResource {
  type: 'folder'
}

export async function renameOne(resource: Resource, newName: string) {
  await rename(resource.drive_id, resource.file_id, newName)
}

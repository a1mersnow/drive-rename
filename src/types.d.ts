type Resource = FileResource | FolderResource

interface BaseResource {
  drive_id: string
  file_id: string
  name: string
  parent_file_id: string
}

interface FileResource extends BaseResource {
  // video
  file_extension: string
  mime_type: string
  type: 'file'
}

interface FolderResource extends BaseResource {
  type: 'folder'
}

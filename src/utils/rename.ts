import type { FileResource } from './aliyun'

export function getNewNameByExp(oldName: string, from: string, to: string) {
  try {
    return oldName.replace(new RegExp(from), to)
  }
  catch {
    return ''
  }
}

const SeasonEpisodeExtract = /S(?:eason)?[._\- ]?([0-9]{1,3})(?![0-9])(?:[._\- ]?E|[._\- ])([0-9]{1,3})(?![0-9])/i
const EpisodeExtract = /EP?([0-9]{1,3})(?![0-9])/i
const NakedEpisodeExtract = /(?<![0-9])([0-9]{1,3})(?![0-9])(?![PK][._\- ])/i

interface EpisodeHelpers {
  pre: string
  post: string
}

export function getNewNameByExtract(oldName: string, prefix: string, season: string, epHelpers?: EpisodeHelpers) {
  let episode
  if (epHelpers)
    episode = getEpisodeByHelpers(oldName, epHelpers)
  if (!episode)
    episode = getEpisode(oldName)
  // normalize season
  season ||= '1'
  const seasonNumber = Number.parseInt(season)
  const seasonNumberIsValid = !Number.isNaN(seasonNumber) && seasonNumber < 100
  season = String(seasonNumberIsValid ? seasonNumber : 1).padStart(2, '0')
  if (!episode || !season)
    return ''
  // ext
  const m = oldName.match(/(\.[a-z0-9]+)$/i)
  return `${prefix} S${season}E${episode}${m ? m[1] : ''}`
}

function normalizeEpisode(x: string) {
  return String(+x).padStart(3, '0')
}

function getEpisodeByHelpers(oldName: string, epHelpers: EpisodeHelpers) {
  const { pre, post } = epHelpers
  if (!pre)
    return
  const preIndex = oldName.indexOf(pre)
  const postIndex = oldName.lastIndexOf(post)
  if (preIndex > -1 && postIndex > -1) {
    const shorted = oldName.slice(preIndex + pre.length, postIndex)
    const parsed = Number.parseInt(getEpisode(shorted))
    if (Number.isInteger(parsed))
      return normalizeEpisode(String(parsed))
  }
}

export function getEpisode(oldName: string) {
  // trim ext
  oldName = oldName.replace(/\.[a-z0-9]+$/i, '')

  {
    const [_, _s, episode] = oldName.match(SeasonEpisodeExtract) || []
    if (episode)
      return episode
  }

  {
    const [_, episode] = oldName.match(EpisodeExtract) || []
    if (episode)
      return episode
  }

  const candidates = [...oldName.matchAll(new RegExp(NakedEpisodeExtract, 'gi'))].map(([_, episode]) => {
    return episode
  }).filter(x => x)
  if (candidates.length === 2)
    return normalizeEpisode(candidates[1])
  else if (candidates.length)
    return normalizeEpisode(candidates[0])
  else
    return ''
}

export function getSeason(oldName: string) {
  const [_, s] = oldName.match(SeasonEpisodeExtract) || []
  return s
}

export function getLcstr(a: string, b: string) {
  if (!a || !b)
    return ''
  const lenA = a.length
  const lenB = b.length
  let cache = [[], []] as number[][]
  let maxLen = 0
  let maxBEnd: number
  for (let i = 0; i < lenA; i++)
    cache[0][i] = a[0] === b[i] ? 1 : 0
  for (let i = 1; i < lenA; i++) {
    cache[1][0] = a[i] === b[0] ? 1 : 0
    for (let j = 1; j < lenB; j++) {
      cache[1][j] = a[i] === b[j] ? cache[0][j - 1] + 1 : 0
      if (cache[1][j] > maxLen) {
        maxLen = cache[1][j]
        maxBEnd = j
      }
    }
    cache = [cache[1], []]
  }
  return b.slice(maxBEnd! - maxLen + 1, maxBEnd! + 1)
}

export function guessSeason(list: FileResource[]) {
  let currentSeason = '1'
  list.forEach((v) => {
    const temp = getSeason(v.name)
    if (temp)
      currentSeason = temp
  })
  return currentSeason
}

const Chinese = /([\u4E00-\u9FA5]+)/i

// 猜剧集名：
// 1.如果有中文字符，则取中文字符
// 2.否则取最长公共子串，并尝试把季集数去除
export function guessPrefix(list: FileResource[]) {
  if (list.length === 0)
    return ''
  const m = list[0].name.match(Chinese)
  if (m?.[1])
    return m[1]

  if (list.length < 2) {
    const s = list[0]
    return s.name.replace(`.${s.file_extension}`, '').replace(/\s*S[0-9]+E[0-9]*|\s*E[0-9]+/i, '').trim()
  }
  const [a, b] = list.slice(-2).map(x => x.name.replace(`.${x.file_extension}`, ''))
  const lcs = getLcstr(a, b)
  if (lcs)
    return lcs.replace(/\s*S[0-9]+E[0-9]*|\s*E[0-9]+/i, '').trim()

  return ''
}

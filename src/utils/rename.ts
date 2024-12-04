export function getNewNameByExp(oldName: string, from: string, to: string) {
  try {
    return oldName.replace(new RegExp(from), to)
  }
  catch {
    return ''
  }
}

const SeasonEpisodeExtract = /S(?:eason)?[._\- ]?(\d{1,3})(?:[._\- ]?E|[._\- ])(\d{1,3})(?!\d)/i
const EpisodeExtract1 = /EP?(\d{1,3})(?!\d)/i
const EpisodeExtract2 = /(?<![0-9h\u4E00-\u9FA5])(\d{1,3})(?!\d)(?![PK季])/i
const EpisodeExtract3 = /(?<![0-9h])(\d{1,3})(?!\d)(?![PK季])/i

interface EpisodeHelpers {
  pre: string
  post: string
}

export function getNewNameByExtract(oldName: string, prefix: string, season: string, epHelpers?: EpisodeHelpers, refName?: string) {
  let episode: string | undefined
  if (refName)
    episode = getEpisodeByCompare(oldName, refName)
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

export function getEpisodeByCompare(oldName: string, refName: string): string | undefined {
  const matchesO = [...oldName.matchAll(/\d+/g)].map(x => x[0])
  const matchesR = [...refName.matchAll(/\d+/g)].map(x => x[0])
  if (matchesO.length === 0 || matchesO.length !== matchesR.length)
    return
  const diff = []
  for (let i = 0; i < matchesO.length; ++i) {
    if (matchesO[i] !== matchesR[i])
      diff.push(matchesO[i])
  }
  const filtered = diff.filter((x) => {
    const n = Number.parseInt(x)
    return !Number.isNaN(n) && n !== 0 && n < 1000
  })
  return filtered.length === 1 ? normalizeEpisode(filtered[0]) : undefined
}

function normalizeEpisode(x: string) {
  return String(+x).padStart(3, '0')
}

export function getEpisodeByHelpers(oldName: string, epHelpers: EpisodeHelpers) {
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
      return normalizeEpisode(episode)
  }

  {
    const [_, episode] = oldName.match(EpisodeExtract1) || []
    if (episode)
      return normalizeEpisode(episode)
  }

  {
    const [_, episode] = oldName.match(EpisodeExtract2) || []
    if (episode)
      return normalizeEpisode(episode)
  }

  {
    const [_, episode] = oldName.match(EpisodeExtract3) || []
    if (episode)
      return normalizeEpisode(episode)
  }

  return '001'
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

const Chinese = /([\u4E00-\u9FA5]+)/

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
    return s.name.replace(`.${s.file_extension}`, '').replace(/\s*S\d+E\d*|\s*E\d+/i, '').trim()
  }
  const [a, b] = list.slice(-2).map(x => x.name.replace(`.${x.file_extension}`, ''))
  const lcs = getLcstr(a, b)
  if (lcs)
    return lcs.replace(/\s*S\d+E\d*|\s*E\d+/i, '').trim()

  return ''
}

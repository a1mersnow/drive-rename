export function getNewNameByExp(oldName: string, from: string, to: string) {
  try {
    return oldName.replace(new RegExp(from), to)
  }
  catch {
    return ''
  }
}

export const SeasonEpisodeExtract = /S(?:eason)?[._\- ]?([0-9]{1,3})(?![0-9])(?:[._\- ]?E|[._\- ])([0-9]{1,3})(?![0-9])|EP?([0-9]{1,3})(?![0-9])|(?<![0-9])([0-9]{1,3})(?![0-9])(?![PK][._\- ])/i

export function getNewNameByExtract(oldName: string, prefix: string, season: string) {
  const episode = getEpisode(oldName)
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

export function getEpisode(oldName: string) {
  const groups = oldName.replace(/\.[a-z0-9]+$/i, '').matchAll(new RegExp(SeasonEpisodeExtract, 'g'))
  const candidates = []
  for (const [_, _s, epm1, epm2, epm3, epm4] of groups) {
    const t = epm1 || epm2 || epm3 || epm4
    if (t)
      candidates.push(t)
  }
  const normalize = (x: string) => String(+x).padStart(3, '0')
  if (candidates.length === 2)
    return normalize(candidates[1])
  else if (candidates.length)
    return normalize(candidates[0])
  else
    return ''
}

export function getSeason(oldName: string) {
  const [_, s] = oldName.match(SeasonEpisodeExtract) || []
  return s
}

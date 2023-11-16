export function getNewNameByExp(oldName: string, from: string, to: string) {
  try {
    return oldName.replace(new RegExp(from), to)
  }
  catch {
    return ''
  }
}

export const SeasonEpisodeExtract = /S(?:eason)?[._\- ]?([0-9]{1,3})(?![0-9])(?:[._\- ]?E|[._\- ])([0-9]{1,3})(?![0-9])|E([0-9]{1,3})(?![0-9])|EP([0-9]{1,3})(?![0-9])|(?<![0-9])([0-9]{1,3})(?![0-9])/i

export function getNewNameByExtract(oldName: string, prefix: string, season: string) {
  const [_, _s, epm1, epm2, epm3, epm4] = oldName.match(SeasonEpisodeExtract) || []
  let episode = epm1 || epm2 || epm3 || epm4
  season = String(+season).padStart(2, '0')
  episode = String(+episode).padStart(3, '0')
  if (!episode || !season)
    return ''
  const m = oldName.match(/(\.[a-z0-9]+)$/i)
  return `${prefix} S${season}E${episode}${m ? m[1] : ''}`
}

export function getSeason(oldName: string) {
  const [_, s] = oldName.match(SeasonEpisodeExtract) || []
  return s
}

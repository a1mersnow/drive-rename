import { describe, expect, it } from 'vitest'
import { getEpisode as g, getEpisodeByHelpers as gh } from './rename'

describe('get new name by extract', () => {
  it('> 1.mp4', () => {
    expect(g('1.mp4')).toBe('001')
  })

  it('> 火影忍者.S01.E17.1080P.mp4', () => {
    expect(g('火影忍者.S01.E17.1080P.mp4')).toBe('017')
  })

  it('> 火影忍者 E17.mp4', () => {
    expect(g('火影忍者 E17.mp4')).toBe('017')
  })

  it('> XianJianqiXiaZhuan.4_27_1080P.mp4', () => {
    expect(gh('XianJianQiXiaZhuan.4_27_1080P.mp4', { pre: 'XianJianQiXiaZhuan.4', post: '' })).toBe('027')
  })

  it('> 仙剑4.27.mp4', () => {
    expect(g('仙剑4.27.mp4')).toBe('027')
  })

  it('> 27_4K_WFYSFX.mp4', () => {
    expect(g('27_4K_WFYSFX.mp4')).toBe('027')
  })

  it('> [洗码]S01E29- 2160p.WEB-DL.DDP 2.0.H.265.mp4', () => {
    expect(g('[洗码]S01E29- 2160p.WEB-DL.DDP 2.0.H.265.mp4')).toBe('029')
  })

  it('> 苍兰决 第1季 第08话 魔尊中了迷魂药 [H265.AAC.4K].mp4', () => {
    expect(g('苍兰决 第1季 第08话 魔尊中了迷魂药 [H265.AAC.4K].mp4')).toBe('008')
  })
})

import { describe, expect, it } from 'vitest'
import { getEpisode as g, getEpisodeByCompare as gc, getEpisodeByHelpers as gh, getNewNameBySequence as gs } from './rename'

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

describe('get new name by extract with helpers', () => {
  it('> XianJianqiXiaZhuan.4_27_1080P.mp4', () => {
    expect(gh('XianJianQiXiaZhuan.4_27_1080P.mp4', { pre: 'XianJianQiXiaZhuan.4', post: '' })).toBe('027')
  })
})

describe('get new name by compare', () => {
  it('> XianJianqiXiaZhuan.4_27_1080P.mp4', () => {
    expect(gc('XianJianQiXiaZhuan.4_27_1080P.mp4', 'XianJianQiXiaZhuan.4_26_1080P.mp4')).toBe('027')
  })
})

describe('get new name by sequence', () => {
  it('> 基础测试：索引0, 第1集', () => {
    expect(gs('随便什么名字.mp4', '火影忍者', '1', 0)).toBe('火影忍者.S01E001.mp4')
  })

  it('> 索引1, 第2集', () => {
    expect(gs('file.mkv', '测试剧名', '1', 1)).toBe('测试剧名.S01E002.mkv')
  })

  it('> 带季号: S02', () => {
    expect(gs('video.avi', '剧名', '2', 0)).toBe('剧名.S02E001.avi')
  })

  it('> 带偏移: offset=10', () => {
    expect(gs('video.mp4', '剧名', '1', 0, '10')).toBe('剧名.S01E011.mp4')
  })

  it('> 前缀0个数: 2位', () => {
    expect(gs('video.mp4', '剧名', '1', 0, undefined, 2)).toBe('剧名.S01E01.mp4')
  })

  it('> 综合测试: S03, 索引5, 偏移-2, 4位', () => {
    expect(gs('whatever.mp4', '综合测试', '3', 5, '-2', 4)).toBe('综合测试.S03E0004.mp4')
  })

  it('> 剧名带点: 测试.', () => {
    expect(gs('file.mp4', '测试.', '1', 0)).toBe('测试.S01E001.mp4')
  })
})

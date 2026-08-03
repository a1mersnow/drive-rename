<p align="center">
  <a href="https://greasyfork.org/zh-CN/scripts/479295-%E4%BA%91%E7%9B%98%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D"
  target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://cdn.jsdelivr.net/gh/a1mersnow/drive-rename/public/favicon.svg" alt="drive rename logo">
  </a>
</p>
<br/>

# 批量重命名你的云盘文件

> [!NOTE]
> 由于Chrome对扩展程序的限制加强，此脚本可能需要启用开发者模式才能正常使用：
> 右上角三个点->扩展程序->管理扩展程序->右上角启用"开发者模式"，重新启动浏览器

## 功能特点

- 三种批量重命名模式：剧集提取 / 顺序编号 / 正则替换
- 实时预览重命名结果，所见即所得
- 支持多个网盘平台：
  - 阿里云盘
  - 百度网盘
  - 夸克云盘
  - 123云盘
  - 天翼云盘
  - 移动云盘（新个人云）
  - 115网盘
  - UC网盘

## 使用方法

安装脚本后，进入任意支持的网盘文件列表页，顶部工具栏会出现"重命名"按钮（位置因网盘而异），点击即可打开重命名面板，右侧同步显示预览窗口。

## 剧集模式

从原文件名中自动提取集数，生成 `剧名.S01E01.mp4` 格式，适配 Infuse / VidHub / Jellyfin / Emby / Plex 等媒体服务器的刮削规范。

#### 参数说明

| 参数 | 说明 |
|------|------|
| 剧名 | 重命名后的剧集名称，初始自动从文件名中提取中文或最长公共子串 |
| 季 | 季号，自动从 `S1Exx` / `Season.1.Exx` 等格式提取，默认 1 |
| 集数偏移 | 对提取到的集数做加减，例如偏移 `-1` 可将第 2 集变为第 1 集 |
| 集数前缀0个数 | 集数编号的位数，默认 2 位（`01`），可设为 3 位（`001`） |
| 是否包含字幕文件 | 勾选后字幕文件（ass/srt/ssa 等）也会参与重命名 |

#### 辅助定位集数

当程序无法正确提取集数时（如 `1080P.h264.仙剑.4.12.mp4` 无法判断 `4` 和 `12` 哪个是集数），可在右侧预览窗口顶部的 `[集数]` 前后填入辅助文本，例如在 `[集数]` 前填入 `仙剑.4`，程序即知道 `仙剑.4` 中不包含集数，从而定位到 `12`。

## 顺序模式

无视原文件名，按文件列表顺序依次编号为 `剧名.S01E01.mp4`。

#### 参数说明

| 参数 | 说明 |
|------|------|
| 剧名 | 剧集名称 |
| 季 | 季号 |
| 集数偏移 | 从第几集开始编号，例如偏移 `10` 则第一个文件编号为 `S01E11` |
| 集数前缀0个数 | 集数编号的位数 |

## 正则模式

使用 JavaScript 正则表达式对文件名做查找替换。

#### 参数说明

| 参数 | 说明 |
|------|------|
| From | 正则表达式 |
| To | 替换表达式，支持 `$1` 等反向引用 |

替换逻辑等价于 `fileName.replace(new RegExp(From), To)`。

## 预览窗口

- 实时显示所有文件的原名和新名对比
- 通过勾选/取消勾选控制哪些文件参与重命名
- 命名冲突时（两个文件新名相同）会红色闪烁提示
- 点击文件名可将其快速填充到"剧名"或"From"输入框
- 运行完成后显示成功/失败/跳过数量，自动刷新页面

## 如何新增一个网盘

每个网盘对应 `src/providers/` 下的一个文件，需实现 `Provider` 接口：

- `HOSTS` - 匹配的域名
- `getFileListOfCurrentDir` - 获取当前目录文件列表
- `renameOne` - 重命名单个文件
- `shouldShowEntry` - 判断当前 URL 是否显示按钮
- `getContainer` - 按钮挂载的位置和样式
- `ButtonComponent` - 按钮 Vue 组件

## CONTRIBUTION

See [the Contributing Guide](CONTRIBUTING.md)

## Thanks

- Great thanks to [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey) which makes developing user script by vue easy.
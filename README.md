# 批量重命名你的云盘文件

## 功能特点
- 🚀 两种模式：剧集 / 正则
- 👁️ 所见即所得
- 🏗️ 支持阿里云盘、夸克云盘

## 📺剧集模式

#### 界面
![剧集模式界面](https://cdn.jsdelivr.net/gh/a1mersnow/aliyundrive-rename/images/extract.jpg)

#### 适用场景
为 Infuse VidHub 等软件的刮削提供便利

#### 理论依据
[Infuse 的文档](https://support.firecore.com/hc/en-us/articles/215090947-Metadata-101)

要想让刮削过程顺利，建议采用如下目录层级：
剧名 > Season 1 > 剧名 S01E01.mp4

#### 如何使用
- 点击左侧工具栏中的 <kbd>重命名</kbd> 按钮
- 检查自动提取的`剧名`和`季`是否正确
- 点击 <kbd>Run It!</kbd> 按钮，等待运行结束即可

#### 自动提取剧名和季
- 剧名
  - 包含中文时，选取中文
  - 否则，取最长公共子串
- 季
  - `S1Exx`, `Season1Exx`, `Season 1 Exx`, `Season.1.Exx`...
  - 提取不到时，默认为1

#### 辅助定位集数
当程序无法正确提取“集数”时，可以使用右上角的辅助定位功能帮助程序完成“集数”的提取。

例如原文件名为“1080P.h264.仙剑.4.12.mp4”，此时程序无法判断出4和12何者为“集数”，则可以在“[集数]”之前填写“仙剑.4”，程序则知道“仙剑.4”中一定不包含“集数”。

## 正则模式

#### 界面
![正则模式界面](https://cdn.jsdelivr.net/gh/a1mersnow/aliyundrive-rename/images/regexp.jpg)

#### 注意事项
- 此模式建议有正则基础的朋友使用
- 替换采用了 Javascript 的 `String.prototype.replace` 方法

## 右侧预览窗口
- 绿色的双向箭头代表新的命名已经与旧的命名相同
- 可以通过勾选达到重命名部分文件的效果
  - 新的命名已经与旧的命名相同时无法勾选
  - 新的命名为空时无法勾选

## Contribute
如果你有其他云盘的批量重命名需求，欢迎提PR。只需要实现新的 providers/xxx 即可。

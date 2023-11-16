# 批量重命名你的阿里云盘文件

## 功能特点
- 🚀 两种模式：剧集 / 正则
- 👁️ 所见即所得

## 界面
![界面](https://cdn.jsdelivr.net/gh/a1mersnow/aliyundrive-rename@0.0.8/images/overview.jpg)

## 📺剧集模式

#### 适用场景
为 Infuse VidHub 等软件的刮削提供便利

#### 理论依据
[Infuse 的文档](https://support.firecore.com/hc/en-us/articles/215090947-Metadata-101)  

要想让刮削过程顺利，建议采用如下目录层级：  
剧名 > Season 1 > 剧名 S01E01.mp4

#### 如何使用
- 点击左侧工具栏中的 <kbd>重命名</kbd> 按钮
- 检查自动提取的`剧名`和`季`是否正确
  + 如果不正确可以手动调整，方法有：
    - 直接手动修改
    - 使用左侧弹窗里的 <kbd>骰子</kbd> 按钮随机填充一个原文件名后手动修改
    - 使用右侧预览窗口里的 <kbd>字母箭头</kbd> 按钮手动选择原文件名填充后手动修改
- 点击 <kbd>Run It!</kbd> 按钮，等待运行结束即可

#### 右侧预览窗口
- 绿色的双向箭头代表新的命名已经与旧的命名相同
- 可以通过勾选达到重命名部分文件的效果
  - 新的命名已经与旧的命名相同时无法勾选
  - 新的命名为空时无法勾选
- 运行过程中：
  + 已完成的重命名项会在后面打上 ✅
  + 失败的重命名项会在后面打上 ❌

#### 自动提取剧名和季
- 剧名
  - 包含中文时，选取中文
  - 否则，取最长公共子串
- 季
  - `S1Exx`, `Season1Exx`, `Season 1 Exx`, `Season.1.Exx`...
  - 提取不到时，默认为1

## 正则模式
- 此模式建议有正则基础的朋友使用
- 替换采用了 Javascript 的 `String.prototype.replace` 方法

## 打赏
![打赏](https://cdn.jsdelivr.net/gh/a1mersnow/aliyundrive-rename@0.0.8/images/coffee.jpg)

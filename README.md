# 📺 我的影视仓 / TVBox Configuration

> 个人影视仓 / TVBox 配置文件，基于 [饭太硬](https://github.com/qist/tvbox) 大神配置修改。  
> Personal TVBox configuration, based on [qist/tvbox](https://github.com/qist/tvbox).

---

## 📖 仓库说明 / About

本仓库是个人使用的影视仓 / TVBox 配置，包含影视、音乐、动漫、直播、看球等多种资源聚合源，以及自定义 spider 爬虫文件。

This repository contains a personal TVBox / 影视仓 configuration with aggregated sources for movies, music, anime, live TV, sports, and more, along with a custom spider file.

---

## 🚀 使用方法 / How to Use

### 中文

1. 打开 **影视仓** 或 **TVBox** 客户端
2. 找到「配置」或「设置」入口
3. 填入以下配置地址：

```
https://juhuangapi.gaoops.top/
```

4. 保存后等待加载完成即可

### English

1. Open your **TVBox** or **影视仓** client
2. Navigate to "Config" or "Settings"
3. Enter the following configuration URL:

```
https://juhuangapi.gaoops.top/
```

4. Save and wait for the configuration to load

---

## 📁 文件结构 / File Structure

```
仓库根目录 / Repository Root
│
├── README.md                  # 说明文件 / This file
├── my_tvbox_local.json        # 主配置文件 / Main config file
│
├── jar/
│   └── spider.jar             # 爬虫核心文件 / Spider core file
│
└── FTY/
    ├── drpy2.min.js           # JS 解析引擎 / JS parser engine
    ├── 虎牙.js                # 虎牙直播 / Huya Live
    ├── 斗鱼直播.js            # 斗鱼直播 / Douyu Live
    └── 兔小贝.js              # 儿童启蒙 / Kids content
```

---

## ⚠️ 注意事项 / Notes

### 中文

- 本配置仅供个人学习交流使用，请勿用于商业用途
- 所有资源均来自互联网，本仓库不存储任何视频内容
- `jar/spider.jar` 为自定义爬虫文件，若失效请及时更新
- `FTY/` 目录下的 JS 文件为虎牙、斗鱼、兔小贝三个源的依赖，缺失会导致这三个源无法使用
- 部分源可能因网络环境不同而无法使用，属正常现象
- 请勿轻信视频中出现的任何广告信息

### English

- This configuration is for personal learning and communication only. Commercial use is prohibited.
- All resources are sourced from the internet. This repository does not host any video content.
- `jar/spider.jar` is a custom spider file. Please update it promptly if it becomes invalid.
- JS files in the `FTY/` directory are required by Huya, Douyu, and Kids sources. Missing files will cause those sources to fail.
- Some sources may be unavailable depending on your network environment. This is normal.
- Do not trust any advertisements appearing in videos.

---

## 🙏 致谢 / Credits

- 感谢 [饭太硬](https://github.com/qist/tvbox) 提供的原始配置和 spider 文件
- Thanks to [qist/tvbox](https://github.com/qist/tvbox) for the original configuration and spider file

---

## 📄 许可 / License

本仓库仅供个人学习使用，不提供任何担保。  
This repository is for personal learning use only, provided without any warranty.

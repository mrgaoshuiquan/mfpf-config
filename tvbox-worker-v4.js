export default {
  async fetch(request) {

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }

    const config = {
      "spider": "https://fongmitv.gaoops.top/spider.jar",
      "wallpaper": "https://bing.img.run/rand.php",
      "lives": [
        {
          "name": "IPTV-直播",
          "type": 0,
          "url": "https://iptv.gaoops.top/m3u",
          "epg": "http://epg.51zmt.top:8000/e.xml.gz",
          "logo": "https://live.fanmingming.com/tv/logo"
        }
      ],
      "sites": [

        // ========== 首页展示 ==========
        { "key": "douban", "name": "🎬豆瓣｜首页 www.gaoops.com", "type": 3, "api": "csp_Douban", "searchable": 0, "quickSearch": 0, "filterable": 0 },
        { "key": "yugao", "name": "🎬新片｜预告 www.gaoops.com", "type": 3, "api": "csp_YGP", "searchable": 0, "quickSearch": 0, "filterable": 0 },
        { "key": "localfile", "name": "🎬本地｜视频 www.gaoops.com", "type": 3, "api": "csp_LocalFile", "searchable": 0, "quickSearch": 0, "filterable": 0 },

        // ========== APP 聚合资源 ==========
        { "key": "reboy", "name": "🎬热播｜APP www.gaoops.com", "type": 3, "api": "csp_AppRJ", "searchable": 1, "quickSearch": 1, "filterable": 0, "ext": { "url": "http://v.rbotv.cn" } },
        { "key": "sanqiu", "name": "🎬三秋｜APP www.gaoops.com", "type": 3, "api": "csp_App3Q", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "jianguo", "name": "🎬坚果｜APP www.gaoops.com", "type": 3, "api": "csp_AppJg", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "hanquan", "name": "🎬韩圈｜APP www.gaoops.com", "type": 3, "api": "csp_Hxq", "searchable": 1, "quickSearch": 1, "filterable": 1, "ext": "https://fishapi.wya6.com/fish/fishhxq.php" },
        { "key": "nuna", "name": "🎬奴娜｜APP www.gaoops.com", "type": 3, "api": "csp_AppYsV2", "searchable": 1, "quickSearch": 1, "filterable": 1, "ext": "https://www.nntv.in/api.php/v1.vod" },
        { "key": "shanying", "name": "🎬闪影｜APP www.gaoops.com", "type": 3, "api": "csp_AppYsV2", "searchable": 1, "quickSearch": 1, "filterable": 1, "ext": "http://38.47.213.61:41271/mogai_api.php/v1.vod" },
        { "key": "lianyu", "name": "🎬恋鱼｜APP www.gaoops.com", "type": 3, "api": "csp_AppFox", "searchable": 1, "changeable": 1, "ext": { "host": "http://103.117.137.33:2443", "ver": 2 } },
        { "key": "yunbo", "name": "🎬云播｜APP www.gaoops.com", "type": 3, "api": "csp_AppFox", "searchable": 1, "changeable": 1, "ext": { "host": "http://app.hktvyb.cc" } },
        { "key": "huomao", "name": "🎬火猫｜APP www.gaoops.com", "type": 3, "api": "csp_AppFox", "searchable": 1, "changeable": 1, "ext": { "host": "https://cunchu8.obs.cn-north-4.myhuaweicloud.com/fox.json" } },
        { "key": "huoguo", "name": "🎬火锅｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "url": "https://ios.hgyx.vip", "dataKey": "062dec75d039980e", "dataIv": "062dec75d039980e" } },
        { "key": "yunduo", "name": "🎬云朵｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "url": "https://yd4kcms.yd4k.top", "dataKey": "Tpmm9FD99lJ8Dexa", "dataIv": "Tpmm9FD99lJ8Dexa" } },
        { "key": "guwo", "name": "🎬顾我｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "searchable": 1, "changeable": 1, "ext": { "site": "https://guwozj-1319364746.cos.ap-guangzhou.myqcloud.com/gw7.txt", "dataKey": "ca94b06ca3c7d80e", "dataIv": "ca94b06ca3c7d80e", "init": "initV122", "ua": "okhttp/3.10.0" } },
        { "key": "aiying", "name": "🎬爱影｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "searchable": 1, "changeable": 1, "ext": { "site": "https://aysappto.oss-cn-chengdu.aliyuncs.com/q20.txt", "dataKey": "ada211sdfsff3261", "dataIv": "ada211sdfsff3261", "init": "initV122", "search": "mineInfo", "ua": "okhttp/3.10.0" } },
        { "key": "xinghe", "name": "🎬星河｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "searchable": 1, "changeable": 1, "ext": { "site": "https://daen-1256234123.cos.ap-shanghai.myqcloud.com/MuQi/mqxhqj.txt", "dataKey": "kj37zs29q22jk96t", "dataIv": "kj37zs29q22jk96t", "init": "initV122", "ua": "okhttp/3.10.0" } },
        { "key": "jinpai", "name": "🎬金牌｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "searchable": 1, "changeable": 1, "ext": { "url": "https://qj3.ggtvb.cc", "dataKey": "eecbio48dsq13kkk", "dataIv": "eecbio48dsq13kkk", "search": "searchList4", "init": "initV122", "ua": "okhttp/3.10.0" } },
        { "key": "qiqi", "name": "🎬奇奇｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "searchable": 1, "changeable": 1, "ext": { "url": "http://110.42.67.221:8009", "dataKey": "123456789abcdefg", "dataIv": "123456789abcdefg", "init": "initV122", "ua": "okhttp/3.10.0" } },
        { "key": "laoying", "name": "🎬老鹰｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "searchable": 1, "changeable": 1, "ext": { "site": "https://maotouyinghubei.oss-cn-wuhan-lr.aliyuncs.com/maotouyinghb.txt", "dataKey": "zxPtEUDGVllIUhDB", "dataIv": "zxPtEUDGVllIUhDB", "ua": "okhttp/3.10.0" } },
        { "key": "aiying2", "name": "🎬爱盈｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "searchable": 1, "changeable": 1, "ext": { "site": "https://rxysyyds.oss-cn-chengdu.aliyuncs.com/qiji.txt", "dataKey": "sjvlwnhk6h9znl61", "dataIv": "sjvlwnhk6h9znl61", "version": "305", "ua": "okhttp/3.10.0" } },
        { "key": "huazhu", "name": "🎬花猪｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "searchable": 1, "changeable": 1, "ext": { "site": "https://tiantangyoulu.oss-cn-beijing.aliyuncs.com/wenxintishi.txt", "dataKey": "h2t8fjo964j2sl6a", "dataIv": "h2t8fjo964j2sl6a", "ua": "okhttp/3.10.0" } },
        { "key": "juzi", "name": "🎬橘子｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "searchable": 1, "changeable": 1, "ext": { "site": "https://juziapp-1319209748.cos.ap-chengdu.myqcloud.com/juzi.txt", "dataKey": "jasaFBcdV3zrUDf2", "dataIv": "jasaFBcdV3zrUDf2", "version": "305", "init": "initV122", "ua": "okhttp/3.10.0" } },
        { "key": "youtu", "name": "🎬优兔｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "searchable": 1, "changeable": 1, "ext": { "site": "https://uututv-1319209748.cos.ap-shanghai.myqcloud.com/uutuv4.txt", "dataKey": "UrWKPnmQWJA8AQzd", "dataIv": "UrWKPnmQWJA8AQzd", "ua": "okhttp/3.10.0" } },
        { "key": "lanying", "name": "🎬蓝鹰｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "searchable": 1, "changeable": 1, "ext": { "site": "https://lanyinghz.oss-cn-hangzhou.aliyuncs.com/lanyingxmy.txt", "dataKey": "ca94b06ca359d80e", "dataIv": "ca94b06ca359d80e", "init": "initV120", "ua": "okhttp/3.10.0" } },
        { "key": "xiaoyang", "name": "🎬小羊｜APP www.gaoops.com", "type": 3, "api": "csp_AppQi", "ext": { "url": "https://qjappcms410.xy4k.com", "dataKey": "mC6kG4mI1uM8tS4o", "dataIv": "mC6kG4mI1uM8tS4o" } },
        { "key": "bucuo", "name": "🎬不错｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "url": "https://zbc4kmcs.zbc4k.app", "dataKey": "vE4kR7cF6jS6jH7a", "dataIv": "vE4kR7cF6jS6jH7a" } },
        { "key": "xingkong", "name": "🎬星空｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "url": "http://xkos1.xkgzs.xyz", "dataKey": "77jkcdvdodfcdkjk", "dataIv": "77jkcdvdodfcdkjk" } },
        { "key": "huohu", "name": "🎬火狐｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "url": "http://huohu.yihn.cc", "dataKey": "huohushipingetap", "dataIv": "huohushipingetap" } },
        { "key": "miaokann", "name": "🎬秒看｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "site": "https://mk1080.top/get.txt", "dataKey": "c60d88b2eep53za8", "dataIv": "c60d88b2eep53za8", "token": "4181e508e7a17657d6a6246e70b1b13553e5ae9d8d287dc47000fb2df638dffa" } },
        { "key": "moli", "name": "🎬茉莉｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "site": "https://gitee.com/wmmoliill/wimg/raw/master/img/bk/9.txt", "dataKey": "88689667dce61725", "dataIv": "88689667dce61725" } },
        { "key": "duanyou", "name": "🎬段友｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "url": "https://shangjihuoke.com", "dataKey": "8E2DC386FD452D05", "dataIv": "8E2DC386FD452D05" } },
        { "key": "heimao", "name": "🎬黑猫｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "url": "http://app1-0-0.87333.cc", "dataKey": "VwsHxkCViDXEExWa", "dataIv": "VwsHxkCViDXEExWa" } },
        { "key": "linghu", "name": "🎬灵虎｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "site": "https://bind.315999.xyz/89.txt", "dataKey": "#getapp@TMD@2025", "dataIv": "#getapp@TMD@2025" } },
        { "key": "yizhan", "name": "🎬驿站｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "site": "https://dyyztvappapigoodgx.68.gy:12689/ciwk28vu38io8/apiurl.txt", "dataKey": "dyyztvapiappyyds", "dataIv": "dyyztvapiappyyds" } },
        { "key": "qiyi", "name": "🎬七壹｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "url": "https://qiyiys.cc", "dataKey": "45452893929B40D9", "dataIv": "45452893929B40D9" } },
        { "key": "ruiqi", "name": "🎬瑞奇｜APP www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "changeable": 1, "ext": { "url": "http://rqxk.gdata.fun", "dataKey": "yangruiqiYsapp00", "dataIv": "yangruiqiYsapp00" } },

        // ========== 影视站点 ==========
        { "key": "changzhang", "name": "🎬厂长｜影视 www.gaoops.com", "type": 3, "api": "csp_Czsapp", "searchable": 1, "quickSearch": 1, "filterable": 1, "ext": "https://www.czzymovie.com" },
        { "key": "jinpaiys", "name": "🎬金牌｜影视 www.gaoops.com", "type": 3, "api": "csp_Jpys", "ext": "https://m.610pkea.com,https://y2s52n7.com,https://m.hkybqufgh.com" },
        { "key": "yunboYS", "name": "🎬云播｜影视 www.gaoops.com", "type": 3, "api": "csp_Tvyb", "ext": "http://www.tvyb03.com" },
        { "key": "jiaozi", "name": "🎬饺子｜影视 www.gaoops.com", "type": 3, "api": "csp_Jiaozi", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "guazi", "name": "🎬瓜子｜影视 www.gaoops.com", "type": 3, "api": "csp_Gz360", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "saohuo", "name": "🎬骚火｜影视 www.gaoops.com", "type": 3, "api": "csp_SaoHuo", "searchable": 1, "quickSearch": 1, "filterable": 1, "ext": "https://shdy5.us" },
        { "key": "nongmin", "name": "🎬农民｜影视 www.gaoops.com", "type": 3, "api": "csp_Wwys", "searchable": 1, "quickSearch": 1, "filterable": 1, "ext": "https://vip.wwgz.cn:5200" },
        { "key": "aikan", "name": "🎬爱看｜影视 www.gaoops.com", "type": 3, "api": "csp_Ikanbot", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "sp360", "name": "🎬三六零｜视频 www.gaoops.com", "type": 3, "api": "csp_SP360", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "web1905", "name": "🎬1905｜影视 www.gaoops.com", "type": 3, "api": "csp_Web1905", "searchable": 1, "quickSearch": 0, "filterable": 0 },

        // ========== 4K 网盘资源 ==========
        { "key": "wandou", "name": "🎬玩偶｜4K www.gaoops.com", "type": 3, "api": "csp_Wogg", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["https://wogg.xxooo.cf", "https://woggpan.888484.xyz", "https://wogg.333232.xyz", "http://woggpan.xxooo.cf", "https://www.wogg.one"] }, "timeout": 60 },
        { "key": "kuaiying", "name": "🎬快映｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShare", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["http://xsayang.fun:12512", "http://154.201.83.50:12512"] }, "timeout": 60 },
        { "key": "muou", "name": "🎬木偶｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShare", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["https://123.666291.xyz", "https://666.666291.xyz", "https://www.muou.site", "https://www.muou.asia"] }, "timeout": 60 },
        { "key": "labi", "name": "🎬蜡笔｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShare", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["http://xiaocge.fun", "http://feimo.fun", "https://feimao666.fun", "http://feimao888.fun", "http://www.labi88.sbs"] }, "timeout": 60 },
        { "key": "zhizhen", "name": "🎬至臻｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShare", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["https://mihdr.top", "https://www.miqk.cc", "https://xiaomiai.site", "https://xiaomi666.fun", "https://www.zhizhenpan.fun"] }, "timeout": 60 },
        { "key": "duoduo", "name": "🎬多多｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShare", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["https://tv.yydsys.top", "https://tv.yydsys.cc", "https://tv.214521.xyz"] }, "timeout": 60 },
        { "key": "ouge", "name": "🎬欧哥｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShare", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["https://woog.nxog.eu.org", "https://woog.nxog.fun", "https://woog.430520.xyz"] }, "timeout": 60 },
        { "key": "erxiao", "name": "🎬二小｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShare", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["https://www.2xiaopan.top", "https://2xiaopan.top", "https://www.erxiaozhan.top", "https://www.2xiaozhan.top", "https://wexwp.cc"] }, "timeout": 60 },
        { "key": "hubann", "name": "🎬虎斑｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShare", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["http://xhban.xyz:20720", "http://154.222.27.33:20720"] }, "timeout": 60 },
        { "key": "shandian", "name": "🎬闪电｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShare", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["https://sd.sduc.site"] }, "timeout": 60 },
        { "key": "kuake", "name": "🎬夸克｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShareCloudKK", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["https://www.quarktv.cc"] }, "timeout": 60 },
        { "key": "qingying", "name": "🎬清影｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShareCloudQY", "searchable": 1, "quickSearch": 1, "filterable": 1, "changeable": 1, "ext": { "site": ["http://www.revohd.com"] }, "timeout": 60 },
        { "key": "leijing", "name": "🎬雷鲸｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShareCloudLJ", "searchable": 1, "quickSearch": 0, "filterable": 0, "ext": { "site": ["https://www.leijing.xyz", "https://www.leijing1.com"] }, "timeout": 60 },
        { "key": "haimian", "name": "🎬海绵｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShareCloudHM", "searchable": 1, "quickSearch": 0, "filterable": 0, "ext": { "site": ["http://haimian.eu.org", "https://www.hmxz.org", "https://www.haimianxz.com"] }, "timeout": 60 },
        { "key": "panta", "name": "🎬盘它｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShareCloudPT", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "pan123", "name": "🎬123｜4K www.gaoops.com", "type": 3, "api": "csp_PanWebShareCloud123", "searchable": 1, "quickSearch": 0, "filterable": 0, "ext": { "site": ["https://123panfx.com", "https://pan1.me"] }, "timeout": 60 },
        { "key": "renren", "name": "🎬人人｜4K www.gaoops.com", "type": 3, "api": "csp_RenRen", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "jike", "name": "🎬即刻｜4K www.gaoops.com", "type": 3, "api": "csp_Jike", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "shuangxing", "name": "🎬双星｜4K www.gaoops.com", "type": 3, "api": "csp_ShuangXing", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },

        // ========== 短剧 ==========
        { "key": "tianquan", "name": "🎬甜圈｜短剧 www.gaoops.com", "type": 3, "api": "csp_TianquanDJ", "searchable": 1, "changeable": 1, "quickSearch": 1, "filterable": 1, "genre": "shortdrama" },
        { "key": "jinli", "name": "🎬锦鲤｜短剧 www.gaoops.com", "type": 3, "api": "csp_JinliDJ", "searchable": 1, "changeable": 1, "quickSearch": 1, "filterable": 1, "genre": "shortdrama" },
        { "key": "xingge", "name": "🎬星阁｜短剧 www.gaoops.com", "type": 3, "api": "csp_XinggeDJ", "searchable": 1, "changeable": 1, "quickSearch": 1, "filterable": 1, "genre": "shortdrama" },
        { "key": "suipian", "name": "🎬碎片｜短剧 www.gaoops.com", "type": 3, "api": "csp_SuipianDJ", "searchable": 1, "changeable": 1, "quickSearch": 1, "filterable": 1, "genre": "shortdrama" },

        // ========== 动漫 ==========
        { "key": "manguo", "name": "🎬漫国｜动漫 www.gaoops.com", "type": 3, "api": "csp_AppSy", "searchable": 1, "ext": { "site": "https://dm-1255775577.cos.ap-guangzhou.myqcloud.com/dmg/api.txt", "siteKey": "rectangleadsadxa", "listKey": "aassddwwxxllsx1x", "parsesKey": "aassddwwxxllsx1x" } },
        { "key": "yaya", "name": "🎬丫丫｜动漫 www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "ext": { "url": "http://tv.yy-fun.cc", "dataKey": "qkxnwkfjwpcnwycl", "dataIv": "qkxnwkfjwpcnwycl" } },
        { "key": "fangzhou", "name": "🎬方舟｜动漫 www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "ext": { "url": "https://www.cyfz.top", "dataKey": "e72cdfd629e8895d", "dataIv": "e72cdfd629e8895d" } },
        { "key": "yuanxiao", "name": "🎬元咲｜动漫 www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "ext": { "url": "http://cic.aicg.fun", "dataKey": "2c4h36abd96se10u", "dataIv": "2c4h36abd96se10u" } },
        { "key": "fanshu", "name": "🎬番薯｜动漫 www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "ext": { "url": "https://new.app.bytegooty.com", "dataKey": "N4yj7l7xKxHF4*gz", "dataIv": "N4yj7l7xKxHF4*gz" } },
        { "key": "manbo", "name": "🎬曼波｜动漫 www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "ext": { "url": "https://app.omofun1.top", "dataKey": "66dc309cbeeca454", "dataIv": "66dc309cbeeca454" } },
        { "key": "gugu", "name": "🎬咕咕｜动漫 www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "ext": { "url": "https://www.gugu3.com", "dataKey": "nKfZ8KX6JTNWRzTD", "dataIv": "nKfZ8KX6JTNWRzTD" } },
        { "key": "mifan", "name": "🎬米饭｜动漫 www.gaoops.com", "type": 3, "api": "csp_AppGet", "searchable": 1, "ext": { "url": "https://get.mymifun.com", "dataKey": "GETMIFUNGEIMIFUN", "dataIv": "GETMIFUNGEIMIFUN" } },

        // ========== 磁力资源 ==========
        { "key": "jianpian", "name": "🎬荐片｜磁力 www.gaoops.com", "type": 3, "api": "csp_JianPian", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "xiuluo", "name": "🎬修罗｜磁力 www.gaoops.com", "type": 3, "api": "csp_Xlys", "searchable": 1, "quickSearch": 1, "filterable": 1, "ext": "https://www.xlys02.com" },
        { "key": "qiwei", "name": "🎬七味｜磁力 www.gaoops.com", "type": 3, "api": "csp_QnMp4", "searchable": 1, "quickSearch": 1, "filterable": 1, "ext": { "url": "https://www.pkmp4.xyz,https://www.qwnull.com,https://www.qwmkv.com" } },
        { "key": "s80", "name": "🎬80S｜磁力 www.gaoops.com", "type": 3, "api": "csp_BLSGod", "playerType": 1, "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "new6v", "name": "🎬New6V｜磁力 www.gaoops.com", "type": 3, "api": "csp_New6v", "searchable": 1, "quickSearch": 1, "filterable": 1, "ext": "https://www.xb6v.com" },
        { "key": "meijumi", "name": "🎬美剧迷｜磁力 www.gaoops.com", "type": 3, "api": "csp_MeijuMi", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "xunleiba", "name": "🎬迅雷吧｜磁力 www.gaoops.com", "type": 3, "api": "csp_Xunlei8", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "dytt", "name": "🎬电影天堂｜磁力 www.gaoops.com", "type": 3, "api": "csp_DyGod", "searchable": 1, "quickSearch": 1, "filterable": 1 },

        // ========== 云盘 ==========
        { "key": "aliyun", "name": "🎬我的｜阿里 www.gaoops.com", "type": 3, "api": "csp_PanAli", "searchable": 0, "filterable": 0, "changeable": 0 },
        { "key": "quark", "name": "🎬我的｜夸克 www.gaoops.com", "type": 3, "api": "csp_PanQuark", "searchable": 0, "filterable": 0, "changeable": 0 },
        { "key": "ucpan", "name": "🎬我的｜UC www.gaoops.com", "type": 3, "api": "csp_PanUc", "searchable": 0, "filterable": 0, "changeable": 0 },
        { "key": "baidupan", "name": "🎬我的｜百度 www.gaoops.com", "type": 3, "api": "csp_PanBaiDu", "searchable": 0, "filterable": 0, "changeable": 0 },

        // ========== 搜索 ==========
        { "key": "pansou", "name": "🎬盘搜｜搜索 www.gaoops.com", "type": 3, "api": "csp_PanSou", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "tangguo", "name": "🎬糖果｜搜索 www.gaoops.com", "type": 3, "api": "csp_TGSou", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "baiku", "name": "🎬百酷｜搜索 www.gaoops.com", "type": 3, "api": "csp_Baiku", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "misou", "name": "🎬米搜｜搜索 www.gaoops.com", "type": 3, "api": "csp_MiSou", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "kule", "name": "🎬酷乐｜搜索 www.gaoops.com", "type": 3, "api": "csp_KuLe", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "guigui", "name": "🎬鬼鬼｜搜索 www.gaoops.com", "type": 3, "api": "csp_GuiGui", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "hunhe", "name": "🎬混合｜搜索 www.gaoops.com", "type": 3, "api": "csp_HunHePan", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "xiongdi", "name": "🎬兄弟｜搜索 www.gaoops.com", "type": 3, "api": "csp_XiongDiPan", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "tianyi", "name": "🎬天翼｜搜索 www.gaoops.com", "type": 3, "api": "csp_TianYiSo", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },
        { "key": "qupan", "name": "🎬趣盘｜搜索 www.gaoops.com", "type": 3, "api": "csp_QuPanSo", "searchable": 1, "quickSearch": 0, "filterable": 0, "timeout": 60 },

        // ========== 体育 & 音乐 ==========
        { "key": "kanqiu", "name": "🎬88｜看球 www.gaoops.com", "type": 3, "api": "csp_Kanqiu", "gridview": 3 },
        { "key": "tiyu919", "name": "🎬919｜体育 www.gaoops.com", "type": 3, "api": "csp_919Tiyu" },
        { "key": "tingbook", "name": "🎬六月｜听书 www.gaoops.com", "type": 3, "api": "csp_TingBook" },
        { "key": "djuu", "name": "🎬呦呦｜DJ www.gaoops.com", "type": 3, "api": "csp_Djuu" },
        { "key": "xiquu", "name": "🎬戏曲｜多多 www.gaoops.com", "type": 3, "api": "csp_AppLY" },

        // ========== 标准采集站 ==========
        { "key": "iqiyizy", "name": "🎬爱奇艺资源 www.gaoops.com", "type": 1, "api": "https://iqiyizyapi.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "dbzy", "name": "🎬豆瓣资源 www.gaoops.com", "type": 1, "api": "https://caiji.dbzy5.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "mtzy", "name": "🎬茅台资源 www.gaoops.com", "type": 1, "api": "https://caiji.maotaizy.cc/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "wolongzy", "name": "🎬卧龙资源 www.gaoops.com", "type": 1, "api": "https://wolongzyw.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "ikunzy", "name": "🎬iKun资源 www.gaoops.com", "type": 1, "api": "https://ikunzyapi.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "dyttzy", "name": "🎬电影天堂 www.gaoops.com", "type": 1, "api": "http://caiji.dyttzyapi.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "maoyanzy", "name": "🎬猫眼资源 www.gaoops.com", "type": 1, "api": "https://api.maoyanapi.top/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "lzzy", "name": "🎬量子资源 www.gaoops.com", "type": 1, "api": "https://cj.lzcaiji.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "360zy", "name": "🎬360资源 www.gaoops.com", "type": 1, "api": "https://360zyzz.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "jszy", "name": "🎬极速资源 www.gaoops.com", "type": 1, "api": "https://jszyapi.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "moduzy", "name": "🎬魔都资源 www.gaoops.com", "type": 1, "api": "https://www.mdzyapi.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "ffzy", "name": "🎬非凡资源 www.gaoops.com", "type": 1, "api": "https://api.ffzyapi.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "bfzy", "name": "🎬暴风资源 www.gaoops.com", "type": 1, "api": "https://bfzyapi.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "zuidazy", "name": "🎬最大资源 www.gaoops.com", "type": 1, "api": "https://api.zuidapi.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "wujinzy", "name": "🎬无尽资源 www.gaoops.com", "type": 1, "api": "https://api.wujinapi.me/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "xinlangzy", "name": "🎬新浪资源 www.gaoops.com", "type": 1, "api": "https://api.xinlangapi.com/xinlangapi.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "wwzy", "name": "🎬旺旺资源 www.gaoops.com", "type": 1, "api": "https://api.wwzy.tv/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "subozy", "name": "🎬速播资源 www.gaoops.com", "type": 1, "api": "https://subocaiji.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "jinyingzy", "name": "🎬金鹰点播 www.gaoops.com", "type": 1, "api": "https://jinyingzy.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "piaolingzy", "name": "🎬飘零资源 www.gaoops.com", "type": 1, "api": "https://p2100.net/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "ukuzy", "name": "🎬U酷影视 www.gaoops.com", "type": 1, "api": "https://api.ukuapi88.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "guangsuzy", "name": "🎬光速资源 www.gaoops.com", "type": 1, "api": "https://api.guangsuapi.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "hongniuzy", "name": "🎬红牛资源 www.gaoops.com", "type": 1, "api": "https://www.hongniuzy2.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "modudm", "name": "🎬魔都动漫 www.gaoops.com", "type": 1, "api": "https://caiji.moduapi.cc/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "ruyizy", "name": "🎬如意资源 www.gaoops.com", "type": 1, "api": "https://pz.168188.dpdns.org/?url=https://cj.rycjapi.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "haohuazy", "name": "🎬豪华资源 www.gaoops.com", "type": 1, "api": "https://pz.168188.dpdns.org/?url=https://hhzyapi.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "baiduzy", "name": "🎬百度云zy www.gaoops.com", "type": 1, "api": "https://pz.168188.dpdns.org/?url=https://api.apibdzy.com/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 },
        { "key": "aidanzy", "name": "🎬艾旦影视 www.gaoops.com", "type": 1, "api": "https://pz.168188.dpdns.org/?url=https://lovedan.net/api.php/provide/vod", "searchable": 1, "quickSearch": 1, "filterable": 1 }
      ]
    };

    return new Response(JSON.stringify(config, null, 2), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "max-age=3600",
      },
    });
  },
};

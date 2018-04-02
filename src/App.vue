<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style lang="scss">
page {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.flex {
  display: flex;
}

.col-flex {
  display: flex;
  flex-direction: column;
}

.flex-between {
  justify-content: space-between;
}

.flex-around {
  justify-content: space-around;
}

.flex1 {
  flex: 1;
}

.center {
  align-items: center;
}

.by-center {
  text-align: center;
}

scroll-view {
  -webkit-overflow-scrolling: touch;
}

.clear-fix:after {
  content: ".";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}




@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_532235_e8e8d8wlb0nklnmi.eot?t=1522307773198'); /* IE9*/
  src: url('//at.alicdn.com/t/font_532235_e8e8d8wlb0nklnmi.eot?t=1522307773198#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('//at.alicdn.com/t/font_532235_e8e8d8wlb0nklnmi.ttf?t=1522307773198') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_532235_e8e8d8wlb0nklnmi.svg?t=1522307773198#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-h5shanghua:before { content: "\e6e3"; }

.icon-xinlogo:before { content: "\e704"; }

.icon-nvxingicon-Minibofangqi:before { content: "\e762"; }

.icon-nvxingicon-shangyiji:before { content: "\e765"; }

.icon-nvxingicon-xiayiji:before { content: "\e766"; }

.icon-nvxingicon-yigou:before { content: "\e769"; }

.icon-nvxingicon-wodepintuan:before { content: "\e76a"; }

.icon-nvxingicon-bangzhuzhongxin:before { content: "\e76c"; }

.icon-nvxingicon-bofang:before { content: "\e76d"; }

.icon-nvxingicon-zanting:before { content: "\e76e"; }

.icon-nvxingicon-richangwenti:before { content: "\e76f"; }

.icon-nvxingicon-bofangliebiao:before { content: "\e772"; }

.icon-nvxingicon-wengao:before { content: "\e773"; }

.icon-nvxingicon-fenxiang:before { content: "\e774"; }

.icon-nvxingicon-suoding:before { content: "\e775"; }

.icon-nvxingicon-fankui:before { content: "\e776"; }

.icon-nvxingicon-xiazai:before { content: "\e777"; }

.icon-nvxingicon-xiaojiantou:before { content: "\e778"; }

.icon-nvxingicon-tishi:before { content: "\e779"; }

.icon-nvxingicon-yaoqinghaoyoupintuan:before { content: "\e77a"; }

.icon-nvxingicon-pintuanshijian:before { content: "\e77b"; }

.icon-nvxingicon-xiaojiantouxiangxia:before { content: "\e77c"; }

.icon-nvxingicon-xuanding:before { content: "\e77d"; }

.icon-nvxingicon-bofanggai:before { content: "\e77e"; }

.icon-nvxingicon-zantinggai:before { content: "\e77f"; }



</style>

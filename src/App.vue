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





@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_532235_5di1jncpuwgq4cxr.eot?t=1521107302948'); /* IE9*/
  src: url('//at.alicdn.com/t/font_532235_5di1jncpuwgq4cxr.eot?t=1521107302948#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('//at.alicdn.com/t/font_532235_5di1jncpuwgq4cxr.ttf?t=1521107302948') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_532235_5di1jncpuwgq4cxr.svg?t=1521107302948#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xinlogo:before { content: "\e704"; }

.icon-sousuo:before { content: "\e736"; }

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

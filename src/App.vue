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
  src: url('//at.alicdn.com/t/font_845163_55fwbyg8z5.eot?t=1537356145352'); /* IE9*/
  src: url('//at.alicdn.com/t/font_845163_55fwbyg8z5.eot?t=1537356145352#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('//at.alicdn.com/t/font_845163_55fwbyg8z5.ttf?t=1537356145352') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_845163_55fwbyg8z5.svg?t=1537356145352#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-sousuo:before { content: "\e651"; }

.icon-web__zanwujilu:before { content: "\e636"; }



</style>

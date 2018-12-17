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
}
view, input, textarea, text {
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

@import "../static/css/icon.scss";

</style>

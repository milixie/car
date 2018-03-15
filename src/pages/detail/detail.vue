<template>
  <div class="detail-wrap">
    <img src="http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg" alt="" mode="widthFix" class="head">
    <div class="base-info panel">
      <i class="tips"></i>
      <span class="title">品牌故事：</span>
      <p class="content">宝马公司创建于1916年，总部设在德国慕尼黑。BMW的蓝白标志宝马总部所在地巴伐利亚州州旗的颜色。百年来，宝马汽车由最初的一家飞机引擎生产厂发展成为以高级轿车为主导，并生产享誉全球的飞机引擎、越野车和摩托车的企业集团，名列世界汽车公司前列。宝马也被译为“巴依尔”。</p>
      <p class="content">2016年3月7日 ，宝马与百度正在首页开启史无前例的互动，共同向网友发出邀请，见证宝马100年以来的驾驶乐趣。12月5日消息，宝马2017将在德国慕尼黑进行无人驾驶汽车测试。2017年4月，全新一代宝马5系长轴版全球首发。</p>
    </div>
    <div class="brand-series panel">
      <i class="tips"></i>
      <span class="title">品牌系列</span>
      <ul class="series-list">
        <li v-for="series in brandSeries" :key="series.seriesId" class="flex sub-series">
          <div class="flex1 flex series-info">
            <img :src="series.header" alt="" mode="widthFix">
            <p class="name">{{series.name}}</p>
          </div>
          <button class="viewImg">戳此查看图集</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        brandSeries: [{
          header: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
          name: '宝马x1',
          seriesId: 1001
        }, {
          header: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
          name: '宝马x2',
          seriesId: 1002
        }, {
          header: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
          name: '宝马x3',
          seriesId: 1003
        }, {
          header: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
          name: '宝马x4',
          seriesId: 1004
        }, {
          header: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
          name: '宝马x5',
          seriesId: 1005
        }]
      }
    },
    computed: {
    },
    methods: {
    }
  }

</script>
<style scoped lang="scss">
.detail-wrap {
  background: rgba(69, 90, 115, 0.1);
  .head {
    width: 100%;
  }
  .panel {
    padding: 16px 20px;
    margin-bottom: 10px;
    background: #fff;
    .tips {
      position: relative;
      top: 2px;
      display: inline-block;
      width: 3px;
      height: 15px;
      background: #455A73;
      margin-right: 10px;
    }
    .title {
      font-size: 15px;
    }
    .content {
      font-size: 13px;
      margin-top: 8px;
      line-height: 1.5em;
    }
    .series-list {
      .sub-series {
        margin: 15px 0;
        align-items: center;
        justify-content: center;
        .series-info {
          align-items: center;
          img {
            width: 40px;
            height: auto;
            border-radius: 2px;
          }
          .name {
            font-size: 14px;
            margin-left: 10px;
          }
        }
        .viewImg {
          font-size: 12px;
          background: #455A73;
          color: #fff;
          border: none;
          border-radius: 2px;
          padding: 6px 8px;
          outline: none;
          line-height: 1;
        }
      }

    }
  }
}
</style>

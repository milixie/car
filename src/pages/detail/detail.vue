<template>
  <div class="detail-wrap">
    <div class="head-img">
      <img :src="detail.coverImg" alt="" mode="widthFix" class="head">
    </div>
    <div class="base-info panel">
      <i class="tips"></i>
      <span class="title">品牌故事：</span>
      <div class="content">
        <wxParse :content="detail.introduction"></wxParse>
      </div>
      <!--<p class="content" v-for="item in detail.brandStory" :key="index">{{item.story}}</p>-->
    </div>
    <div class="brand-series panel" v-if="detail.series.length > 0">
      <i class="tips"></i>
      <span class="title">品牌系列</span>
      <ul class="series-list flex">
        <li v-for="series in detail.series" :key="series.brandId" class="sub-series">
          <div class="flex1 series-info">
            <img :src="series.brandImg" alt="" mode="widthFix">
            <p class="name">{{series.brandName}}</p>
          </div>
          <button class="viewImg">戳此查看图集</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import { detailList } from './../../utils/detail'
  import { request } from '../../utils/request'
  import wxParse from 'mpvue-wxparse'

  export default {
    components: {
      wxParse
    },
    data () {
      return {
        detail: null
      }
    },
    async onLoad () {
      const { id } = this.$root.$mp.query
      const { data: result } = await request('GET', `carbrand/${id}/?format=json`)
      console.log(result)
      if (result && Number(result.code) === 0) {
        this.detail = result.data.carDetail
      }
      // this.detail = detailList.find(item => item.id === id)
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
  .head-img {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    .head {
      width: 200rpx;
    }
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
      margin-top: 10px;
      line-height: 1.5em;
    }
    .series-list {
      justify-content: space-between;
      flex-wrap: wrap;
      box-sizing: border-box;
      -webkit-flex-wrap: wrap;
      .sub-series {
        width: 240rpx;
        border: 1px solid #f8f8f8;
        border-radius: 4px;
        padding: 10px;
        margin: 15px 0;
        align-items: center;
        justify-content: center;
        .series-info {
          text-align: center;
          img {
            width: 100%;
            height: auto;
            border-radius: 2px;
          }
          .name {
            font-size: 14px;
            margin-bottom: 10px;
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

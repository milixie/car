<template>
  <div class="container col-flex">
    <ul class="tab flex flex-between">
      <li v-for="item in labelList"
        :key="item.itemId"
        @click="switchTab"
        :data-id="item.itemId"
        class="flex1"
        :class="{active: item.itemId === currentId}">
        <span>{{item.title}}</span>
      </li>
    </ul>

    <div class="flex1" style="position: relative; width: 100%;">
      <swiper class="swiper-wrap flex1" :current="currentId" @change="changeTab">
        <swiper-item>
          <car-list :list="totalList"/>
        </swiper-item>
        <!--<swiper-item>-->
          <!--<car-list :list="famousList"/>-->
        <!--</swiper-item>-->
        <swiper-item>
          <car-list :list="chinaList"/>
        </swiper-item>
      </swiper>
    </div>
    <!--<div class="to-top"><i class="up iconfont icon-h5shanghua"></i></div>-->
    <div @click="goSearch">
      <div class="search-btn col-flex">
        <i class="iconfont icon-sousuo1 search-icon"></i>
        <span class="search-txt">搜索</span>
      </div>
      <div class="search-bg"></div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import carList from '@/components/carList'
import { getAllCarBrands } from '../../utils/api'
const { request } = require('../../utils/request')

export default {

  data () {
    return {
      currentId: 0,
      totalList: [],
      labelList: [{
        title: '全部',
        itemId: 0
      // }, {
      //   title: '知名豪车',
      //   itemId: 1
      }, {
        title: '国内',
        itemId: 1
      }]
    }
  },

  components: {
    card,
    carList
  },

  async onLoad () {
    wx.showLoading({
      title: '努力加载中'
    })
    try {
      const { data: result } = await request('GET', getAllCarBrands, {
        page: 1,
        pagesize: 1000
      })
      if (result && Number(result.code) === 0) {
        this.totalList = result.data.carList
      }
      setTimeout(() => {
        wx.hideLoading()
        wx.showToast({
          title: '加载完毕'
        })
      }, 300)
    } catch (err) {

    }
  },

  methods: {
    switchTab (e) {
      const id = e.mp.currentTarget.dataset.id
      if (id !== this.currentId) {
        this.currentId = id
      }
    },

    changeTab (e) {
      this.currentId = e.mp.detail.current
    },
    bindViewTap () {
      const url = '../logs/logs'
      wx.navigateTo({ url })
    },
    goSearch () {
      wx.navigateTo({
        url: '/pages/search/search'
      })
    }
  },

  computed: {
    famousList () {
      const total = this.totalList
      return total.filter(item => item.level === 'famous')
    },
    chinaList () {
      const total = this.totalList
      return total.filter(item => Number(item.countryId) === 3000)
    }
  },

  created () {
  }
}
</script>

<style scoped lang="scss">
.container {
  .tab {
    height: 40px;
    line-height: 38px;
    background: #f8f8f8;
    border-bottom: 0.5px solid #f0f0f0;
    li {
      text-align: center;
      font-size: 14px;
      &.active {
        color: #455A73;
        span {
          display: inline-block;
          padding: 0 6px;
          border-bottom: 3px solid #455A73;
        }
      }
    }
  }
  .swiper-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    -webkit-overflow-scrolling: touch;
  }
  .to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: 0.5px solid #455A73;
    background: #455A73;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    .up {
      font-size: 20px;
      color: #fff;
    }
  }
  .search-btn {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    background: #455A73;
    border-radius: 50%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    .search-icon {
      color: #fff;
      margin-bottom: 2px;
      font-size: 14px;
    }
    .search-txt {
      font-size: 10px;
      color: #fff;
    }
  }
  .search-bg {
    position: fixed;
    right: 27px;
    bottom: 25px;
    width: 35px;
    height: 35px;
    background: #455A73;
    box-shadow: 0 10px 30px #455A73;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>

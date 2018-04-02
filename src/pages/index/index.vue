<template>
  <div class="container col-flex">
    <!--<search/>-->
    <ul class="tab flex flex-around">
      <li v-for="item in labelList"
          :key="item.itemId"
          @click="switchTab"
          :data-id="item.itemId"
          :class="{active: item.itemId === currentId}">{{item.title}}</li>
    </ul>
    <div class="flex1" style="position: relative; width: 100%;">
      <swiper class="swiper-wrap flex1" :current="currentId" @change="changeTab">
        <swiper-item>
          <car-list :list="totalList"/>
        </swiper-item>
        <swiper-item>
          <car-list :list="famousList"/>
        </swiper-item>
        <swiper-item>
          <car-list :list="chinaList"/>
        </swiper-item>
      </swiper>
    </div>

    <!--<div class="to-top"><i class="up iconfont icon-h5shanghua"></i></div>-->
  </div>
</template>

<script>
import search from '@/components/search'
import card from '@/components/card'
import carList from '@/components/carList'
import { totalList } from './../../utils/car'
// const { request } = require('../../utils/request')

export default {

  data () {
    return {
      currentId: 0,
      totalList,
      labelList: [{
        title: '全部',
        itemId: 0
      }, {
        title: '知名豪车',
        itemId: 1
      }, {
        title: '国内',
        itemId: 2
      }]
    }
  },

  components: {
    search,
    card,
    carList
  },

  async onLoad () {
    // await request('GET', 'course', {})
    wx.showLoading({
      title: '努力加载中'
    })
    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: '加载完毕'
      })
    }, 1000)
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
    }
  },

  computed: {
    famousList () {
      const total = this.totalList
      return total.filter(item => item.level === 'famous')
    },
    chinaList () {
      const total = this.totalList
      return total.filter(item => item.countryId === 3000)
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
    background: #f8f8f8;
    border-bottom: 0.5px solid #f0f0f0;
    li {
      padding: 12px 6px 6px;
      font-size: 14px;
      &.active {
        color: #455A73;
        border-bottom: 3px solid #455A73;
      }
    }
  }
  .swiper-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
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
}
</style>

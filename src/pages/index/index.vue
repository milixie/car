<template>
  <div class="container col-flex">
    <search/>
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
          <car-list :list="domesticList"/>
        </swiper-item>
        <swiper-item>
          <car-list :list="abroadList"/>
        </swiper-item>
      </swiper>
    </div>

  </div>
</template>

<script>
import search from '@/components/search'
import card from '@/components/card'
import carList from '@/components/carList'
const { request } = require('../../utils/request')

export default {

  data () {
    return {
      motto: 'Hello World',
      currentId: 0,
      userInfo: {},
      totalList: [{
        img: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
        name: 'test',
        id: 1
      }, {
        img: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
        name: 'test',
        id: 2
      }, {
        img: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
        name: 'test',
        id: 3
      }, {
        img: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
        name: 'test',
        id: 4
      }, {
        img: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
        name: 'test',
        id: 1
      }, {
        img: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
        name: 'test',
        id: 2
      }, {
        img: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
        name: 'test',
        id: 3
      }, {
        img: 'http://piccdn.igetget.com/img/201803/06/201803061133123338129030.jpg',
        name: 'test',
        id: 4
      }],
      domesticList: [{
        img: 'http://piccdn.igetget.com/img/201801/31/201801311640468527399378.jpg',
        name: 'test',
        id: 1
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311640468527399378.jpg',
        name: 'test',
        id: 2
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311640468527399378.jpg',
        name: 'test',
        id: 3
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311640468527399378.jpg',
        name: 'test',
        id: 4
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311640468527399378.jpg',
        name: 'test',
        id: 1
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311640468527399378.jpg',
        name: 'test',
        id: 2
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311640468527399378.jpg',
        name: 'test',
        id: 3
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311640468527399378.jpg',
        name: 'test',
        id: 4
      }],
      abroadList: [{
        img: 'http://piccdn.igetget.com/img/201801/31/201801311644213048732629.jpg',
        name: 'test',
        id: 1
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311644213048732629.jpg',
        name: 'test',
        id: 2
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311644213048732629.jpg',
        name: 'test',
        id: 3
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311644213048732629.jpg',
        name: 'test',
        id: 4
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311644213048732629.jpg',
        name: 'test',
        id: 1
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311644213048732629.jpg',
        name: 'test',
        id: 2
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311644213048732629.jpg',
        name: 'test',
        id: 3
      }, {
        img: 'http://piccdn.igetget.com/img/201801/31/201801311644213048732629.jpg',
        name: 'test',
        id: 4
      }],
      labelList: [{
        title: '全部',
        itemId: 0
      }, {
        title: '国内',
        itemId: 1
      }, {
        title: '国外',
        itemId: 2
      }]
    }
  },

  components: {
    search,
    card,
    carList
  },

  async onShow () {
    await request('GET', 'course', {})
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
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
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
}
</style>

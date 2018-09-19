<template>
  <ul class="car-list-wrap clear-fix flex">
    <block v-if="list.length > 0">
      <li v-for="item in list" :key="item.id" :id="item.id" class="sub-list" @click="viewDetailInfo">
        <img :src="item.img" alt="" class="car-sign" mode="widthFix">
        <p class="name">{{item.name}}-{{item.country}}</p>
      </li>
    </block>
    <block v-else>
      <div class="none flex1 col-flex">
        <i class="iconfont icon-web__zanwujilu none-cars"></i>
        <p>暂无记录</p>
      </div>
    </block>
  </ul>
</template>

<script>
  export default {
    props: ['list'],
    methods: {
      viewDetailInfo (e) {
        console.log(e)
        wx.navigateTo({
          url: `/pages/detail/detail?id=${e.currentTarget.id}`
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .car-list-wrap {
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    padding: 10px 6px;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    -webkit-flex-wrap: wrap;
    .sub-list {
      width: 320rpx;
      padding: 10px;
      box-sizing: border-box;
      text-align: center;
      .car-sign {
        width: 240rpx;
        height: 240rpx;
      }
      .name {
        margin: 6px 0 10px;
        font-size: 13px;
      }
    }
    .none {
      width: 100%;
      text-align: center;
      align-items: center;
      justify-content: center;
      .none-cars {
        font-size: 100px;
        color: #455A73;
      }
    }
  }
</style>

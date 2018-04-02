<template>
  <ul class="car-list-wrap clear-fix">
    <li v-for="item in list" :key="item.id" class="sub-list" @click="viewDetailInfo">
      <img :src="item.img" alt="" class="car-sign" mode="widthFix">
      <p class="name">{{item.name}}-{{item.country}}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['list'],
    methods: {
      viewDetailInfo (e) {
        console.log(e)
        wx.navigateTo({
          url: '../detail/detail'
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
    .sub-list {
      width: 50%;
      float: left;
      padding: 10px 30px;
      box-sizing: border-box;
      text-align: center;
      .car-sign {
        width: 100%;
        border-radius: 4px;
      }
      .name {
        margin: 6px 0 10px;
        font-size: 13px;
      }
    }
  }
</style>

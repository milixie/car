<template>
  <ul class="car-list-wrap">
    <li v-for="item in list" :key="item.id" class="sub-list" @click="viewDetailInfo">
      <img :src="item.img" alt="" class="car-sign" mode="widthFix">
      <p>{{item.name}}</p>
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
    padding: 0 6px;
    .sub-list {
      width: 50%;
      float: left;
      padding: 10px;
      box-sizing: border-box;
      text-align: center;
      .car-sign {
        width: 100%;
        border-radius: 4px;
      }
    }
  }
</style>

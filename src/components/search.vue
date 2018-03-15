<template>
  <div class="search flex">
    <i class="iconfont icon-sousuo search-icon"></i>
    <input type="search" class="search-input flex1" v-model="searchValue" placeholder="search" @focus="focusSearchBox" @blur="blurSearchBox" >
    <p v-if="text" class="sure" @click="beginSearch">{{text}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text: '',
        searchValue: ''
      }
    },
    props: [],
    methods: {
      focusSearchBox () {
        console.log(111)
        this.text = '确定'
      },
      blurSearchBox (e) {
        this.searchValue = e.target.value
      },
      beginSearch () {
        this.text = ''
        console.log('开始搜索')
        this.searchValue = ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .search {
    position: relative;
    height: 40px;
    padding: 10px 16px;
    background: #455A73;
    justify-content: center;
    align-items: center;
    .search-icon {
      position: absolute;
      left: 22px;
      top: 50%;
      margin-top: -10px;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
    }
    .search-input {
      border: none;
      outline: none;
      border-radius: 4px;
      padding: 5px 26px;
      font-size: 14px;
      background: #fff;
    }
    .sure {
      font-size: 14px;
      color: #fff;
      padding: 10px 0 10px 14px;
    }
  }
</style>

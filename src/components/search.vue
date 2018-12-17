<template>
  <div class="search flex">
    <i class="iconfont icon-sousuo1 search-icon"></i>
    <input type="search" class="search-input flex1" v-model="searchValue" placeholder="大众" @focus="focusSearchBox">
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
        this.text = '确定'
      },
      beginSearch (e) {
        this.text = ''
        if (this.searchValue === '') this.searchValue = '大众'
        this.$emit('search', this.searchValue)
      }
    }
  }
</script>

<style scoped lang="scss">
  .search {
    position: relative;
    padding: 10px 16px;
    background: #455A73;
    justify-content: center;
    align-items: center;
    .search-icon {
      position: absolute;
      left: 22px;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
    }
    .search-input {
      border: none;
      outline: none;
      height: 36px;
      border-radius: 18px;
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

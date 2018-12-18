<template>
  <div class="hot-search" v-show="list.length > 0">
    <h3>{{ title }}</h3>
    <ul class="search-record">
      <li v-for="item in list" :key="item.id" @click="searchItem(item)">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: ['title', 'list'],
    methods: {
      searchItem (item) {
        this.$emit('searchItem', item.name)
      }
    }
  }
</script>

<style scoped lang="scss">
  .hot-search {
    padding: 20px 15px;
    h3 {
      font-size: 18px;
    }
    .search-record {
      padding-top: 10px;
      li {
        display: inline-block;
        border: 1rpx solid #ddd;
        border-radius: 2px;
        padding: 5px 8px;
        margin: 6px 8px;
        font-size: 14px;
      }
    }
  }
</style>

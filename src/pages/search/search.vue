<template>
  <div class="container col-flex">
    <div class="search-tab">
      <search @searchResult="beginSearch" :show="showHistory"/>
    </div>
    <car-list :list="searchList" nullTxt="未搜索到相关车牌" v-if="!showHistory"/>
  </div>
</template>

<script>
  import search from '@/components/search'
  import carList from '@/components/carList'

  export default {

    data () {
      return {
        historyRecord: [],
        searchVal: '',
        searchList: [],
        showHistory: true
      }
    },

    components: {
      search,
      carList
    },

    async onLoad () {

    },

    methods: {
      beginSearch (result, bool) {
        this.searchList = result
        this.showHistory = bool
      }
    },

    computed: {
    },

    created () {
    }
  }
</script>

<style scoped lang="scss">

</style>

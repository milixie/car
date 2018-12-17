<template>
  <div class="container col-flex">
    <div class="search-tab">
      <search @search="beginSearch"/>
    </div>
    <searchSetting title="热门搜索" :list="hotRecord"></searchSetting>
    <searchSetting title="历史搜索" :list="historyRecord"></searchSetting>
  </div>
</template>

<script>
  import search from '@/components/search'
  import searchSetting from '@/components/searchSetting'
  import { hotSearch } from '../../utils/hotSearch'
  // const { request } = require('../../utils/request')

  export default {

    data () {
      return {
        historyRecord: []
      }
    },

    components: {
      search,
      searchSetting
    },

    async onLoad () {
      const result = wx.getStorageSync('historySearch')
      this.historyRecord = result || []
    },

    methods: {
      beginSearch (val) {
        const find = this.historyRecord.find(item => item.name === val)
        if (find !== undefined) return
        this.historyRecord.unshift({
          name: val
        })
        if (this.historyRecord.length > 20) {
          this.historyRecord = this.historyRecord.slice(0, 20)
        }
        wx.setStorageSync('historySearch', this.historyRecord)
      }
    },

    computed: {
      hotRecord () {
        return hotSearch
      }
    },

    created () {
    }
  }
</script>

<style scoped lang="scss">

</style>

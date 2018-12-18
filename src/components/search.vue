<template>
  <div>
    <div class="search flex">
      <i class="iconfont icon-sousuo1 search-icon"></i>
      <input type="search" class="search-input flex1" :value="val" placeholder="大众" @input="changeInput" confirm-type="搜索" bindconfirm="beginSearch">
      <p class="sure" @click="beginSearch">搜索</p>
    </div>
    <block v-if="show">
      <searchSetting title="热门搜索" :list="hotRecord" @searchItem="setValue"></searchSetting>
      <searchSetting title="历史搜索" :list="historyRecord" @searchItem="setValue"></searchSetting>
    </block>
  </div>
</template>

<script>
  import searchSetting from '@/components/searchSetting'
  import { hotSearch } from '../utils/hotSearch'
  import { getAllCarBrands } from '../utils/api'
  import { request } from '../utils/request'
  export default {
    components: {
      searchSetting
    },
    data () {
      return {
        val: '',
        historyRecord: wx.getStorageSync('historySearch') || []
      }
    },
    props: ['show'],
    computed: {
      hotRecord () {
        return hotSearch
      }
    },
    watch: {
      val: function (newVal, oldVal) {
        console.log('==', oldVal, '--', newVal)
        if (newVal === '') {
          console.log('清空了')
          this.$emit('searchResult', [], true)
        }
      }
    },
    methods: {
      changeInput (e) {
        this.val = e.target.value
      },
      setValue (val) {
        this.val = val
        this.common()
      },
      beginSearch (e) {
        if (this.val === '') this.val = '大众'
        this.common()
      },
      async common () {
        const idx = this.historyRecord.findIndex(item => item.name === this.val)
        if (idx > -1) {
          this.historyRecord.splice(idx, 1)
        }
        this.historyRecord.unshift({
          name: this.val
        })
        if (this.historyRecord.length > 20) {
          this.historyRecord = this.historyRecord.slice(0, 20)
        }
        wx.setStorageSync('historySearch', this.historyRecord)
        const { data: result } = await request('GET', `${getAllCarBrands}/${this.val}`)
        this.$emit('searchResult', result.data.carList, false)
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
      padding: 8px 0 8px 14px;
    }
  }
</style>

<template>
  <div>
    <Page :total="dataCount"
          prev-text="Previous"
          next-text="Next"
          :page-size="pageSize"
          show-total
          @on-change="changepage"
          @on-page-size-change="changepagesize" />
  </div>
</template>
<script>
export default {
  props: ['data2', 'pageSize'],
  data () {
    return {
      ajaxHistoryData: [],
      historyData: []
    }
  },
  methods: {
    // 获取历史记录信息
    handleListApproveHistory () {
      // 保存取到的所有数据
      this.ajaxHistoryData = this.data2
      this.dataCount = this.data2.length
      // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
      if (this.data2.length < this.pageSize) {
        this.historyData = this.ajaxHistoryData
      } else {
        this.historyData = this.ajaxHistoryData.slice(0, this.pageSize)
      }
    },
    changepage (index) {
      var _start = (index - 1) * this.pageSize
      var _end = index * this.pageSize
      this.historyData = this.ajaxHistoryData.slice(_start, _end)
      this.$emit('func', this.historyData, this.ajaxHistoryData)
    },
    changepagesize (pageSize) {
      console.log(pageSize)
      this.pageSize = pageSize
      this.handleListApproveHistory()
    }
  },
  created () {
    this.handleListApproveHistory()
    this.$emit('func', this.historyData, this.ajaxHistoryData)
  }
}
</script>

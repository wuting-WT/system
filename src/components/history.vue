<template>
  <div>
    <div class="title">
      <h2>查询历史</h2>
      <div class="page">返回首页</div>
    </div>
    <div class="time">
      <div class="time_left">
        <DatePicker type="daterange"
                    show-week-numbers
                    placement="bottom-end"
                    placeholder="Select date"
                    style="width: 200px"></DatePicker>
      </div>
      <div class="serach">
        <Input v-model="value1"
               placeholder="搜索关键词"
               clearable
               style="width:200px" />
      </div>
      <input type="button"
             value="搜索"
             class="buttom_bt">

    </div>
    <div class="table_t">
      <Table height="auto"
             :columns="columns1"
             :data="historyData"></Table>
      <Page :total="dataCount"
            prev-text="Previous"
            next-text="Next"
            :page-size="pageSize"
            show-total
            @on-change="changepage"
            @on-page-size-change="changepagesize" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: '',
      dataCount: 2,
      pageSize: 3,
      ajaxHistoryData: [],
      columns1: [
        {
          title: '查询id',
          key: 'name',
          sortable: true
        },
        {
          title: '查询时间',
          key: 'date'
        },
        {
          title: '域名',
          key: 'ip'
        },
        {
          title: '完成进度',
          key: 'jindu'
        },
        {
          title: '命中状态',
          key: 'state'
        },
        {
          title: '用户名',
          key: 'userName'
        }
      ],
      data2: [
        {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '25%',
          state: '完成',
          userName: '周俊伟'
        }, {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '25%',
          state: '完成',
          userName: '周俊伟'
        }, {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '25%',
          state: '完成',
          userName: '周俊伟'
        },
        {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '235%',
          state: '完成',
          userName: '周俊伟'
        },
        {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '25%',
          state: '完成',
          userName: '周俊伟'
        },
        {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '25%',
          state: '完成',
          userName: '周俊伟'
        },
        {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '25%',
          state: '完成',
          userName: '周俊伟'
        },
        {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '25%',
          state: '完成',
          userName: '周俊伟'
        },
        {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '25%',
          state: '完成',
          userName: '周俊伟'
        },
        {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '25%',
          state: '完成',
          userName: '周俊伟'
        },
        {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '25%',
          state: '完成',
          userName: '周俊伟'
        },
        {
          name: '1212',
          date: '2016-10-03',
          ip: '192.99.33.44',
          jindu: '25%',
          state: '完成',
          userName: '周俊伟'
        }

      ],
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
    },
    changepagesize (pageSize) {
      this.pageSize = pageSize
      this.handleListApproveHistory()
    }
  },
  created () {
    this.handleListApproveHistory()
  }

}
</script>
<style scoped>
.time {
  display: block;
  overflow: hidden;
}
.time_left,
.serach {
  float: left;
}
.serach {
  margin-left: 60px;
}
.buttom_bt {
  width: 50px;
  height: 30px;
  color: #fff;
  background: cornflowerblue;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 20px;
}
.table_t {
  margin-top: 25px;
}
.page {
  float: right;
  margin-right: 100px;
  padding: 5px 15px;
  border-radius: 5px;
  background: cornflowerblue;
  color: #fff;
  cursor: pointer;
}
.title {
  width: 100%;
  display: block;
  overflow: hidden;
  margin-bottom: 20px;
}
.title h2 {
  float: left;
}
</style>

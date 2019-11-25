<template>
  <div>
    <Title :title=title
           :button_t=button_t></Title>
    <div class="t_result">
      <table>
        <tr style="height:50px">
          <td>开始时间</td>
          <td>{{beginTime}}</td>
          <td>域名</td>
          <td>www.baidu.com</td>
          <td>类型</td>
          <td>nginx_access</td>
        </tr>
        <tr>
          <td>结束时间</td>
          <td>{{beginTime}}</td>
          <td>关键词</td>
          <td>www.baidu.com</td>
          <td>层级</td>
          <td>边缘</td>
        </tr>
      </table>
    </div>
    <div class="title">
      命中节点统计
    </div>
    <Table height="auto"
           :columns="columns1"
           :data="historyData"
           class="marT20"></Table>
    <Page :data2=data2
          :pageSize=pageSize
          @func="gethistoryData"
          class="marT20"></Page>

  </div>
</template>
<script>
import Title from '../components/title'
import Page from '../components/page'
export default {
  components: {
    Title,
    Page
  },
  data () {
    return {
      beginTime: '10.20.20',
      pageSize: 3,
      ajaxHistoryData: [],
      historyData: [],
      title: '查询结果',
      button_t: '返回查看进度',
      columns1: [
        {
          title: '节点',
          key: 'name',
          sortable: true
        },
        {
          title: '命中条数',
          key: 'number'
        },
        {
          title: '详细日志',
          key: 'log'
        },
        {
          title: '节点汇总',
          key: 'node'
        }
      ],
      data2: [
        {
          name: '1',
          number: '2016-10-03',
          log: '192.99.33.44',
          node: '25%'
        }, {
          name: '2',
          number: '2016-10-03',
          log: '192.99.33.44',
          node: '25%'
        }, {
          name: '3',
          number: '2016-10-03',
          log: '192.99.33.44',
          node: '25%'
        }, {
          name: '4',
          number: '2016-10-03',
          log: '192.99.33.44',
          node: '25%'
        }, {
          name: '5',
          number: '2016-10-03',
          log: '192.99.33.44',
          node: '25%'
        }]
    }
  },

  methods: {
    gethistoryData (dataHis, dataAjax) {
      this.historyData = dataHis
      this.ajaxHistoryData = dataAjax
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 16px;
  font-weight: bold;
}
.marT20 {
  margin-top: 20px;
}
.t_result table {
  width: 100%;
  font-size: 14px;
}
.t_result {
  margin-bottom: 30px;
}
table,
table tr td {
  border: 1px solid #e8eaec;
}
table tr {
  height: 50px;
  text-align: center;
}
</style>

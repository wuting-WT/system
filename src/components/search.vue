<template>
  <div>
    <Title :title=msg
           :button_t=button_title
           :compon=compon>
    </Title>
    <p>选择查询类型</p>
    <Select v-model="model2"
            style="width:150px">
      <Option v-for="item in cityList"
              :value="item.value"
              :key="item.value"
              @click.native="choseLei(item)">{{ item.label }}</Option>
    </Select>
    <div class="data_search">
      <div class="data_ym">
        <p>请输入域名(<span>必填</span>)</p>
        <Input v-model="value1"
               placeholder="域名"
               style="width:150px" />
      </div>
      <div class="data_slect">
        <p>选择层级</p>
        <Select v-model="model3"
                style="width:150px"
                @on-change='choseCeng'>
          <Option v-for="item in cityList"
                  :value="item.value"
                  :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="data_zt">
        <p>状态码</p>
        <Input v-model="value2"
               placeholder="状态码"
               style="width:150px" />
      </div>
      <div class="data_time">
        <p>输入开始时间</p>
        <Input v-model="value3"
               placeholder="开始时间"
               style="width:150px" />
      </div>
      <div class="data_slect">
        <p>选择持续时间</p>
        <Select v-model="model4"
                style="width:150px">
          <Option v-for="item in cityList"
                  :value="item.value"
                  :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="data_zt">
        <p>搜索关键词</p>
        <Input v-model="value4"
               placeholder="关键词"
               clearable
               style="width:150px" />
      </div>
    </div>
    <div class="submit"
         @click="beginSear">开始查询</div>
  </div>
</template>
<script>
import Title from '../components/title'
import History from '../components/history'
export default {
  components: {
    Title,
    History
  },
  data () {
    return {
      msg: '开始查询',
      button_title: '查询历史',
      compon: History,
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model2: '',
      model3: '',
      model4: '',
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  },
  methods: {
    choseLei (item) {
      this.cityListID = item.id
      // console.log(item.value, item)
    },
    choseCeng (e) {
    },
    beginSear () {
      console.log(this.value4, this.model2)
    }
  }
}
</script>
<style scoped>
p {
  font-size: 14px;
  padding-bottom: 10px;
}
.data_search {
  margin-top: 20px;
  display: block;
  width: 100%;
  overflow: hidden;
}
.data_ym,
.data_slect,
.data_zt,
.data_time {
  float: left;
  margin-right: 15px;
}
.data_ym span {
  color: red;
}
.submit {
  color: #fff;
  background: cornflowerblue;
  width: 80px;
  text-align: center;
  padding: 8px 0px;
  display: block;
  margin-left: 900px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>

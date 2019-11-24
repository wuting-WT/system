<template>
  <div>
    <Title :title=msg
           :button_t=button_title></Title>
    <!-- <Progress :percent='progre'
              class="progess"
              :stroke-color="['#108ee9', '#87d068']" /> -->
    <Progress :percent="progre"
              :stroke-color="['#108ee9', '#87d068']" />
  </div>
</template>
<script>
import Title from '../components/title'
export default {
  components: {
    Title
  },
  data () {
    return {
      progre: 70,
      msg: '当前进度',
      button_title: '返回查询详情'

    }
  }
}
</script>

<style  scoped>
.progess {
  margin-top: 50px;
}
</style>></style>

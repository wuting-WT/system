<template>
  <div>
    <Title :title=msg
           :button_t=button_title></Title>
    <div class="proTitle">
      <h2>
        本次查询节点总数{{sum}}个，已完成{{complete}}个，剩余{{residue}}个
      </h2>
    </div>

    <Progress :percent="progre"
              :stroke-color="['#108ee9','#c8ca3b']"
              class="progess" />

    <h3 class="mz">
      命中{{sum}}个节点，命中日志{{complete}}条
    </h3>
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
      sum: 100, // 总数
      complete: 30, // 已完成
      residue: null, // 剩余
      progre: 70,
      msg: '当前进度',
      button_title: '返回查询详情'

    }
  },
  methods: {
    getResidue () {
      this.residue = this.sum - this.complete
    }

  },
  mounted () { this.getResidue() }
}
</script>

<style  scoped>
.progess {
  margin-top: 40px;
  width: 500px;
  position: absolute;
  left: 50%;
  margin-left: -150px;
}
h2 {
  text-align: center;
  margin-top: 30px;
}
.mz {
  margin-top: 90px;
  text-align: center;
  font-size: 18px;
}
</style>></style>

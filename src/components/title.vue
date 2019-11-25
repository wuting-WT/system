<template>
  <div class="title">
    <span>{{title}}</span>
    <div class="btn"
         @click="componentC">{{button_t}}</div>
  </div>
</template>
<script>
export default {
  props: ['title', 'button_t', 'compon'],
  data () {
    return {

    }
  },
  methods: {
    componentC () {
      flag = false
    }
  }
}
</script>
<style  scoped>
.title {
  color: #2b2b2b;
  margin-top: 15px;
  height: 50px;
}
.title::after {
  content: "";
  clear: both;
  overflow: hidden;
  display: block;
  height: 0;
}
.title span {
  float: left;
  font-size: 16px;
  font-weight: bold;
}
.title .btn {
  padding: 5px 15px;
  border-radius: 5px;
  border: solid 1px #efefef;
  float: right;
  cursor: pointer;
  background-color: #ddd;
}
</style>

<template>
  <div class="beginSearch">

    <Head></Head>
    <Menu></Menu>
    <div class="search_right">
      <result></result>
    </div>

  </div>
</template>
<script>
import Head from '../../components/head'
import Menu from '../../components/menu'
import result from '../../components/progress'

export default {
  name: 'beginSearch',
  components: { Head, Menu, result }
}
</script>
<style scoped>
.search_right {
  padding-left: 220px;
  padding-right: 100px;
  text-align: left;
}
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
.title button {
  padding: 5px 15px;
  border-radius: 5px;
  border: solid 1px #efefef;
  float: right;
  cursor: pointer;
}
</style>

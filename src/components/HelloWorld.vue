<template>
  <div class="hello">
    <h2>我是mutations：{{this.$store.state.count}}</h2>
    <h3>我是getters获取计算的值：{{this.$store.getters.getStateCount}}</h3>
    <button @click="addFun"> + </button>
    <button @click="reducerFun"> - </button>
    <h1>{{ count1 }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters({
      count1: state => state.count
    })
    // ...mapGetters({
    //   count1: state => state.count
    // }),
    // eslint-disable-next-line vue/return-in-computed-property
    // count1 () {
    //   // eslint-disable-next-line no-unused-expressions
    //   this.$store.state.count
    // }
  },
  methods: {
    addFun () {
      this.$store.dispatch('addFun')
    },
    reducerFun () {
      var n = 5
      this.$store.dispatch('reductionFun', n)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

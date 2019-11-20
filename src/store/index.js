import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 2
  },
  getters: {
    getStateCount: function (state) {
      return state.count + 1
    }
  },
  mutations: {
    add: function (state) {
      state.count = state.count + 1
    },
    reduction: function (state, n) {
      state.count = state.count - n
    }
  },
  actions: {
    addFun: function (context) {
      context.commit('add')
    },
    reductionFun (context, n) {
      context.commit('reduction', n)
    }
  }

})
export default store

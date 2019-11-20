import Vue from 'vue'
import Router from 'vue-router'
import Count from '../components/count'
import HelloWorld from '../components/HelloWorld'
import BeginSearch from '../pages/beginSearch/beginSearch.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/beginSearch'
    },
    {
      path: '/beginSearch',
      name: 'beginSearch',
      component: BeginSearch
    },
    {
      path: '/Count',
      name: 'Count',
      component: Count
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]

})

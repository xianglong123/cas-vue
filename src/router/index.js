import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Echart from '@/components/Echart/Echart'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/echart', name: 'echart', component: Echart}
  ]
})

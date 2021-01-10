import Vue from 'vue'
import Router from 'vue-router'
import Ec from '@/components/Ec'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'echart', component: Ec}
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import LineChart from '@/components/LineChart'
import Line from '@/components/Line'
import Bar from '@/components/BarPolarStack'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'LineChart', component: LineChart},
    {path: '/line', name: 'Line', component: Line},
    {path: '/bar', name: 'Bar', component: Bar}
  ]
})

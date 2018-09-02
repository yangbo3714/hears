import Vue from 'vue'
import Vuerouter from 'vue-router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'

import Hear from './views/hear/live.vue'
import Wuqi from './views/wuqi/live.vue'
import Zhuangbei from './views/zhuangbei/live.vue'

Vue.use(Vuerouter)
const router = new Vuerouter({
      routes:[
        {path:'/',redirect:'/hear'},
        {path:'/hear', component:Hear},
        {path:'/wuqi', component:Wuqi},
        {path:'/zhuangbei', component:Zhuangbei}
      ]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})

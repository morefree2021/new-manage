import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/reset.scss'


Vue.config.productionTip = false

import ElementUI from 'element-ui'

axios.defaults.baseURL='http://localhost:3000/'

// router.beforeEach((to, from, next) => {
//   store.commit('setMenu')
//   let login = JSON.parse(Cookies.get('login'))
//   if(!login && to.path !== '/login') {
//     next('/login')
//   } else {
//     next()
//   }
// })

Vue.use(ElementUI)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import menu from './menu'
import order from './order'
// import shop from './shop'

Vue.use(Vuex)

export default new Vuex.Store({
  modules :{
    menu,
    order
  }
})

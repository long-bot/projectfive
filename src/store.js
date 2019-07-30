
import Vue from 'vue'
import Vuex from 'vuex'
// 因为有许多组件需要使用到token值   所以注册到vuex中
// 引入获取localstorage的
import * as auth from '@/utils/auth.js'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: auth.getItem
  },
  actions: {},
  mutations: {
    //   当token值到期的时候  需要重新设置token并且需要修改localstorage中的值  修改state中的值
    setUser (state, data) {
      //   data第二个参数是传入进来的新的token   修改state中的值
      state.user = data
      //   修改本地存储中的值
      auth.setItem(state.user)
    }
  }
})

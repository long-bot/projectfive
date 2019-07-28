import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/App'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.use(Vuex)

const store = new Vuex.Store({
  // 声明数据用 的    也就是在data中原先写入的数据
  state: {
    name: '张三',
    age: 20,
    gender: '男'
  },
  //   异步调用使用的
  actions: {
    fn (store) {
      console.log(store)
      setTimeout(() => {
        const name = '刘'
        store.commit('setName', name)
      }, 1000)
    }
  },
  mutations: {
    setName (state, data) {
      state.age = 25
      console.log(data)
      console.log(state)
      state.name = data
    }

  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

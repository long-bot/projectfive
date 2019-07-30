import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/App'
import router from '@/router.js'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'
import store from '@/store'
import VeeValidate, { Validator } from 'vee-validate'
import ar from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

Validator.localize('ar', ar)

Validator.extend('phone', {
  getMessage: field => field + '格式不正确',
  validate: value => value.length === 11 && /^((13|15|16|17|18|19)[0-9]{1})\d{8}$/.test(value)
})

Vue.use(Vant)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

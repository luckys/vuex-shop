// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex/store'

Vue.config.productionTip = false

window.axios = require('axios')

window.axios.defaults.baseURL = 'http://5988b6b32f50af00115753ef.mockapi.io/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 设置根节点，将项目中的px转化成rems
import '@/utils/rem'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

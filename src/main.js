import Vue from 'vue'
import App from './App.vue'
import packageUI from './package'
Vue.use(packageUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

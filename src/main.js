import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Register every components in ./components DIR
const files = require.context('./components/', true, /\.vue$/i)
console.log(files);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

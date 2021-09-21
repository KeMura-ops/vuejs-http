import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false

// main.jsにて「axios.defaults」とすることで、axiosのデフォルトの値を設定できる
axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-c2a1a/databases/(default)/documents"

new Vue({
  render: h => h(App),
}).$mount('#app')

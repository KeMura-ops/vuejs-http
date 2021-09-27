import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

Vue.config.productionTip = false

// main.jsにて「axios.defaults」とすることで、axiosのデフォルトの値を設定できる
axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-c2a1a/databases/(default)/documents"

// データをサーバーに送る前に行いたい処理
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// サーバーから送られてきたデータを渡す前に行いたい処理
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

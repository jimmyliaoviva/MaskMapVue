// 外部檔案
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// 內部檔案
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';

import CommonButton from '@/components/CommonButton.vue';

import './assets/tailwind.css';

import App from './App.vue';
import router from './router';

Vue.component('CommonButton', CommonButton);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

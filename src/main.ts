import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import CommonButton from '@/components/CommonButton.vue';
import CommonCard from '@/components/CommonCard.vue';
import CommonImage from '@/components/CommonImage.vue';
import CommonIcon from '@/components/CommonIcon.vue';

import './assets/tailwind.css';
import App from './App.vue';
import router from './router';

Vue.use(VueCompositionAPI);
Vue.component('CommonButton', CommonButton);
Vue.component('CommonCard', CommonCard);
Vue.component('CommonImage', CommonImage);
Vue.component('CommonIcon', CommonIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

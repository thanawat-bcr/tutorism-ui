import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

import CommonButton from '@/components/CommonButton.vue';
import CommonFloatButton from '@/components/CommonFloatButton.vue';
import CommonImage from '@/components/CommonImage.vue';
import CommonIcon from '@/components/CommonIcon.vue';
import CommonChip from '@/components/CommonChip.vue';

import App from './App.vue';
import router from './router';

Vue.use(VueCompositionAPI);

Vue.component('CommonButton', CommonButton);
Vue.component('CommonFloatButton', CommonFloatButton);
Vue.component('CommonImage', CommonImage);
Vue.component('CommonIcon', CommonIcon);
Vue.component('CommonChip', CommonChip);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

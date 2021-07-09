import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

import { extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import th from '@/vee-validate-th';

import CommonButton from '@/components/CommonButton.vue';
import CommonFloatButton from '@/components/CommonFloatButton.vue';
import CommonImage from '@/components/CommonImage.vue';
import CommonIcon from '@/components/CommonIcon.vue';
import CommonChip from '@/components/CommonChip.vue';
import CommonCard from '@/components/CommonCard.vue';
import CommonPanel from '@/components/CommonPanel.vue';
import CommonModal from '@/components/CommonModal.vue';
import CommonForm from '@/components/CommonForm.vue';
import CommonInput from '@/components/CommonInput.vue';

import App from './App.vue';
import router from './router';

localize('th', th);
Object.keys(rules).forEach((rule) => {
  extend(rule, (rules as {[key: string]: any})[rule]);
});

Vue.use(VueCompositionAPI);

Vue.component('CommonButton', CommonButton);
Vue.component('CommonFloatButton', CommonFloatButton);
Vue.component('CommonImage', CommonImage);
Vue.component('CommonIcon', CommonIcon);
Vue.component('CommonChip', CommonChip);
Vue.component('CommonCard', CommonCard);
Vue.component('CommonPanel', CommonPanel);
Vue.component('CommonModal', CommonModal);
Vue.component('CommonForm', CommonForm);
Vue.component('CommonInput', CommonInput);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

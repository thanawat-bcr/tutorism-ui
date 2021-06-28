<template lang="pug">
.app.p-8
  CommonButtonPage
  //- .flex
    CommonCard.m-3(min-height='30rem' min-width='30rem' back close)
      template(#headers): .text-xl.font-bold Tutorism is AWESOME!
      template
        CommonImage(
          src="/image/view2.jpg"
        )
      template(#actions): CommonButton(block color='pink' outline) click me
    CommonIcon(src="/icon/back.svg" size='sm')
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CommonButtonPage from '@/views/CommonButton.vue';

const App = defineComponent({
  components: {
    CommonButtonPage,
  },
});

export default App;
</script>

<style lang="scss">
// .app {}
*, *::before, *::after {
  box-sizing:border-box;
}

:root {
  --color-primary-100: #E6FAF4;
  --color-primary-200: #BFF4E3;
  --color-primary-300: #99EDD3;
  --color-primary-400: #4DDFB1;
  --color-primary-500: #00D190;
  --color-primary-600: #00BC82;
  --color-primary-700: #007D56;
  --color-primary-800: #005E41;
  --color-primary-900: #003F2B;
  --color-secondary-100: #E9EFF9;
  --color-secondary-200: #C7D7F1;
  --color-secondary-300: #A5BFE8;
  --color-secondary-400: #6290D7;
  --color-secondary-500: #1F60C6;
  --color-secondary-600: #1C56B2;
  --color-secondary-700: #133A77;
  --color-secondary-800: #0E2B59;
  --color-secondary-900: #091D3B;
}
</style>

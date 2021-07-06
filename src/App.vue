<template lang="pug">
.app.p-8
  //- h1 Hello
  //- h2 Hello
  //- h3 Hello
  //- h4 Hello
  //- h5 Hello
  //- p paragraph
  //- .flex.flex-col.items-start
    CommonButton.my-3(size="sm" color="primary") Hello
    CommonButton.my-3(size="md" color="red" rounded) Hello
    CommonButton.my-3(size="lg" color="secondary") Hello
    CommonButton.my-3(size="sm" color="primary" outline) Hello
    CommonButton.my-3(size="md" color="red" outline rounded) Hello
    CommonButton.my-3(size="lg" color="secondary" outline) Hello
    CommonButton.my-3(size="sm" color="primary" flat) Hello
    CommonButton.my-3(size="md" color="red" flat) Hello
    CommonButton.my-3(size="lg" color="secondary" flat) Hello
    CommonButton.my-3(size="lg" color="secondary" flat) Hello
  //- CommonFloatButton.my-3(color="red" size="sm" icon="radio-button-checked")
  //- CommonFloatButton.my-3(color="red" size="md" flat icon="radio-button-checked")
  //- CommonFloatButton.my-3(color="red" size="lg" outline icon="radio-button-checked")
  //- CommonIcon(icon="radio-button-checked" size='lg' color='rose')
  //- CommonIcon(icon="radio-button-checked" size='lg' color='primary')
  CommonChip(color="red" outline) Helloo
  CommonChip(color="blue" closable flat @click="clickHandler" @close="closeHandler") Hellooooooooo
  CommonChip(color="primary" closable) Test Primary
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

const App = defineComponent({
  setup() {
    const clickHandler = () => { console.log('Clicked'); };
    const closeHandler = () => { console.log('Closed'); };

    return {
      clickHandler,
      closeHandler,
    };
  },
});

export default App;
</script>

<style lang="scss">
@import './assets/tailwind.css';
@import './assets/main.css';
@import './assets/typography.css';

:root {
  --color-primary-100: #ecf8ff;
  --color-primary-200: #c5d1e0;
  --color-primary-300: #a2b5cd;
  --color-primary-400: #5d7ea7;
  --color-primary-500: #174681;
  --color-primary-600: #153f74;
  --color-primary-700: #113561;
  --color-primary-800: #0e2a4d;
  --color-primary-900: #0b223f;
  --color-secondary-100: #fef7e8;
  --color-secondary-200: #feebc6;
  --color-secondary-300: #fddfa4;
  --color-secondary-400: #fbc65f;
  --color-secondary-500: #f9ae1b;
  --color-secondary-600: #e09d18;
  --color-secondary-700: #bb8314;
  --color-secondary-800: #956810;
  --color-secondary-900: #7a550d;
}
</style>

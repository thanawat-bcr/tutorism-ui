<template lang="pug">
.app.p-8
  //- h1 Hello
  //- h2 Hello
  //- h3 Hello
  //- h4 Hello
  //- h5 Hello
  //- p paragraph
  .flex.flex-col.items-start
    .flex.my-3
      CommonButton.mx-3(size="sm" color="primary") Hello
      CommonButton.mx-3(size="md" color="red" rounded) Hello
      CommonButton.mx-3(size="lg" color="secondary") Hello
      CommonButton.mx-3(size="lg" color="secondary" icon="checkbox") Hello
    .flex.my-3
      CommonButton.mx-3(size="sm" color="primary" outline) Hello
      CommonButton.mx-3(size="md" color="red" outline rounded) Hello
      CommonButton.mx-3(size="lg" color="secondary" outline) Hello
      CommonButton.mx-3(size="lg" color="secondary" outline icon="checkbox") Hello
    .flex.my-3
      CommonButton.mx-3(size="sm" color="primary" flat) Hello
      CommonButton.mx-3(size="md" color="red" flat) Hello
      CommonButton.mx-3(size="lg" color="secondary" flat) Hello
      CommonButton.mx-3(size="lg" color="secondary" flat icon="checkbox") Hello
    .flex.my-3
      CommonFloatButton.mx-3(color="red" size="lg" icon="radio-button-checked")
      CommonFloatButton.mx-3(color="red" size="lg" flat icon="radio-button-checked")
      CommonFloatButton.mx-3(color="red" size="lg" outline icon="radio-button-checked")
    .flex.my-3
      CommonIcon.mx-3(icon="radio-button-checked" size='lg' color='rose')
      CommonIcon.mx-3(icon="radio-button-checked" size='lg' color='primary')
    .flex.my-3
      CommonChip.mx-3(color="red" outline) Helloo
      CommonChip.mx-3(color="blue" closable flat @click="clickHandler" @close="closeHandler") Hellooooooooo
      CommonChip.mx-3(color="primary" closable) Test Primary
    .flex.my-3
      CommonCard(color="green" active @click="clickHandler").mx-3
        .flex.items-center
          h1 Hello World
          .w-16.h-16.ml-4
            CommonIcon(icon="calendar" color="white" size="full")
      CommonCard(color="secondary" active @click="clickHandler").mx-3
        h1 Hello World
      CommonCard(color="red" icon="time" @click="clickHandler").mx-3
        .flex.items-center
          .w-16.h-16.mr-4
            CommonIcon(icon="time" color="red" size="full")
          h1 Hello World
      CommonCard(active @click="clickHandler" :rounded="false" :shadow="false").mx-3
        .flex.items-center
          h1 Hello World
    .flex.my-3
      CommonPanel.mx-3(icon="menu-bento" @click="clickHandler") 200
        template(#subtitle) Information
      CommonPanel.mx-3(icon="menu-bento" color="red" @click="clickHandler") 200
        template(#subtitle) Information
      CommonPanel.mx-3(color="red" active @click="clickHandler") 300
        template(#subtitle) Information
      CommonPanel.mx-3(icon="menu-bento" active @click="clickHandler") 500
        template(#subtitle) Information
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

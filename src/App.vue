<template lang="pug">
.app.p-8
  FormTest
  //- .flex.flex-col
    .flex.my-3
      CommonButton.mx-3(color="red") Click Me
      CommonButton.mx-3(color="green") Click Me
      CommonButton.mx-3(color="blue") Click Me
      CommonButton.mx-3(color="pink") Click Me
      CommonButton.mx-3(color="secondary") Click Me
      CommonButton.mx-3() Click Me
    .flex.my-3
      CommonButton.mx-3(flat color="red") Click
      CommonButton.mx-3(flat color="green") Click Me
      CommonButton.mx-3(flat color="blue") Click Me
      CommonButton.mx-3(flat color="pink") Click Me
      CommonButton.mx-3(flat color="secondary") Click Me
      CommonButton.mx-3(flat) Click Me
    .flex.my-3
      CommonButton.mx-3(outline color="red") Click
      CommonButton.mx-3(outline color="green") Click Me
      CommonButton.mx-3(outline color="blue") Click Me
      CommonButton.mx-3(outline color="pink") Click Me
      CommonButton.mx-3(outline color="secondary") Click Me
      CommonButton.mx-3(outline) Click Me
    .flex.my-3
      CommonButton.mx-3(icon="calendar" color="red") Click Me
      CommonButton.mx-3(icon="calendar" color="green") Click Me
      CommonButton.mx-3(icon="calendar" color="blue") Click Me
      CommonButton.mx-3(icon="calendar" color="pink") Click Me
      CommonButton.mx-3(icon="calendar" color="secondary") Click Me
      CommonButton.mx-3(icon="calendar" ) Click Me
    .flex.my-3
      CommonButton.mx-3(icon="call" flat color="red") Click
      CommonButton.mx-3(icon="call" flat color="green") Click Me
      CommonButton.mx-3(icon="call" flat color="blue") Click Me
      CommonButton.mx-3(icon="call" flat color="pink") Click Me
      CommonButton.mx-3(icon="call" flat color="secondary") Click Me
      CommonButton.mx-3(icon="call" flat) Click Me
    .flex.my-3
      CommonButton.mx-3(icon="show" outline color="red") Click
      CommonButton.mx-3(icon="show" outline color="green") Click Me
      CommonButton.mx-3(icon="show" outline color="blue") Click Me
      CommonButton.mx-3(icon="show" outline color="pink") Click Me
      CommonButton.mx-3(icon="show" outline color="secondary") Click Me
      CommonButton.mx-3(icon="show" outline) Click Me
  //- .flex.flex-col
    .flex.my-3
      CommonFloatButton.mx-3(icon="hide" color="red")
      CommonFloatButton.mx-3(icon="hide" color="green")
      CommonFloatButton.mx-3(icon="hide" color="blue")
      CommonFloatButton.mx-3(icon="hide" color="pink")
      CommonFloatButton.mx-3(icon="hide" color="secondary")
      CommonFloatButton.mx-3(icon="hide")
      CommonFloatButton.mx-3(flat icon="search" color="red")
      CommonFloatButton.mx-3(flat icon="search" color="green")
      CommonFloatButton.mx-3(flat icon="search" color="blue")
      CommonFloatButton.mx-3(flat icon="search" color="pink")
      CommonFloatButton.mx-3(flat icon="search" color="secondary")
      CommonFloatButton.mx-3(flat icon="search")
      CommonFloatButton.mx-3(outline icon="category" color="red")
      CommonFloatButton.mx-3(outline icon="category" color="green")
      CommonFloatButton.mx-3(outline icon="category" color="blue")
      CommonFloatButton.mx-3(outline icon="category" color="pink")
      CommonFloatButton.mx-3(outline icon="category" color="secondary")
      CommonFloatButton.mx-3(outline icon="category")
  //- .flex.flex-col
    .flex.my-3
      CommonChip.mx-1 Helloo
      CommonChip.mx-1(flat) Helloo
      CommonChip.mx-1(outline) Helloo
      CommonChip.mx-1(closable) Helloo
      CommonChip.mx-1(closable flat) Helloo
      CommonChip.mx-1(closable outline) Helloo
      CommonChip.mx-1(color="red" ) Helloo
      CommonChip.mx-1(color="green" flat) Helloo
      CommonChip.mx-1(color="blue" outline) Helloo
      CommonChip.mx-1(color="pink" closable) Helloo
      CommonChip.mx-1(color="secondary" closable flat) Helloo
      CommonChip.mx-1(color="primary" closable outline) Helloo
  //- .flex.flex-col
    .flex.my-3
      CommonCard(@click="clickHandler").mx-3
        .flex.items-center
          h5 Hello World
          .w-16.h-16.ml-4
            CommonIcon(icon="calendar" size="full")
  //- .flex.flex-col
    .flex.my-3
      CommonPanel.mx-3(icon="menu-bento" @click="clickHandler" text="center") 200
        template(#subtitle) Information
      CommonPanel.mx-3(icon="menu-bento" color="red" @click="clickHandler" text="right") 200
        template(#subtitle) Information
      CommonPanel.mx-3(color="red" active @click="clickHandler" text="center") 300
        template(#subtitle) Information
      CommonPanel.mx-3(icon="menu-bento" active @click="clickHandler" text="right") 500
        template(#subtitle) Information
  //- .flex.flex-col
    .flex.my-3
      CommonButton.mx-3(color="primary" @click="$refs.modal.open({ id: 1, title: 'Test'})") Open Modal
      CommonModal(ref="modal" closable @confirm="confirmHandler" color="green") Are you sure ?
        template(#confirm) Confirm
        template(#cancel) Cancel
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import FormTest from '@/views/FormTest.vue';

const App = defineComponent({
  components: {
    FormTest,
  },
  setup() {
    const clickHandler = () => { console.log('Clicked'); };
    const closeHandler = () => { console.log('Closed'); };

    const modal = ref('');
    const confirmHandler = (ctx: any) => {
      (modal.value as any).close();
    };

    return {
      clickHandler,
      closeHandler,

      modal,
      confirmHandler,
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

<template lang="pug">
.common-button
  CommonButton.my-4.mx-2(
    :size="size"
    :color="color"
    :outline="outline"
    :upper="upper"
    :block="block"
    :shadow="shadow"
    :disabled="disabled"
    icon="/icon/heart.svg"
    @click="clickHandler"
  ) Click Me
  .flex.my-4
    CommonButton.mx-2(color='blue' @click="color = 'red'") red
    CommonButton.mx-2(color='blue' @click="color = 'green'") green
    CommonButton.mx-2(color='blue' @click="color = 'orange'") orange
    CommonButton.mx-2(color='blue' @click="color = 'yellow'") yellow
    CommonButton.mx-2(color='blue' @click="color = 'blue'") blue
  .flex.my-4
    CommonButton.mx-2(color='blue' @click="color = 'pink'") pink
    CommonButton.mx-2(color='blue' @click="color = 'purple'") purple
    CommonButton.mx-2(color='blue' @click="color = 'white'") white
    CommonButton.mx-2(color='blue' @click="color = 'secondary'") secondary
    CommonButton.mx-2(color='blue' @click="color = 'primary'") primary
  .flex.my-4
    CommonButton.mx-2(color='pink' @click="size = 'sm'") sm
    CommonButton.mx-2(color='pink' @click="size = 'md'") md
    CommonButton.mx-2(color='pink' @click="size = 'lg'") lg
    CommonButton.mx-2(color='pink' @click="size = 'xl'") xl
  .flex.my-4
    CommonButton.mx-2(color='purple' outline @click="outline = !outline") outline
    CommonButton.mx-2(color='green' @click="upper = !upper") uppercase
    CommonButton.mx-2(color='yellow' @click="block = !block") block
    CommonButton.mx-2(color='orange' @click="shadow = !shadow") shadow
    CommonButton.mx-2(color='red' @click="disabled = !disabled") disabled
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

const CommonButton = defineComponent({
  setup() {
    const clickHandler = () => { console.log('Hello'); };
    const size = ref('md');
    const color = ref('primary');
    const outline = ref(false);
    const upper = ref(false);
    const block = ref(false);
    const shadow = ref(false);
    const disabled = ref(false);

    return {
      clickHandler,

      size,
      color,
      outline,
      upper,
      block,
      shadow,
      disabled,
    };
  },
});

export default CommonButton;
</script>

<style lang="scss">
// .common-button {}
</style>

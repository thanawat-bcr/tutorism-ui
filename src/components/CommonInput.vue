<template lang="pug">
.common-input
  ValidationProvider(rules="required" v-slot="{ errors }")
    .flex.flex-col.w-64
      label.h5 Some Label
      input.bg-cool-gray(:value="value" @input="$emit('input', $event.target.value)")
      span#error {{ errors }}
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { ValidationProvider } from 'vee-validate';

const CommonInput = defineComponent({
  components: {
    ValidationProvider,
  },
  // setup() {},
  props: {
    value: {},
  },
});

export default CommonInput;
</script>

<style lang="scss">
// .common-input {}
</style>

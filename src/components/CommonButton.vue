<template lang="pug">
.common-button
  button.bg-primary-500.px-3.py-2
    slot
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

const CommonButton = defineComponent({
  // setup() {},
});

export default CommonButton;
</script>

<style lang="scss">
// .common-button {}
</style>

<template lang="pug">
.common-form
  ValidationObserver(v-slot="{ invalid, handleSubmit }")
    form(@submit.prevent="handleSubmit(onSubmit)")
      slot
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { ValidationObserver } from 'vee-validate';

const CommonForm = defineComponent({
  components: {
    ValidationObserver,
  },
  setup() {
    const onSubmit = () => { console.log('Form Submitted!'); };

    return {
      onSubmit,
    };
  },
});

export default CommonForm;
</script>

<style lang="scss">
// .common-form {}
</style>

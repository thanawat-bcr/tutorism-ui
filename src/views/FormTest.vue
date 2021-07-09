<template lang="pug">
.form-test
  CommonForm
    CommonInput(v-model="user.username")
    CommonInput(v-model="user.password")
    CommonButton(type="submit")
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

const FormTest = defineComponent({
  setup() {
    const user = reactive({
      username: '',
      password: '',
      email: '',
    });

    return {
      user,
    };
  },
});

export default FormTest;
</script>

<style lang="scss">
// .form-test {}
</style>

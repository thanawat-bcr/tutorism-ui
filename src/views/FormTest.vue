<template lang="pug">
CommonCard.form-test(style="width: 800px;")
  CommonForm
    .form--group
      .form--group--row
        CommonTextInput(v-model="user.email" icon="mail" placeholder="Email" rules="required|email") Email
      .form--group--row
        CommonTextInput(v-model="user.username" icon="user" placeholder="Username" rules="required") Username
        CommonTextInput(v-model="user.password" icon="lock" placeholder="Password" rules="required" type="password") Password
    .flex.justify-center
      CommonButton(type="submit") Register
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

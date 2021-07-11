<template lang="pug">
CommonCard.form-test(style="width: 800px;")
  CommonForm
    .form--group
      .form--group--row
        CommonTextInput(v-model="user.email" icon="mail" placeholder="Email" rules="required|email") Email
      .form--group--row
        CommonTextInput(v-model="user.username" icon="user" placeholder="Username" rules="required") Username
        CommonTextInput(v-model="user.password" placeholder="Password" rules="required" type="password") Password
      .form--group--row
        CommonSelect(
          v-model="user.company"
          icon="user-group"
          placeholder='Company'
          rules="required"
          :display="companiesDisplay"
          :items="companiesItems"
        ) Company
        //- CommonSelect(v-model="user.department" placeholder="Department" rules="required") Department
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
      company: '',
      department: '',
    });

    const companiesDisplay = ['Com1', 'Com2', 'Com3', 'Com4', 'Com5', 'Com6', 'Com7', 'Com8', 'Com9', 'Com10', 'Com11', 'Com12'];
    const companiesItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return {
      user,

      companiesDisplay,
      companiesItems,
    };
  },
});

export default FormTest;
</script>

<style lang="scss">
// .form-test {}
</style>

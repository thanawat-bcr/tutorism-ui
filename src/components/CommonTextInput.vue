<template lang="pug">
.common-input.common-input__text
  ValidationProvider(:rules="rules" v-slot="{ errors }")
    .common-input__text__container
      label.subtitle2.text-primary-700: slot Input Label
      .common-input__text__field
        CommonIcon.common-input__text__icon(v-if="icon" :icon="icon" color="black")
        input.body2.common-input__text__input(
          :value="value"
          :class="classes"
          :placeholder="placeholder"
          :type="inputType"
          @input="$emit('input', $event.target.value)"
          class="placeholder-black placeholder-opacity-50"
        )
        CommonIcon.common-input__text__icon.right-0(v-if="type === 'password'" :icon="showPassword ? 'show' : 'hide'" color="black" @click="togglePassword")
      transition(name="error")
        span.common-input__error__container(v-if="errors.length > 0")
          CommonIcon.mx-1(icon="danger-circle" color="red" size="sm")
          span.subtitle3 {{ errors[0] }}
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';

import { ValidationProvider } from 'vee-validate';

const CommonTextInput = defineComponent({
  components: {
    ValidationProvider,
  },
  setup(props) {
    const showPassword = ref(false);
    const togglePassword = () => { showPassword.value = !showPassword.value; };

    const inputSpacing = computed(() => {
      if (props.icon && props.type === 'password') return 'px-14';
      if (props.icon) return 'pl-14 pr-4';
      return 'px-4';
    });

    const inputType = computed(() => {
      if (props.type === 'password' && showPassword.value) return 'text';
      return props.type;
    });

    const classes = computed(() => `${inputSpacing.value}`);

    return {
      classes,

      showPassword,
      togglePassword,

      inputType,
    };
  },
  props: {
    value: {},
    placeholder: {},
    icon: {},
    type: {
      type: String,
      default: 'text',
    },
    rules: {},
  },
});

export default CommonTextInput;
</script>

<style lang="scss">
// common-input__text
.common-input {
  &__text {
    &__container {
      @apply flex flex-col h-24;
    }
    &__field {
      @apply my-1 h-10 w-full relative;
    }
    &__icon {
      @apply absolute mx-4 opacity-70;
      top: 50%;
      transform: translateY(-50%);
    }
    &__input {
      @apply h-full w-full bg-cool-gray rounded-lg outline-none text-black;
    }
  }
  &__error {
    &__container {
      transform-origin: center top;
      @apply text-red-500 inline-flex items-center self-start;
    }
  }
  .error {
    &-enter-active {
      animation: error-in .3s;
    }
    &-leave-active {
      animation: error-in .3s reverse;
    }
  }
  @keyframes error-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>

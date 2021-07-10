<template lang="pug">
.common-input
  ValidationProvider(:rules="rules" v-slot="{ errors }")
    .flex.flex-col.h-24
      label.subtitle2.text-primary-700: slot Input Label
      .common-input-container.relative
        CommonIcon.common-input-icon.absolute.mx-4.opacity-70(v-if="icon" :icon="icon" color="black")
        input.common-input-field.body2(
          :value="value"
          :class="classes"
          :placeholder="placeholder"
          :type="inputType"
          @input="$emit('input', $event.target.value)"
          class="placeholder-black placeholder-opacity-50"
        )
        CommonIcon.common-input-icon.absolute.mx-4.cursor-pointer.right-0.opacity-70(v-if="type === 'password'" :icon="showPassword ? 'show' : 'hide'" color="black" @click="togglePassword")
      transition(name="error")
        span.text-red-500.error.inline-flex.items-center.self-start(v-if="errors.length > 0")
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
.common-input {
  &-container {
    @apply my-1 h-10 w-full;
    .common-input-field {
      @apply h-full w-full bg-cool-gray rounded-lg outline-none text-black
    }
    .common-input-icon {
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .error {
    transform-origin: center;
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

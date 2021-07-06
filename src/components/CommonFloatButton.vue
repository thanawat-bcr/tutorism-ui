<template lang="pug">
button.common-float-button.rounded-full.transition.duration-100(
  :class="classes"
  :disabled="disabled"
  @click="$emit('click')"
  @mouseover="hover = true"
  @mouseleave="hover = false"
)
  .common-float-button-content.flex.items-center.justify-center
    span(:class="iconSize" v-if="icon")
      CommonIcon(
        :icon='icon'
        :color="iconColor"
        :buttonHover="hover"
        size="full"
      )
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
} from '@vue/composition-api';

const CommonFloatButton = defineComponent({
  setup(props) {
    const hover = ref(false);

    const size = computed(() => {
      if (props.size === 'sm') return 'h-6 w-6';
      if (props.size === 'md') return 'h-8 w-8';
      if (props.size === 'lg') return 'h-10 w-10';
      return 'h-8 w-8';
    });

    const color = computed(() => {
      if (props.outline) {
        if (props.color === 'primary') return 'text-primary-700 hover:border-primary-500 hover:text-primary-500 bg-cool-white hover:bg-white border border-solid border-primary-700';
        if (props.color === 'secondary') return 'text-secondary-700 hover:border-secondary-500 hover:text-secondary-500 bg-cool-white hover:bg-white border border-solid border-secondary-700';
        if (props.color === 'error' || props.color === 'red') return 'text-red-700 hover:border-red-500 hover:text-red-500 bg-cool-white hover:bg-white border border-solid border-red-700';
      }
      if (props.flat) {
        if (props.color === 'primary') return 'text-primary-700 hover:border-primary-500 hover:text-primary-500 bg-cool-white hover:bg-white';
        if (props.color === 'secondary') return 'text-secondary-700 hover:border-secondary-500 hover:text-secondary-500 bg-cool-white hover:bg-white';
        if (props.color === 'error' || props.color === 'red') return 'text-red-700 hover:border-red-500 hover:text-red-500 bg-cool-white hover:bg-white';
      }
      if (props.color === 'primary') return 'bg-primary-700 hover:bg-primary-500 text-cool-white';
      if (props.color === 'secondary') return 'bg-secondary-700 hover:bg-secondary-500 text-cool-white';
      if (props.color === 'error' || props.color === 'red') return 'bg-red-700 hover:bg-red-500 text-cool-white';
      return 'bg-primary-700 hover:bg-primary-500 text-cool-white';
    });

    const disable = computed(() => (props.disabled ? 'pointer-events-none opacity-50' : ''));

    const classes = computed(() => `${size.value} ${color.value} ${disable.value}`);

    const iconColor = computed(() => {
      if (props.outline || props.flat) return props.color;
      return 'cool-white';
    });

    const iconSize = computed(() => {
      if (props.size === 'sm') return 'h-2 w-2';
      if (props.size === 'md') return 'h-3 w-3';
      if (props.size === 'lg') return 'h-4 w-4';
      return 'h-3 w-3';
    });

    const iconClasses = computed(() => `${iconColor.value} ${iconSize.value}`);

    return {
      hover,

      classes,

      iconSize,
      iconColor,
      iconClasses,
    };
  },
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
      validation: (val: string) => ['sm', 'md', 'lg'].indexOf(val) !== -1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});

export default CommonFloatButton;
</script>

<style lang="scss">
.common-float-button {
  &.min-width-sm {
    min-width: 4rem;
  }
  &.min-width-md {
    min-width: 6rem;
  }
  &.min-width-lg {
    min-width: 8rem;
  }
}
</style>

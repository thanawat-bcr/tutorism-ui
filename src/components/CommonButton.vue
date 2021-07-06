<template lang="pug">
button.common-button.transition.duration-100.px-2(
  :type="type"
  :class="classes"
  :disabled="disabled"
  @click="$emit('click')"
  @mouseover="hover = true"
  @mouseleave="hover = false"
)
  .common-button-content.flex.items-center.justify-center
    span(:class="iconSize" v-if="icon")
      CommonIcon(
        :icon='icon'
        :color="iconColor"
        :hover="hover"
        size="full"
      )
    slot Submit
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
} from '@vue/composition-api';

const CommonButton = defineComponent({
  setup(props) {
    const hover = ref(false);

    const size = computed(() => {
      if (props.size === 'sm') return 'h-6 h4 min-width-sm';
      if (props.size === 'md') return 'h-8 h4 min-width-md';
      if (props.size === 'lg') return 'h-10 h3 min-width-lg';
      return 'h-8 h4 min-width-md';
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

    const rounded = computed(() => (props.rounded ? 'rounded-lg' : ''));

    const text = computed(() => (props.upper ? 'uppercase' : ''));

    const block = computed(() => (props.block ? 'w-full' : ''));

    const disable = computed(() => (props.disabled ? 'pointer-events-none opacity-50' : ''));

    const classes = computed(() => `${size.value} ${color.value} ${rounded.value} ${text.value} ${block.value} ${disable.value}`);

    const iconColor = computed(() => {
      const tmpColor = props.color === 'error' ? 'red' : props.color;
      if (props.outline || props.flat) return tmpColor;
      return 'cool-white';
    });

    const iconSize = computed(() => {
      if (props.size === 'sm') return 'h-2 w-2 mr-1';
      if (props.size === 'md') return 'h-3 w-3 mr-2';
      if (props.size === 'lg') return 'h-4 w-4 mr-2';
      return 'h-3 w-3 mr-2';
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
    type: {
      type: String,
      default: 'button',
      validation: (val: string) => ['button', 'submit'].indexOf(val) !== -1,
    },
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
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
      validation: (val: string) => ['sm', 'md', 'lg'].indexOf(val) !== -1,
    },
    upper: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
  },
});

export default CommonButton;
</script>

<style lang="scss">
.common-button {
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

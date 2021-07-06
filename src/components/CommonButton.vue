<template lang="pug">
button.common-button.transition.duration-100.px-4(
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

import useColorClass from '@/useColorClass';

const CommonButton = defineComponent({
  setup(props) {
    const hover = ref(false);

    const size = computed(() => {
      if (props.size === 'sm') return 'h-8 h4 min-width-sm';
      if (props.size === 'md') return 'h-10 h3 min-width-md';
      if (props.size === 'lg') return 'h-12 h2 min-width-lg';
      return 'h-10 h3 min-width-md';
    });
    const iconSize = computed(() => {
      if (props.size === 'sm') return 'h-4 w-4 mr-1';
      if (props.size === 'md') return 'h-5 w-5 mr-2';
      if (props.size === 'lg') return 'h-6 w-6 mr-2';
      return 'h-5 w-5 mr-2';
    });

    const { computedColorHover, computedColorIcon } = useColorClass();

    const color = computed(() => {
      if (props.outline) return computedColorHover(props.color, 'outline');
      if (props.flat) return computedColorHover(props.color, 'flat');
      return computedColorHover(props.color);
    });
    const iconColor = computed(() => {
      if (props.outline) return computedColorIcon(props.color, 'outline');
      if (props.flat) return computedColorIcon(props.color, 'flat');
      return computedColorIcon(props.color);
    });

    const rounded = computed(() => (props.rounded ? 'rounded-lg' : ''));

    const text = computed(() => (props.upper ? 'uppercase' : ''));

    const block = computed(() => (props.block ? 'w-full' : ''));

    const disable = computed(() => (props.disabled ? 'pointer-events-none opacity-50' : ''));

    const classes = computed(() => `${size.value} ${color.value} ${rounded.value} ${text.value} ${block.value} ${disable.value}`);

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

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
        :hover="hover"
        :color="iconColor"
        size="full"
      )
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
} from '@vue/composition-api';

import useColorClass from '@/useColorClass';

const CommonFloatButton = defineComponent({
  setup(props) {
    const hover = ref(false);

    const size = computed(() => {
      if (props.size === 'sm') return 'h-8 w-8';
      if (props.size === 'md') return 'h-10 w-10';
      if (props.size === 'lg') return 'h-12 w-12';
      return 'h-10 w-10';
    });
    const iconSize = computed(() => {
      if (props.size === 'sm') return 'h-4 w-4';
      if (props.size === 'md') return 'h-5 w-5';
      if (props.size === 'lg') return 'h-6 w-6';
      return 'h-5 w-5';
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

    const disable = computed(() => (props.disabled ? 'pointer-events-none opacity-50' : ''));

    const classes = computed(() => `${size.value} ${color.value} ${disable.value}`);

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
// .common-float-button {
// }
</style>

<template lang="pug">
button.common-float-button.rounded-full.transition.duration-100(
  :class="classes"
  :disabled="disabled"
  @click="$emit('click')"
  @mouseover="hover = true"
  @mouseleave="hover = false"
)
  .common-float-button-content.flex.items-center.justify-center
    span.w-4.h-4(v-if="icon")
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
      if (props.small) return 'h-8 w-8';
      return 'h-10 w-10';
    });

    const { computedColorWithHover, computedColorIcon } = useColorClass();

    const color = computed(() => {
      if (props.outline) return computedColorWithHover(props.color, 'outline');
      if (props.flat) return computedColorWithHover(props.color, 'flat');
      return computedColorWithHover(props.color);
    });
    const iconColor = computed(() => {
      if (props.outline) return computedColorIcon(props.color, 'outline');
      if (props.flat) return computedColorIcon(props.color, 'flat');
      return computedColorIcon(props.color);
    });

    const disable = computed(() => (props.disabled ? 'pointer-events-none opacity-50' : ''));

    const classes = computed(() => `${size.value} ${color.value} ${disable.value}`);

    return {
      hover,

      classes,
      iconColor,
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
    small: {
      type: Boolean,
      default: false,
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

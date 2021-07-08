<template lang="pug">
button.common-button.transition.duration-100.px-4.min-width-md.text-button.rounded-lg(
  :type="type"
  :class="classes"
  :disabled="disabled"
  @click="$emit('click')"
  @mouseover="hover = true"
  @mouseleave="hover = false"
)
  .common-button-content.flex.items-center.justify-center
    span.w-4.h-4.mr-1(v-if="icon")
      CommonIcon(
        :icon='icon'
        :color="iconColor"
        :hover="hover"
        size="full"
      )
    slot Submit
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';
import useColorClass from '@/useColorClass';

const CommonButton = defineComponent({
  setup(props) {
    const hover = ref(false);

    const size = computed(() => {
      if (props.small) return 'h-8';
      return 'h-10';
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

    const text = computed(() => (props.upper ? 'uppercase' : ''));

    const block = computed(() => (props.block ? 'w-full' : ''));

    const disable = computed(() => (props.disabled ? 'pointer-events-none opacity-50' : ''));

    const classes = computed(() => `${size.value} ${color.value} ${text.value} ${block.value} ${disable.value}`);

    return {
      hover,

      classes,
      iconColor,
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
    small: {
      type: Boolean,
      default: false,
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
  &.min-width-md {
    min-width: 8rem;
  }
}
</style>

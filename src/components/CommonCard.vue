<template lang="pug">
.common-card.inline-flex.p-6.transition.duration-100(:class="classes" @click="$emit('click')")
  slot
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import useColorClass from '@/useColorClass';

const CommonCard = defineComponent({
  setup(props) {
    const { computedColor, computedColorHover } = useColorClass();

    const color = computed(() => {
      if (props.active && props.hover) return computedColorHover(props.color);
      if (props.active) return computedColor(props.color);
      if (props.hover) return computedColorHover(props.color, 'flat');
      return computedColor(props.color, 'flat');
    });

    const block = computed(() => (props.block ? 'w-full' : ''));

    const rounded = computed(() => (props.rounded ? 'rounded-2xl' : ''));

    const shadow = computed(() => (props.shadow ? 'card-shadow' : ''));

    const classes = computed(() => `${color.value} ${block.value} ${rounded.value} ${rounded.value} ${shadow.value}`);

    return {
      classes,
    };
  },
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    active: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: true,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    block: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
  },
});

export default CommonCard;
</script>

<style lang="scss">
// .common-card {}
</style>

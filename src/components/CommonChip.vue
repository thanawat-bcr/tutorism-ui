<template lang="pug">
div.common-chip.transition.duration-100.h-6.inline-flex.items-center.justify-center.rounded-xl.h4.relative(
  :class="classes"
  @click.self="$emit('click')"
)
  slot Text
  span.w-3.h-3.cursor-pointer.absolute.right-0.mr-1(v-if="closable")
    CommonIcon(
      icon='close'
      :color="iconColor"
      size="full"
      @click="$emit('close')"
    )
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import useColorClass from '@/useColorClass';

const CommonChip = defineComponent({
  setup(props) {
    const { computedColor, computedColorIcon } = useColorClass();

    const color = computed(() => {
      if (props.outline) return computedColor(props.color, 'outline');
      if (props.flat) return computedColor(props.color, 'flat');
      return computedColor(props.color);
    });

    const spacing = computed(() => {
      if (props.closable) return 'pr-5 pl-3';
      return 'px-3';
    });

    const iconColor = computed(() => {
      if (props.outline) return computedColorIcon(props.color, 'outline');
      if (props.flat) return computedColorIcon(props.color, 'flat');
      return computedColorIcon(props.color);
    });

    const classes = computed(() => `${color.value} ${spacing.value}`);

    return {
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
    closable: {
      type: Boolean,
      default: false,
    },
  },
});

export default CommonChip;
</script>

<style lang="scss">
.common-chip {
  & {
    min-width: 5rem;
  }
}
</style>

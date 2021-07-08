<template lang="pug">
div.common-chip.transition.duration-100.inline-flex.items-center.justify-center.rounded-2xl.body2.relative(
  :class="classes"
  @click.self="$emit('click')"
)
  slot Text
  span.cursor-pointer.absolute.right-0.mr-2(v-if="closable" style="width: 18px; height: 18px;")
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
    const size = computed(() => {
      if (props.small) return 'h-6';
      return 'h-8';
    });

    const { computedColorWithHover, computedColorIcon } = useColorClass();

    const color = computed(() => {
      if (props.outline) return computedColorWithHover(props.color, 'outline');
      if (props.flat) return computedColorWithHover(props.color, 'flat');
      return computedColorWithHover(props.color);
    });

    const spacing = computed(() => {
      if (props.closable) return 'closable-spacing';
      return 'px-4';
    });

    const iconColor = computed(() => {
      if (props.outline) return computedColorIcon(props.color, 'outline');
      if (props.flat) return computedColorIcon(props.color, 'flat');
      return computedColorIcon(props.color);
    });

    const classes = computed(() => `${size.value} ${color.value} ${spacing.value}`);

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
    small: {
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
  &.closable-spacing {
    padding-left: 1rem;
    padding-right: 34px;
  }
}
</style>

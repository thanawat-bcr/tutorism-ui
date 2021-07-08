<template lang="pug">
CommonCard.common-panel(
  :color="color"
  :active="active"
  :shadow="shadow"
  :rounded="rounded"
  :block="block"
  @click="$emit('click')"
)
  .flex
    .w-16.h-16(v-if="icon")
      CommonIcon(:icon="icon" :color="iconColor" size="full")
    .h-16.mx-2(style="min-width: 6rem;" :class="textAlignment")
      h3.-mt-4(:class="titleColor"): slot
      .subtitle2.-mt-6: slot(name="subtitle")
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import useColorClass from '@/useColorClass';

const CommonPanel = defineComponent({
  setup(props) {
    const { computedColorIcon } = useColorClass();

    const iconColor = computed(() => {
      if (props.active) return computedColorIcon(props.color);
      return computedColorIcon(props.color, 'flat');
    });

    const titleColor = computed(() => {
      if (!props.active) return 'text-black';
      return '';
    });

    const textAlignment = computed(() => `text-${props.text}`);

    return {
      iconColor,
      titleColor,
      textAlignment,
    };
  },
  props: {
    icon: {
      type: String,
    },
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
    text: {
      type: String,
      default: 'left',
      validation: (val: string) => ['left', 'center', 'right'].indexOf(val) !== -1,
    },
  },
});

export default CommonPanel;
</script>

<style lang="scss">
// .common-panel {}
</style>

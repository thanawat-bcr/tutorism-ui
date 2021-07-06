<template lang="pug">
.common-icon(
  :class="classes"
  :style="filter"
  @click="$emit('click')"
)
  CommonImage(
    :src="src"
    :alt="alt"
  )
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';
import useColorFilter from '@/useColorFilter';
import useTailwindColor from '@/useTailwindColor';

const CommonIcon = defineComponent({
  setup(props) {
    const sizeClass = computed(() => {
      if (props.size === 'sm') return 'w-4 h-4';
      if (props.size === 'md') return 'w-6 h-6';
      if (props.size === 'lg') return 'w-8 h-8';
      return 'w-full h-full';
    });

    const { colorToHex } = useTailwindColor();

    const computedColor = computed(() => {
      if (props.color === '') return '#000';
      if (props.color === 'black') return '#000';
      if (props.color === 'white') return '#fff';
      if (props.color === 'cool-white') return '#eee';
      return colorToHex(props.color as string, props.hover as boolean);
    });

    const filter = computed(() => `filter: ${useColorFilter(computedColor.value as string).value}`);

    const classes = computed(() => `${sizeClass.value}`);

    const src = computed(() => `/icons/${props.icon}.svg`);

    return {
      classes,
      filter,
      src,
      computedColor,
      colorToHex,
    };
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    alt: {
      default: '',
    },
    size: {
      type: String,
      default: 'md',
      validation: (val: string) => ['sm', 'md', 'lg', 'full'].indexOf(val) !== -1,
    },
    color: {
      type: String,
      default: 'primary',
    },
    hover: {
      type: Boolean,
    },
  },
});

export default CommonIcon;
</script>

<style lang="scss">
// .common-icon {}
</style>

<template lang="pug">
.common-icon(:class="classes" @click="$emit('click')" :style="filter")
  CommonImage(
    :src="src"
    :alt="alt"
  )
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import useColorFilter from '@/useColorFilter';
import useTailwindColor from '@/useTailwindColor';

const CommonIcon = defineComponent({
  setup(props) {
    const sizeClass = computed(() => {
      if (props.size === 'sm') return 'w-4 h-4';
      if (props.size === 'md') return 'w-6 h-6';
      if (props.size === 'lg') return 'w-8 h-8';
      return 'w-12 h-12';
    });

    const { colorToHex } = useTailwindColor();

    const computedColor = computed(() => {
      if (props.color === '') return '#000';
      if (props.color === 'black') return '#000';
      if (props.color === 'white') return '#fff';
      return colorToHex(props.color as string);
    });

    const filter = computed(() => `filter: ${useColorFilter(computedColor.value as string).value}`);

    const classes = computed(() => `${sizeClass.value}`);

    return {
      classes,
      filter,
      computedColor,
      colorToHex,
    };
  },
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      default: '',
    },
    size: {
      type: String,
      default: 'md',
      validation: (val: string) => ['sm', 'md', 'lg', 'xl'].indexOf(val) !== -1,
    },
    color: {
      type: String,
      default: '',
    },
  },
});

export default CommonIcon;
</script>

<style lang="scss">
// .common-icon {}
</style>

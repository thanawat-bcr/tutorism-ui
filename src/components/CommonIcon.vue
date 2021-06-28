<template lang="pug">
.common-icon(:class="classes")
  CommonImage(
    :src="src"
    :alt="alt"
  )
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

const CommonIcon = defineComponent({
  setup(props) {
    const sizeClass = computed(() => {
      if (props.size === 'sm') return 'w-4 h-4';
      if (props.size === 'md') return 'w-6 h-6';
      if (props.size === 'lg') return 'w-8 h-8';
      return 'w-12 h-12';
    });
    const classes = computed(() => `${sizeClass.value}`);

    return {
      classes,
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
  },
});

export default CommonIcon;
</script>

<style lang="scss">
// .common-icon {}
</style>

<template lang="pug">
.common-image.w-full.h-full.overflow-hidden.relative
  img.w-full.h-full.absolute.inset-0(
    :class="classes"
    :src="src"
  )
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

const CommonImage = defineComponent({
  setup(props) {
    const objectFit = computed(() => (props.contain ? 'object-contain' : 'object-cover'));

    const classes = computed(() => `${objectFit.value}`);

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
    contain: {
      type: Boolean,
      default: false,
    },
  },

});

export default CommonImage;
</script>

<style lang="scss">
// .common-image {}
</style>

<template lang="pug">
.common-card.flex.flex-col.rounded-md(
  :class="classes"
  :style="stringSize"
)
  .flex.items-center.rounded-tl-md.rounded-tr-md.relative.h-12.p-3(v-if="isHeaders")
    //- WIP back and close (wait for CommonIcon)
    .absolute.top-0.left-0(v-if="back") back
    slot(name="headers")
    .absolute.top-0.right-0(v-if="close") close
  .overflow-y-auto.overflow-x-hidden.h-full.p-3(:class="contentRounded")
    slot
  .rounded-bl-md.rounded-br-md.p-3(v-if="isActions")
    slot(name="actions")
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import useCalcSize from '@/useCalcSize';

const CommonCard = defineComponent({
  setup(props, ctx) {
    const isHeaders = computed(() => !!ctx.slots.headers);
    const isActions = computed(() => !!ctx.slots.actions);

    const contentRounded = computed(() => {
      let res = '';
      if (!isHeaders.value) res = `${res} rounded-tl-md rounded-tr-md`;
      if (!isActions.value) res = `${res} rounded-bl-md rounded-br-md`;
      return res;
    });

    const block = computed(() => (props.block ? 'flex' : 'inline-flex'));

    const shadow = computed(() => (props.shadow ? 'common-card-shadow' : ''));

    const classes = computed(() => `${block.value} ${shadow.value}`);

    const { stringSize } = useCalcSize(props.minHeight as string, props.maxHeight as string, props.minWidth as string, props.maxWidth as string);

    return {
      isHeaders,
      isActions,

      contentRounded,

      classes,
      stringSize,
    };
  },
  props: {
    // STYLE
    block: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: true,
    },
    // SIZE
    minHeight: {
      type: String,
    },
    maxHeight: {
      type: String,
    },
    minWidth: {
      type: String,
    },
    maxWidth: {
      type: String,
    },
    // HEADERS
    back: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Boolean,
      default: false,
    },
  },
});

export default CommonCard;
</script>

<style lang="scss">
.common-card {
  &.common-card-shadow {
    box-shadow: 0 0 10px 0px #dedede,
    0 5px 5px -3px #444444;
  }
}
</style>

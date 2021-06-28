<template lang="pug">
.common-card.flex.flex-col.rounded-md(
  :class="classes"
  :style="stringSize"
)

  //- HEADERS
  .flex.items-center.rounded-tl-md.rounded-tr-md.relative.h-12.p-3(
    v-if="isHeaders"
    :class="{ 'pl-12' : back }"
  )
    .absolute.left-0.px-2.cursor-pointer(v-if="back")
      CommonIcon(src="/icon/back.svg" size='lg' @click="backHandler")
    slot(name="headers")
    .absolute.right-0.top-0.m-2.p-2.cursor-pointer(v-if="close")
      CommonIcon(src="/icon/close.svg" size='sm' @click="closeHandler")

  //- CONTENTS
  .overflow-y-auto.overflow-x-hidden.h-full.px-3(:class="contentRounded")
    slot

  //- ACTIONS - FOOTERS
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

    const backHandler = () => {
      ctx.emit('back');
    };
    const closeHandler = () => {
      ctx.emit('close');
    };

    return {
      isHeaders,
      isActions,

      contentRounded,

      classes,
      stringSize,

      backHandler,
      closeHandler,
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

<template lang="pug">
.common-modal.fixed.inset-0(:class="`${active ? 'pointer-events-auto' : 'pointer-events-none'}`")
  transition(name="fade")
    .common-modal.fixed.inset-0.z-20.flex.justify-center.items-center(
      style="background-color: #00000050;"
      @click.self="close"
      v-if="active"
    )
      CommonCard.flex.flex-col.items-center.z-30.relative(
        v-if="active"
        :color="color"
        flat
        style="max-width: 25rem;"
      )
        #close(v-if="closable"): CommonIcon.absolute.top-0.right-0.m-2.cursor-pointer(icon="close" size="md" color="black" @click="close")
        #context.h1.text-center.mb-2.break-words.w-full(style="min-height: 4rem;"): slot Text
        #actions.flex.w-full(style="width: 22rem;")
          CommonButton.flex-1.mx-1(:color="color" v-if="$slots.close" @click="close" flat): slot(name="close") Close
          CommonButton.flex-1.mx-1(:color="color" v-if="$slots.cancel" @click="cancelAction" flat): slot(name="cancel") Cancel
          CommonButton.flex-1.mx-1(:color="color" v-if="$slots.confirm" @click="confirmAction"): slot(name="confirm") Confirm
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api';

const CommonModal = defineComponent({
  setup(props, ctx) {
    const active = ref(false);
    const context = ref({});

    const open = (_ctx: any) => {
      ctx.emit('open');
      context.value = _ctx;
      active.value = true;
    };
    const close = () => {
      ctx.emit('close');
      active.value = false;
    };
    const cancelAction = () => {
      ctx.emit('cancel', context.value);
    };
    const confirmAction = () => {
      ctx.emit('confirm', context.value);
    };

    return {
      active,

      open,
      close,
      cancelAction,
      confirmAction,
    };
  },
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
});

export default CommonModal;
</script>

<style lang="scss">
.common-modal {
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>

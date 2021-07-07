<template lang="pug">
.common-modal-preset.fixed.inset-0(:class="`${active ? 'pointer-events-auto' : 'pointer-events-none'}`")
  transition(name="fade")
    .common-modal.fixed.inset-0.z-20.flex.justify-center.items-center(
      style="background-color: #00000050;"
      @click.self="close"
      v-if="active"
    )
      CommonCard.flex.flex-col.items-center.z-30.relative(
        v-if="active"
        :color="preset.color"
        flat
        style="max-width: 28rem;"
      )
        #close(v-if="closable"): CommonIcon.absolute.top-0.right-0.m-2.cursor-pointer(icon="close" size="md" color="black" @click="close")
        #context.h1.text-center.mb-2.break-words.w-full(style="min-height: 4rem;"): slot {{ preset.title }}
        #actions.flex.w-full(style="width: 22rem;")
          CommonButton.flex-1.mx-1(:color="preset.color" v-if="preset.close" @click="close" flat): slot(name="close"): slot(name="cancel") {{ preset.close }}
          CommonButton.flex-1.mx-1(:color="preset.color" v-if="preset.confirm" @click="confirmAction"): slot(name="confirm") {{ preset.confirm }}
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';

const CommonModalPreset = defineComponent({
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

    const confirmAction = () => {
      ctx.emit('confirm', context.value);
    };

    const preset = computed(() => {
      const _type = props.type;
      if (_type === 'confirm-action') {
        return {
          title: 'Confirm Action ?',
          confirm: 'Confirm',
          close: 'Cancel',
          color: 'primary',
        };
      }
      if (_type === 'confirm-delete') {
        return {
          title: 'Confirm Delete ?',
          confirm: 'Delete',
          close: 'Cancel',
          color: 'red',
        };
      }
      if (_type === 'success') {
        return {
          title: 'Action Success',
          close: 'Close',
          color: 'secondary',
        };
      }
      if (_type === 'error') {
        return {
          title: 'Something Went Wrong',
          close: 'Close',
          color: 'red',
        };
      }
      return {};
    });

    return {
      active,

      open,
      close,
      confirmAction,

      preset,
    };
  },
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'confirm',
      validation: (val: string) => ['confirm-action', 'success', 'confirm-delete', 'error'].indexOf(val) !== -1,
    },
  },
});

export default CommonModalPreset;
</script>

<style lang="scss">
.common-modal-preset {
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>

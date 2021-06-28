<template lang="pug">
button.common-button.rounded-md.transition.duration-100.px-2(
  :type="type"
  :class="classes"
  :disabled="disabled"
  :style="sizeStyle"
  style="box-sizing:border-box;"
  @click="$emit('click')"
)
  .flex.items-center.justify-center
    slot Submit
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
} from '@vue/composition-api';

const CommonButton = defineComponent({
  setup(props) {
    const background = computed(() => {
      if (props.color === 'red' || props.color === 'error') return 'bg-red-600 hover:bg-red-700 text-white';
      if (props.color === 'green' || props.color === 'success') return 'bg-green-500 hover:bg-green-600 text-white';
      if (props.color === 'orange' || props.color === 'warning') return 'bg-yellow-600 hover:bg-yellow-700 text-white';
      if (props.color === 'yellow') return 'bg-yellow-400 hover:bg-yellow-500 text-white';
      if (props.color === 'blue') return 'bg-blue-500 hover:bg-blue-600 text-white';
      if (props.color === 'pink') return 'bg-pink-500 hover:bg-pink-600 text-white';
      if (props.color === 'purple') return 'bg-purple-500 hover:bg-purple-600 text-white';
      if (props.color === 'white') return 'bg-gray-100 hover:bg-gray-200 text-gray-800';
      if (props.color === 'secondary') return 'bg-secondary-600 hover:bg-secondary-700 text-white';
      return 'bg-primary-600 hover:bg-primary-700 text-white';
    });

    const outline = computed(() => {
      if (props.color === 'red' || props.color === 'error') return 'text-red-600 border-red-600 border-solid border hover:bg-red-50';
      if (props.color === 'green' || props.color === 'success') return 'text-green-600 border-green-600 border-solid border hover:bg-green-50';
      if (props.color === 'orange' || props.color === 'warning') return 'text-yellow-700 border-yellow-700 border-solid border hover:bg-yellow-50';
      if (props.color === 'yellow') return 'text-yellow-400 border-yellow-400 border-solid border hover:bg-yellow-50';
      if (props.color === 'blue') return 'text-blue-500 border-blue-500 border-solid border hover:bg-blue-50';
      if (props.color === 'pink') return 'text-pink-500 border-pink-500 border-solid border hover:bg-pink-50';
      if (props.color === 'purple') return 'text-purple-500 border-purple-500 border-solid border hover:bg-purple-50';
      if (props.color === 'white' || props.color === 'gray' || props.color === 'grey') return 'text-gray-500 border-gray-500 border-solid border hover:bg-gray-50';
      if (props.color === 'secondary') return 'text-secondary-600 border-secondary-600 border-solid border hover:bg-secondary-100';
      return 'text-primary-600 border-primary-600 border-solid border hover:bg-primary-100';
    });

    const color = computed(() => (props.outline ? outline.value : background.value));

    const shadow = computed(() => (props.shadow ? 'hover:shadow' : ''));

    const disable = computed(() => (props.disabled ? 'pointer-events-none opacity-50' : ''));

    const sizeClass = computed(() => {
      if (props.size === 'sm') return 'text-sm';
      if (props.size === 'md') return 'text-sm';
      if (props.size === 'lg') return 'text-base';
      return 'text-xl';
    });
    const sizeStyle = computed(() => {
      if (props.size === 'sm') return 'min-width: 5rem; min-height: 2rem;';
      if (props.size === 'md') return 'min-width: 6rem; min-height: 2rem;';
      if (props.size === 'lg') return 'min-width: 8rem; min-height: 2.5rem;';
      return 'min-width: 10rem; min-height: 2.5rem;';
    });

    const text = computed(() => (props.upper ? 'uppercase' : ''));

    const block = computed(() => (props.block ? 'w-full' : ''));

    const classes = computed(() => `${sizeClass.value} ${color.value} ${text.value} ${block.value} ${shadow.value} ${disable.value}`);

    return {
      classes,
      sizeStyle,
    };
  },
  props: {
    type: {
      type: String,
      default: 'button',
      validation: (val: string) => ['button', 'submit'].indexOf(val) !== -1,
    },
    color: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'md',
      validation: (val: string) => ['sm', 'md', 'lg', 'xl'].indexOf(val) !== -1,
    },
    upper: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});

export default CommonButton;
</script>

<style lang="scss">
</style>

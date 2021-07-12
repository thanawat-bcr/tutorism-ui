<template lang="pug">
.common-input.common-select.common-input__select
  .common-input__select__backdrop(v-if="showDropdown" @click="toggleDropdown")
  ValidationProvider(:rules="rules" v-slot="{ errors }")
    .common-input__select__container
      label.subtitle2.text-primary-700: slot Input Label
      .common-input__select__field
        CommonIcon.common-input__select__icon(v-if="icon" :icon="icon" color="black")
        CommonIcon.common-input__select__icon.right-0(v-if="showDropdown" icon="arrow-up" color="black")
        CommonIcon.common-input__select__icon.right-0(v-else icon="arrow-down" color="black")
        select.common-input__select__input(
          :value="value"
          @click="toggleDropdown"
        )
        //- HACK: v-if -> v-show [ FIX LATER :( ]
        //- Problem: Can't find DOM if not render yet, so use v-show to just hide but rendered
        transition(name="dropdown")
          .card-shadow.body2.common-input__select__option__container(
            v-show="showDropdown"
            ref="commonSelectOptionContainerRef"
            :style="`height: ${containerHeight}`"
          )
            .common-input__select__option__scroll
              .common-input__select__option__item(
                v-for="(item, index) in dropdownItems.display"
                :key="item"
                :class="`${index == selectedDropdownIndex ? 'bg-cool-white' : 'bg-white'}`"
                @mouseover="selectedDropdownIndex = index"
                @click="selectHandler"
              ) {{ item }}
        .body2.common-input__select__value(:class="classes" v-if="value") {{ selectedDropdownValue }}
        .body2.common-input__select__placeholder(:class="classes" v-else) {{ placeholder }}
      transition(name="error")
        span.common-input__error__container(v-if="errors.length > 0")
          CommonIcon.mx-1(icon="danger-circle" color="red" size="sm")
          span.subtitle3 {{ errors[0] }}
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
} from '@vue/composition-api';

import { ValidationProvider } from 'vee-validate';

const CommonSelect = defineComponent({
  components: {
    ValidationProvider,
  },
  setup(props, ctx) {
    const dropdownItems = computed(() => ({
      display: props.display || props.items,
      items: props.items,
    }));

    const showDropdown = ref(false);
    const toggleDropdown = () => {
      // eslint-disable-next-line
      if (showDropdown.value) window.removeEventListener('keydown', keyPressHandler);
      // eslint-disable-next-line
      else window.addEventListener('keydown', keyPressHandler);
      showDropdown.value = !showDropdown.value;
    };

    const selectedDropdownValue = computed(() => dropdownItems.value.display[dropdownItems.value.items.indexOf(props.value)]);

    const selectedDropdownIndex = ref(0);

    const commonSelectOptionContainerRef = ref('');
    const selectorContainerPointer = computed(() => selectedDropdownIndex.value * 40);

    const keyPressHandler = (event: any) => {
      if (event.key === 'ArrowUp' && selectedDropdownIndex.value > 0) {
        selectedDropdownIndex.value -= 1;
      }
      if (event.key === 'ArrowDown' && selectedDropdownIndex.value < props.items.length - 1) {
        selectedDropdownIndex.value += 1;
      }
      if (event.key === 'Enter') {
        // eslint-disable-next-line
        selectHandler();

        event.preventDefault();
      }
      const containerDOM = commonSelectOptionContainerRef.value;
      (containerDOM as any).scrollTop = selectorContainerPointer.value - 40;
    };

    const selectHandler = () => {
      window.removeEventListener('keydown', keyPressHandler);
      showDropdown.value = false;
      ctx.emit('input', props.items[selectedDropdownIndex.value]);
    };

    // CSS CLASSES

    const inputSpacing = computed(() => {
      if (props.icon) return 'px-14';
      return 'pl-4 pr-14';
    });

    const containerHeight = computed(() => {
      if (props.items.length > 5) return '12.5rem';
      return `${props.items.length * 2.5}rem`;
    });

    const classes = computed(() => `${inputSpacing.value}`);

    return {
      dropdownItems,
      classes,
      containerHeight,

      showDropdown,
      toggleDropdown,

      selectedDropdownIndex,
      selectedDropdownValue,
      selectHandler,

      commonSelectOptionContainerRef,
      selectorContainerPointer,
    };
  },
  props: {
    value: {},
    icon: {},
    rules: {},
    placeholder: {},
    items: {
      type: Array,
      required: true,
    },
    display: {
      type: Array,
    },
  },
});

export default CommonSelect;
</script>

<style lang="scss">
.common-input {
  &__select {
    &__backdrop {
      @apply fixed inset-0;
    }
    &__container {
      @apply flex flex-col h-24;
    }
    &__field {
      @apply relative my-1 h-10 w-full;
    }
    &__input {
      @apply h-full w-full bg-cool-gray rounded-lg outline-none text-black;
    }
    &__icon {
      top: 50%;
      transform: translateY(-50%);
      @apply absolute mx-4 opacity-70 pointer-events-none;
    }
    &__option {
      &__container {
        transform-origin: top center;
        z-index: 50;
        position: relative;
        overflow: auto;
      }
      &__scroll {
        position: absolute;
        height: 100%;
        width: 100%;
      }
      &__item {
        @apply h-10 w-full hover:bg-cool-white text-black flex items-center px-4;
      }
    }
    &__value {
      top: 50%;
      transform: translateY(-50%);
      @apply absolute text-black pointer-events-none;
    }
    &__placeholder {
      top: 50%;
      transform: translateY(-50%);
      @apply absolute text-black opacity-50 pointer-events-none;
    }
  }
  .dropdown {
    &-enter-active {
      animation: dropdown-show .2s;
    }
    &-leave-active {
      animation: dropdown-show .2s reverse;
    }
  }
  @keyframes dropdown-show {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>

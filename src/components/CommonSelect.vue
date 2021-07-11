<template lang="pug">
.common-input.common-select
  ValidationProvider(:rules="rules" v-slot="{ errors }")
    .flex.flex-col.h-24
      label.subtitle2.text-primary-700: slot Input Label
      .common-select-container.relative
        CommonIcon.common-select-icon.absolute.mx-4.opacity-70.pointer-events-none(v-if="icon" :icon="icon" color="black")
        CommonIcon.common-select-icon.absolute.mx-4.right-0.opacity-70.pointer-events-none(icon="arrow-down" color="black")
        select.common-select-field(
          :value="value"
          @click="toggleDropdown"
        )
        //- HACK: v-if -> v-show [ FIX LATER :( ]
        //- Problem: Can't find DOM if not render yet, so use v-show to just hide but rendered
        transition(name="dropdown")
          .card-shadow.body2.common-select-option-container(
            v-show="showDropdown"
            ref="commonSelectOptionContainerRef"
          )
            .common-select-back-drop.fixed.inset-0(@click="toggleDropdown")
            .common-select-option-scroll
              .common-select-option-item(
                v-for="(item, index) in dropdownItems.display"
                :key="item"
                :class="`${index == selectedDropdownIndex ? 'bg-cool-white' : 'bg-white'}`"
                @mouseover="selectedDropdownIndex = index"
                @click="selectHandler"
              ) {{ item }}
        .body2.absolute.common-select-value.text-black.pointer-events-none(:class="classes" v-if="value") {{ selectedDropdownValue }}
        .body2.absolute.common-select-placeholder.text-black.opacity-50.pointer-events-none(:class="classes" v-else) {{ placeholder }}
      transition(name="error")
        span.text-red-500.error.inline-flex.items-center.self-start(v-if="errors.length > 0")
          CommonIcon.mx-1(icon="danger-circle" color="red" size="sm")
          span.subtitle3 {{ errors[0] }}
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
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

    const classes = computed(() => `${inputSpacing.value}`);

    return {
      dropdownItems,
      classes,

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
.common-select {
  &-container {
    @apply my-1 h-10 w-full;
    .common-select {
      &-field {
        @apply h-full w-full bg-cool-gray rounded-lg outline-none text-black;
      }
      &-option-container {
        transform-origin: top center;
        z-index: 50;
        position: relative;
        height: 12.5rem;
        overflow: auto;
      }
      &-option-scroll {
        position: absolute;
        height: 100%;
        width: 100%;
      }
      &-option-item {
        @apply h-10 w-full hover:bg-cool-white text-black flex items-center px-4;
      }
      &-icon, &-placeholder, &-value {
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .error {
    transform-origin: center;
    &-enter-active {
      animation: error-in .3s;
    }
    &-leave-active {
      animation: error-in .3s reverse;
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
  @keyframes error-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
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

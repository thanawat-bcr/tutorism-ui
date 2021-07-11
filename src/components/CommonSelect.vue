<template lang="pug">
.common-input.common-select
  ValidationProvider(:rules="rules" v-slot="{ errors }")
    .flex.flex-col.h-24
      label.subtitle2.text-primary-700: slot Input Label
      .common-select-container.relative
        CommonIcon.common-select-icon.absolute.mx-4.opacity-70(v-if="icon" :icon="icon" color="black")
        CommonIcon.common-select-icon.absolute.mx-4.right-0.opacity-70.pointer-events-none(icon="arrow-down" color="black")
        select.common-select-field.body2(
          :class="classes"
          :value="value"
          @click="toggleDropdown"
        )
        //- HACK: v-if -> v-show [ FIX LATER :( ]
        .card-shadow.body2.common-select-option-container(
          v-show="showDropdown"
          ref="commonSelectOptionContainerRef"
        )
          .common-select-option-scroll
            .common-select-option-item(
              v-for="(item, index) in items"
              :key="item"
              :class="`${index == selectedDropdownIndex ? 'bg-cool-white' : 'bg-white'}`"
              @mouseover="selectedDropdownIndex = index"
              @click="selectHandler"
            ) {{ item }}
        .body2.absolute.common-select-value.text-black(:class="classes" v-if="value") {{ value }}
        .body2.absolute.common-select-placeholder.text-black.opacity-50(:class="classes" v-else) {{ placeholder }}
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
    const items = ['1', '2', '3', '4', '5', '11', '12', '13', '14', '15'];

    const showDropdown = ref(false);
    const toggleDropdown = () => {
      // eslint-disable-next-line
      if (showDropdown.value) window.removeEventListener('keyup', keyPressHandler);
      // eslint-disable-next-line
      else window.addEventListener('keyup', keyPressHandler);
      showDropdown.value = !showDropdown.value;
    };

    const selectedDropdownIndex = ref(0);

    const commonSelectOptionContainerRef = ref('');
    const selectorContainerPointer = computed(() => selectedDropdownIndex.value * 40);

    const keyPressHandler = (event: any) => {
      if (event.key === 'ArrowUp' && selectedDropdownIndex.value > 0) {
        selectedDropdownIndex.value -= 1;
      }
      if (event.key === 'ArrowDown' && selectedDropdownIndex.value < items.length - 1) {
        selectedDropdownIndex.value += 1;
      }
      if (event.key === 'Enter') {
        // eslint-disable-next-line
        selectHandler();
      }
      const containerDOM = commonSelectOptionContainerRef.value;
      (containerDOM as any).scrollTop = selectorContainerPointer.value - 40;
    };

    const selectHandler = () => {
      window.removeEventListener('keyup', keyPressHandler);
      showDropdown.value = false;
      console.log(items[selectedDropdownIndex.value]);
      ctx.emit('input', items[selectedDropdownIndex.value]);
    };

    // onMounted(() => {
    //   window.addEventListener('keyup', keyPressHandler);
    // });

    // CSS CLASSES

    const inputSpacing = computed(() => {
      if (props.icon) return 'px-14';
      return 'pl-4 pr-14';
    });

    const classes = computed(() => `${inputSpacing.value}`);

    return {
      classes,
      items,

      showDropdown,
      toggleDropdown,

      selectedDropdownIndex,

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
  },
});

export default CommonSelect;
</script>

<style lang="scss">
.common-select {
  &-container {
    @apply my-1 h-10 w-full;
    .common-select-field {
      @apply h-full w-full bg-cool-gray rounded-lg outline-none text-black;
    }
    .common-select-option-container {
      z-index: 50;
      position: relative;
      height: 12.5rem;
      overflow: auto;
    }
    .common-select-option-scroll {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    .common-select-option-item {
      @apply h-10 w-full hover:bg-cool-white text-black flex items-center px-4;
    }
    .common-select-icon, .common-select-placeholder, .common-select-value {
      top: 50%;
      transform: translateY(-50%);
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
      animation: dropdown-down .3s;
    }
    &-leave-active {
      animation: dropdown-down .3s reverse;
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
  @keyframes dropdown-down {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(180deg);
    }
  }
}
</style>

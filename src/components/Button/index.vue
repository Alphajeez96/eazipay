<template>
  <button
    :id="id"
    :type="type"
    :class="computedClasses"
    :style="customStyles"
    :disabled="disabled"
    :aria-disabled="disabled"
    :aria-label="id"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Button {
  id: string
  text: string
  type?: 'button' | 'submit'
  classes?: string
  customStyles?: string
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Button>(), {
  id: '',
  text: 'Button',
  type: 'button',
  classes: '',
  customStyles: '',
  disabled: false,
  variant: 'primary'
})

const computedClasses = computed<string>(() => `${props.variant} ${props.classes}`)
</script>

<style lang="scss" scoped>
button {
  @apply flex items-center justify-center text-sm font-medium focus:outline-none rounded-3xl tracking-[0.1px];

  &.primary {
    @apply bg-primary-green text-white;
    box-shadow: 0px 8px 16px 0px rgba(17, 69, 59, 0.2);
  }

  &.secondary {
    @apply bg-inherit border border-primary-green text-primary-green;
  }

  &:disabled {
    @apply cursor-not-allowed opacity-75;
  }
}
</style>

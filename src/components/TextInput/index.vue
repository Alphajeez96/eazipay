<template>
  <div class="input-wrapper">
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :class="computedClasses"
      :disabled="disabled"
      :readonly="readonly"
      :aria-labelledby="id"
      v-bind="$attrs"
      @input="handleInput"
    />
    <label :for="id" :class="{ active: hasValue }">{{ placeholder }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

interface TextInput {
  id: string
  placeholder: string
  type: 'text' | 'email' | 'password' | 'number'
  modelValue: string | number
  classes?: string
  variant?: 'primary'
  disabled?: boolean
  readonly?: boolean
  error?: boolean
}

const props = withDefaults(defineProps<TextInput>(), {
  id: '',
  placeholder: 'placeholder',
  type: 'text',
  modelValue: '',
  classes: '',
  variant: 'primary',
  disabled: false,
  readonly: false,
  error: false
})

const computedClasses = computed<string>(() => {
  const error: string = props.error ? 'invalid' : ''
  return `${props.variant} ${props.classes}  ${error}`
})

const hasValue = computed<boolean>(() => !!props.modelValue)

const handleInput = (event: Event) => {
  if (event.target) {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  @apply relative inline-block leading-[0.75rem] w-full;

  label {
    @apply text-[#8D8E8D] text-base absolute z-10 left-3 top-4 px-1 pointer-events-none bg-white origin-top-left transition-transform duration-150 ease-in;

    &.active {
      @apply transform -translate-y-full scale-75;
    }
  }

  input {
    @apply h-14 text-base text-primary-black outline-none border border-[#B5B6B5] px-3 rounded-2xl relative w-full;

    &:focus {
      & + label {
        @apply text-[#8D8E8D] transform -translate-y-6 scale-75;
      }
    }
  }
}
</style>

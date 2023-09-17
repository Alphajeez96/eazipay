<template>
  <nav class="app-container">
    <img
      src="@/assets/images/logo.svg"
      alt="eazipay"
      class="cursor-pointer"
      @click="$router.push('/')"
    />

    <!-- Routes Here -->
    <ul>
      <li v-for="route in routes" :key="route" class="relative">{{ route }}</li>
    </ul>

    <!-- Action Buttons Here -->
    <div class="flex">
      <Button id="login-btn" variant="secondary" text="Log in" :classes="`${buttonClasses} mr-6`" />
      <Button id="register-btn" text="Register" :classes="buttonClasses" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import Button from '@/components/Button/index.vue'

const routes: string[] = ['Individual', 'Business', 'Pricing', 'Set your payroll']
const buttonClasses: string = 'h-10 w-[168px] px-2'
</script>

<style lang="scss" scoped>
nav {
  @apply flex h-[5.125rem] items-center justify-between;

  ul {
    @apply flex items-center justify-between;

    li {
      @apply text-primary-gray font-medium flex items-center text-base mr-12 cursor-pointer;

      &:last-child {
        @apply mr-0;
      }
    }
  }
}
</style>

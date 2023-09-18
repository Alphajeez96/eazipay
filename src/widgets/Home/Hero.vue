<template>
  <div class="app-container h-[inherit]">
    <!-- Hero-text Here -->
    <div class="w-2/5 h-[inherit] flex flex-col justify-center">
      <h1>
        Run your <span class="text-primary-green"> payroll </span>
        <span class="text-[#B4A572]"> easily </span>
        in <span class="text-primary-red"> seconds</span>
      </h1>

      <p class="text-primary-gray text-xl pt-5">
        We’ve built an all-inclusive simple solution for individual and businesses to manage staff,
        pay salaries, bills, and relevant taxes all at once.
      </p>

      <Button
        id="hero-btn"
        text="Start Using Free, Forever"
        classes="h-14 w-[272px] mt-6"
        custom-styles="font-size: 1rem"
      />

      <DownloadButtons class="mt-16" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button/index.vue'
import DownloadButtons from '@/widgets/Home/DownloadButtons.vue'
</script>

<style lang="scss" scoped>
h1 {
  @apply text-[4rem] font-mellow text-primary-black font-medium leading-[4.5rem];
}
</style>

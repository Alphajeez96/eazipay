<template>
  <div class="app-container section-holder pt-32">
    <div class="w-1/3 self-center">
      <h2 class="header">Free forever for your <span>salary payment</span></h2>
      <div class="mt-10">
        <DownloadButtons text="Subscribe to the Eazilife today" />
      </div>
    </div>

    <div>
      <img src="@/assets/images/freedom.png" class="h-[514px]" alt="freedom" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DownloadButtons from './DownloadButtons.vue'
</script>

<style lang="scss" scoped>
.section-holder {
  @apply flex justify-between;

  .header {
    @apply text-primary-black font-medium text-[3.5rem] font-mellow  leading-[4rem];

    span {
      @apply text-primary-red;
    }
  }
}
</style>

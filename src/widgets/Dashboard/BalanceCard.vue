<template>
  <div class="balance-card">
    <div>
      <p class="text-[#D9EBCD] font-medium pb-1">Wallet Balance</p>
      <div class="flex">
        <p class="text-white font-bold text-[2rem]">
          {{ isVisible ? 'N12,560,078.00' : '*****' }}
        </p>

        <span
          @click="isVisible = !isVisible"
          class="cursor-pointer ml-4 self-center"
          :class="{ '!self-start': !isVisible }"
        >
          <IconShow v-if="!isVisible" />
          <IconHide v-else />
        </span>
      </div>
    </div>

    <div class="ml-auto self-center">
      <Button id="fund-wallet" text="Fund Wallet" variant="tertiary" classes="h-[2.875rem] px-6 " />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import Button from '@/components/Button/index.vue'
import IconShow from '@/components/icons/IconShow.vue'
import IconHide from '@/components/icons/IconHide.vue'

const isVisible: Ref<boolean> = ref(true)
</script>

<style lang="scss" scoped>
.balance-card {
  @apply bg-primary-green bg-no-repeat bg-cover  rounded-3xl h-[154px] flex items-center px-10;
  background-image: url('../../assets/images/wave.png');
  box-shadow: 0px 20px 48px 0px rgba(170, 170, 170, 0.29);
}
</style>

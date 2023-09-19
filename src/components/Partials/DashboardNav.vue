<template>
  <nav>
    <img
      src="@/assets/images/customer-logo.svg"
      alt="eazipay"
      class="cursor-pointer"
      @click="$router.push('/')"
    />

    <div class="info-region">
      <IconNotification />

      <div class="user-details w-">
        <img src="@/assets/images/user.png" alt="user" class="h-14" />

        <div>
          <p class="font-bold pb-0.5 text-[#2B2B2B]">Kalu Abasiama</p>
          <p class="text-sm font-medium text-[#898989]">Admin</p>
        </div>

        <div class="self-end ml-4">
          <IconArrow />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import IconArrow from '../icons/IconArrow.vue'
import IconNotification from '../icons/IconNotification.vue'
</script>

<style lang="scss" scoped>
nav {
  @apply flex h-[5.125rem] items-center justify-between bg-[white] px-14;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.05);

  .info-region {
    @apply ml-auto flex items-center gap-16;

    .user-details {
      @apply flex items-center gap-4;
    }
  }
}
</style>

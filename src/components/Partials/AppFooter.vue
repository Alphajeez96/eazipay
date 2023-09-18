<template>
  <div class="app-container flex-col flex h-[320px] justify-center">
    <div class="flex justify-between">
      <!-- Social Region -->
      <div class="w-1/4">
        <img src="@/assets/images/logo-footer.svg" alt="logo" />

        <p class="text-primary-gray pt-10">Copyright © 2023 Eazipay.</p>
        <p class="text-primary-gray pt-1.5">All rights reserved</p>

        <div class="mt-10 flex items-center gap-5">
          <img
            v-for="icon in socials"
            :key="icon"
            :src="getImageUrl(icon).toString()"
            :alt="icon"
          />
        </div>
      </div>

      <!-- Product Region -->
      <div class="w-[16%]">
        <p class="header">Product</p>
        <p class="link">Individual</p>
        <p class="link">Businesses</p>
        <p class="link">Request Demo</p>
        <p class="link">Pricing</p>
      </div>

      <!-- Legal Region -->
      <div class="w-[16%]">
        <p class="header">Legal</p>
        <p class="link">Privacy Policy</p>
        <p class="link">Terms of Service</p>
      </div>

      <!-- Resources Region -->
      <div class="w-[16%]">
        <p class="header">Resources</p>
        <p class="link">FAQs</p>
        <p class="link">Blog</p>
        <p class="link">Career</p>
        <p class="link">Customer Stories</p>
      </div>

      <!-- Cotact Region -->
      <div class="w-[22%]">
        <p class="header">Contact us</p>
        <p class="link">
          <a href="mailto:eazipay@gmail.com">eazipay@gmail.com</a>
        </p>
        <p class="link">
          <a href="tel:+2348168789518"> +234 816 878 9518</a>
        </p>

        <div class="relative mt-3">
          <input type="text" class="contact-input" placeholder="Your email address" />
          <div class="send-icon">
            <IconSend />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSend from '@/components/icons/IconSend.vue'

const socials: string[] = ['instagram', 'twitter', 'linkedin', 'facebook']

const getImageUrl = (icon: string) => {
  return new URL(`../../assets/images/${icon}.svg`, import.meta.url)
}
</script>

<style lang="scss" scoped>
.header {
  @apply text-xl font-medium text-primary-black pb-6;
}

.link {
  @apply text-base text-[#7C7C7C] cursor-pointer pb-4;
}

.contact-input {
  @apply h-10 w-full px-4 rounded-2xl bg-[#F2F1F1] focus:outline-none text-sm;

  &::placeholder {
    @apply text-primary-gray text-sm;
    letter-spacing: 0.25px;
  }
}

.send-icon {
  @apply absolute right-[14px] top-3 cursor-pointer;
  transition: 0.15s ease;

  &:hover {
    transform: rotate(48deg);
  }
}
</style>

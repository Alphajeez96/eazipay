<template>
  <div>
    <p class="text-lg font-medium">{{ text }}</p>

    <div class="flex mt-4 gap-4">
      <a
        href="https://apps.apple.com/us/app/eazipay-business/id6446281426"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/images/apple-store.png" alt="apple-store" />
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.myeazipay.business"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/images/google-store.png" alt="google-store" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Button {
  text?: string
}

withDefaults(defineProps<Button>(), {
  text: 'Download the Eazipay App'
})
</script>

<style lang="scss" scoped>
img {
  @apply h-[4.5rem];
  box-shadow: 0px 20px 48px 0px rgba(170, 170, 170, 0.29);
}
</style>

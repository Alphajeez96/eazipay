<template>
  <div>
    <section class="hero-bg">
      <Hero />
    </section>
  </div>
</template>

<script setup lang="ts">
import Hero from '@/widgets/Home/Hero.vue'
</script>

<style lang="scss" scoped>
.hero-bg {
  @apply bg-cover bg-no-repeat bg-center;
  background-image: url('../assets/images/gradient.svg');

  height: 50vh;
}
</style>

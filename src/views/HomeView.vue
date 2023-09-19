<template>
  <div>
    <!-- Hero Section Here -->
    <section class="hero-bg">
      <Hero />
    </section>

    <!-- Solutions Section Here -->
    <section class="business-bg">
      <div class="background-holder">
        <img src="@/assets/images/business-gradient.svg" alt="business-gradient" />
      </div>
      <Solutions />
    </section>

    <!-- Works Section Here -->
    <section class="hidden">
      <Works />
    </section>

    <!-- Subscribe Section Here -->
    <section class="subscribe-bg">
      <aside class="absolute left-[156px]">
        <img src="@/assets/images/subscribe-dots.svg" alt="dots" />
      </aside>
      <Subscribe />
    </section>

    <!-- Deom Section Here -->
    <section class="relative">
      <aside class="absolute top-[98px]">
        <img src="@/assets/images/demo-dots.svg" alt="dots" />
      </aside>
      <Demo />
    </section>
  </div>
</template>

<script setup lang="ts">
import Hero from '@/widgets/Home/Hero.vue'
import Demo from '@/widgets/Home/Demo.vue'
import Works from '@/widgets/Home/Works.vue'
import Subscribe from '@/widgets/Home/Subscribe.vue'
import Solutions from '@/widgets/Home/Solutions.vue'
</script>

<style lang="scss" scoped>
.hero-bg {
  @apply bg-cover bg-no-repeat h-[950px];
  background-image: url('../assets/images/hero-gradient.svg');
}

.business-bg {
  @apply relative;

  .background-holder {
    @apply absolute -top-16;
  }
}

.subscribe-bg {
  @apply bg-cover bg-no-repeat relative h-[790px];
  background-image: url('../assets/images/subscribe-gradient.svg');
}
</style>

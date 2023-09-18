<template>
  <header>
    <AppNav />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <hr class="border border-t-[#eaeaea]" />
    <AppFooter />
  </footer>
</template>

<script setup lang="ts">
import AppNav from '@/components/Partials/AppNav.vue'
import AppFooter from '@/components/Partials/AppFooter.vue'
</script>

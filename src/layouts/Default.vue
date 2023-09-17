<template>
  <header>
    <AppNav />
  </header>

  <main>
    <RouterView />
  </main>

  <footer></footer>
</template>

<script setup lang="ts">
import AppNav from '@/components/Partials/AppNav.vue'
</script>

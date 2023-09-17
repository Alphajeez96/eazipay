<template>
  <component :is="$route.meta.layout || DefaultLayout"> </component>
</template>

<script setup lang="ts">
import DefaultLayout from './layouts/Default.vue'
</script>

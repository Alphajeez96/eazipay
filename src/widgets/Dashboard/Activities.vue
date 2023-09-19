<template>
  <div class="mt-12 pb-16">
    <h3 class="text-primary-black font-medium text-[2rem]">Recent Activities</h3>
    <SearchBar class="mt-6" />
    <ActivitiesTable class="mt-10" />
  </div>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue'
import ActivitiesTable from './ActivitiesTable.vue'
</script>

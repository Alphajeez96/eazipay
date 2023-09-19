<template>
  <div class="flex bg-[#f9fafc]">
    <aside class="w-[22%]">
      <SideMenu />
    </aside>

    <main class="w-full">
      <DashboardNav />
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import DashboardNav from '@/components/Partials/DashboardNav.vue'
import SideMenu from '@/components/Partials/SideMenu.vue'
</script>

<template>
  <div class="px-20 py-16">
    <section>
      <Welcome />
    </section>

    <section>
      <CashFlow />
    </section>

    <section>
      <Activities />
    </section>
  </div>
</template>

<script setup lang="ts">
import Welcome from '@/widgets/Dashboard/Welcome.vue'
import CashFlow from '@/widgets/Dashboard/CashFlow.vue'
import Activities from '@/widgets/Dashboard/Activities.vue'
</script>

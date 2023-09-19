<template>
  <div>
    <h3 class="font-bold text-4xl text-primary-black">Welcome Abasiama</h3>
    <p class="font-medium text-primary-gray pt-3">Pay and manage your employee in minutes</p>

    <div class="flex mt-12">
      <div class="w-3/4">
        <BalanceCard />
        <CardActions />
      </div>

      <div class="ml-auto w-[18%]">
        <Payroll />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BalanceCard from './BalanceCard.vue'
import CardActions from './CardActions.vue'
import Payroll from './Payroll.vue'
</script>

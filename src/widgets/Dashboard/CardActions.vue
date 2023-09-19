<template>
  <section class="mt-12 flex gap-8">
    <div class="card-holder" v-for="(action, i) in actions" :key="i">
      <component :is="action.icon" />
      <p class="pt-3 text-sm text-primary-gray font-medium">{{ action.text }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconEmployee from '@/components/icons/IconEmployee.vue'
import IconSalaries from '@/components/icons/IconSalaries.vue'
import IconCompliances from '@/components/icons/IconCompliances.vue'
import IconLoan from '@/components/icons/IconLoan.vue'

interface ActionItem {
  icon: typeof IconEmployee | typeof IconSalaries | typeof IconCompliances | typeof IconLoan
  text: string
}

const actions: ActionItem[] = [
  { icon: IconEmployee, text: 'Add Employee' },
  { icon: IconSalaries, text: 'Pay Salaries' },
  { icon: IconCompliances, text: 'Pay Compliances' },
  { icon: IconLoan, text: 'Quick Loan' }
]
</script>

<style lang="scss" scoped>
.card-holder {
  @apply rounded-3xl bg-white  border border-[#E7E8E7] w-1/4 h-[112px] flex flex-col items-center justify-center cursor-pointer;
  box-shadow: 0px 9px 18px 0px rgba(170, 170, 170, 0.15);
}
</style>

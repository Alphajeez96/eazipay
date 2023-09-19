<template>
  <div class="holder">
    <div class="flex justify-between pt-6">
      <div class="w-1/3">
        <p class="font-medium text-primary-gray">Inflow</p>
        <h4 class="text-[#219653] pt-1 font-bold text-[1.75rem]">N1,567,552</h4>
      </div>

      <div class="w-1/3">
        <p class="font-medium text-primary-gray">OutflowInflow</p>
        <h4 class="text-primary-red pt-1 font-bold text-[1.75rem]">N1,567,552</h4>
      </div>

      <div class="w-[14%]">
        <p class="font-medium text-primary-green flex items-center">
          Inflow/Outflow
          <span class="pt-0.5 ml-1">
            <IconDropDown />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconDropDown from '@/components/icons/IconDropDown.vue'
</script>

<style scoped lang="scss">
.holder {
  @apply mt-12 rounded-2xl px-12 py-6  bg-white;
  box-shadow: 0px 9px 18px 0px rgba(170, 170, 170, 0.15);
}
</style>

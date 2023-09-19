<template>
  <div class="roll-holder">
    <div class="header-region">
      <p class="text-primary-gray font-bold">Next Payroll</p>
    </div>

    <!-- Date Here -->
    <div class="border border-b-[#E7E8E7] h-[116px] flex flex-col items-center pt-5">
      <div class="flex items-center">
        <IconCalendar />
        <span class="text-xs text-primary-gray ml-1">Friday</span>
      </div>

      <p class="pt-2 font-bold text-lg text-primary-gray">09/11/2022</p>
    </div>

    <!-- Employee count -->
    <div class="pt-7 px-4">
      <p class="font-medium text-primary-gray">Total Employee</p>
      <p class="text-primary-black font-bold text-[2rem] pt-1.5">64</p>

      <div class="mt-1">
        <!-- Should be replaced with an actual graph value -->
        <IconEmployeeMock />

        <aside class="flex gap-14 pt-0.5">
          <div>
            <p class="employee-data__text">Male</p>
            <p class="employee-data__text">32</p>
          </div>

          <div>
            <p class="employee-data__text">Female</p>
            <p class="employee-data__text">32</p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconEmployeeMock from '@/components/icons/IconEmployeeMock.vue'
</script>

<style lang="scss" scoped>
.roll-holder {
  @apply rounded-3xl border border-[#E7E8E7] h-[314px]  bg-white;
  box-shadow: 0px 6px 12px 0px rgba(170, 170, 170, 0.11);

  .header-region {
    @apply bg-[#D9EBCD] h-10 flex items-center justify-center;
    border-radius: 16px 16px 0px 0px;
  }
}

.employee-data__text {
  @apply font-bold text-[0.625rem] text-[#8D8E8D] leading-3;
}
</style>

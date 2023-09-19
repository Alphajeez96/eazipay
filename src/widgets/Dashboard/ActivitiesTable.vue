<template>
  <section class="holder">
    <!-- Timeline -->
    <div class="mb-12" v-for="i in 3" :key="i">
      <h3 class="text-lg font-medium text-primary-gray pb-5">Wednesday, November 09, 2022</h3>
      <div class="card" v-for="i in 2" :key="i">
        <p class="uppercase text-xs text-[#8D8E8D]">Payroll</p>

        <div class="flex mt-2 gap-4 justify-between">
          <div class="flex items-center pt-4">
            <img src="@/assets//images/user-2.svg" alt="user" />
            <p class="font-medium ml-3 text-primary-gray">Kalu Abasiama</p>
          </div>

          <div class="">
            <p class="uppercase text-[#8D8E8D] text-xs">Activity</p>
            <p class="font-medium text-primary-gray pt-2">Added new employee</p>
          </div>

          <div>
            <p class="uppercase text-[#8D8E8D] text-xs">Employee</p>
            <p class="font-medium text-primary-gray pt-2">04</p>
          </div>

          <div>
            <p class="uppercase text-[#8D8E8D] text-xs">Time</p>
            <p class="font-medium text-primary-gray pt-2">16:15</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.holder {
  @apply rounded-[1.25rem] h-[80vh] overflow-auto py-12 px-6;
  background: rgba(242, 241, 241, 0.5);

  .card {
    @apply bg-white rounded-2xl border border-[#E7E8E7] h-[104px] py-4 px-16 flex flex-col justify-center mb-4;
    box-shadow: 0px 9px 18px 0px rgba(170, 170, 170, 0.15);
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #dddedd;
    box-shadow: 1px 0px 1px 0px #bec4c8;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #8d8e8d;

    &:hover {
      background: #555;
    }
  }
}
</style>

<template>
  <div class="holder h-[852px]">
    <div class="top-region">
      <img
        src="@/assets/images/sidebar-fill.svg"
        alt="Eazipay"
        class="cursor-pointer"
        @click="$router.push('/')"
      />
    </div>

    <!-- Routes -->
    <div class="mt-10">
      <router-link to="" class="w-full" v-for="(route, i) in routes" :key="i">
        <div class="route-holder" :class="getActive(route.route) ? 'active' : ''">
          <component :is="route.icon" :active="getActive('dashboard')" />
          <p class="font-medium ml-2.5 text-primary-gray">{{ route.route }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import IconDashboard from '@/components/icons/Sidemenu/IconDashboard.vue'
import IconWallet from '@/components/icons/Sidemenu/IconWallet.vue'
import IconEmployee from '@/components/icons/Sidemenu/IconEmployee.vue'
import IconPayroll from '@/components/icons/Sidemenu/IconPayroll.vue'
import IconCompliance from '@/components/icons/Sidemenu/IconCompliance.vue'
import IconBook from '@/components/icons/Sidemenu/IconBook.vue'
import IconSupport from '@/components/icons/Sidemenu/IconSupport.vue'
import IconSettings from '@/components/icons/Sidemenu/IconSettings.vue'

const route = useRoute()

type IconComponent =
  | typeof IconDashboard
  | typeof IconWallet
  | typeof IconEmployee
  | typeof IconPayroll
  | typeof IconCompliance
  | typeof IconBook
  | typeof IconSupport
  | typeof IconSettings

type RouteItem = {
  route: string
  icon: IconComponent
  hasToggle: boolean
}

const routes: RouteItem[] = [
  { route: 'Dashboard', icon: IconDashboard, hasToggle: false },
  { route: 'Wallet', icon: IconWallet, hasToggle: false },
  { route: 'Employee Management', icon: IconEmployee, hasToggle: true },
  { route: 'Payroll', icon: IconPayroll, hasToggle: true },
  { route: 'Compliance', icon: IconCompliance, hasToggle: true },
  { route: 'Book Keeping', icon: IconBook, hasToggle: true },
  { route: 'Support', icon: IconSupport, hasToggle: false },
  { route: 'Settings', icon: IconSettings, hasToggle: true }
]

const getActive = (name: string) => {
  return route.path.includes(name.toLowerCase())
}
</script>

<style scoped lang="scss">
.holder {
  box-shadow: 4px 0px 25px 0px rgba(170, 170, 170, 0.08);

  .route-holder {
    @apply border-b border-b-[#E7E8E7] px-4 h-14 flex items-center;

    &.active {
      @apply border-l-4 border-l-primary-green bg-[#f8fbf6];
      p {
        @apply text-primary-green;
      }
    }
  }
}
</style>

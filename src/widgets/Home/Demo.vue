<template>
  <div class="app-container section-holder py-32">
    <div class="w-[39%] self-center">
      <h2 class="header">Get an Exclusive Demo of Eazipay</h2>
      <p class="text-primary-gray text-2xl pt-6">
        Our greatest priority is to put you and your business first. Let’s show you how we can help.
      </p>
    </div>

    <div class="w-[49%]">
      <div class="card-holder">
        <p class="text-[1.75rem] text-primary-black font-bold">First things first</p>
        <p class="text-lg text-primary-gray pt-3.5 w-9/12 m-auto">
          We want to serve you better. Tell us a bit about yourself or company
        </p>

        <!-- Toggle Bar Here -->
        <aside class="tab-holder">
          <div
            class="tab"
            v-for="(tab, i) in tabs"
            :key="i"
            @click="activeTab = i"
            :class="{ '!bg-primary-green': i === activeTab }"
          >
            <p :class="{ '!text-white': i === activeTab }">{{ tab }}</p>
          </div>
        </aside>

        <!-- Form Here -->
        <form class="mt-9">
          <div class="form-group">
            <!-- First Name -->
            <TextInput
              id="first-name"
              type="text"
              placeholder="First Name"
              v-model="payload.firstName"
            />
          </div>

          <!-- Last Name -->
          <div class="form-group">
            <TextInput
              id="last-name"
              type="text"
              placeholder="Last Name"
              v-model="payload.lastName"
            />
          </div>

          <!-- Email -->
          <div class="form-group">
            <TextInput id="email" type="email" placeholder="Email" v-model="payload.email" />
          </div>

          <!-- Job Title -->
          <div class="form-group">
            <TextInput
              id="job-title"
              type="text"
              placeholder="Job Title"
              v-model="payload.jobTitle"
            />
          </div>

          <!-- Company Size -->
          <div class="form-group">
            <TextInput
              id="company-size"
              type="text"
              placeholder="Company Size"
              v-model="payload.jobTitle"
            />
          </div>

          <div class="mt-2">
            <Button
              id="demo-button"
              text="Request Demo"
              classes="h-12 w-full "
              custom-styles="font-size:1rem"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TextInput from '@/components/TextInput/index.vue'
import Button from '@/components/Button/index.vue'

interface DemoPayload {
  firstName: string
  lastName: string
  email: string
  jobTitle: string
  companySize: string
}

const tabs: String[] = ['Individual', 'Company']
const activeTab: Ref<Number> = ref(0)
const payload: Ref<DemoPayload> = ref({
  firstName: '',
  lastName: '',
  email: '',
  jobTitle: '',
  companySize: ''
})
</script>

<style lang="scss" scoped>
.section-holder {
  @apply flex justify-between;

  .header {
    @apply text-primary-green font-medium text-[4rem] font-mellow leading-[4.5rem];

    span {
      @apply text-primary-red;
    }
  }

  .card-holder {
    @apply rounded-[2rem] border border-[#E7E8E7] text-center p-8;
    box-shadow: 0px 20px 48px 0px rgba(170, 170, 170, 0.29);

    .tab-holder {
      @apply rounded-2xl bg-white border border-[#E7E8E7] mt-6 h-14 p-2.5 flex gap-3 items-center;

      .tab {
        @apply h-10 rounded-xl bg-[#F2F1F1] w-full flex items-center justify-center cursor-pointer;

        p {
          @apply text-primary-gray font-medium;
        }
      }
    }

    .form-group {
      @apply pb-6;
    }
  }
}
</style>

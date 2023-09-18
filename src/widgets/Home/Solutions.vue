<template>
  <div class="text-center py-28 app-container relative">
    <h2>For Individuals and Businesses</h2>
    <p class="text-xl text-primary-black pt-2">
      Join 200+ businesses using Eazipay's easy solution.
    </p>

    <!-- card Here -->
    <div class="card-holder">
      <div class="card" v-for="(solution, i) in solutions" :key="i" :class="`card-${i + 1}`">
        <h3>{{ solution.header }}</h3>
        <p>{{ solution.text1 }}</p>
        <p>{{ solution.text2 }}</p>
        <p>{{ solution.text3 }}</p>
      </div>
    </div>

    <p class="text-xl w-1/2 m-auto">
      We are happy to answer your queries. Please, reach us at
      <a href="mailto:hello@myeazipay.com" class="text-primary-red"> hello@myeazipay.com</a> and
      expect our response shortly after.
    </p>
  </div>
</template>

<script lang="ts" setup>
interface Solution {
  header: string
  text1: string
  text2: string
  text3?: string
}

const solutions: Solution[] = [
  {
    header: 'Tamper-proof Payroll for LIfe',
    text1: 'Your staff payroll history is kept in one place forever.',
    text2: 'No more excel sheet or manual records.',
    text3: 'Download your payroll history anytime you need it.'
  },
  {
    header: 'All Payroll, Anytime Anywhere',
    text1: 'Wherever you are Eazipay has got you covered on ALL your Payroll tasks.',
    text2:
      'Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!'
  },
  {
    header: 'Payroll in Seconds',
    text1: 'Never again wil you spend more than 2 minutes on payroll.',
    text2: 'Just click on your staff annd bulk-pay them at once.',
    text3: 'Payment is done permanently.'
  }
]
</script>

<style lang="scss" scoped>
h2 {
  @apply text-[4rem] font-mellow text-primary-green font-medium leading-[4.5rem];
}

.card-holder {
  @apply my-11 flex relative;

  .card {
    @apply h-[320px] rounded-2xl text-white text-left flex-1 py-[4.375rem] px-[3.125rem];
    box-shadow:
      -11px 0px 19px 0px rgba(23, 23, 23, 0.3),
      0px 13px 20px 0px rgba(23, 23, 23, 0.2);

    background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(217, 235, 205, 0.14) 0%,
        rgba(217, 235, 205, 0.03) 100%
      ),
      #11453b;

    transition: 0.45s cubic-bezier(0.175, 0.585, 0.32, 1.2075);
    &.card-1 {
      @apply pr-20;

      &:hover {
        ~ .card-2 {
          @apply left-[40%];
        }
      }
    }

    &.card-2 {
      @apply absolute top-0 bottom-0 left-[25%] w-1/2;

      &:hover {
        @apply left-[7%];
      }
    }

    &.card-3 {
      @apply relative left-0;

      &:hover {
        left: -2%;
      }
    }

    h3 {
      @apply text-[1.75rem] font-bold pb-5;
    }

    p {
      @apply pb-3;
    }
  }
}
</style>

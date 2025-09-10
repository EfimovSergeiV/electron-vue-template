<script setup>
  import CircleControl from './radial/CircleControl.vue'

  import BubbleChart from './charts/BubbleChart.vue'
  import ChartSimple from './charts/ChartSimple.vue'
  import MultiAxisLineChart from './charts/MultiAxisLineChart.vue'
  import ProgressiveLineChart from './charts/ProgressiveLineChart.vue'
  import WatchChart from './charts/WatchChart.vue'

  import PrimaryButton from './btn/PrimaryButton.vue'
  import DangerButton from './btn/DangerButton.vue'

  import { useCounterStore } from '../stores/counter'
  const counter = useCounterStore()

</script>


<template>

  <div class="container mx-auto px-4">



    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 mt-6">


      <div class="">
        <div class="">
          <div class="flex gap-8 items-center">
            
            <div class="py-8 flex flex-col gap-6">
              <PrimaryButton :text="`+5`" :width="`w-18`" @click="counter.incKw" />
              <DangerButton :text="`-5`" :width="`w-18`" @click="counter.decKw" />     
            </div>

            <CircleControl />

            <div class="py-8 flex flex-col gap-6">
              <PrimaryButton :text="`+10`" :width="`w-18`" @click="counter.valueKw += 10" />
              <DangerButton :text="`-10`" :width="`w-18`" @click="counter.valueKw -= 10" />     
            </div>

          </div>
        </div>
      </div>

      <div class="bg-white px-4 py-2 rounded-lg shadow-md">
        <ChartSimple />
      </div>
      <div class="bg-white px-4 py-2 rounded-lg shadow-md">
        <BubbleChart />
      </div>
      <div class="bg-white px-4 py-2 rounded-lg shadow-md">
        <MultiAxisLineChart />
      </div>
      <div class="bg-white px-4 py-2 rounded-lg shadow-md">
        <ProgressiveLineChart />
      </div>
      <div class="bg-white px-4 py-2 rounded-lg shadow-md">
        <WatchChart />
      </div>
    </div>
  </div>

</template>
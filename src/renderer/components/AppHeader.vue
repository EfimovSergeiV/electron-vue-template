<script setup>
  import { ref } from 'vue'
// import viteLogo from '../assets/vite.svg';

  
  import PrimaryButton from './btn/PrimaryButton.vue';

  const props = defineProps({
    current: {
      type: String,
      required: true
    }
  });


  /// DARKMODE
  const isDark = ref(false);
  function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value);
  }

</script>


<template>
  <div id="header" class="flex items-center justify-between gap-4">

    <button @click="$emit('navigate', 'index')">
      <div class="flex flex-col text-left">
        <p class="text-gray-600 dark:text-blue-400 text-4xl font-semibold italic uppercase">logotype</p>
        <p class="text-gray-800 dark:text-blue-300 text-sm ">logotype simple system exampl</p>
      </div>
    </button>
    


    <nav class="flex gap-4 p-4">
      
      <PrimaryButton :text="$t('menu.home')" :width="`w-48`" @click="$emit('navigate', 'index')" class=" rounded" :class="{ 'border-b-4 pb-0.5 border-green-400 ': current === 'index' }" />
      <PrimaryButton :text="$t('menu.charts')" :width="`w-48`" @click="$emit('navigate', 'chart')" class=" rounded" :class="{ 'border-b-4 pb-0.5 border-green-400 ': current === 'chart' }" />
      <PrimaryButton :text="$t('menu.settings')" :width="`w-48`" @click="$emit('navigate', 'settings')" class=" rounded mdi mdi-settings" :class="{ 'border-b-4 pb-0.5 border-green-400 ': current === 'settings' }" />

      <button class="bg-blue-700 active:bg-blue-800 border border-cyan-600 active:border-cyan-500 text-white px-6 py-2 transition-all duration-100 select-none"
        @click="toggleTheme">
        {{ $t('menu.darkmode') }}
      </button>

    </nav>

  </div>
</template>
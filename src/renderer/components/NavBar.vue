<script setup>
  import { ref } from 'vue'


  import viteLogo from '../assets/vite.svg';
  import PrimaryButton from './btn/PrimaryButton.vue';

  const props = defineProps({
    current: {
      type: String,
      required: true
    }
  });

  const count = ref(0)
</script>


<template>
  <nav class="flex gap-4 p-4">
    <PrimaryButton :text="`Главная`" :width="`w-48`" @click="$emit('navigate', 'index')" class=" rounded" :class="{ 'border-b-4 border-green-400 ': current === 'index' }" />
    <PrimaryButton :text="`Графики`" :width="`w-48`" @click="$emit('navigate', 'chart')" class=" rounded" :class="{ 'border-b-4 border-green-400 ': current === 'chart' }" />
    <PrimaryButton :text="`Настройки`" :width="`w-48`" @click="$emit('navigate', 'settings')" class=" rounded" :class="{ 'border-b-4 border-green-400 ': current === 'settings' }" />
    <!-- <button type="button" @click="count++">count is {{ count }}, currentPage: {{ current }}</button> -->
     <img :src="viteLogo" class="logo" alt="Vite logo" />
  </nav>
</template>
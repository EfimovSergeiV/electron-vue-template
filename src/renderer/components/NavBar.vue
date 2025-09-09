<script setup>
  import { ref } from 'vue'
  const props = defineProps({
    current: {
      type: String,
      required: true
    }
  });

  const count = ref(0)
</script>


<template>
  <nav class="flex gap-4 p-4 bg-gray-100">
    <button @click="$emit('navigate', 'index')" class="px-3 py-1 rounded hover:bg-gray-300" :class="{ 'bg-blue-500 text-white': current === 'index' }">Главная</button>
    <button @click="$emit('navigate', 'settings')" class="px-3 py-1 rounded hover:bg-gray-300" :class="{ 'bg-blue-500 text-white': current === 'about' }">О проекте</button>
    <button type="button" @click="count++">count is {{ count }}, currentPage: {{ current }}</button>
  </nav>
</template>
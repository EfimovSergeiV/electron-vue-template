<script setup>
  import PrimaryButton from './btn/PrimaryButton.vue';


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
  <nav class="flex gap-4 p-4">
    <PrimaryButton :text="`Главная`" @click="$emit('navigate', 'index')" :class="{ 'border-b-4 border-green-400 pb-1': current === 'index' }" />
    <PrimaryButton :text="`Настройки`" @click="$emit('navigate', 'settings')" :class="{ 'border-b-4 border-green-400 pb-1': current === 'settings' }" />
    <button type="button" @click="count++">count is {{ count }}, currentPage: {{ current }}</button>
  </nav>
</template>
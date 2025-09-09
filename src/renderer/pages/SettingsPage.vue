<script setup>
  import { ref } from 'vue';

  const isDark = ref(false);

  function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value);
  }
</script>


<template>
  <div class="p-8 text-center">
    <h1 class="text-red-600 dark:text-blue-400 text-3xl font-bold mb-4">Settings</h1>

    <button @click="toggleTheme">
      Переключить тему
    </button>
  </div>
</template>


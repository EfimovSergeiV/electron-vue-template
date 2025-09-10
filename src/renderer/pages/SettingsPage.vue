<script setup>
  import { ref } from 'vue';


  import { useCounterStore } from '../stores/counter'

  const counter = useCounterStore()

  counter.count++
  // with autocompletion ✨
  counter.$patch({ count: counter.count + 1 })
  // or using an action instead
  counter.increment()



  const isDark = ref(false);

  function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value);
  }
</script>


<template>
  <div class="text-red-600 dark:text-blue-400 p-8 text-center">
    <h1 class="text-3xl font-bold mb-4">Settings</h1>

    <div>Current Count: {{ counter.count }}</div>

    <button @click="toggleTheme">
      Переключить тему
    </button>
  </div>
</template>


<template>
  <footer class="w-full text-center py-4 bg-gray-200 mt-8 text-gray-700">
    &copy; {{ year }} — Пример на Vue 3 + Electron + TailwindCSS
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
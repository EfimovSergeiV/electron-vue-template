<template>
  <footer class="w-full text-center py-4">
    &copy; {{ year }} — Пример на Vue 3 + Electron + TailwindCSS
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
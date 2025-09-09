<script setup>
  import { ref, computed } from 'vue';
  import NavBar from './components/NavBar.vue';
  import AppFooter from './components/AppFooter.vue';
  import IndexPage from './pages/IndexPage.vue';
  import SettingsPage from './pages/SettingsPage.vue';

  const currentPage = ref('index');

  const pages = {
    index: IndexPage,
    settings: SettingsPage,
  };

  const currentPageComponent = computed(() => pages[currentPage.value]);

  function navigate(page) {
    currentPage.value = page;
  }


  // const isDark = ref(false)

  // function toggleTheme() {
  //   isDark.value = !isDark.value
  //   document.documentElement.classList.toggle('dark', isDark.value)
  // }
</script>


<template>
  <div id="app" class="bg-gray-100 dark:bg-gray-900 h-screen flex flex-col justify-between">
    <NavBar :current="currentPage" @navigate="navigate" />
    <component :is="currentPageComponent" />
    <AppFooter />
  </div>
</template>



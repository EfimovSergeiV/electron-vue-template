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
</script>


<template>
  <div id="app" class="">
    <NavBar :current="currentPage" @navigate="navigate" />
    <component :is="currentPageComponent" />
    <AppFooter />
  </div>
</template>



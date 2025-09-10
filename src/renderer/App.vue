<script setup>
  import { ref, computed } from 'vue';

  import { useI18n } from 'vue-i18n'
  // import { SUPPORT_LOCALES } from './i18n'  
  const { locale } = useI18n()



  import NavBar from './components/NavBar.vue';
  // import CircleControl from './components/radial/CircleControl.vue';
  import SemicircleControl from './components/radial/SemicircleControl.vue'
  // import AppFooter from './components/AppFooter.vue';

  import IndexPage from './pages/IndexPage.vue';
  import ChartPage from './pages/ChartPage.vue';
  import SettingsPage from './pages/SettingsPage.vue';

  const currentPage = ref('index');

  const pages = {
    index: IndexPage,
    chart: ChartPage,
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
  <div id="app" class="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col justify-between">
    <div class="flex gap-4">
      
      <NavBar :current="currentPage" @navigate="navigate" />


      <form class="language">
        <label for="locale-select">{{ $t('menu.language') }}</label>
        <select id="locale-select" v-model="locale">
          <option
            v-for="availableLocale in ['en', 'ru']"
            :key="availableLocale"
            :value="availableLocale"
          >
            {{ availableLocale }}
          </option>
        </select>
      </form>

    </div>

    <component :is="currentPageComponent" />
    
    <div>
      <div v-if="currentPage !== 'settings'" class="container mx-auto px-4 py-2">
        
        <div class="flex items-end justify-between ">


          <div class="">
            <div class="">
              <div class="flex gap-8 items-center mt-20">
                
                <SemicircleControl />
                <SemicircleControl />
                <SemicircleControl />

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <AppFooter /> -->

    </div>

  </div>
</template>



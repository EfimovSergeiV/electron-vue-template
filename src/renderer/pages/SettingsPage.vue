<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n'
  const { locale } = useI18n()
  
  import { useCounterStore } from '../stores/counter'

  const counter = useCounterStore()

  // counter.count++
  // // with autocompletion
  // counter.$patch({ count: counter.count + 1 })
  // // or using an action instead
  // counter.increment()

  const languages = ref({
    "en": "English",
    "ru": "Русский",
    "de": "Deutsch"
  })


</script>


<template>
  <div class="min-h-screen  container mx-auto text-gray-800 dark:text-blue-500">
    <div class="my-6 pb-1 border-b border-black/10">
      <h1 class="text-3xl">Настройки</h1>
    </div>
    

    <div class="grid grid-cols-3 gap-8">
      <div class="flex flex-col gap-4">


        <div class="flex items-center justify-between gap-8 border-b border-black/10">
          <div class="">
            <label for="locale-select">{{ $t('menu.language') }}</label>
          </div>
          <div class="">
            <div class="relative w-48">
              <select
                id="locale-select"
                v-model="locale"
                class="appearance-none w-full rounded-xl border border-gray-300 bg-gray-50 py-2 pl-3 pr-8 text-sm text-gray-900 shadow-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option
                  v-for="availableLocale in ['en', 'ru']"
                  :key="availableLocale"
                  :value="availableLocale"
                >
                  {{ languages[availableLocale] }}
                </option>
              </select>

              <!-- кастомная стрелка -->
              <span
                class="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-300"
              >
                ▼
              </span>
            </div>
          </div>
        </div>





        <div v-for="i in 10" class="flex items-center justify-between gap-8 border-b border-black/10"><p>{{ $t('test.PropertyName') }} {{ i }}</p> <p>{{ $t('test.PropertyValue') }} {{ i }}</p></div>



      </div>



      <!-- <form class="language">
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
      </form> -->


    </div>
  </div>
</template>


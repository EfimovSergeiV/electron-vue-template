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
            <select id="locale-select" v-model="locale">
              <option
                v-for="availableLocale in ['en', 'ru']"
                :key="availableLocale"
                :value="availableLocale"
              >
                {{ languages[availableLocale] }}
              </option>
            </select>
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


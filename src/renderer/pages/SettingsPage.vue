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


  const runPythonScript = () => {
    console.log("Im work")
  }

</script>


<template>
  <div class="min-h-screen container mx-auto px-2 text-gray-800 dark:text-blue-500">
    <div class="my-6 pb-1 border-b border-black/10 dark:border-white/10">
      <h1 class="text-3xl text-gray-800 dark:text-blue-500">{{ $t('menu.settings') }}</h1>
    </div>
    

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="flex flex-col gap-4">


        <div class="flex items-center justify-between gap-8 border-b border-black/10 dark:border-white/10">
          <div class="">
            <label for="locale-select">{{ $t('menu.language') }}</label>
          </div>
          <div class="">
            <div class="relative w-48">
              <select
                id="locale-select"
                v-model="locale"
                class="custom-select"
              >
                <option class="custom-select"
                  v-for="availableLocale in ['en', 'ru']"
                  :key="availableLocale"
                  :value="availableLocale"
                >
                  {{ languages[availableLocale] }}
                </option>
              </select>

            </div>
          </div>
        </div>





        <div v-for="i in 10" class="flex items-center justify-between gap-8 border-b border-black/10 dark:border-white/10"><p>{{ $t('test.PropertyName') }} {{ i }}</p> <p>{{ $t('test.PropertyValue') }} {{ i }}</p></div>



      </div>


      <div class="">
        
        <button @click="runPythonScript()" class="bg-blue-500 px-6 py-2 rounded-sm text-white font-semibold">Запустить Python скрипт</button>

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


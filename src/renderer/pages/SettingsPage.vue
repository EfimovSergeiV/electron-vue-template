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

  // const runPythonScript = async () => {
  //   console.log("Im work")
  //   const result = await window.electronAPI.runPython();
  //   console.log(result); // "Hello from Python"
  // }


  import { onMounted } from 'vue';
  const pyResult = ref([]);

  onMounted(() => {
    window.electronAPI.onPythonOutput((data) => {
      
      pyResult.value.push(data)
      
      // try {
      //   const obj = JSON.parse(data);  // превращаем JSON-строку в объект
      //   pyResult.value.push(obj);
      // } catch (e) {
      //   console.error('Ошибка парсинга JSON из Python:', data);
      // }
    });
  });

  const runPythonScript = async () => {
    window.electronAPI.runPython();
  }

  const stopPython = () => {
    window.electronAPI.stopPython();
  };

</script>


<template>
  <div class="min-h-screen container mx-auto px-2 text-gray-800 dark:text-blue-500">
  
    <div class="flex gap-4 mb-4">
      <button @click="runPythonScript()" class="bg-blue-500 px-6 py-2 rounded-sm text-white font-semibold">Запустить Python скрипт</button>
      <button @click="stopPython()" class="bg-blue-500 px-6 py-2 rounded-sm text-white font-semibold">Остановить Python скрипт</button>
    </div>
    
    <div v-for="(value, i) in pyResult.slice(-5)" :key="i" class="">
      <p class="">{{ i }} - {{ value }}</p>
    </div>


    <!-- <div class="my-6 pb-1 border-b border-black/10 dark:border-white/10">
      <h1 class="text-3xl text-gray-800 dark:text-blue-500">{{ $t('menu.settings') }}</h1>
    </div> -->
    

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- <div class="flex flex-col gap-4">
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
      </div> -->



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


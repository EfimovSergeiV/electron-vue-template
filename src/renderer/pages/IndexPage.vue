<script setup>
  import Mask from '../assets/mask.png';
  import ThreeJS from '../components/static/ThreeJS.vue';

</script>

<template>
  <div class="container mx-auto px-2">

    <div class="my-6 pb-1 border-b border-black/10 dark:border-white/10">
      <h1 class="text-3xl text-gray-800 dark:text-blue-500">{{ $t("pages.home.title") }}</h1>
    </div>

    <div class="flex items-center justify-between ">
      <div class="">

        <ThreeJS />

      </div>
      <img :src="Mask" class=" w-52" alt="Vite logo" />
    </div>
    

  </div>
</template>

<script setup>
  import Mask from '../assets/mask.png';
  import ThreeJS from '../components/static/ThreeJS.vue';

</script>

<template>
  <div class="p-8 text-center">
    <h1 class="text-3xl font-bold mb-4">{{ $t("pages.home.title") }}</h1>
    <div class="flex items-center justify-between ">
      <div class="">

        <ThreeJS />

      </div>
      <img :src="Mask" class=" w-52" alt="Vite logo" />
    </div>
    

  </div>
</template>

<script setup>

  defineProps({
    text: String,
  })


</script>


<template>
  <div class="">
    
    


    <button class="bg-blue-700 active:bg-blue-800 border border-cyan-600 active:border-cyan-500 text-white px-6 py-2 rounded transition-all duration-100 select-none">
      <p class="text-white ">{{ text }}</p>
    </button>




  </div>
</template>
<script setup>

  defineProps({
    text: String,
    width: String
  })

</script>


<template>
  <div class="">
    
    
    
    
    <button :class="`bg-red-500 active:bg-red-700 border border-rose-300 active:border-rose-200 text-white min-w-18 px-6 py-2 rounded transition-all duration-100 select-none ${width}`">
      <p class="text-white">{{ text }}</p>
    </button>




  </div>
</template>
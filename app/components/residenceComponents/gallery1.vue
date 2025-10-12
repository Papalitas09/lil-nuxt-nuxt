<template>
    <div class="flex-wrap gap-8 justify-center flex w-full h-full flex-col items-center ">
         <img :src="urlimage" alt="" class="rounded-3xl w-4xl h-[70vh] object-fill object-center">
         <div class=" w-80 flex justify-evenly h-12">
             <button class="bg-[#F5F5F5] w-32 h-full">Contact Us</button>
             <button class="bg-[#F5F5F5] w-32 h-full">Call Us</button>
         </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    urlimage: string
}>()
</script>
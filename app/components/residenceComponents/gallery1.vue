<template>
    <div class="flex-wrap gap-8 justify-center flex w-full h-full flex-col items-center ">
         <img :src="urlimage" alt="" class="rounded-3xl w-4xl h-[70vh] object-fill object-center">
         <div class=" w-80 flex justify-evenly h-12">
             <NuxtLink to="/#contact" class="bg-[#F5F5F5] w-32 h-full text-center content-center">Contact Us</NuxtLink>
             <button class="bg-[#F5F5F5] w-32 h-full">Call Us</button>
         </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    urlimage: string
}>()
</script>
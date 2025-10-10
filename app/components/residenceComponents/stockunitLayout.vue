<template>
     <div class=" w-4xl h-fit rounded-3xl items-center flex bg-[#D9D9D9] flex-col gap-5 p-10 ">
        <div class="w-fit  h-fit text-center">
            <h2 class="text-4xl  text-[#3B7B84] font-extrabold">{{ topTitle }}</h2>
            <p>The Green Nautical Living building concept in North Jakarta</p>
        </div> 
        <div class="flex-wrap gap-5 justify-center flex w-full h-full ">
            <residence-components-stockunit-card :cardValues="cardValues" :title="topTitle"/>
         </div>
     </div>
</template>

<script setup lang="ts">
defineProps<{
    topTitle: string, 
    cardValues: {
        img: string,
        title: string,
        stock?: boolean, 
    }[]
}>()

</script>
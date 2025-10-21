<template>
    <div class="w-full h-full absolute flex items-center justify-center" >
    <div class=" z-10 relative w-full h-full  items-center flex flex-col">   
        <div class=" w-full h-12 text-center content-center border-b-2 border-white">
                        <p class="text-white text-lg font-bold">{{ title }}</p>
                    </div>
                    <div class="  w-fit  h-32 text-center content-center z-40">
                        <NuxtLink :to="props.link1" class="text-white text-lg font-bold h-fit  border-b-1 border-white" :class="extraclass">{{ props.content1 }}</NuxtLink>
                        <NuxtLink :to="props.link2" class="text-white text-lg font-bold h-fit border-t-1 border-white">{{ props.content2 }}</NuxtLink>
                    </div>
        <div class="w-full h-full bg-[#3B7B84] opacity-55 absolute -z-20"></div> 
    </div>
    </div> 
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    content1:string,
    content2:string,
    extraclass?:string
    link1?: string,
    link2?: string,
}>()
</script>
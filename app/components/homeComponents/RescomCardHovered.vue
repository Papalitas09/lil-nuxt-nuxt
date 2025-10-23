<template>
    <div class="w-full h-full absolute flex items-center justify-center" >
    <div class="relative w-full h-full  items-center flex flex-col">   
        <div class=" w-full h-12 text-center content-center border-b-2 border-white">
                        <p class="text-white text-lg font-bold">{{ title }}</p>
                    </div>
                    <div class="  w-fit  h-32    flex flex-col items-center py-2 text-base font-inter font-extralight gap-1 z-40">
                        <NuxtLink :to="props.link1" class="text-white h-fit hover:scale-105 transition ease-in-out duration-300" :class="extraclass">{{ props.content1 }}</NuxtLink>
                        <div class="  w-full h-[1px] bg-white "></div>
                        <NuxtLink :to="props.link2" class="text-white h-fit hover:scale-105 transition ease-in-out duration-300" v-show="props.content2 != null">{{ props.content2 }}</NuxtLink>
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
<template>
  <div class="w-40 h-36 bg-white flex relative flex-col items-center shadow-[0px_11px_6px_0px_rgba(0,_0,_0,_0.1)] md:w-52 md:h-52 ">
        <div class="w-full h-full absolute flex items-center justify-center" >
            <div class=" z-10 relative w-full h-full  items-center flex flex-col">
                <div class=" w-full h-12 text-center content-center border-b-2 border-white">
                    <p class="text-white text-lg font-bold">{{ title }}</p>
                </div>
                <div class="  w-fit  h-32 text-center content-center">
                    <p class="text-white text-lg font-bold h-fit  border-b-1 border-white">Costview Apartment</p>
                    <p class="text-white text-lg font-bold h-fit border-t-1 border-white">Bayview Apartment</p>
                </div>
            </div>
            <div class="w-full h-full bg-[#3B7B84] opacity-55 absolute"></div>
        </div>
        <img :src="imgurl" alt="" class="h-24 w-full md:h-full">
        <p class="italic md:text-xl text-center content-center  md:w-full md:h-16">{{ title }}</p>
    </div>
</template>
<script setup lang="ts">
    defineProps({
        imgurl:{
            type:String,
            default: ""
        },
        title:{
            type:String,
            default:""
        }
    })
</script>
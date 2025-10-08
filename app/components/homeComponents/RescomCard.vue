<template>
  <div class="w-[40vw] h-[20vh] bg-white flex relative flex-col items-center shadow-[0px_11px_6px_0px_rgba(0,_0,_0,_0.1)] md:w-52 md:h-52 ">
        <div class="w-full h-full absolute flex items-center justify-center" >
            <div class="w-full h-full bg-[#3B7B84] opacity-55 absolute "></div>
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
<template>
    <span class=" md:max-w-full md:w-80 h-fit flex gap-3  ">
        <img :src="imgurl" alt="" class="w-5 h-5 self-start md:mt-1">
        <p class="self-center">{{ content }}</p>
    </span>    
</template>

<script setup lang="ts">
 defineProps({
        imgurl:{
            type:String,
            default:'/Assets/img/logo.png'
        },
        content:String
    })
</script>
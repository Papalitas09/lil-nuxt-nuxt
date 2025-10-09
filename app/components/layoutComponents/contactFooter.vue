<template>
    <span class=" w-[100%] h-fit flex gap-3">
        <img :src="imgurl" alt="" class="w-8 h-8 self-center">
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
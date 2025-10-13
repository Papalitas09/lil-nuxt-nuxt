<template>
  <button class="w-40 h-36 bg-white flex relative flex-col items-center shadow-[0px_11px_6px_0px_rgba(0,_0,_0,_0.1)] md:w-52 md:h-52 z-30 " @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <home-components-rescom-card-hovered :title="title" v-if="isHovered && canHovered" class="absolute inset-0 z-20 pointer-events-none"/>
        <img :src="imgurl" alt="" class="h-24 w-full md:h-full">
        <p class="italic md:text-xl text-center content-center  md:w-full md:h-16">{{ title }}</p>
  </button>
</template>
<script setup lang="ts">
    defineProps<{
        title:string,
        imgurl: string,
        canHovered?: boolean
        }>()
const isHovered = ref(false)
    
</script>
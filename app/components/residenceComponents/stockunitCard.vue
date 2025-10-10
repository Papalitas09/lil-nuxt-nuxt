<template>
<div class="w-72 h-56 bg-[#F5F5F5] gap-2 flex flex-col relative" v-for="(card, index) in cardValues" :key="index">
        <div class="w-full h-full absolute flex items-center justify-center" v-if="card.stock">
            <p class="text-white text-3xl z-20 font-bold italic font-inter">Sold Out!</p>
            <div class="w-full h-full bg-[#3B7B84] opacity-55 absolute "></div>
        </div>
        <button class="" @click="NavigationPage(card.page)">
            <img :src="card.img" alt="" class="w-full h-44">
            <h4 class="text-center text-2xl">{{ card.title }}</h4>
        </button>
     </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    cardValues: {
    title: string,
    img: string,
    stock?: boolean,
    page?: string}[]
}>()

const { activePage , goTo}  = ChangePage()

function NavigationPage(page? : string){
  if(page) goTo(page)
}
</script>
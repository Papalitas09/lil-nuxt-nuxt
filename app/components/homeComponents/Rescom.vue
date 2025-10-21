<template>
    <div class="h-fit w-full  flex flex-col pb-10 gap-1 ">
        <div class=" w-full h-20  flex flex-col items-center justify-center  md:h-fit">
            <h3 class="font-bold text-center text-[#3B7B84] text-xl md:text-4xl">Welcome to Green Bay</h3>
            <p class="text-sm  text-center md:text-xl">The Green Nautical Living building concept in North Jakarta</p>
        </div>
        <div class="w-screen h-80 max-h-screen flex-row flex-wrap flex justify-center gap-10 items-center z-30">
            <RescomCard
            imgurl="/Assets/img/apartements.webp"
            title="Apartements" 
            :can-hovered="true"
            />
            <RescomCard 
            imgurl="/Assets/img/home.webp"
            title="Condominium"
            :can-hovered="true"
            />
            <RescomCard
            imgurl="/Assets/img/kiosk.webp"
            title="Kiosk"
            />
            <RescomCard
            imgurl="/Assets/img/lifestylemall.webp"
            title="Lifestyle Mall"
            />
         
        </div>
    </div>
</template>
<script setup lang="ts">
import RescomCard from './RescomCard.vue';


</script>
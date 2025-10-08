<template>
     <div class="bg-white w-[90vw] h-[25vh] flex flex-col justify-center items-center gap-0 md:wrap-break-word" :class="extraparent">
        <span class=" flex items-center flex-col">
            <img :src="imgurl" alt="" class="w-5 h-5 md:h-10 md:w-10">
            <h5 class="text-xl">{{ title }}</h5>
        </span>
        <p class="text-xs text-center  w-fit h-fit md:text-lg" :class="extracontent">{{ content }}</p>
     </div>
</template>
<script setup lang="ts">
defineProps({
    imgurl:{
        type:String,
        default:'/Assets/img/icons/Logo.png'
    },
    extracontent:{
        type:String,
        default:""
    },
    extraparent:{
        type:String,
        default: ""
    },
    title:{
        type:String,
        default: ""
    },
    content:{
        type:String,
        default: ""
    }
})

</script>
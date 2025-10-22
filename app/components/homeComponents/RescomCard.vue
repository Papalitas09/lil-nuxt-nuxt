<template>
  <button class="w-40 h-36 bg-white flex relative flex-col items-center shadow-[0px_11px_6px_0px_rgba(0,_0,_0,_0.1)] md:w-52 md:h-52 z-30 group cursor-pointer hover:scale-105 transition ease-in-out duration-200">
        <lazy-home-components-rescom-card-hovered :title="title"  v-show="canHovered" class="group-hover:visible invisible transtation  duration-400 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0 z-50 pointer-events-none" :content1="content1" :content2="content2" :link1="link1" :link2="link2"/>
        <img :src="imgurl" alt="" class="h-24 w-full md:h-full">
        <p class="italic md:text-xl text-center content-center  md:w-full md:h-16">{{ title }}</p>
  </button>
</template>
<script setup lang="ts">
    const props = defineProps<{
        title:string,
        imgurl: string,
        canHovered?: boolean
        }>()

    const link1 = ref()
    const link2 = ref()

    const content1 = ref()
    const content2 = ref()

    switch(props.title){
        case 'Apartements':
          content1.value = 'Costview Apartment'
          content2.value = 'Bayview Apartment  '
          link1.value = '/'
          link2.value = '/'
          break
        case 'Condominium':
          content1.value = 'Seaview Condominium'
          link1.value = '/'
          link2.value = '/'
          break
        case 'Kiosk':
          content1.value = 'e'
          content2.value = 'es'
          break
    }
</script>
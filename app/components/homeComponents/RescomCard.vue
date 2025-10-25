<template>
  <button class="w-40 h-36  flex relative flex-col items-center shadow-[0px_11px_6px_0px_rgba(0,_0,_0,_0.1)] md:w-52 md:h-52 z-30 group cursor-pointer hover:scale-105 transition ease-in-out duration-200  " @click="NavigationPage(props.page)" >
        <lazy-home-components-rescom-card-hovered :title="title"  v-show="canHovered" class="group-hover:visible invisible  duration-400 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0 cursor-pointer z-30" :content1="content1" :content2="content2" :link1="link1" :link2="link2" extraclass="z-50"/>
        <img :src="imgurl" alt="" class="h-24 w-full md:h-full">
        <p class="italic md:text-xl text-center content-center text-lg w-full h-12 md:h-16">{{ title }}</p>
  </button>
</template>
<script setup lang="ts">
    const props = defineProps<{
        title:string,
        imgurl: string,
        canHovered?: boolean
        page?: string,
        canClicked?: boolean
        }>()

    const link1 = ref()
    const link2 = ref()

    const content1 = ref()
    const content2 = ref()

    switch(props.title){
        case 'Apartements':
          content1.value = 'Costview Apartment'
          content2.value = 'Bayview Apartment  '
          link1.value = '/residence/coastview/floorplan/'
          link2.value = 'residence/bayview/floorplan/'
          break
        case 'Condominium':
          content1.value = 'Seaview Condominium'
          link1.value = '/residence/seaview/floorplan/'
          break
        default:
          break
    }
 const { activePage , goTo}  = ChangePage()

  function NavigationPage(page? : string){
    if(page && props.canClicked) goTo(page)
  }
</script>
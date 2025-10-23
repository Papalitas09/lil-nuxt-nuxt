<template>
   <layout class="overflow-x-hidden scroll-smooth ">
      <HomeComponentsSummary id="mamlemon"/>
      <HomeComponentsRescom  />
      <HomeComponentsContact />
   </layout>
</template>
<script lang="ts" setup>
import layout from '~/layout/layout.vue';
import gsap from 'gsap';
// const { AnimateScroll } = AnimateOnScroll()

onMounted(async() =>{
   const {ScrollTrigger} = await import('gsap/ScrollTrigger')
   gsap.registerPlugin(ScrollTrigger)
   gsap.from("#mamlemon", {
     scrollTrigger: '#mamlemon', 
     opacity: 0,
     y: 100, 
     duration: 1
   });
})

// AnimateScroll("mamlemon")
</script>
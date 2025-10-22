<template>
   <layout class="overflow-x-hidden scroll-smooth ">
      <HomeComponentsSummary  />
      <HomeComponentsRescom />
      <HomeComponentsContact />
   </layout>
</template>
<script lang="ts" setup>
import layout from '~/layout/layout.vue';
import gsap from 'gsap';
// gsap.fromTo("mama", { opacity: 0 }, { opacity: 0.5, duration: 1 });
</script>
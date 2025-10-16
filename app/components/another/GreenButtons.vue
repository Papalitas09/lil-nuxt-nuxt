<template>
  <div class="w-full h-24 flex justify-center items-center px-5 gap-5">
    <button
      v-for="(link, index) in links"
      :key="index"
      @click="NavigationPage(link.page)"
      class="w-42 h-10 text-center content-center rounded transition bg-[rgb(59,123,132)] text-white relative hover:bg-[rgb(107,146,126)]   ease-in-out"
      :class="link.extraclass"
      >
      <img src="/Assets/img/Polygon1.png" alt="" class="absolute bottom-0 left-1/2 transform -translate-x-1/2  w-3 z-10" v-show="isActive(link.page)">
      {{ link.label }}
      <!-- <span class="text-xs">{{ isActive(link.page) }}</span> -->
    </button>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  links: {label: string, page?: string, extraclass?: string}[]
}>()

const { activePage , goTo}  = ChangePage()

const route = useRoute()
function isActive(page?: string): boolean {
  if (!page) return false
  // Bandingkan dengan route.path atau route.fullPath
  return route.path === page
}
function NavigationPage(page? : string){
  if(page) goTo(page)
}
</script>
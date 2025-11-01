<template>
  <div class="w-full h-24 flex justify-center items-center md:px-5  gap-5 text-white">
    <button
      v-for="(link, index) in links"
      :key="index"
      @click="NavigationPage(link.page)"
      class="w-xl md:w-42 h-10  md:h-12 text-center content-center rounded duration-400 bg-[rgb(59,123,132)]  relative hover:bg-[rgb(48,100,107)]  text-xs md:text-lg ease-in-out cursor-pointer"
      :class="link.extraclass"
      >
      <img src="/Assets/img/Polygon1.png" alt="" class="absolute bottom-0 left-1/2 transform -translate-x-1/2  w-3 z-10" v-show="link.isActive || isActive(link.page)" >
      {{ link.label }}
      <!-- <span class="text-xs">{{ isActive(link.page) }}</span> -->
    </button>
  </div>
</template>
<script setup lang="ts">

const props = defineProps<{
  links: {label: string, page?: string, extraclass?: string, isActive?: boolean}[],
}>()

const { activePage , goTo}  = ChangePage()

const route = useRoute()
function isActive(page?: string): boolean {
  if (!page) return false
  const cleanPage = page.split('#')[0]
  return route.path === cleanPage
}


async function NavigationPage(page?: string){
  if(page) goTo(page)
}

</script>
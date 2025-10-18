<template>
  <div class="w-full h-24 flex justify-center items-center px-5 gap-5">
    <button
      v-for="(link, index) in links"
      :key="index"
      @click="NavigationPage(link.page, link.id)"
      class="w-42 h-10 text-center content-center rounded transition bg-[rgb(59,123,132)] text-white relative hover:bg-[rgb(48,100,107)]   ease-in-out cursor-pointer"
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
  links: {label: string, page?: string, extraclass?: string, id?:string}[]
}>()

const { activePage , goTo}  = ChangePage()

const route = useRoute()
function isActive(page?: string): boolean {
  if (!page) return false
  // Bandingkan dengan route.path atau route.fullPath
  return route.path === page
}


async function NavigationPage(page?: string, id?: string){
  if(page) {
    goTo(page)
    if(id) {
      await navigateTo(page)
      nextTick(() => {
        const element = document.querySelector(id)
        console.log(id)
        if(element) element.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }
}

</script>
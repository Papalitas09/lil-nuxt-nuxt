<template>
  <div class="w-full h-24 flex justify-center items-center px-5 gap-5">
    <button
      v-for="(link, index) in links"
      :key="index"
      @click="NavigationPage(link.page)"
      class="w-42 h-10 text-center content-center rounded transition bg-[rgb(59,123,132)] text-white relative"
      :class="link.extraclass"
      >
      <img src="/Assets/img/Polygon 1.png" alt="" class="absolute bottom-0 left-1/2 transform -translate-x-1/2  w-3 z-10 ">
      {{ link.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  links: {label: string, page?: string, extraclass?: string}[]
}>()

const { activePage , goTo}  = ChangePage()

function NavigationPage(page? : string){
  if(page) goTo(page)
}
</script>
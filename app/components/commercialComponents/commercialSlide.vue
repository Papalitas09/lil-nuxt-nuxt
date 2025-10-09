<template>
  <div class="bg-[#D9D9D9] w-5xl h-10/12 rounded-4xl flex p-5 items-center justify-evenly relative flex-col">
       <div class="text-white w-full h-10  flex justify-center items-center gap-2    md:h-fit ">
            <div class="w-[15vw] bg-gradient-to-l from-white via-white to-transparent h-[0.3vh] md:w-24"></div>
            <h3 class="text-2xl md:text-3xl">{{ title }}</h3>
            <div class="w-[15vw] bg-gradient-to-r from-white via-white to-transparent h-[0.3vh] md:w-24"></div>
        </div>
        <div class=" w-full h-fit flex items-center justify-center p-3 ">
             <button ref="prevEl" class=" z-30 left-2 w-22 h-fit p-2 rounded-full"><img src="/Assets/img/icons/PrevButton.webp" alt="" class="w-full rounded-full h-full"></button>   
                <swiper
                
                        :modules="modul"
                        :slides-per-view="1"
                        :space-between="0"
                        :autoplay="{ delay: 3000, disableOnInteraction: false }"
                        :loop="true"
                        class="w-full h-full z-0 "
                        :navigation="{ prevEl: prevEl, nextEl: nextEl }">
                        <swiper-slide v-for="(img, index) in imgurl" :key="index" class="w-full flex h-full  content-center">
                            <img 
                                :src="img.url"
                                :alt="img.alt" 
                                class="w-full h-96"
                            >
                        </swiper-slide>
                    </swiper>
                  <button ref="nextEl" class="relative rounded-full hright-2 w-22 h-fit p-2"><img src="/Assets/img/icons/NextButton.webp" alt="" class="w-full rounded-full h-full"></button>
                </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import { ref, computed } from 'vue'


const modul = [Pagination, Autoplay, Navigation]
// bikin ref untuk tombol
const prevEl = ref(null)
const nextEl = ref(null)



defineProps<{
  imgurl: {url: string, alt: string}[],
  title: string
}>()
</script>
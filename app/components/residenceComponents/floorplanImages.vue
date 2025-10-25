<template>
    <div class=" md:w-xl w-full md:h-full md:p-3 flex items-center justify-center min-h-4/6 md:max-h-full rounded-2xl bg-[#D9D9D9] ">
             <button ref="prevEl" class=" z-30 left-2 w-22 h-fit p-2 rounded-full hover:scale-105 transition ease-in-out duration-300 cursor-pointer" ><img src="/Assets/img/icons/PrevButton.webp" alt="" class="w-full rounded-full h-full"></button>
             <client-only>    
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
                                loading="lazy"
                            >
                        </swiper-slide>
                    </swiper>
                </client-only>
                <button ref="nextEl" class="rounded-full right-2 w-22 h-fit p-2 z-30 hover:scale-105 transition ease-in-out cursor-pointer"><img src="/Assets/img/icons/NextButton.webp" alt="" class="w-full rounded-full h-full"></button>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import { ref } from 'vue'

const modul = [Pagination, Autoplay, Navigation]
// bikin ref untuk tombol
const prevEl = ref(null)
const nextEl = ref(null)

defineProps<{
    imgurl: {url: string, alt?: string}[],
}>()
</script>
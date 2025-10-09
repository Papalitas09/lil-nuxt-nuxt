<template>
    <div class=" w-full  flex items-center justify-center py-14 rounded-2xl bg-[#D9D9D9] ">
             <button ref="prevEl" class=" z-30 left-2 w-22 h-fit p-2 rounded-full"><img src="/Assets/img/icons/PrevButton.webp" alt="" class="w-full rounded-full h-full"></button>
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
                            >
                        </swiper-slide>
                    </swiper>
                    <button ref="nextEl" class="relative rounded-full hright-2 w-22 h-fit p-2"><img src="/Assets/img/icons/NextButton.webp" alt="" class="w-full rounded-full h-full"></button>
                </client-only>
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
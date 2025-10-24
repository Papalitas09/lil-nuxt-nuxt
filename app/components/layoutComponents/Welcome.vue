<template>
    <div class="w-full h-screen">
        <div class="w-full h-full items-center flex md:h-screen relative">
           <div class="absolute inset-0 bg-[#072134]" v-once>
            <client-only>
                <swiper
                    :modules="[Navigation, Autoplay]"
                    :slides-per-view="1"
                    :space-between="0"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }"
                    :loop="true"
                    class="w-full h-full"
                >
                    <swiper-slide>
                        <img 
                            src="/Assets/img/home.webp" 
                            alt="Welcome slide 1" 
                            class="w-full h-full object-cover opacity-50"
                            loading="lazy"
                        >
                    </swiper-slide>
                    <swiper-slide>
                        <img 
                            src="/Assets/img/home2.jpg" 
                            alt="Welcome slide 2" 
                            class="w-full h-full object-cover opacity-50"
                            loading="lazy"
                        >
                    </swiper-slide>
                    <swiper-slide>
                        <img 
                            src="/Assets/img/home3.jpg" 
                            alt="Welcome slide 3" 
                            class="w-full h-full object-cover opacity-50"
                            loading="lazy"
                        >
                    </swiper-slide>
                    <swiper-slide>
                        <img 
                            src="/Assets/img/home4.jpg" 
                            alt="Welcome slide 3" 
                            class="w-full h-full object-cover opacity-50"
                            loading="lazy"
                        >
                    </swiper-slide>
                    <swiper-slide>
                        <img 
                            src="/Assets/img/home5.jpg" 
                            alt="Welcome slide 3" 
                            class="w-full h-full object-cover opacity-50"
                            loading="lazy"
                        >
                    </swiper-slide>
                </swiper>
            </client-only>
            </div>
            <div class="h-52 w-screen z-10 p-5 flex flex-col text-white  md:justify-center md:gap-5 md:h-64 md:px-28 md:w-fit  md:mt-32">
                <h2 class="text-2xl  md:text-5xl font-extrabold">Welcome to Green Bay <br>Pluit</h2>
                <p class="w-64  text-sm font-light md:text-xl md:w-96">The Green Nautical Living building concept in North Jakarta</p>
                <div class="w-fit min-w-52  flex gap-5 text-black mt-5 md:min-h-14 md:text-xl">
                    <NuxtLink :to="{path: '/', hash:'#summary'}" class="bg-[#F5F5F5] p-1 h-full w-24 text-center md:w-52 content-center">Learn More</NuxtLink>
                    <NuxtLink :to="{path: '/', hash:'#contact'}" class="bg-[#F5F5F5] p-1 h-full w-24 text-center md:w-52 content-center">Location</NuxtLink>
                </div>
            </div> 
        </div>
       
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
</script>
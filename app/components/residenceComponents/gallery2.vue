<template>
     <div class="relative flex w-full flex-col items-center justify-center bg-[#3B7B84] py-10">
    <client-only>
      <!-- Tombol Prev -->
      <button
        ref="prevEl"
        class="absolute left-0 w-fit z-30 flex items-center justify-center rounded-full  p-3 transition hover:scale-125 duration-300 ease-in-out"
      >
        <img
          src="/Assets/img/icons/PrevButton.webp"
          alt="Previous"
          class="w-14 h-full object-contain"
        />
      </button>

      <!-- Swiper -->
      <swiper
        :modules="modul"
        :slides-per-view="5"
        :space-between="20"
        class="w-[90%] max-w-6xl "
        :navigation="{ prevEl: prevEl, nextEl: nextEl }"
      >
        <swiper-slide
          v-for="(button, index) in imej"
          :key="index"
          :class="button.extra"
          class="flex items-center justify-center  "
        >
          <button
            class="w-full h-72 hover:scale-105 transition ease-in-out duration-300 cursor-pointer "
            @click="ChangeState(button.img)"
          >
            <img
              :src="button.img"
              :alt="button.alt"
              class="h-full w-full rounded-3xl object-cover object-center"
            />
          </button>
        </swiper-slide>
      </swiper>

      <!-- Tombol Next -->
      <button
        ref="nextEl"
        class="absolute right-0 z-30 flex items-center justify-center rounded-full w-fit p-3 transition hover:scale-125 duration-300 ease-in-out"
      >
        <img
          src="/Assets/img/icons/NextButton.webp"
          alt="Next"
          class="w-14 h-full object-contain"
        />
      </button>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import { ref } from 'vue'

const modul = [Pagination, Navigation]
const prevEl = ref<HTMLElement | null>(null)
const nextEl = ref<HTMLElement | null>(null)

const emit = defineEmits(['Change-State'])

function ChangeState(selectedIMG: string) {
  emit('Change-State', selectedIMG)
}

defineProps<{
    imej: {img: string, alt?:string, extra?:string}[]
}>()
</script>
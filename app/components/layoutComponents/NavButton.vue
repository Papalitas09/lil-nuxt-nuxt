<template>
    <div class="absolute w-52 h-fit invisible group-hover:visible pt-1">
            <img src="/Assets/img/Polygon2.png" alt="" class="left-0 w-6" />
            <div class="w-full bg-[#326F78] h-full flex flex-col gap-2 items-center py-2 text-white -mt-0.5 ">
              <NuxtLink class="border-b-1 w-44 hover:text-gray-200" v-for="(content, index) in content" :key="index" :to="content.to">{{ content.title }}</NuxtLink>
            </div>
    </div>

</template>

<script setup lang="ts">
defineProps<{
    content:{title: string, to: string, extraclass?: string}[]
}>()

</script>
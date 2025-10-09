<template>
    <div class=" w-full flex flex-col p-10 items-center justify-center ">
        <h2 class="text-4xl font-bold text-[#3B7B84]">{{ title }}</h2>
        <img v-if="activeTower && activeTower.img" :src="activeTower.img" alt="" class="w-full h-96 p-5 " :key="activeTower.img">
        <div class=" w-full h-10  flex justify-center">
            <button class="w-28 h-full bg-[#D9D9D9] border-1" v-for="(button, index) in buttons" :key="index" 
            >{{  button.label }}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    buttons: {label: string, img: string }[],
    title: string
}>()

const activeTower = ref(props.buttons[0])
</script>
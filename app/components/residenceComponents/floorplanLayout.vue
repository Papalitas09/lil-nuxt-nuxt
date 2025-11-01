<template>
    <LazyResidenceComponentsResidenceLayout >
    <div class=" w-full md:w-screen md:h-[80vh] h-full min-h-52 max-h-full  gap-10 pb-10 md:gap-0 md:pb-0 flex flex-col md:flex-row  items-center md:justify-center md:max-w-full justify-evenly  md:p-10" >
        <div class=" w-full  md:h-full h-fit  flex flex-col justify-center items-center ">
            <FloorplanTower :buttons="buttons" :title="title" />
        </div>
        <div class=" w-full h-full md:items-center flex  justify-center ">
            <FloorplanImages :imgurl="urlimeg" />
        </div>
    </div>   
    </LazyResidenceComponentsResidenceLayout>
</template>

<script setup lang="ts">
import FloorplanImages from './floorplanImages.vue';
import FloorplanTower from './floorplanTower.vue';

defineProps<{
    buttons: {label: string, img: string }[],
    urlimeg:{url: string, alt?: string}[],
    title: string
}>()
</script>

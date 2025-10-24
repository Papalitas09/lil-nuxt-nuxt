<template>
    <LazyResidenceComponentsResidenceLayout >
    <div class=" w-56 md:h-[80vh] h-full min-h-52 max-h-full  flex flex-col md:flex-row items-center justify-evenly"  >
        <div class=" w-xl h-screen  flex flex-col justify-center p-10 items-center">
            <FloorplanTower :buttons="buttons" :title="title" />
        </div>
        <div class=" w-lg h-screen  items-center flex  ">
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

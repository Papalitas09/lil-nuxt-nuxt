<template>
    <LazyResidenceComponentsResidenceLayout>
    <div class=" w-full h-fit flex flex-row items-center justify-evenly "  id="Floor">
        <div class=" w-xl h-screen  flex flex-col justify-center p-10 items-center" >
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
import ResidenceLayout from './residenceLayout.vue';

defineProps<{
    buttons: {label: string, img: string }[],
    urlimeg:{url: string, alt?: string}[],
    title: string
}>()
</script>

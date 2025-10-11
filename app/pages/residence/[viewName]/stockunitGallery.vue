<template>
    <LazyResidenceComponentsGalleryLayout :galleryimages="galleryimej" top-title="Gallery" />
</template>

<script setup lang="ts">
const galleryimej = [
    {img:"/Assets/img/home2.jpg", alt: "mantaf" , extra: "w-xs"},
    {img:"/Assets/img/home4.jpg", alt: "mantaf" , extra: "w-42"},
    {img:"/Assets/img/home4.jpg", alt: "mantaf" , extra: "w-42"},
    {img:"/Assets/img/home4.jpg", alt: "mantaf" , extra: "w-42"},
    {img:"/Assets/img/home4.jpg", alt: "mantaf" , extra: "w-42"},
]
</script>
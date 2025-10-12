<template>
    <LazyResidenceComponentsGalleryLayout :galleryimages="currentData.galleryimej" :top-title="currentData.topTitle" />
</template>

<script setup lang="ts">
const route = useRoute()
const viewName = route.params.viewName as string

interface property{
  topTitle: string,
  galleryimej: {img: string, alt? : string, extra?: string}[],
}

const floorplanData: Record<string, property> = {
  coastview: {
    topTitle: 'CoastView Unit Apartment',
    galleryimej: [
        {img: '/Assets/img/Apartments/IMG_4048.webp', alt: 'Picture 1', extra: 'w-xs'},
        {img: '/Assets/img/Apartments/IMG_4049.webp', alt: 'Picture 1', extra: 'w-42'},
        {img: '/Assets/img/Apartments/IMG_4051.webp', alt: 'Picture 1', extra: 'w-42'},
        {img: '/Assets/img/Apartments/IMG_3995.webp', alt: 'Picture 1', extra: 'w-42'},
        {img: '/Assets/img/Apartments/IMG_4054.webp', alt: 'Picture 1', extra: 'w-42'},
        
    ]
  },
  bayview:{
    topTitle: 'Bayview Unit Apartment',
    galleryimej:[
        {img:'/Assets/img/Apartments/IMG_4039.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4044.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4043.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4042.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4040.webp', alt:'e', extra:'w-42'},
    ]
  },
  seaview:{
    topTitle: 'SeaView Unit Apartment',
    galleryimej:[
        {img:'/Assets/img/Apartments/IMG_4014.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4015.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4016.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4013.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4011.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4010.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4008.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4005.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4007.webp', alt:'e', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4009.webp', alt:'e', extra:'w-42'},
    ]
  }
}

const currentData = computed(() => {
  return floorplanData[viewName] || {
    topTitle: '',
    galleryimej: []
  }
})


</script>
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
        {img: '/Assets/img/Apartments/IMG_4049.webp', alt: 'Picture 2', extra: 'w-42'},
        {img: '/Assets/img/Apartments/IMG_4051.webp', alt: 'Picture 3', extra: 'w-42'},
        {img: '/Assets/img/Apartments/IMG_3995.webp', alt: 'Picture 4', extra: 'w-42'},
        {img: '/Assets/img/Apartments/IMG_4054.webp', alt: 'Picture 5', extra: 'w-42'},
        
    ]
  },
  bayview:{
    topTitle: 'Bayview Unit Apartment',
    galleryimej:[
        {img:'/Assets/img/Apartments/IMG_4039.webp', alt:'Picture 1', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4044.webp', alt:'Picture 2', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4043.webp', alt:'Picture 3', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4042.webp', alt:'Picture 4', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4040.webp', alt:'Picture 5', extra:'w-42'},
    ]
  },
  seaview:{
    topTitle: 'SeaView Unit Apartment',
    galleryimej:[
        {img:'/Assets/img/Apartments/IMG_4014.webp', alt:'Picture 1', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4015.webp', alt:'Picture 2', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4016.webp', alt:'Picture 3', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4013.webp', alt:'Picture 4', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4011.webp', alt:'Picture 5', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4010.webp', alt:'Picture 6', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4008.webp', alt:'Picture 7', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4005.webp', alt:'Picture 8', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4007.webp', alt:'Picture 9', extra:'w-42'},
        {img:'/Assets/img/Apartments/IMG_4009.webp', alt:'Picture 10', extra:'w-42'},
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
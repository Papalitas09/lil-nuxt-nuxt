<template>
<ResidenceComponentsStockunitLayout :card-values="currentData.cardValues" :top-title="currentData.topTitle" />
</template>
<script setup lang="ts">
const route = useRoute()
const viewName = route.params.viewName as string

interface property{
  topTitle: string,
  cardValues: {img: string, title: string , alt? : string, page?: string, stock: boolean}[],
}

const floorplanData: Record<string, property> = {
  coastview: {
    topTitle: 'CoastView Unit Apartment',
    cardValues: [
      {img: "/Assets/img/Apartments/IMG_4007.webp", title:"1 Bedroom", stock: true},
      {img: "/Assets/img/Apartments/IMG_4007.webp", title:"2 Bedroom", stock: false, page: `/residence/${viewName}/stockunitGallery/#residence`},
      {img: "/Assets/img/Apartments/IMG_4007.webp", title:"2 Bedroom C", stock: true},
    ]
  },
  bayview:{
    topTitle: 'Bayview Unit Apartment',
    cardValues:[
      {img: "/Assets/img/Apartments/IMG_4043.webp", title:"1 Bedroom", stock: false, page: `/residence/${viewName}/stockunitGallery/#residence`},
      {img: "/Assets/img/Apartments/IMG_4043.webp", title:"2 Bedroom A", stock: true},
      {img: "/Assets/img/Apartments/IMG_4043.webp", title:"2 Bedroom B", stock: true},
      {img: "/Assets/img/Apartments/IMG_4043.webp", title:"3 Bedroom" ,stock: true},
    ]
  },
  seaview:{
    topTitle: 'SeaView Unit Apartment',
    cardValues:[
      {img: "/Assets/img/Apartments/IMG_4015.webp", title:"1 Bedroom A", stock: true},
      {img: "/Assets/img/Apartments/IMG_4015.webp", title:"1 Bedroom B", stock: false, page: `/residence/${viewName}/stockunitGallery/#residence`},
      {img: "/Assets/img/Apartments/IMG_4015.webp", title:"2 Bedroom A", stock: true},
      {img: "/Assets/img/Apartments/IMG_4015.webp", title:"2 Bedroom B", stock: true},
      {img: "/Assets/img/Apartments/IMG_4015.webp", title:"2 Bedroom C", stock: true},
      {img: "/Assets/img/Apartments/IMG_4015.webp", title:"2 Bedroom D", stock: true},
      {img: "/Assets/img/Apartments/IMG_4015.webp", title:"2 Bedroom E", stock: true},
      {img: "/Assets/img/Apartments/IMG_4015.webp", title:"2 Bedroom F", stock: true},
      {img: "/Assets/img/Apartments/IMG_4015.webp", title:"3 Bedroom A", stock: true},
      {img: "/Assets/img/Apartments/IMG_4015.webp", title:"3 Bedroom B", stock: true},
    ]
  }
}

const currentData = computed(() => {
  return floorplanData[viewName] || {
    topTitle: '',
    cardValues: []
  }
})
</script>
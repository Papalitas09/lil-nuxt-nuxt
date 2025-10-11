<template>
<ResidenceComponentsStockunitLayout :card-values="CardValues" top-title="Bay View" />
</template>
<script setup lang="ts">
const route = useRoute()
const viewName = route.params.viewName as string
const CardValues=[
      {img: "/Assets/img/Apartments/IMG_4007.webp", title:"1 Bedroom", stock: true},
      {img: "/Assets/img/Apartments/IMG_4007.webp", title:"2 Bedroom A", stock: false, page: `/residence/${viewName}/stockunitGallery`},
      {img: "/Assets/img/Apartments/IMG_4007.webp", title:"2 Bedroom B", stock: true},
      {img: "/Assets/img/Apartments/IMG_4007.webp", title:"3 Bedroom", stock: true},
]
</script>
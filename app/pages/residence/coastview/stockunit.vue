<template>
<StockunitLayout :card-values="CardValues" top-title="Coast View" />
</template>

<script setup lang="ts">
import StockunitLayout from '~/components/residenceComponents/stockunitLayout.vue';

const CardValues=[
      {img: "/Assets/img/Apartments/IMG_4007.webp", title:"1 Bedroom", stock: true },
      {img: "/Assets/img/Apartments/IMG_4007.webp", title:"2 Bedroom", stock: false, page: "stockunitgallery"},
      {img: "/Assets/img/Apartments/IMG_4007.webp", title:"2 Bedroom C", stock: true },
]

</script>
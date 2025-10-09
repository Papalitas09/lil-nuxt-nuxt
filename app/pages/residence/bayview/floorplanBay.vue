<template>
<ResidenceComponentsFloorplanLayout :buttons="towerButtons" title="Bay View" :urlimeg="imgurl"/>
</template>

<script setup lang="ts">
const towerButtons = [
    {label: "Tower E", img:"/Assets/img/Tower/coastviewA.webp"},
    {label: "Tower F", img:"/Assets/img/Tower/coastviewB.webp"},
    {label: "Tower G", img:"/Assets/img/Tower/coastviewC.webp"},
    {label: "Tower H", img:"/Assets/img/Tower/coastviewD.webp"},
]

const imgurl = [
  { url: "/Assets/img/CoastviewFloorPlan/coastview1.webp" },
  { url: "/Assets/img/CoastviewFloorPlan/coastview2.webp" },
  { url: "/Assets/img/CoastviewFloorPlan/coastview3.webp" }
]

</script>
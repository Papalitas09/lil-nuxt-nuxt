<template>
<ResidenceComponentsFloorplanLayout :buttons="towerButtons" title="Sea View" :urlimeg="imgurl"/>
</template>

<script setup lang="ts">
const towerButtons = [
    {label: "Tower J", img:"/Assets/img/Tower/seaviewJ.webp"},
    {label: "Tower K", img:"/Assets/img/Tower/seaviewK.webp"},
    {label: "Tower L", img:"/Assets/img/Tower/seaviewL.webp"},
    {label: "Tower M", img:"/Assets/img/Tower/seaviewM.webp"},
]

const imgurl = [
  { url: "/Assets/img/SeaviewFloorPlan/seaview1.webp" },
  { url: "/Assets/img/SeaviewFloorPlan/seaview2.webp" },
  { url: "/Assets/img/SeaviewFloorPlan/seaview3.webp" },
  { url: "/Assets/img/SeaviewFloorPlan/seaview4.webp" },
  { url: "/Assets/img/SeaviewFloorPlan/seaview5.webp" },
  { url: "/Assets/img/SeaviewFloorPlan/seaview6.webp" },
  { url: "/Assets/img/SeaviewFloorPlan/seaview7.webp" },
  { url: "/Assets/img/SeaviewFloorPlan/seaview8.webp" },
  { url: "/Assets/img/SeaviewFloorPlan/seaview9.webp" },
  { url: "/Assets/img/SeaviewFloorPlan/seaview10.webp" },
 
]

</script>
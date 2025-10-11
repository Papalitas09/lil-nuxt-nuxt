<template>
<ResidenceComponentsFloorplanLayout :buttons="towerButtons" title="floorplan" :urlimeg="imgurl"/>
 <p>dcf</p>
</template>

<script setup lang="ts">
const route = useRoute()
const viewName = route.params.viewName as string
const towerButtons = [
    {label: "Tower A", img:"/Assets/img/Tower/coastviewA.webp"},
    {label: "Tower B", img:"/Assets/img/Tower/coastviewB.webp"},
    {label: "Tower c", img:"/Assets/img/Tower/coastviewC.webp"},
    {label: "Tower D", img:"/Assets/img/Tower/coastviewD.webp"},
]

const imgurl = [
  { url: "/Assets/img/CoastviewFloorPlan/coastview1.webp" },
  { url: "/Assets/img/CoastviewFloorPlan/coastview2.webp" },
  { url: "/Assets/img/CoastviewFloorPlan/coastview3.webp" }
]


</script>
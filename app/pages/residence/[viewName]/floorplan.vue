<template>
<ResidenceComponentsFloorplanLayout :buttons="currentData.towerButtons" :title="currentData.title" :urlimeg="currentData.imgurl"/>
</template>

<script setup lang="ts">
const route = useRoute()
const viewName = route.params.viewName as string

interface property{
  title: string,
  towerButtons: {label: string, img: string , alt? : string}[],
  imgurl: {url: string, alt?: string}[]
}

const floorplanData: Record<string, property> = {
  coastview: {
    title: 'Tower Coastview',
    towerButtons: [
      {label: "Tower A", img:"/Assets/img/Tower/coastviewA.webp"},
      {label: "Tower B", img:"/Assets/img/Tower/coastviewB.webp"},
      {label: "Tower c", img:"/Assets/img/Tower/coastviewC.webp"},
      {label: "Tower D", img:"/Assets/img/Tower/coastviewD.webp"},
    ],
    imgurl: [
      { url: "/Assets/img/CoastviewFloorPlan/coastview1.webp" },
      { url: "/Assets/img/CoastviewFloorPlan/coastview2.webp" },
      { url: "/Assets/img/CoastviewFloorPlan/coastview3.webp" }
    ]
  },
  bayview:{
    title: 'Tower Bayview',
    towerButtons:[
      {label: "Tower E", img:"/Assets/img/Tower/bayviewE.webp"},
      {label: "Tower F", img:"/Assets/img/Tower/bayviewF.webp" },
      {label: "Tower G", img:"/Assets/img/Tower/bayviewG.webp"},
      {label: "Tower H", img:"/Assets/img/Tower/bayviewH.webp"},
    ],
    imgurl:[
      { url: "/Assets/img/BayviewFloorPlan/bayview1.webp" },
      { url: "/Assets/img/BayviewFloorPlan/bayview2.webp" },
      { url: "/Assets/img/BayviewFloorPlan/bayview3.webp" },
      { url: "/Assets/img/BayviewFloorPlan/bayview4.webp" }
    ]
  },
  seaview:{
    title: 'Tower Seaview',
    towerButtons: [
      {label: "Tower J", img:"/Assets/img/Tower/seaviewJ.webp"},
      {label: "Tower K", img:"/Assets/img/Tower/seaviewK.webp"},
      {label: "Tower L", img:"/Assets/img/Tower/seaviewL.webp"},
      {label: "Tower M", img:"/Assets/img/Tower/seaviewM.webp"},
    ],
    imgurl:[
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
  }
}

const currentData = computed(() => {
  return floorplanData[viewName] || {
    title: 'No',
    towerButtons: [],
    imgurl: [],
  }
})
</script>
<template>
<ResidenceComponentsFloorplanLayout :buttons="towerButtons" :title="title" :urlimeg="imgUrl"/>
</template>

<script setup lang="ts">
const route = useRoute()
const viewName = route.params.viewName as string

const {title, towerButtons, imgUrl } = Residence(viewName)


</script>
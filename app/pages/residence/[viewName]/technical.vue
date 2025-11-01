<template>
<LazyResidenceComponentsTechinalLayout :title-tech="viewName"/>
</template>
<script setup lang="ts">
const route = useRoute()
const viewName = route.params.viewName as string
</script>
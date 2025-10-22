<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage class="scroll-smooth" />
    <NuxtLoadingIndicator color="linear-gradient(90deg, #ff0000, #0000ff)" :height="5">
    <div class="">Loading...</div>
  </NuxtLoadingIndicator>
  </div>
  
</template>

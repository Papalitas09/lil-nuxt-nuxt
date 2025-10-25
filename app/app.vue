<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage class="scroll-smooth overflow-x-hidden" />
    <NuxtLoadingIndicator 
      color="#3B7B84" 
      :height="4" 
      :duration="3000" 
      :throttle="200" 
    />
  </div>
  
</template>

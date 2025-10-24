<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage class="scroll-smooth" />
    <NuxtLoadingIndicator 
      color="#22c55e" 
      :height="4" 
      :duration="3000" 
      :throttle="200" 
    />
  </div>
  
</template>

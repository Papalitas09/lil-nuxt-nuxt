<template>
 <div class="flex flex-col min-h-screen">
    <LayoutComponentsNavbar />
    <LayoutComponentsWelcome />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutComponentsFooter />
  </div>
</template>

<script lang="ts">
</script>
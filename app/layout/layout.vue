<template>
 <div class="flex flex-col min-h-screen">
    <Navbar />
    <Welcome />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">

</script>
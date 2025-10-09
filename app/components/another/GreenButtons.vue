<template>
  <div class="w-full h-24 flex justify-center items-center px-5 gap-5">
    <button
      v-for="(link, index) in links"
      :key="index"
      @click=""
      class="w-42 h-10 text-center content-center rounded transition bg-[rgb(59,123,132)] text-white"
      :class="link.extraclass"
      >
      {{ link.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  links: {label: string, page?: string, extraclass?: string}[]
}>()
</script>
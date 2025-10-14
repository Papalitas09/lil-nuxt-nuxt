<template>
  <div
    class="flex flex-col md:flex-row w-full p-5 text-sm gap-5 md:gap-32 h-fit md:items-start "
    :class="extrastyle.styleParent"
  >
    <img
      :src="imgurl"
      alt=""
      class="w-full h-52 md:w-2xl md:h-screen relative z-10 rounded-4xl object-cover hover:scale-105 transition duration-150 ease-in-out "
      :class="extrastyle.styleImg"
    />
    <div class="flex flex-col justify-center md:w-[40%] h-full md:text-xl gap-5">
      <h2 class="font-bold">{{ title }}</h2>
      <p>{{ content.content0 }}</p>
      <p>{{ content.content1 }}</p>
      <p>{{ content.content2 }}</p>
      <p>{{ content.content3 }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imgurl: {
    type: String,
    default: "/Assets/img/footer.png",
  },
  title: {
    type: String,
    default: "",
  },
  content: {
    type: Object,
    default: () => ({
      content0: "",
      content1: "",
      content2: "",
      content3: ""
    }),
  },
  extrastyle: {
    type: Object,
    default: () => ({
      styleParent: "",
      styleImg: "",
    }),
  },
});
</script>
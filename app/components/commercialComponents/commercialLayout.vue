<template>
<layout>   
      <div class="min-h-screen overflow-x-hidden w-full">
            <div class="w-full h-24 bg-[rgb(59,123,132)]"></div>
            <div class="0 w-full h-full flex flex-col items-center ">
                    <div class="h-screen w-8xl flex flex-col  items-center  py-5">
                        <another-green-buttons :links="navItems"/>
                        <client-only>
                            <commercial-components-commercial-slide :imgurl="imgurl" :title="title"/>
                        </client-only>
                 </div>
            </div>
        </div>
  </layout>   
</template>

<script setup lang="ts">
import layout from '~/layout/layout.vue';
defineProps<{
    imgurl: {url: string, alt: string}[],
    title: string
}>()

const navItems = [
  { label: 'Kiosk', page: 'kiosk' },
  { label: 'The Bay Mall', page: 'baymall'},
]
</script>
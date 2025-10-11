<template>
     <div class="flex-wrap gap-8 justify-center flex w-full h-full flex-row items-center bg-[#3B7B84] p-10  ">
                <button class="h-56 " v-for="(button ,index) in imej " :key="index" :class="button.extra" @click="ChangeState(button.img)"> <!--Nah eta, changestatenya di set paramnya, jadi parent ga usah set lagi-->
                    <img :src="button.img" :alt="button.alt" class="rounded-3xl w-full h-full">
                </button>
            </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["Change-State"])

function ChangeState(selectedIMG: string){
    emit("Change-State", selectedIMG) //parameternya yang dimana imgnya nanti mnyesuaikan dengan img array di parent choy
}

defineProps<{
    imej: {img: string, alt?:string, extra?:string}[]
}>()
</script>
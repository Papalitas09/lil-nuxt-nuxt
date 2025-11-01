<template>
  <residence-components-residence-layout>
    <div class=" w-full  h-fit rounded-3xl items-center flex bg-[#D9D9D9] flex-col pb-14 ">
            <div class="w-full h-fit  items-center flex flex-col gap-5 p-10 ">
                <div class="w-fit  h-fit text-center">
                    <h2 class="text-4xl  text-[#3B7B84] font-extrabold">{{ topTitle }}</h2>
                    <p>The Green Nautical Living building concept in North Jakarta</p>
                </div> 
            <residence-components-gallery1 :urlimage="imgState"/>
            </div>
            <residence-components-gallery2 :imej="galleryimages" @Change-State="ChangeState"/> <!-- Nah ie, see we doesnt nessecery to put the parameter here lol wdowok-->
    </div>
    </residence-components-residence-layout>
</template>
<script setup lang="ts">

const props = defineProps<{
    topTitle: string,
    galleryimages: {img: string, alt?:string, extra?:string}[]
}>()

const imgState = ref(props.galleryimages[0]?.img || '')

function ChangeState(img: string){
    imgState.value = img //nah ie, isi parameternya naon wae, engke di die tidak udh set ulang imej indexnya 
}

</script>
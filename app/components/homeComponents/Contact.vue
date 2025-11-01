<template>
    <div class="w-full h-full bg-[#3B7B84] pb-10 md:flex md:flex-col md:items-center" id="contact">
        <div class="text-white w-full py-5  h-fit text-lg flex justify-center items-center gap-2   md:justify-center md:text-2xl ">
            <div class="w-12 max-w-16 bg-gradient-to-l from-white via-white to-transparent md:h-[0.3vh] h-1 md:w-24"></div>
            <h3 class="text-center font-jasques">Information Marketing Gallery</h3>
            <div class="w-12 max-w-16 bg-gradient-to-r from-white via-white to-transparent md:h-[0.3vh] h-1 md:w-24"></div>
        </div>
        <div class=" w-full h-full flex flex-col items-center gap-10 py-2 md:justify-center md:w-lvw md:px-10 md:h-fit md:gap-3 ">
           <span class=" md:w-full md:h-fit">
               <ContactCard
               imgurl="/Assets/img/icons/address.png"
               extraparent="md:w-full"
               extracontent="md:w-3xl"
               title="Address"
               content="Apartemen, Green Bay Tower B, Jl. Pluit Karang Ayu Barat Lantai GF Kios No.28 (GF B 28, RT.8/RW.2, Pluit, Kecamatan Penjaringan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14450"
                />
           </span>
           <span class="w-full flex md:flex-row flex-col gap-10 md:gap-5 md:justify-center items-center h-fit">
            <ContactCard 
            imgurl="/Assets/img/icons/call.png"
            title="Call Us"
            extraparent="md:w-3xl"
            content="+62 83 168 168 111"
                />
            <ContactCard
            imgurl="/Assets/img/icons/email.png"
            title="Email Us"
            extraparent="md:w-3xl"
            content="jareternal168pro@gmail.com"
                />
           </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactCard from './ContactCard.vue';

</script>

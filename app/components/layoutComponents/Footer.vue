<script setup lang="ts">
import ContactFooter from './contactFooter.vue';

</script>

<template>
   <footer class="w-full h-[60vh] bg-[#072134] flex items-center justify-evenly text-white flex-col md:h-[40vh] relative">
      <!-- Mobile -->
      <div class="h-[40vh] w-screen flex justify-evenly z-20 md:items-center md:hidden">
         <ul class="md:w-[40vw] md:h-[20vh]">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="">Contact</NuxtLink></li>
            <li><NuxtLink to="">Commercial</NuxtLink></li>
            <li><NuxtLink to="">Pricelist</NuxtLink></li>
            <li><NuxtLink to="">Residence</NuxtLink></li>
            <li><NuxtLink to="">Project</NuxtLink></li>
            <li><NuxtLink to="">Key Concept</NuxtLink></li>
            <li><NuxtLink to="">Apartments</NuxtLink></li>
            <li><NuxtLink to="">Condominium</NuxtLink></li>
            <li><NuxtLink to="">Kiosk</NuxtLink></li>
            <li><NuxtLink to="">Lifestyle Mall</NuxtLink></li>
         </ul>
         <ul>
            <li><NuxtLink to="">Coastview Apartment</NuxtLink></li>
            <li><NuxtLink to="">Bayview Apartment</NuxtLink></li>
            <li><NuxtLink to="">Seaview Condominium</NuxtLink></li>
            <li><NuxtLink to="">The Bay Mall</NuxtLink></li>
            <li><NuxtLink to="">Kiosk</NuxtLink></li>
         </ul>
      </div>

      <img src="/Assets/img/footer.png" alt="" class="absolute inset-0 w-full h-full object-cover opacity-25 z-0" />
      <div class="w-full h-0.5 bg-white md:hidden"></div>

      <!-- Desktop -->
      <div class="hidden bg-gradient-to-r from-neutral-700 via-neutral-400 to-slate-400 md:flex w-full justify-evenly h-[30vh] items-center z-10">
         <img src="/Assets/img/icons/Logo.png" alt="" class="w-[15vw] h-[25vh] content-center"> 
         
         <ul class="flex flex-col w-42 h-full py-10">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/commercial">Commercial</NuxtLink></li>
            <li><NuxtLink to="/pricelist">Pricelist</NuxtLink></li>
            <li><NuxtLink to="/residence">Residence</NuxtLink></li>
            <li><NuxtLink to="/project">Project</NuxtLink></li>
         </ul>

         <ul class="flex flex-col w-42 h-full py-10">
            <li><NuxtLink to="/key-concept">Key Concept</NuxtLink></li>
            <li><NuxtLink to="/apartments">Apartments</NuxtLink></li>
            <li><NuxtLink to="/condominium">Condominium</NuxtLink></li>
            <li><NuxtLink to="/kiosk">Kiosk</NuxtLink></li>
            <li><NuxtLink to="/lifestyle-mall">Lifestyle Mall</NuxtLink></li>
         </ul>

         <ul class="flex flex-col w-42 h-full py-10">
            <li><NuxtLink to="/coastview-apartment">Coastview Apartment</NuxtLink></li>
            <li><NuxtLink to="/bayview-apartment">Bayview Apartment</NuxtLink></li>
            <li><NuxtLink to="/seaview-condominium">Seaview Condominium</NuxtLink></li>
            <li><NuxtLink to="/the-bay-mall">The Bay Mall</NuxtLink></li>
            <li><NuxtLink to="/kiosk">Kiosk</NuxtLink></li>
         </ul>

         <div class="w-96 relative h-full top-0 py-7">
            <h4 class="text-xl">Marketing Gallery</h4>
            <div class="text-xs flex flex-col gap-2 mt-2">
               <ContactFooter
                  imgurl="/Assets/img/icons/addresswhite.png"
                  content="Apartemen, Green Bay Tower B, Jl. Pluit Karang Ayu Barat Lantai GF Kios No.28 (GF B 28, RT.8/RW.2, Pluit, Kecamatan Penjaringan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14450"
               />
               <ContactFooter
                  imgurl="/Assets/img/icons/callwhite.png"
                  content="+62 83 168 168 111"
               />
               <ContactFooter
                  imgurl="/Assets/img/icons/emailwhite.png"
                  content="jareternal168pro@gmail.com"
               />
            </div>
         </div>
      </div>
   </footer>
</template>

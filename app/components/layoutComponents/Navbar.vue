<template>
  <header
    class="w-full h-24 flex items-center justify-between md:px-2  bg-gradient-to-b from-[#3B7B84] to-transparent px-2 fixed md:bg-[#3B7B84] md:h-28 text-white z-50 font-jasques"
  >
    <div class="h-full w-fit relative flex items-center  ">
      <img src="/Assets/img/icons/Logo.png" alt="" class="w-20 md:w-32 cursor-pointer " @click="NavigationPage('/')" />
      <h1 class="text-sm md:text-2xl cursor-default">Apartment Green Bay</h1>
    </div>

    <button class="w-10 h-14 max-w-52 md:hidden " @click="Hamburger()">
      <img src="/Assets/img/icons/Hamburger.png" alt="" />
    </button>

    <div class="hidden md:flex w-xl h-full items-center justify-evenly">
      <!-- ✅ NuxtLink untuk home -->
      <NuxtLink to="/" class="w-12 h-auto hover:scale-105 transition duration-150 ease-in-out">
        <img src="/Assets/img/icons/home.png" alt="" />
      </NuxtLink>

      <!-- Residence Dropdown -->
        <button class="w-24 text-center group hover:border-b-1  hover:border-white hover:scale-105  duration-150 ease-in-out hover:text-gray-200">
          Residence
          <LazyLayoutComponentsNavButton :content="Content.Residence" />
        </button>

      <!-- Commercial Dropdown -->
      <button class="w-24 text-center group hover:border-b-1 hover:scale-105 hover:border-white   duration-200 ease-in-out hover:text-gray-200">
        Commercial
        <LayoutComponentsNavButton :content="Content.Commercial" />
      </button>

      <!-- About Us Dropdown -->
      <button class="w-24 text-center group hover:border-b-1 hover:border-white hover:scale-105  duration-200 ease-in-out hover:text-gray-200">
        About Us
        <LayoutComponentsNavButton :content="Content.About" />
      </button>

      <!-- Price List -->
      <a
        href="https://wa.me/+6283168168111?text=leoikg"
        target="_blank"
        class="w-24 h-12 content-center text-center hover:border-1 hover:border-white hover:scale-105  duration-200  ease-in-out hover:text-gray-200 "
      >
        Price List
      </a>
    </div>
  </header>

  <!-- Mobile menu -->
  <div class="fixed my-20 w-full h-screen z-30  md:hidden " v-if="hamburgerClicked">
    <div class="w-full h-full bg-white opacity-80 absolute z-10 inset-0 "></div>
    <div class="w-full h-full  z-20 relative flex ">
      <ul class=" w-full h-full flex flex-col justify-start gap-3 py-10 px-8  font-semibold text-2xl  ">
        <li class=" w-full h-fit  flex justify-between items-center">
          <NuxtLink to="/" class="">Home</NuxtLink>
          <NuxtLink to="/" class=""><img src="/Assets/img/arrow.webp" class="w-5 h-fit"></NuxtLink>
        </li>
        <li class=" w-full h-fit  flex justify-between items-center">
          <NuxtLink to="/about/AboutUs/" class="">About Us</NuxtLink>
          <NuxtLink to="" class=""><img src="/Assets/img/arrow.webp" class="w-5 h-fit"></NuxtLink>
        </li>
        <li class=" w-full h-fit  flex justify-between items-center">
          <NuxtLink to="/residence/coastview/floorplan/" class="">Residence</NuxtLink>
          <NuxtLink to="/residence/coastview/floorplan" class=""><img src="/Assets/img/arrow.webp" class="w-5 h-fit"></NuxtLink>
        </li>
        <li class=" w-full h-fit  flex justify-between items-center">
          <NuxtLink to="/commercial/kiosk/" class="">Commercial</NuxtLink>
          <NuxtLink to="/commercial/kiosk/" class=""><img src="/Assets/img/arrow.webp" class="w-5 h-fit"></NuxtLink>
        </li>
        <li class=" w-full h-fit  flex justify-between items-center">
          <NuxtLink to="/" class="">Price List</NuxtLink>
          <NuxtLink to="/" class=""><img src="/Assets/img/arrow.webp" class="w-5 h-fit"></NuxtLink>
        </li>
        <li class=" w-full h-fit  flex justify-between items-center">
          <NuxtLink to="/#contact" class="">Location</NuxtLink>
          <NuxtLink to="/#contact" class=""><img src="/Assets/img/arrow.webp" class="w-5 h-fit"></NuxtLink>
        </li>
        <li class=" w-full h-fit  flex justify-between items-center">
          <NuxtLink to="/#contact" class="">Contact</NuxtLink>
          <NuxtLink to="/#contact" class=""><img src="/Assets/img/arrow.webp" class="w-5 h-fit"></NuxtLink>
        </li>
        
        
        
        
        
        
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

const {goTo}  = ChangePage()

const hamburgerClicked = ref(false)

function Hamburger(){
  if(!hamburgerClicked.value){
    hamburgerClicked.value = true
  } else {
    hamburgerClicked.value = false
  }
  
}

function NavigationPage(page? : string){
  if(page) goTo(page)
}

const Content = {
  Residence:[
    {title: 'Coastview Apartment', to: '/residence/coastview/floorplan/'},
    {title: 'Bayview Apartment', to: '/residence/bayview/floorplan/'},
    {title: 'Seaview Condominium', to: '/residence/seaview/floorplan/'},
  ],
  Commercial:[
    {title: 'Kiosk', to: '/commercial/kiosk/'},
    {title: 'The Bay Mall', to: '/commercial/baymall/'},
  ],
  About:[
    {title: 'About Us', to: '/about/aboutUs/'},
    {title: 'Visi Missions', to: '/about/visiMission/'},
  ]
}
</script>

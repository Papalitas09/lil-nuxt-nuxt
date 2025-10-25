<template>
  <header
    class="w-full h-24 flex items-center justify-between md:px-2   fixed md:bg-[#3B7B84] md:h-28 text-white z-50 font-jasques"
  >
    <div class="h-full w-fit relative flex items-center ">
      <img src="/Assets/img/icons/Logo.png" alt="" class="w-20 md:w-32 cursor-pointer " @click="NavigationPage('/')" />
      <h1 class="text-sm md:text-2xl cursor-default">Apartment Green Bay</h1>
    </div>

    <button class="w-10 h-14 max-w-52 md:hidden">
      <img src="/Assets/img/icons/Hamburger.png" alt="" />
    </button>

    <div class="hidden md:flex w-xl h-full items-center justify-evenly">
      <!-- ✅ NuxtLink untuk home -->
      <NuxtLink to="/" class="w-12 h-auto hover:scale-105 transition duration-150 ease-in-out">
        <img src="/Assets/img/icons/home.png" alt="" />
      </NuxtLink>

      <!-- Residence Dropdown -->
      <!-- <div class="w-fit group relative bg-red-300"> -->
        <button class="w-24 text-center group hover:border-b-1 hover:border-white hover:scale-105 transition duration-150 ease-in-out hover:text-gray-200">
          Residence
          <LazyLayoutComponentsNavButton :content="Content.Residence" />
        </button>
      <!-- </div> -->

      <!-- Commercial Dropdown -->
      <button class="w-24 text-center group hover:border-b-1 hover:scale-105 hover:border-white  transition duration-150 ease-in-out hover:text-gray-200">
        Commercial
        <LayoutComponentsNavButton :content="Content.Commercial" />
      </button>

      <!-- About Us Dropdown -->
      <button class="w-24 text-center group hover:border-b-1 hover:border-white hover:scale-105 transition duration-150 ease-in-out hover:text-gray-200">
        About Us
        <LayoutComponentsNavButton :content="Content.About" />
      </button>

      <!-- Price List -->
      <a
        href="https://wa.me/+6283168168111?text=leoikg"
        target="_blank"
        class="w-24 h-12 content-center text-center hover:border-1 hoveer:border-white hover:scale-105 transition duration-150 ease-in-out hover:text-gray-200 "
      >
        Price List
      </a>
    </div>
  </header>

  <!-- Mobile menu -->
  <div class="fixed my-16 w-full h-screen z-50 bg-amber-300 md:hidden hidden">
    <ul class="bg-amber-400 w-full h-full flex flex-col justify-start gap-5 py-20 px-10">
      <li>uheuheuhe</li>
      <li>uheuheuhe</li>
      <li>uheehefhuhefg</li>
    </ul>
    <ul class="text-center bg-green-400 w-28 h-full flex flex-col justify-start gap-5 py-20">
      <li>></li>
      <li>></li>
      <li>></li>
    </ul>
  </div>
</template>

<script setup lang="ts">

const {goTo}  = ChangePage()

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

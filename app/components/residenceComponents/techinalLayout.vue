<template>
<ResidenceComponentsResidenceLayout>
    <div class="bg-[#D9D9D9] w-5xl h-screen rounded-4xl flex p-5 items-center justify-evenly relative flex-col">
       <div class="text-white w-full h-10  flex justify-center items-center gap-2    md:h-fit ">
            <div class="w-[15vw] bg-gradient-to-l from-white via-white to-transparent h-[0.3vh] md:w-24"></div>
            <h3 class="text-2xl md:text-3xl text-black">{{ titleTech }}</h3>
            <div class="w-[15vw] bg-gradient-to-r from-white via-white to-transparent h-[0.3vh] md:w-24"></div>
        </div>
        <div class="w-full h-full flex flex-col items-center">
            <ul class="list-none text-lg px-10 py-5 gap-5 flex flex-col">
                <li>PONDASI: Tiang Pancang Beton</li>
                <li>STRUKTUR BANGUNAN: Beton Bertulang</li>
                <li>DINDING: Eksternal – Dinding beton precast/prefab, Internal – Bata Ringan/Gypsum Board</li>
                <li>ATAP: Beton bertulang</li>
                <li>PLAFOND: Beton expose finishing cat/skimcoat</li>
                <li>FINISHING: Dinding Internal (R.Duduk, R. Makan, K.Tidur) – Cat, K.Mandi: Keramik 20 x 25. Dinding Eksternal: Cat Weatherproof, Lantai (R.Duduk, R. Makan, K.Tidur) – Homogeneus Tile 40×40 motif,
                    K.Mandi: Keramik 20×20. Jendela: Kusen – Alumunium, Kaca – Clear. Pintu (P.Utama, P.Kamar Tidur) – Double teakwood / engineering door, P.Kamar Mandi – PVC.</li>
                <li>SANITAIR: K.Mandi – Closet duduk standard, Hand Shower Standard, (2BR & 3BR) Wastafel. Dapur – Meja + Zink.</li>
                <li>INSTALASI LISTRIK: 1BR – 1300, 2BR – 2200 & 3BR – 3500 VA</li>
                <li>INSTALASI AC: 1BR – 1 (satu) titik di k.tidur utama, 2BR – 2 (dua) titik di k.tidur utama dan ruang duduk, 3BR – 2 (dua) titik di k.tidur utama dan ruang duduk.</li>
                <li>JARINGAN AIR BERSIH: Standard PDAM</li>

            </ul>
        </div>
    </div>
</ResidenceComponentsResidenceLayout>
</template>

<script setup lang="ts">
defineProps<{
    titleTech: string
}>()
</script>
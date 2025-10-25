<template>
 <div class="h-fit w-full flex flex-col  gap-1 py-8 " id="content">
        <SummaryContent 
        imgurl="/Assets/img/home4.jpg"
        title="Temukan Hunian Nyaman dan Strategis di Apartemen Green Bay Pluit"
        :content="{
            content0:'Apartemen Green Bay yang terintegrasi langsung dengan Baywalk Mall Jakarta Utara merupakan pilihan hunian ideal bagi Anda yang menginginkan kenyamanan, kemudahan akses, dan gaya hidup modern. Dengan berbagai pilihan unit mulai dari Studio, 1 Bedroom, 2 Bedroom, hingga 3 Bedroom, Apartemen Green Bay siap memenuhi kebutuhan tempat tinggal Anda. baik untuk pribadi, pasangan, maupun keluarga.',
            content1:'Kami tidak hanya melayani sewa dan jual beli unit, namun juga menyediakan layanan desain interior dan renovasi untuk menjadikan hunian Anda lebih nyaman dan estetis.',
            content2:'Lokasi strategis di Greenbay G B no 28, Jakarta, menjadikan apartemen ini mudah dijangkau dan dikelilingi berbagai fasilitas publik, seperti pusat perbelanjaan, restoran, fasilitas olahraga, hingga akses langsung ke pantai.'
        }"
        :extrastyle="{
            styleImg:'md:rounded-r-3xl md:-ml-10  hidden md:flex '
        }"
        />
        <SummaryContent 
        imgurl="/Assets/img/home.webp"
        title="Mengapa Memilih Apartemen Green Bay?"
        :content="{
            content0:`✅ 60% Area Penghijauan
            Lingkungan asri dan hijau menjadikan Green Bay sebagai tempat tinggal yang sehat dan nyaman. Sekitar 60% dari total area didedikasikan untuk ruang terbuka hijau, taman, dan area penghijauan lainnya.`,
            content1:`✅ Didukung oleh Konsultan Internasional
            Desain arsitektur dikembangkan oleh DP Architects (Singapore) – firma arsitektur ternama berskala internasional yang telah menangani berbagai proyek prestisius di Asia.`,
            content2:`✅ Dibangun oleh Kontraktor Terkemuka
            Proyek ini dikerjakan oleh PT. Total Bangun Persada, salah satu kontraktor terbaik di Indonesia yang telah berpengalaman dalam membangun gedung-gedung bertaraf nasional dan internasional.`,
            content3:`✅ Desain Lanskap oleh Bennitt Design Group (USA)
            Konsep penghijauan dan lanskap dirancang langsung oleh Bennitt Design Group (USA), memastikan kualitas tata ruang hijau yang estetis, fungsional, dan berkelas dunia.`
        }" 
        :extrastyle="{
            styleParent:'md:flex-row-reverse',
            styleImg:'md:-mr-20 md:rounded-l-3xl'
        }"
        />
        <div class="bg-[#3B7B84] w-full md:min-h-16 md:h-20 mt-8 p-0 relative flex justify-center items-center h-12">
            <NuxtLink to="/about/aboutUs/" class="bg-[#F5F5F5] hover:bg-gray-300 transition ease-in-out duration-300 hover:text-[#5f9ea7] h-8 w-24 text-center md:h-12 md:w-44  content-center text-sm md:text-lg  font-bold text-[#3B7B84] ">About Us</NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
import SummaryContent from './SummaryContent.vue';

</script>

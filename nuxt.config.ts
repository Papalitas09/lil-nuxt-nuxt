// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
],
  routeRules: {
    '/commercial': { redirect: '/commercial/kiosk' },
    '/residence': { redirect: '/residence/coastview/floorplan' },
    '/about': { redirect: '/about/aboutUs' },
  },
  vite: {  
    plugins:
      [      
        tailwindcss(),
      ],
    },

    
})

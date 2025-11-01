<template>
  <div class="error-container">
    <div class="error-wrapper">
      <div class="error-code">{{ props.error?.statusCode || '404' }}</div>
      <h1 class="error-title">{{ getErrorMessage() }}</h1>
      <p class="error-description">{{ props.error?.message || 'Halaman yang Anda cari tidak ditemukan' }}</p>
      <NuxtLink to="/" class="home-link">Kembali ke Beranda</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

const getErrorMessage = () => {
  const code = props.error?.statusCode
  const messages: Record<number, string> = {
    404: 'Halaman Tidak Ditemukan',
    500: 'Kesalahan Server Internal',
    403: 'Akses Ditolak',
    400: 'Permintaan Tidak Valid',
  }
  return messages[code as number] || 'Terjadi Kesalahan'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.error-container {
  width: 100%;
  height: 100dvh;
  background: linear-gradient(135deg, #3B7B84 0%, #2D5A3D 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  padding: 20px;
}

.error-wrapper {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  backdrop-filter: blur(10px);
}

.error-code {
  font-size: 120px;
  font-weight: 900;
  background: linear-gradient(135deg, #3B7B84 0%, #2D5A3D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 20px;
  animation: float 3s ease-in-out infinite;
}

.error-title {
  font-size: 32px;
  color: #1a1a1a;
  margin-bottom: 12px;
  font-weight: 700;
}

.error-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
}

.home-link {
  display: inline-block;
  padding: 14px 40px;
  background: linear-gradient(135deg, #3B7B84 0%, #2D5A3D 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(45, 90, 61, 0.3);
}

.home-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(45, 90, 61, 0.4);
}

.home-link:active {
  transform: translateY(-1px);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 640px) {
  .error-wrapper {
    padding: 40px 20px;
  }

  .error-code {
    font-size: 80px;
  }

  .error-title {
    font-size: 24px;
  }

  .error-description {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .home-link {
    padding: 12px 30px;
    font-size: 14px;
  }
}
</style>
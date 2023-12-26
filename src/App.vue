<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/global/Header.vue';
import Footer from '@/components/global/Footer.vue';


</script>

<template>
  <Header/>
  <RouterView />
  <Footer/>


</template>

<style lang="scss">
  @import '@/assets/scss/style.scss';
  @import '@/assets/css/reset.css'; 
</style>

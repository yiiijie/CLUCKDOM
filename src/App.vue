<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/global/Header.vue';
import Footer from '@/components/global/Footer.vue';


</script>

<template>
  <Header v-if="!$route.meta.hideHeader"/>
  <RouterView />
  <Footer v-if="!$route.meta.hideFooter"/>


</template>

<style lang="scss">
  @import '@/assets/scss/style.scss';
  @import '@/assets/css/reset.css'; 
</style>

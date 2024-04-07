<script setup>
import { RouterView, useRoute } from 'vue-router';
import { watchEffect, ref } from 'vue';
import Header from '@/components/global/Header.vue';
import Footer from '@/components/global/Footer.vue';

const route = useRoute();
const footerColor = ref('#F8F3EB');

// watchEffect(() => {
//   // 根據路由的 meta 屬性中的 footerColor 來更新 footerColor 的值
//   // 如果 meta 中沒有指定 footerColor，則使用預設顏色 #F8F3EB
//   footerColor.value = route.meta.footerColor || '#F8F3EB';
// });

// watchEffect(() => {
//  if (route.meta.footerColor !== undefined) {
//    footerColor.value = route.meta.footerColor;
//  } else {
//    footerColor.value = '#F8F3EB';
//  };
// });

watchEffect(() => {
  const changeFooterColor = route.meta.footerColor;
  footerColor.value = changeFooterColor !== undefined ? changeFooterColor : '#F8F3EB';
});
</script>

<template>
  <Header v-if="!route.meta.hideHeader"/>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
  <Footer :style="{ backgroundColor: footerColor }" v-if="!route.meta.hideFooter"/>
</template>

<style lang="scss">
  @import '@/assets/scss/main.scss';

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>

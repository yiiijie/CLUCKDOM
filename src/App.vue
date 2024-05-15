<script setup>
import { RouterView, useRoute } from 'vue-router'
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'
const route = useRoute()

</script>

<template>
    <Header/>
    <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.fullPath" />
        </transition>
    </router-view>
    <Footer/>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

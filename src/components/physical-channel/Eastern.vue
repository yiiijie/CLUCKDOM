<script setup>
import { ref } from 'vue'
import StoreCard from '@/components/physical-channel/StoreCard.vue'

const northernStores = ref([
    {
        id: 1,
        name: '大裕田蛋行',
        address: '臺東縣成功鎮和平路345號',
        tel: '(089)2345-9876',
        googleUrl: 'https://reurl.cc/5v2N1M',
    },
    {
        id: 2,
        name: '益品蛋福利中心',
        address: '花蓮縣玉里鎮中山路1號',
        tel: '(03)2666-2345',
        googleUrl: 'https://reurl.cc/5v2N1M',
    },
    {
        id: 3,
        name: '太麻里生鮮超市',
        address: '臺東縣太麻里鄉仁愛路789號',
        tel: '(089)2233-5566',
        googleUrl: 'https://reurl.cc/5v2N1M',
    },
])
</script>

<template>
    <div class="container">
        <store-card
            v-for="store in northernStores"
            :key="store.id"
            :store="store"
        />
    </div>
</template>

<style scoped lang="scss">
div.container {
    @include channel_card_container;
}
</style>

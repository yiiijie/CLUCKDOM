<script setup>
import { ref } from 'vue'
import StoreCard from '@/components/physical-channel/StoreCard.vue'

const northernStores = ref([
    {
        id: 1,
        name: '雲霧農莊雞蛋專賣店',
        address: '基隆市信義區港西街56號',
        tel: '(02)5993-4567',
        googleUrl: 'https://reurl.cc/EjZeDv',
    },
    {
        id: 2,
        name: '碧波雞舍生鮮雞蛋中心',
        address: '台北市中山區民族東路二段87號',
        tel: '(02)2555-6688',
        googleUrl: 'https://reurl.cc/703mqN',
    },
    {
        id: 3,
        name: '翠綠園區有機蛋專賣店',
        address: '新北市新店區北新路三段22號',
        tel: '(02)7765-2345',
        googleUrl: 'https://reurl.cc/703mqN',
    },
    {
        id: 4,
        name: '綠野有機商店 永和店',
        address: '新北市永和區中山路一段123號',
        tel: '(02)8823-6789',
        googleUrl: 'https://reurl.cc/703mqN',
    },
    {
        id: 5,
        name: '藍天牧場雞蛋供應點',
        address: '桃園市龜山區中興路180號',
        tel: '(03)5566-6789',
        googleUrl: 'https://reurl.cc/703mqN',
    },
    {
        id: 6,
        name: '甜蜜蛋舍 光復店',
        address: '新竹市東區光復路二段321號',
        tel: '(03)8123-4567',
        googleUrl: 'https://reurl.cc/703mqN',
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

<script setup>
import { ref } from 'vue'
import StoreCard from '@/components/physical-channel/StoreCard.vue'

const northernStores = ref([
    {
        id: 1,
        name: '星光雞蛋商行',
        address: '高雄市三民區大順一路123號',
        tel: '(07)1234-0009',
        googleUrl: 'https://reurl.cc/Ker5Wn',
    },
    {
        id: 2,
        name: '福壽雞蛋專賣店',
        address: '嘉義縣阿里山鄉新中橫公路',
        tel: '(05)2777-888',
        googleUrl: 'https://reurl.cc/Ker5Wn',
    },
    {
        id: 3,
        name: '春風蛋舖',
        address: '台南市安南區四草大道118號',
        tel: '(02)7765-2345',
        googleUrl: 'https://reurl.cc/Rqvakx',
    },
    {
        id: 4,
        name: '豐收雞蛋銷售門市',
        address: '高雄市三民區興山路100號',
        tel: '(02)8823-6789',
        googleUrl: 'https://reurl.cc/Ker5Wn',
    },
    {
        id: 5,
        name: '忘憂農夫市集',
        address: '屏東縣恆春鎮坑內路',
        tel: '(03)5566-6789',
        googleUrl: 'https://reurl.cc/lQv3Ov',
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

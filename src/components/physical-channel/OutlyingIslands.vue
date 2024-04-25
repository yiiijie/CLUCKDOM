<script setup>
import { ref } from 'vue';
import StoreCard from '@/components/physical-channel/StoreCard.vue';

const northernStores = ref([
    {
        id: 1,
        name: '藍海雞蛋坊',
        address: '蘭嶼鄉東清村123號',
        tel: '(089)212345',
        googleUrl:'https://reurl.cc/OMkoj3',
    },
    {
        id: 1,
        name: '島嶼雞蛋行',
        address: '蘭嶼鄉椰鄉村901號',
        tel: '(089)212789',
        googleUrl:'https://reurl.cc/OMkoj3',
    },
    {
        id: 2,
        name: '藍天白雲福利中心',
        address: '綠島鄉南寮村234號',
        tel: '(089)223456',
        googleUrl:'https://reurl.cc/OMkoj3',
    },
    {
        id: 3,
        name: '小確幸生鮮超市',
        address: '綠島鄉環島村456號',
        tel: '(089)234321',
        googleUrl:'https://reurl.cc/OMkoj3',
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

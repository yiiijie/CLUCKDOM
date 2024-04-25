<script setup>
import { ref } from 'vue';
import StoreCard from '@/components/physical-channel/StoreCard.vue';

const northernStores = ref([
    {
        id: 1,
        name: '森林雞舍雞蛋販賣店',
        address: '台中市南屯區春天路168號',
        tel: '(04)7890-1234',
        googleUrl:'https://reurl.cc/jWg2ND',
    },
    {
        id: 2,
        name: '北屯自然概念有機生活館 ',
        address: '台中市北屯區文心路四段99號',
        tel: '(04)6543-2109',
        googleUrl:'https://reurl.cc/jWg2ND',
    },
    {
        id: 3,
        name: '天然生鮮超市 苗栗店',
        address: '苗栗縣苗栗市南昌路三段58號',
        tel: '(037)456-0987',
        googleUrl:'https://reurl.cc/jWg2ND',
    },
    {
        id: 4,
        name: '綠生機蛋品坊 日月潭店',
        address: '南投縣魚池鄉中山路599號',
        tel: '(04)2266-1234',
        googleUrl:'https://reurl.cc/jWg2ND',
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
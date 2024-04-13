<script setup>
import { reactive } from 'vue';
import useContentVisibility from '@/composables/useContentVisibility';

const{ isLargeTablet, showContent, toggleContentVisibility } = useContentVisibility();

const sets = reactive([
    {   id: '1',
        index: '0',
        name: '頂級悠活好蛋組',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'別猶豫了！快送給你心愛的人，他們一定會深深喜歡上！',
        content1:'頂級好蛋10入 1盒',
        content2:'悠活好蛋10入 1盒',
        content3:'贈 手工雞蛋布丁3入 1盒',
        currentPrice:'NT$399',
        originalPrice:'NT$450',
    },
    {   id: '2',
        index: '1',
        name: '頂級田園好蛋組',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'同時享受「頂級好蛋」、「田園好蛋」雙品種！全家老小都難以抗拒的完美組合。',
        content1:'頂級好蛋10入 1盒',
        content2:'田園好蛋10入 1盒',
        content3:'贈 手工雞蛋布丁3入 1盒',
        currentPrice:'NT$450',
        originalPrice:'NT$590',
    },
    {   id: '3',
        index: '2',
        name: '田園悠活好蛋組',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'媽媽們的首選禮盒，每餐都充滿豐富蛋白質的最佳組合。',
        content1:'田園好蛋10入 1盒',
        content2:'悠活好蛋10入 1盒',
        content3:'贈 手工雞蛋布丁3入 1盒',
        currentPrice:'NT$450',
        originalPrice:'NT$590',
    },
    {   id: '4',
        index: '3',
        name: '幸福悠活好蛋組',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'無論是獨自品嚐還是與親友分享，都為你開啟幸福的一天。',
        content1:'幸福好蛋10入 1盒',
        content2:'悠活好蛋10入 1盒',
        content3:'贈 手工雞蛋布丁3入 1盒',
        currentPrice:'NT$550',
        originalPrice:'NT$690',
    },
    {   id: '5',
        index: '4',
        name: '頂咕咕好蛋三重奏之不能沒有你',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'僅在農場裡販賣的禮盒，三種雞蛋一次滿足！各千萬別錯過囉。',
        content1:'頂級好蛋10入 1盒',
        content2:'悠活好蛋10入 1盒',
        content3:'田園好蛋10入 1盒',
        currentPrice:'NT$699',
        originalPrice:'NT$850',
    },
    {   id: '6',
        index: '5',
        name: '頂咕咕限量禮盒',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'特殊節日才販售的頂級限量禮盒，手刀不快點就買不到囉！',
        content1:'頂級好蛋10入 2盒',
        content2:'悠活好蛋10入 1盒',
        content3:'幸福好蛋10入 1盒',
        currentPrice:'NT$890',
        originalPrice:'NT$1100',
    },
])
</script>

<template>
    <img class="set_wave" src="/images/products/wave.png" alt="wave">
    <section class="set">
        <section class="sets_inner">
            <div class="title">
                <div class="subtitle_icon">
                    <img src="/images/products/sets/subtitle_dialog.svg" alt="副標">
                </div>
                <h2>美食愛好者必選<br>口感極棒的鷄蛋禮盒</h2>
            </div>
            <ul class="sets_container" >
                <li v-for="(set, index) in sets" :key="set.id">
                    <div class="set_img">
                        <img :src="set.imgPath" alt="產品圖">
                    </div>
                    <div class="set_info">
                        <h4 class="set_name">{{ set.name }}</h4>
                        <p class="set_intro">{{ set.setIntro }}</p>
                        <div class="set_contents" @click="toggleContentVisibility(index)">
                            <button v-show="showContent !== index && !isLargeTablet"
                            class="see_more_btn">
                                <span>組合內容物</span>
                                <font-awesome-icon icon="angle-down" class="arrow"/>
                            </button>
                            <button 
                            v-show="showContent === index && !isLargeTablet"
                            class="see_less_btn">
                                <span>組合內容物</span>
                                <font-awesome-icon icon="angle-up" class="arrow"/>
                            </button>
                            <div class="contents"
                            v-show="showContent === index || isLargeTablet">
                                <span>
                                    <font-awesome-icon icon="fa-regular fa-square-check" class="check_box"/>
                                    {{ set.content1 }}
                                </span>
                                <span>
                                    <font-awesome-icon icon="fa-regular fa-square-check" class="check_box"/>
                                    {{ set.content2 }}
                                </span>
                                <span>
                                    <font-awesome-icon icon="fa-regular fa-square-check" class="check_box"/>
                                    {{ set.content3 }}
                                </span>
                            </div>
                        </div>
                        <div class="price_container">
                            <div class="price">
                                <span>{{ set.currentPrice }}</span>
                                <span>{{ set.originalPrice }}</span>
                            </div>
                            <RouterLink :to="'/'" >
                                <button type="button" class="cart_btn">
                                    <font-awesome-icon icon="cart-shopping" class="cart_icon" />
                                    <span>加入購物車</span>
                                </button>
                            </RouterLink>       
                        </div>
                    </div>   
                </li>
            </ul>
        </section>
    </section>
</template>

<style scoped lang="scss">
    @import "@/assets/scss/components/products-set/products-set";
</style>
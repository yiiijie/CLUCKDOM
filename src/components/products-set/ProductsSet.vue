<script setup>
import { reactive } from 'vue';


const sets = reactive([
    {   id: '1',
        name: '頂級悠活好蛋組合',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'如果還在猶豫的話，這組合絕對是完美選擇！快送給你心愛的人，他們一定會深深喜歡上！',
        content1:'頂級好蛋10入 1盒',
        content2:'悠活好蛋10入 1盒',
        content3:'贈 手工雞蛋布丁3入 1盒',
        currentPrice:'NT$399',
        originalPrice:'NT$450',
    },
    {   id: '2',
        name: '頂級田園好蛋組合',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'可以同時享受“頂級好蛋”、“田園好蛋”雙品種！全家老小都難以抗拒的完美組合。',
        content1:'頂級好蛋10入 1盒',
        content2:'田園好蛋10入 1盒',
        content3:'贈 手工雞蛋布丁3入 1盒',
        currentPrice:'NT$450',
        originalPrice:'NT$590',
    },
    {   id: '3',
        name: '田園悠活好蛋組合',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'如果還在猶豫的話，這組合絕對是完美選擇！快送給你心愛的人，他們一定會深深喜歡上！',
        content1:'田園好蛋10入 1盒',
        content2:'悠活好蛋10入 1盒',
        content3:'贈 手工雞蛋布丁3入 1盒',
        currentPrice:'NT$450',
        originalPrice:'NT$590',
    },
    {   id: '4',
        name: '幸福悠活好蛋組合',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'如果還在猶豫的話，這組合絕對是完美選擇！快送給你心愛的人，他們一定會深深喜歡上！',
        content1:'幸福好蛋10入 1盒',
        content2:'悠活好蛋10入 1盒',
        content3:'贈 手工雞蛋布丁3入 1盒',
        currentPrice:'NT$550',
        originalPrice:'NT$690',
    },
    {   id: '5',
        name: '頂咕咕好蛋三重奏',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'如果還在猶豫的話，這組合絕對是完美選擇！快送給你心愛的人，他們一定會深深喜歡上！',
        content1:'頂級好蛋10入 1盒',
        content2:'悠活好蛋10入 1盒',
        content3:'田園好蛋10入 1盒',
        currentPrice:'NT$699',
        originalPrice:'NT$850',
    },
    {   id: '6',
        name: '頂咕咕限量禮盒',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'如果還在猶豫的話，這組合絕對是完美選擇！快送給你心愛的人，他們一定會深深喜歡上！',
        content1:'頂級好蛋10入 2盒',
        content2:'悠活好蛋10入 1盒',
        content3:'幸福好蛋10入 1盒',
        currentPrice:'NT$890',
        originalPrice:'NT$1100',
    },
])
</script>

<template>

    <section class="sets_inner">
        <div class="title">
            <div class="subtitle_icon">
                <img src="/images/products/sets/subtitle_dialog.svg" alt="副標">
            </div>
            <h2>美食愛好者必選<br>口感極棒的鷄蛋禮盒</h2>
        </div>
        <ul class="sets_container" >
            <li v-for="set in sets" :key="set.id">
                <div class="set_img">
                    <img :src="set.imgPath" alt="產品圖">
                </div>
                <!-- 禮盒的資訊內容 -->
                <div class="set_info">
                    <span class="set_name">{{ set.name }}</span>
                    <div class="border_line"></div>
                    <p class="set_intro">{{ set.setIntro }}</p>
                    <div class="contents">
                        <span>
                            <font-awesome-icon icon="square-check" class="check_box"/>
                            {{ set.content1 }}
                        </span>
                        <span>
                            <font-awesome-icon icon="square-check" class="check_box"/>
                            {{ set.content2 }}
                        </span>
                        <span>
                            <font-awesome-icon icon="square-check" class="check_box"/>
                            {{ set.content3 }}
                        </span>
                    </div>
                    <div class="price_container">
                        <div class="price">
                            <span>1組</span>
                            <span>{{ set.currentPrice }}</span>
                            <span>{{ set.originalPrice }}</span>
                        </div>
                        <RouterLink :to="'/'" >
                            <button type="button" class="cart_btn">購入</button>
                        </RouterLink>       
                    </div>
                </div>   
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
    @import "@/assets/scss/components/products-set/products-set";
</style>
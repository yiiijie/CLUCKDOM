<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const isFirstDialog = (index) => index === 0;

const steps = reactive([
    {
        index: 0,
        imgPath:'/images/about/chart/logo_red.svg',
        subtitle:'一路呵護直到送至顧客手中',
        content:'雞蛋王國從雛鳥的培養到出貨一貫都在自家的農場進行，穩定地供應新鮮的雞蛋。',
    },
    {
        index: 1,
        imgPath:'/images/about/chart/chick.png',
        subtitle:'雛雞們的溫馨旅程',
        content:'小雞們來到了雞蛋王國的養雞場，嚐了他們的第一餐。在孵化後的前三天，若小雞未及時獲得餵養會變得虛弱無力，由於雛雞對寒冷極為敏感，所以我們特別保持雛雞室溫度維持在約30度左右。',
    },
    {
        index: 2,
        imgPath:'/images/about/chart/breeding.png',
        subtitle:'羽翼初長',
        content:'柔軟黃色的小雛雞只有四天大，他們迅速地長出了羽毛，50天後他們將離開雞舍。在接下來的六個月裡，它們享受著吃飯和放鬆的時光，直到他們準備好開始下蛋。',
    },
    {
        index: 3,
        imgPath:'/images/about/chart/laying.png',
        subtitle:'孵化成熟',
        content:'大約5個月開始產小雞蛋，但是這些蛋還不能賣給顧客。約6個月開始它們開始生產可銷售的雞蛋。',
    },
    {
        index: 4,
        imgPath:'/images/about/chart/picking.png',
        subtitle:'人工收集',
        content:'母雞通常在上午11點進入產蛋高峰期，此時會以手動方式逐一收集雞蛋。儘管手動收集比使用機器更費時費力，但這樣的方式有助於母雞每天在雞舍中相互見面。此外，手動收集雞蛋時可以避免碰撞，而使用機器可能會導致此情況。',
    },
    {
        index: 5,
        imgPath:'/images/about/chart/washing.png',
        subtitle:'外殼的細緻呵護',
        content:'在去除外殼上的裂縫後，接著進行對外殼的仔細清洗程序。這個過程確保外殼的衛生潔淨，維持雞蛋的品質。',
    },
    {
        index: 6,
        imgPath:'/images/about/chart/selection.png',
        subtitle:'鷄蛋選別',
        content:'將雞蛋分為S、M和L三種尺寸，提供更精確的食材選擇。',
    },
    {
        index: 7,
        imgPath:'/images/about/chart/weighing.png',
        subtitle:'稱重和包裝',
        content:'根據箱子的尺寸，我們會調整雞蛋的數量，確保每箱都是符合要求的重量。並使雞蛋安全無損地運送到銷售點和消費者手中。',
    },
    {
        index: 8,
        imgPath:'/images/about/chart/shipment.png',
        subtitle:'新鮮直達',
        content:'我們以農場直銷的方式運作，直接將雞蛋運送至餐館、蛋糕店和批發商。我們也歡迎客戶們直接造訪雞蛋王國，親自選購新鮮的雞蛋。',
    },
])

</script>

<template>
    <!-- 從培養到雞蛋出貨的流程圖 -->
    <section class="chart">
        <img class="wave02" src="/images/about/chart/img_wave02.svg" alt="wave">
        <ul class="chart_inner">
            <li v-for="(step, index) in steps" :key="step.index" class="step">
                <figure>
                    <p v-if="isFirstDialog(index)" class="first_dialog">＼ 從培養到出貨！ ／</p>
                    <img :src="step.imgPath" alt="養雞的過程圖">
                </figure>
                <span class="subtitle">{{ step.subtitle }}</span>             
                <figcaption class="content">{{ step.content }}</figcaption>
            </li>

            <!-- 按鈕 前往產品頁-->
            <div class="btn_to_products">
                <div class="illust">
                    <img src="/images/about/chart/to_page_illust1.svg" alt="">
                    <img src="/images/about/chart/to_page_illust2.svg" alt="">
                </div>
                <RouterLink :to="'/products'" class="to_products_page">
                    <span>前往線上購物商店</span>               
                    <font-awesome-icon class="arrow_right" :icon="['fas', 'arrow-right']" />
                </RouterLink>
            </div>
        </ul>
    </section>

</template>

<style lang="scss">
@import "@/assets/scss/components/farming-chart/farming-chart";
</style>

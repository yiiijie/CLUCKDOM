<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useContentVisibility from '@/composables/useContentVisibility';

const router = useRouter();
const isFirstDialog = (index) => index === 0;
const{ isLargeTablet, showContent, toggleContentVisibility } = useContentVisibility();

const steps = reactive([
    {
        index: 0,
        imgPath:'/images/about/chart/logo_red.svg',
        stepTitle:'呵護至顧客手中',
        content:'雞蛋王國從雛鳥的培養到出貨一貫都在自家的農場進行，以確保穩定地供應新鮮的雞蛋。',
    },
    {
        index: 1,
        imgPath:'/images/about/chart/chick.png',
        stepTitle:'雛鷄們的冒險旅程',
        content:'小雞們來到了雞蛋王國的養雞場，嚐了第一餐。在孵化後的前三天，若小雞未及時獲得餵養會變得虛弱無力，由於雛雞對寒冷極為敏感，所以我們特別保持雛雞室溫度維持在約30度左右。',
    },
    {
        index: 2,
        imgPath:'/images/about/chart/breeding.png',
        stepTitle:'羽翼初長',
        content:'柔軟黃色的小雛雞只有四天大，他們迅速地長出了羽毛，50天後他們將離開雞舍。在接下來的六個月裡，它們享受著吃飯和放鬆的時光，直到他們準備好開始下蛋。',
    },
    {
        index: 3,
        imgPath:'/images/about/chart/laying.png',
        stepTitle:'孵化成熟',
        content:'大約5個月開始產小雞蛋，但是這些蛋還不能賣給顧客。約6個月開始它們開始生產可銷售的雞蛋。',
    },
    {
        index: 4,
        imgPath:'/images/about/chart/picking.png',
        stepTitle:'人工收集',
        content:'母雞通常在上午11點進入產蛋高峰期，此時以手動方式逐一收集雞蛋。雖然手動收集非常費時費力，但能保持母雞之間的互動，並避免碰撞情況。'
    },
    {
        index: 5,
        imgPath:'/images/about/chart/washing.png',
        stepTitle:'外殼的細緻呵護',
        content:'在去除外殼上的裂縫後，接著進行對外殼的仔細清洗程序。這個過程確保外殼的衛生潔淨，維持雞蛋的品質。',
    },
    {
        index: 6,
        imgPath:'/images/about/chart/selection.png',
        stepTitle:'鷄蛋選別',
        content:'將雞蛋分為S、M和L三種尺寸，提供更精確的食材選擇。',
    },
    {
        index: 7,
        imgPath:'/images/about/chart/weighing.png',
        stepTitle:'稱重和包裝',
        content:'根據箱子的尺寸，我們會調整雞蛋的數量，確保每箱都是符合要求的重量。並使雞蛋安全無損地運送到銷售點和消費者手中。',
    },
    {
        index: 8,
        imgPath:'/images/about/chart/shipment.png',
        stepTitle:'新鮮直達',
        content:'我們以農場直銷的方式運作，直接將雞蛋運送至餐館、蛋糕店和批發商。我們也歡迎客戶們直接造訪雞蛋王國，親自選購新鮮的雞蛋。',
    },
])

</script>

<template>
    <img class="wave" src="/images/about/chart/wave.svg" alt="wave">
    <section class="chart">
        <ul class="chart_inner">
            <li v-for="(step, index) in steps"
            :key="step.index" class="step"
            @click="toggleContentVisibility(index)">
                <figure class="pic">
                    <p v-if="isFirstDialog(index)"
                    class="first_dialog"
                    data-aos="fade-up">
                        ＼ 從培養到出貨！ ／
                    </p>
                    <img :src="step.imgPath" alt="養雞的過程圖" >
                </figure>
                <span class="step_title">{{ step.stepTitle }}</span>             
                <figcaption class="content"
                v-show="showContent === index || isLargeTablet">
                    {{ step.content }}
                </figcaption>
                <button class="see_more_btn" v-show="!isLargeTablet">
                    <font-awesome-icon icon="plus"
                    v-show="showContent !== index && !isLargeTablet"/>
                    <font-awesome-icon icon="angle-up"
                    v-show="showContent === index && !isLargeTablet"/>
                </button>
            </li>

            <div class="btn_to_products">
                <div class="illust" data-aos="fade-up">
                    <img src="/images/about/chart/to_prd_page_hen.svg" alt="裝飾圖">
                </div>
                <RouterLink :to="'/products'" class="to_products_page">
                    <button>
                        <span>前往線上購物商店</span>
                        <font-awesome-icon class="arrow_right" :icon="['fas', 'arrow-right']" />
                    </button>               
                </RouterLink>
            </div>
        </ul>
    </section>
</template>

<style lang="scss">
@import "@/assets/scss/components/farming-chart/farming-chart";
</style>

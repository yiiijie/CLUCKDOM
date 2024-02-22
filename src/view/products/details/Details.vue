<script setup>
import { ref, reactive } from "vue";

const imgGroup = reactive([
  {
    id: 1,
    imgPath: "/images/products/list/happiness_eggs.jpg",
  },
  {
    id: 2,
    imgPath: "/images/products/list/healthy_eggs.jpg",
  },
  {
    id: 3,
    imgPath: "/images/products/list/leisurely_eggs.jpg",
  },
  {
    id: 4,
    imgPath: "/images/products/list/premium_eggs.jpg",
  },
]);

const count = ref(1)

// button按到大於1000會沒反應(最高1000)
const increment = () => {
  if (count.value < 1000) {
    count.value++;
  }
}

// button按到小於1會沒反應
const decrement = () => {
  if (count.value > 1 ) {
    count.value--;
  }
}

// 控制input裡只能輸入1~1000的整數
const handleInput = (event) => {
  let value = parseInt(event.target.value);
  
  if (value < 1 ) {
    value = 1;
  }
  if (value > 1000) {
    value = 1000;
  }
  count.value = value;
};


// const prdInfo = ref([
//   {
//     title:'放牧土雞蛋｜幸福好蛋'
//   }
// ])
</script>

<template>
  <div>
    <main>
      <section class="prd_container">
        <div class="prd_photos">
          <!-- 大圖 -->
          <div class="main_img">
            <img src="/images/products/list/happiness_eggs.jpg" alt="商品圖" />
          </div>
          <!-- 小圖 -->
          <div class="small_img_group">
            <div v-for="img in imgGroup" :key="img.id">
              <img :src="img.imgPath" alt="商品圖" />
            </div>
          </div>
        </div>
        <div class="prd_info">
          <h1 class="prd_name">放牧土雞蛋｜幸福好蛋（10入）</h1>
          <!-- 產品特點 -->
          <p class="prd_features">
            ✦ 蛋香飄逸、營養豐富
            <br />
            ✦ 嚴選新鮮蛋，絕無人工添加
            <br />
            ✦ 蛋香濃郁，蛋黃鮮美，蛋白柔滑绵密
          </p>
          <!-- 產品描述 -->
          <p class="prd_slogan">
            幸福好蛋是由母雞吃著高品質、營養豐富的有機飼料所產的蛋，裡面包括有機穀物、天然植物蛋白和多種維生素。
          </p>
          <!-- 售價 -->
          <div class="prd_price">
            <span class="title">優惠售價</span>
            <span class="current_price">NT$399</span>
            <del class="original_price">NT$450</del>
          </div>
          <label class="quantity_title">數量</label>
          <!-- 數量加減器 -->
          <div class="quantity_selector">
            <button type="button" @click="decrement">
              <font-awesome-icon icon="minus" />
            </button>
            <input type="number" v-model="count" @input="handleInput" class="hide_arrows" >
            <button type="button" @click="increment">
              <font-awesome-icon icon="plus" />
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/pages/details";
</style>

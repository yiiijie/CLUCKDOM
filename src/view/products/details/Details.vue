<script setup>
import { ref } from "vue";
const count = ref(1);

// button按到大於1000會沒反應(最高1000)
const increment = () => {
  if (count.value < 1000) {
    count.value++;
  }
};

// button按到小於1會沒反應
const decrement = () => {
  if (count.value > 1) {
    count.value--;
  }
};

// 控制input裡只能輸入1~1000的整數
// 如果輸入值小於1，則將其值設為1
const handleInput = (event) => {
  let value = parseInt(event.target.value);

  if (value < 1) {
    value = 1;
  }
  if (value > 1000) {
    value = 1000;
  }
  count.value = value;
};

// 點擊小圖換大圖
const mainImgSrc = ref("/images/details/image_1.jpg");
const imgGroup = ref([
  { imgSrc: "/images/details/image_1.jpg" },
  { imgSrc: "/images/details/image_2.jpg" },
  { imgSrc: "/images/details/image_3.jpg" },
  { imgSrc: "/images/details/image_4.jpg" },
]);

const changeMainImage = (src) => {
  mainImgSrc.value = src;
};
</script>

<template>
  <div>
    <main>
      <section class="prd_inner">
        <div class="prd_photos">
          <!-- 大圖 -->
          <div id="main_img">
            <img :src="mainImgSrc" alt="商品圖" />
          </div>
          <!-- 小圖 -->
          <div class="small_img_group">
            <div
              v-for="(img, index) in imgGroup"
              :key="index"
              @click="changeMainImage(img.imgSrc)">
              <img :src="img.imgSrc" alt="商品圖" />
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
            <input
              type="number"
              v-model="count"
              @input="handleInput"
              class="hide_arrows"
            />
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
  main {
      background-color: $productsBgColor;
  }

  section.prd_inner {
    max-width: $basewidth;
    width: 85%;
    display: flex;
    margin: auto;
    padding: 270px 0;

    div.prd_photos {
      width: 65%;
      margin-right: 5%;

      div#main_img {
        position: relative;
        width: 100%;
        padding-top: 100%; // 和width的%數一致，使長寬一樣長
        // 當容器的高度是0，那麼 padding 會撐開容器所有的高度，藉此做出一個正方形的容器。

        img {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          object-fit: cover; 
          object-position: center;
          border-radius: 10px;
        }
      }

      div.small_img_group {
        display: flex;
        padding-top: 20px;
        column-gap: 10px;

        img {
          width: 80px;
          height: auto;
          aspect-ratio: 1 / 1; 
          object-fit: cover;
          object-position: center;
          border-radius: 10px;
        }
      }
    }

    div.prd_info {

      h1.prd_name{
        @include product_name_font;
        font-size: $h4Fz_PC;
      }

      p.prd_features {
        @include paragraph;
        color: $secondaryText;
        margin: 20px 0;
      }

      p.prd_slogan {
        @include paragraph;
      }

      div.prd_price {
        margin: 40px 0 30px;

        span.title {
          @include paragraph;
          display: block;
        }
        span.current_price {
          @include price_font;
          color: $primaryColor;
          padding-right: 10px;
        }
        del.original_price {
          @include content_font;
          color: $grayText;
          letter-spacing: 0.05rem;
        }
      }

      label.quantity_title {
        @include paragraph;
      }

      div.quantity_selector {
        width: 30%;
        display: flex;
        padding: 10px;
        justify-content: space-between;
        color: $primaryText;
        border-radius: 5px;
        border: 1px solid $primaryText;
        
        button {
          @include content_font;
          display: block;
          cursor: pointer;
          border: none;
          background: none;
        }

        input {
          width: 100%;
          display: block;
          text-align: center;
          font-size: $pFz_PC;
          font-family: $font_price;
          border: none;
          color: $primaryText;
          background: none;
        }
      }
    }
  }
</style>

# CLUCKDOM 雞蛋王國
# [DEMO](https://cluckdom-2c78f.web.app/)

**桌面版**

![桌機版](https://github.com/yiiijie/CLUCKDOM/assets/133617070/6707c585-acd9-4879-94ea-deb914717199)

**手機版**

<img width="412" alt="截圖 2024-05-26 凌晨4 07 52" src="https://github.com/yiiijie/CLUCKDOM/assets/133617070/a1663ad5-7fbf-432b-931f-fe7bb6f1a668">

## **專案簡介**
練習使用 Vue3 開發的雞蛋網站，以 Vite 建立開發環境，使用 JSON Server 模擬後端資料庫、Vue Router 處理路由和實現 SPA 單頁應用。

### **目錄**
* 首頁 - 圖片自動輪播、Navbar 轉換、牧場介紹、產品輪播
* 關於我們 - 圖片輪播、翻牌效果、滾動視差效果、從培養雞隻到出貨的流程圖 
* 精選商品 - 動態背景滾動、產品清單、點擊進入產品詳情資訊、點擊下拉查看成分表、周邊禮盒清單
* 產品詳情 - 點小圖換大圖、查看產品詳細資訊，並選擇購買數量
* 實體通路 - 全台通路門市、Google Map 自訂圖標
* 聯絡我們 - 表單輸入驗證、彈窗通知
* 會員 - 表單輸入驗證、註冊及登入、支持 Google 第三方登入
* 購物車 - 此功能尚未完成，正在努力開發中 🎯

## **使用技術**
* Vite - 快速建立專案環境
* Vue Components - 使用 props 和 emit 實現元件間的資料傳遞
* Vue Router - 統一管理應用程式路由
* Firebase Authentication - Google 第三方登入，實現用戶身份驗證
* JSON Server - 模擬 RESTful API
* JSON Server Auth - 模擬 JWT 會員身份驗證
* Axios - 用於處理 AJAX 請求，從後端獲取資料
* HTML5、CSS3、SCSS  - 純手刻 CSS 樣式並具有 RWD 響應式設計
  
## **使用套件及工具**
* VeeValidate 表單驗證
* Vue3-carousel 輪播套件
* AOS scroll 動畫效果
* vue3-google-map

## **前台導覽**

### **首頁：**
圖片自動輪播、Navbar 轉換、牧場介紹、產品輪播

> 當使用者向下滾動超過 250px 時，改為顯示扁型Navbar

![扁型Navbar](https://github.com/yiiijie/CLUCKDOM/assets/133617070/6a3f21a0-1c0a-45ea-bccc-2bee715d2953)



### **關於我們：**
圖片輪播、翻牌效果、滾動視差效果、從培養雞隻到出貨的流程圖 

> CSS 翻牌效果

![CSS翻牌效果](https://github.com/yiiijie/CLUCKDOM/assets/133617070/465a6347-81d5-48c5-81f4-a33d4909535c)


從培養雞隻到出貨的流程圖 

> 當螢幕尺寸小於768px時，使用者需點擊按鈕以展開內文，避免頁面過長

![從培養雞隻到出貨的流程圖](https://github.com/yiiijie/CLUCKDOM/assets/133617070/58d954aa-9110-463d-8483-2f1f6f844eb1)


### **精選商品：**
動態背景滾動、產品清單、點擊進入產品詳情資訊、點擊下拉查看成分表、周邊禮盒清單

![產品清單](https://github.com/yiiijie/CLUCKDOM/assets/133617070/6734cc0c-5969-4014-bc03-6a4dbf194d65)

周邊禮盒清單

> 當螢幕尺寸小於768px時，使用者需點擊按鈕以展開組合內容物，避免頁面過長

![周邊禮盒清單](https://github.com/yiiijie/CLUCKDOM/assets/133617070/e10a43e6-c959-45eb-b045-2ecfe472f621)


### **產品詳情：**
點小圖換大圖、查看產品詳細資訊，並選擇購買數量

> 數量最少為1，最多為1000

![商品詳細資訊](https://github.com/yiiijie/CLUCKDOM/assets/133617070/7d842516-2829-4a4e-b8cf-00036f7ff815)

### **實體通路：**
全台通路門市、Google Map 自訂圖標

> 透過標籤切換動態元件

![通路門市](https://github.com/yiiijie/CLUCKDOM/assets/133617070/e8c8a51a-7b8e-4cd7-ac19-54b2c7900c8a)
![Google Map 自訂圖標](https://github.com/yiiijie/CLUCKDOM/assets/133617070/af755ad0-a747-4ef3-b0a1-129245196174)

### **聯絡我們：**
表單輸入驗證

> 使用 Yup 驗證工具定義表單規則

![表單輸入驗證](https://github.com/yiiijie/CLUCKDOM/assets/133617070/e73a4494-6794-4b7c-9548-a31ba236bf50)

> 表單送出成功或失敗皆會跳出彈窗吿知使用者

![表單送出成功彈窗](https://github.com/yiiijie/CLUCKDOM/assets/133617070/df1a7a0e-df88-4391-b498-b286c5741bff)
![表單送出失敗彈窗](https://github.com/yiiijie/CLUCKDOM/assets/133617070/28cac253-2b0a-4b99-8a00-dc3f4a3ad1d4)


### **會員註冊及登入：**
表單輸入驗證、會員註冊、會員登入、支持 Google 第三方登入

![會員註冊](https://github.com/yiiijie/CLUCKDOM/assets/133617070/dd6d9734-278b-4243-9f9c-a92155731569)

> 註冊時，輸入的密碼與確認密碼需一致

![密碼不匹配](https://github.com/yiiijie/CLUCKDOM/assets/133617070/d380ee33-ac57-46dd-ab24-ef48596a9b31)

> 若註冊成功，則導回登入頁進行登入

![會員登入](https://github.com/yiiijie/CLUCKDOM/assets/133617070/5c51f400-8c10-45c9-a801-a01f39c5285b)

> 若 Google 登入成功，則導回首頁，並於右上方顯示使用者名稱

![使用者登入狀態顯示](https://github.com/yiiijie/CLUCKDOM/assets/133617070/dc3e1315-bc9d-4506-b947-3a49d53bbb2f)



## **持續更新**
🎯 購物車功能持續開發中

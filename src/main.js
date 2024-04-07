import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import axios from "axios";
import AOS from "aos";
// 導入 AOS 的 CSS 樣式
import "aos/dist/aos.css";
// 引入 VeeValidate 元件跟功能
import {
  Field as VeeField,
  Form as VeeForm,
  ErrorMessage,
  defineRule,
  configure,
} from "vee-validate";
// 引入 VeeValidate 的驗證規則
import * as AllRules from "@vee-validate/rules";

// 初始化 AOS 庫
AOS.init();
// AOS的全域設定
// https://github.com/michalsnik/aos?tab=readme-ov-file#1-initialize-aos
AOS.init({
  once: true, // 動畫是否應該只在向下滾動時觸發一次
  anchorPlacement: "top-bottom",
});
// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false, // 輸入字元立即進行驗證
  validateOnModelUpdate: true,
});


// fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
// add svg core
import { library } from "@fortawesome/fontawesome-svg-core"
// add some free styles
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far)


//firebase
import { firebaseApp } from "@/services/firebase.js";
firebaseApp;

const app = createApp(App)

// 掛載 Global 的 VeeValidate 元件
app.component("VeeField", VeeField);
app.component("VeeForm", VeeForm);
app.component('ErrorMessage', ErrorMessage)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app")

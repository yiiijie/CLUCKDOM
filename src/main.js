import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"      
import AOS from "aos";
// 導入 AOS 的 CSS 樣式
import "aos/dist/aos.css";
// 初始化 AOS 庫
AOS.init();

// AOS的全域設定
// https://github.com/michalsnik/aos?tab=readme-ov-file#1-initialize-aos
AOS.init({
  once: true, // 動畫是否應該只在向下滾動時觸發一次
  anchorPlacement: "top-bottom",
});


// fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
// add svg core
import { library } from "@fortawesome/fontawesome-svg-core"
// add some free styles
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fab, fas)


//firebase
import { firebaseApp } from "@/services/firebase.js";
firebaseApp;

const app = createApp(App)


app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)


app.mount("#app")

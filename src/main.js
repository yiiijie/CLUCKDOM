import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "./router"

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


const app = createApp(App)


app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)


app.mount("#app")

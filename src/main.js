import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from "./router/router.js";
import 'bulma/css/bulma.min.css'

const app = createApp(App)

app.use(router)
app.use(store)


app.mount('#app')

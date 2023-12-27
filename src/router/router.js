import HelloWorld from "../components/HelloWorld.vue";
import About from "../views/About.vue";
import App from "../App.vue";
import { createRouter, createWebHashHistory } from 'vue-router'
import Category from "../views/Category.vue";
import Nasa from "../views/Nasa.vue";

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/about', component: About },
    { path: '/nasa', redirect: '/nasa1' },
    { path: '/nasa1', component: Nasa },
    { path: '/category', component: Category },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router
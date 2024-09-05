import { createWebHistory, createRouter } from "vue-router";
import Title from "../components/Title.vue";
import About from "../components/About.vue";
import Portfolio from "../components/Portfolio.vue";
import Detail from "../components/Detail.vue";
const router = createRouter({
    history: createWebHistory(), // HTML5 모드 사용
    routes: [
        { path: '/', component: Title },
        { path: '/about', component: About },
        { path: '/portfolio', component: Portfolio },
        { path: '/detail/:id', component: Detail },
    ]
});

export default router;
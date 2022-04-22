import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";
import HomePage from "./components/HomePage.vue";
import Project from "./components/Project.vue";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/home",
        name: "HomePage",
        component: HomePage,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

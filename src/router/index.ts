import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/test",
    },
    {
        path: "/test",
        name: "test",
        component: () => import("../pages/test/index.vue"),
    },
    {
        path: "/h5Face",
        name: "h5Face",
        component: () => import("../pages/h5Face/index.vue"),
    },
    {
        path: "/exchange",
        name: "exchange",
        component: () => import("../pages/exchange/index.vue"),
    },
];
const router = createRouter({
    history,
    routes
})
export default router
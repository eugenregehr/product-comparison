import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import InfoPage from "./components/InfoPage.vue";

const routes: Array<RouteRecordRaw> = [{ path: "/info", component: InfoPage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

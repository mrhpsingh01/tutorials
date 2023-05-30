import { createRouter, createWebHistory } from "vue-router";
import OptionsView from "../views/OptionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "options",
      component: OptionsView,
    },
    {
      path: "/composition",
      name: "composition",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CompositionView.vue"),
    },
    {
      path: "/compositionReactive",
      name: "compositionREactive",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CompositionReactiveView.vue"),
    },
  ],
});

export default router;

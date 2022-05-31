import { createWebHashHistory, createRouter } from "vue-router";
import Money from "../components/Money.vue";
import Labels from "../components/Labels.vue";
import Statistics from "../components/Statistics.vue";

const routes = <Array<any>>[
  { path: "/", redirect: "/money" },

  { path: "/money", component: Money },
  { path: "/labels", component: Labels },
  { path: "/statistics", component: Statistics },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../components/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;

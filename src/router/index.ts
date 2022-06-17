import { createWebHashHistory, createRouter } from "vue-router";

import EditLabel from "../components/EditLabel.vue";

const routes = <Array<any>>[
  { path: "/", redirect: "/money" },
  { path: "/money", component: () => import("../components/Money.vue") },
  {
    path: "/labels",
    component: () => import("../components/Labels.vue"),
    // children: [
    //   {
    //     path: "edit/:id",
    //     component: () => import("../components/EditLabel.vue"),
    //   },
    // ],
  },
  {
    path: "/labels/edit/:id",
    component: () => import("../components/EditLabel.vue"),
  },
  {
    path: "/statistics",
    component: () => import("../components/Statistics.vue"),
  },
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

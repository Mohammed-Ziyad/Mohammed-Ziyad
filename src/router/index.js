import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutMy from "../views/AboutMy.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/services",
  //   name: "services",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import("../views/ServicesView.vue"),
  // },
  // {
  //   path: "/protofolio",
  //   name: "protofolio",
  //   component: () => import("../views/ProtofolioView.vue"),
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/AboutView.vue"),
  // },
  // {
  //   path: "/expertise",
  //   name: "expertise",
  //   component: () => import("../views/ExpertiseView.vue"),
  // },
  // {
  //   path: "/contact",
  //   name: "contact",
  //   component: () => import("../views/ContactView.vue"),
  // },
  {
    path: "/about-my",
    name: "about-my",
    component:AboutMy,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

// Routes (lazy-load des vues)
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: { title: "Accueil — Soft Beauty" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "À propos — Soft Beauty" },
  },
  {
    path: "/gains",
    name: "gains",
    component: () => import("../views/PredictionsView.vue"),
    meta: { title: "À propos — Soft Beauty" },
  },
  {
    path: "/hacks",
    name: "hacks",
    component: () => import("../views/HacksView.vue"),
    meta: { title: "À propos — Soft Beauty" },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ConatactView.vue"),
    meta: { title: "À propos — Soft Beauty" },
  },
  // 404
  {
    path: "/:pathMatch(.)",
    name: "not-found",
    component: {
      template: '<div class="p-8 text-center">Page introuvable</div>',
    },
    meta: { title: "404 — Soft Beauty" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: "smooth" };
  },
});

// Optionnel : titre de page après navigation
router.afterEach((to) => {
  if (to.meta && to.meta.title) document.title = String(to.meta.title);
});

export default router;

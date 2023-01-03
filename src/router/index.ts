import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import { useAuthStore } from "@/stores/auth";
import { ElNotification } from "element-plus";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/product/list",
      name: "product-list",
      component: ProductsView,
    },
    {
      path: "/product/:uuid",
      name: "product-detail",
      component: ProductDetailView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
      meta: {
        protected: true,
      },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
      meta: {
        protected: true,
      },
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore();

  if (to.meta.protected && !auth.isAuth) {
    ElNotification({
      title: "Not logged in",
      message: "Please login into your account first",
      type: "error",
      offset: 75,
    });
    next({ name: "home" });
  }
  next();
});

export default router;

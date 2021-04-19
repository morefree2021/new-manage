import Cookies from "js-cookie";
import Vue from "vue";
import Router from "vue-router";
import store from '../store'

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new Router({
  routes: [
    {
      path: "/login",
      component: () => import("@/views/Login/Login.vue"),
    },
    {
      path: "/",
      component: () => import("@/views/Main"),
      children: [
        {
          path: "/home",
          component: () => import("@/views/Home/Home.vue"),
        },
        {
          path: "/order",
          component: () => import("@/views/Order/Order.vue"),
        },
        {
          path: "/customers",
          component: () => import("@/views/Customers/Customers.vue"),
        },
        {
          path: "/menulist",
          component: () => import("@/views/Menus/MenuList.vue"),
        },
        {
          path: "/addproduct",
          component: () => import("@/views/Menus/AddProduct.vue"),
        },
      ],
    },
  ],
});
router.beforeEach((to, from, next) => {
  store.commit("setMenu");
  let login=Boolean(Cookies.get("login"))
  console.log(login)
  // if(login)
  let login1 = JSON.parse(login);
  if (!login1 && to.path !== "/login") {
    next("/login");
  } else {
    next();
  }
});
export default router;

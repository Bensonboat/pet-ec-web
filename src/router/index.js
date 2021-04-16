import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "@/components/pages/LoginPage/LoginPage";
import MemberCenterPage from "@/components/pages/MemberCenterPage/MemberCenterPage";

import IndexContent from "@/components/layouts/IndexContent";

import HomePage from "@/components/pages/HomePage/HomePage";
import CategoryPage from "@/components/pages/CategoryPage/CategoryPage";

import ProductListPage from "@/components/pages/ProductListPage/ProductListPage";
import ProductDetailPage from "@/components/pages/ProductDetailPage/ProductDetailPage";
import CartPage from "@/components/pages/CartPage/CartPage";

import SearchPage from "@/components/pages/SearchPage/SearchPage";

import OrderDetailPage from "@/components/pages/OrderDetailPage/OrderDetailPage";
Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/search_page",
    name: "SearchPage",
    component: SearchPage
  },
  {
    path: "/member_center_page",
    name: "MemberCenterPage",
    component: MemberCenterPage
  },
  {
    path: "/order_detail_page",
    name: "OrderDetailPage",
    component: OrderDetailPage
  },
  {
    path: "/",
    name: "IndexContent",
    component: IndexContent,
    redirect: {
      name: "CategoryPage"
    },
    children: [{
        path: "/home_page",
        name: "HomePage",
        component: HomePage
      },
      {
        path: "/category_page/",
        name: "CategoryPage",
        component: CategoryPage
      },
      {
        path: "/product_list_page",
        name: "ProductListPage",
        component: ProductListPage
      },
      {
        path: "/product",
        name: "ProductDetailPage",
        component: ProductDetailPage
      },
      {
        path: "/cart_page",
        name: "CartPage",
        component: CartPage
      }
      // {
      //     path: "/about",
      //     name: "About",
      //     // route level code-splitting
      //     // this generates a separate chunk (about.[hash].js) for this route
      //     // which is lazy-loaded when the route is visited.
      //     component: () =>
      //         import( /* webpackChunkName: "about" */ "../views/About.vue")
      // }
    ]
  },
  {
    path: "*",
    redirect: {
      path: "/"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from '@/components/pages/LoginPage/LoginPage'

import IndexContent from '@/components/layouts/IndexContent'

import HomePage from "@/components/pages/HomePage/HomePage";
import CategoryPage from '@/components/pages/CategoryPage/CategoryPage'

import ProductListPage from '@/components/pages/ProductListPage/ProductListPage'
import ProductDetailPage from '@/components/pages/ProductDetailPage/ProductDetailPage'
import CartPage from '@/components/pages/CartPage/CartPage'

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/',
        name: 'IndexContent',
        component: IndexContent,
        children: [
            {
                path: "/home_page",
                name: "HomePage",
                component: HomePage
            },
            {
                path: "/category_page/:type",
                name: "CategoryPage",
                component: CategoryPage
            },
            {
                path: "/product_list_page",
                name: "ProductListPage",
                component: ProductListPage
            },
            {
                path: '/product/:type/:id',
                name: 'ProductDetailPage',
                component: ProductDetailPage
            },
            {
                path: '/cart_page',
                name: 'CartPage',
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
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
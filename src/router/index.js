import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Catalog.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import(/* webpackChunkName: "about" */ '../views/Preview.vue')
  },
  {
    path: '/catalog/product-detail/:id',
    props: true,
    name: 'productDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetail.vue')
  },
  {
    path: '/catalog/products-in-category/:id',
    props: true,
    name: 'productsInCategory',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsInCategory.vue')
  },
  {
    path: '/cart/product-detail/:id',
    props: true,
    name: 'productInCartDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetail.vue')
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import(/* webpackChunkName: "about" */ '../views/Error404.vue')
  },
  {
    path: '/order-send',
    name: 'order-send',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderSend.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

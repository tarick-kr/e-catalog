import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue')
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import(/* webpackChunkName: "preview" */ '../views/Preview.vue')
  },
  {
    path: '/catalog/product-detail/:id',
    props: true,
    name: 'productDetail',
    component: () => import(/* webpackChunkName: "productDetail" */ '../views/ProductDetail.vue')
  },
  {
    path: '/catalog/products-in-category/:id',
    props: true,
    name: 'productsInCategory',
    component: () => import(/* webpackChunkName: "productsInCategory" */ '../views/ProductsInCategory.vue')
  },
  {
    path: '/cart/product-detail/:id',
    props: true,
    name: 'productInCartDetail',
    component: () => import(/* webpackChunkName: "productInCartDetail" */ '../views/ProductDetail.vue')
  },
  {
    path: '/order-send',
    name: 'orderSend',
    component: () => import(/* webpackChunkName: "orderSend" */ '../views/OrderSend.vue')
  },
  {
    path: '*',
    name: 'error404',
    component: () => import(/* webpackChunkName: "error404" */ '../views/Error404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

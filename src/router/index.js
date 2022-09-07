import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'
import NewCoursesView from '../views/NewCoursesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productdetailsview',
    name: 'productdetailsview',
    component: ProductDetailsView,
    props: true
  },
  {
    path: '/newcoursesview',
    name: 'newcoursesview',
    component: NewCoursesView
    //component: () => import('../views/ProductDetailsView.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import PageForum from '@/views/PageForum'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: PageNotFound
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: PageForum,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

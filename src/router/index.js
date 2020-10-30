import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index.vue'
import home from '../views/home/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/index',
        name: 'index',
        component: index
    },
    {
        path: '/',
        name: 'Home',
        component: home
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

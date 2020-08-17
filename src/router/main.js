import Vue from 'vue'
import VueRouter from 'vue-router'
import '../assets/iconfont/iconfont'
Vue.use(VueRouter)

let routes = [

    {
        path: '*',
        name: 'home',
        component: () =>
            import ('../pages/home/Home'),
    },


]

let router = new VueRouter({
    routes,
    mode: 'history'
})
export default router
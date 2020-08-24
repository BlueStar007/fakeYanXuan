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
    {
        path: '/my',
        name: 'my',
        component: () =>
            import ('../pages/my/My'),
    },
    {
        path: '/gouwuche',
        name: 'gouwuche',
        component: () =>
            import ('../pages/gouwuche/Gouwuche'),
    },
    {
        path: '/fenlei',
        name: 'fenlei',
        component: () =>
            import ('../pages/fenlei/Fenlei'),
    },




]

let router = new VueRouter({
    routes,
    mode: 'history'
})
export default router
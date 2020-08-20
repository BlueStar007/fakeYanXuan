import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router/main'
import store from './store/main'
import './assets/iconfont/iconfont'
import './assets/sytle/global.css'
Vue.config.productionTip = false
Vue.use(Mint)
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
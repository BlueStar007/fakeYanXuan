import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router/main'
Vue.config.productionTip = false
Vue.use(Mint)
new Vue({
    render: h => h(App),
    router

}).$mount('#app')
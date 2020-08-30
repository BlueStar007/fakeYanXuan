import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        Flist: {} ///分类列表
    },
    mutations,
    getters
})
export default { store }
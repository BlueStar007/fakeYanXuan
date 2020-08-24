<template>
        <div class="con">
            <mt-tabbar fixed="true" v-model="selected">
            <mt-tab-item id="tab1">
                 <i class="iconfont icon-shouye"></i>
                 <router-link :to="{name: 'home'}">首页</router-link>
            </mt-tab-item>
            <mt-tab-item id="tab2">
                <i class="iconfont icon-fenlei"></i>
                <router-link :to="{name: 'fenlei'}">分类</router-link>
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <i class="iconfont icon-gouwuche"></i>
                <router-link :to="{name: 'gouwuche'}">购物车</router-link>
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <i class="iconfont icon-geren"></i>
                <router-link :to="{name: 'my'}">我的</router-link>
            </mt-tab-item>
            </mt-tabbar>            
        </div>
</template>

<script>
 import Vue from 'vue'
 import {Tabbar, TabItem} from 'mint-ui'
 Vue.component(Tabbar.name, Tabbar);
 Vue.component(TabItem.name, TabItem);
export default {
       data() {
           return {
               selected: 'tab1'
           }
       },
}
</script>

<style scoped>
.test{ 
    width: 40px;
    height: 40px;
}
.iconfont{
    display: block;
    margin: 8px auto;
}
</style>
<template>
        <div class="con">
            <mt-tabbar :fixed="true" >
            <mt-tab-item id="index" :class="{'is-selected': index=='index'}">
                 <i class="iconfont icon-shouye"></i>
                 <router-link :to="{name: 'home'}">首页</router-link>
            </mt-tab-item>
            <mt-tab-item id="fenlei" :class="{'is-selected': index=='fenlei'}">
                <i class="iconfont icon-fenlei"></i>
                <router-link :to="{name: 'fenlei'}">分类</router-link>
            </mt-tab-item>
            <mt-tab-item id="gouwuche">
                <i class="iconfont icon-gouwuche" :class="{'is-selected': index=='gouwuche'}"></i>
                <router-link :to="{name: 'gouwuche'}">购物车</router-link>
            </mt-tab-item>
            <mt-tab-item id="me">
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
               seIndex: 'index'
           }
       },
       props:['index']
       
       
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
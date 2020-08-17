<template>
        <div class="con">
            <mt-tabbar v-model="selected">
            <mt-tab-item id="tab1">
                 <img class="test" src="../assets/images/hot.png" alt="">
                 <router-link :to="{name: 'test'}">首页</router-link>
            </mt-tab-item>
            <mt-tab-item id="tab2">
                <img slot="icon"  src="">
                分类
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <img slot="icon" src="">
                购物车
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <img slot="icon" class="iconfont icon-shouye" src="">
                我的
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
</style>
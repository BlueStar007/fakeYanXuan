<template>
<div>
    <div class="con">
       <div class="logoC"><img src="../assets/images/logo.png" alt=""></div>
       <a href="/search" class="searchC"><i class="iconfont icon-sousuo"></i><span>搜索商品</span></a>
       <div class="end"><router-link :to="{name : 'my'}">登录</router-link> </div>
    </div>
    <div class="item">
            <mt-navbar  v-model="selected">
                    <mt-tab-item :class="{'is-selected': index==selected}" class="tabItem" v-for="(i,index) in list" :key="index"  :id="index">{{i}}</mt-tab-item>
            </mt-navbar>
            
    </div>
</div>
</template>

<script>
import '../assets/iconfont/iconfont.css'
import {getOther} from '../../server/getOther'
export default {
    data(){
        return {
            selected: '',
            list: ['推荐','居家','配件','服装','电器','手机']
        }
    },
    created(){
        let that=this;
        getOther().then(res=>{
            that.$store.store.commit('setFlist',res)
        });
    }
}
</script>

<style scoped>
.con{
    display: flex;
    height: 28px;
    align-items: center;
    justify-content: space-between;
    margin: 6px auto;
}
.logoC{
    padding-left: 13px;
    height: 1.6rem;
}
.logoC img{
    height: 100%;
}
.end{
    margin-right: 13px;
    text-align: center;
    min-width: 39px;
    border: 1px solid #DD1A21;
    border-radius: 5px;
    padding: 3px;
}
.end a{
    color: #DD1A21;
}
.searchC{
    margin: 0 11px;
    width: 100%;
    height: 2rem;
    background-color: #EDEDED;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.searchC i{
    margin-right: 8px;
}
.is-selected{
    border-bottom: 3px solid #DD1A21 !important;
    color: #DD1A21 !important;
}
</style>
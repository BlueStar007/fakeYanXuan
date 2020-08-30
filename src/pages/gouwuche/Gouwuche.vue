<template>
<div class="con">
        <div class="body">
                <div class="top">购物车</div>
                <div class="content">
                        <div class="tb">
                                <div><i class="iconfont icon-quan sm"></i>30天无忧退货</div>
                                <div><i class="iconfont icon-quan sm"></i>48小时快速退款</div>
                                <div><i class="iconfont icon-quan sm"></i>满88全场包邮</div>
                        </div>
                        <div class="main">
                                <div><i class="iconfont icon-gouwuche logo" ></i></div>
                                <p>去添加点什么吧</p>
                                <div class="login">
                                    <router-link :to="{name: 'my'}">登录</router-link>    
                                </div>
                        </div>
                </div>
        </div>
        <div class="bom">
                <Bom index="gouwuche"/>
        </div>
</div>
</template>

<script>
import Bom from '../../components/Bom'
export default {
        components: {
                Bom,
        }
}
</script>

<style scoped>
a{
        color: white;
}
.login{
        width: 45%;
        margin: 20px auto;
        background-color: rgb(175, 19, 50);
        color: white !important;
        padding: 12px;
        
}
.main{
        text-align: center;
        margin-top: 8vh;
        color: rgb(119, 119, 119);
}
.main p{
        text-align: center;
        margin:  0;
}
.bom{
        position: relative;
        z-index: 999;
}
.logo{
        font-size: 10rem;
}
.tb{
        padding: 15px 0;
        display: flex;
        justify-content: center;
        font-size:12px;
}
.sm{
        font-size: 8px;
}
.tb div:nth-child(2){
        margin: 0 20px;
}
.body{
        position: relative;
        
}
.top{
        height: 2.8rem;
        font-size: 1.3rem;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        vertical-align: middle;
        line-height: 3.2rem;
        width: 100%;
        z-index: 9;
}
.content{
        position: absolute;
        top: 2.8rem;
        z-index: 7;
        width: 100%;
        height: 90vh;
        background-color: rgb(238, 238, 238);

}
</style>
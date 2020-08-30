<template>
<div class="con">
        <div class="search">
            <i class="iconfont icon-sousuo"></i>搜索商品，共10243件好物
        </div>
        <div class="body">
            <!-- 左边 -->
            <div class="left">
                    <mt-navbar class="Lc" v-model="selected">
                            <mt-tab-item :class="{'is-selected': selected=='one'}" id="one">选项一</mt-tab-item>
                            <mt-tab-item  id="two">选项二</mt-tab-item>
                            <mt-tab-item id="three">选项三</mt-tab-item>
                     </mt-navbar>

            </div>
            <!-- 左边 -->
            <!-- 右边 -->
            <div class="right">
                    <div :style="{ backgroundImage: `url(${bgImg})`}" class="Rimg"></div>
            </div>
            <!-- 右边 -->
        </div>
        <div class="bom">
            <Bom index="fenlei"/>
        </div>
</div>
</template>

<script>
import Bom from '../../components/Bom'
export default {
    components: {
        Bom
    },
    data(){
        return {
            bgImg: "http://yanxuan.nosdn.127.net/8feb4f8712ae2f2ed6c6d7e5df1a0043.jpg?quality=85&thumbnail=750x0&imageView",
            selected: 'one'
        }
    }
}
</script>

<style scoped>
.Rimg{
    width: 100%;
    height: 8rem;
    border-radius: 6px;
    background-size: cover;
}

.Lc{
    flex-direction: column;
}
.body{
    border-top: 1px solid #dfdfdf;
    display: flex;
    justify-content: space-between;
    height: 90%;
}
.left{
    width: 28%;
    border-right: 1px solid #dfdfdf;
}
.right{
    width: 72%;
    margin: 0.9rem 10px 0 ;
    text-align: center;
}
.search{
    margin: 8px 11px;
    background-color: rgb(231, 231, 231);
    border-radius: 4px;
    line-height: 2.2rem;
    vertical-align: middle;
    text-align: center;
}
.con{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.search i{
    margin-right: 8px;
}
.bom{
    z-index: 1;
}
</style>
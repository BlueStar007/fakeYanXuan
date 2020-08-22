<template>
      
<div class="con">
        <!-- 轮播 -->
        <div class="swipeC">
            <mt-swipe :auto="4000">
                  <mt-swipe-item v-for="(item,index) in swiperList" :key="index"><a :href="item"><img height="180" width="100%" :src="item" ></a></mt-swipe-item>
                  
            </mt-swipe>
        </div>
        <!-- 轮播 -->

        <!-- 标识小条栏 -->
        <div class="info">
          <div class="infoItem"><i class="iconfont icon-dagou red"></i><span>网易自营品牌</span></div>
          <div class="infoItem"><i class="iconfont icon-dagou red"></i><span>30天无忧退货</span></div>
          <div class="infoItem"><i class="iconfont icon-dagou red"></i><span>48小时快速退款</span></div>
        </div>
       <!-- 标识小条栏 -->

        <!-- 品牌块 -->
        <div class="hr"></div>
        <div class="pinC">
                <div ><span>{{pinListT}}</span><i  class="iconfont icon-xiangyou1"></i></div>
                <div class="pinR">
                    <div class="pinI" v-for="(item,index) in pinList" :key="index+10">
                            <img :src="item.imgSrc" alt="">
                            
                            <div class="pinIt">
                                <div class="pinIone">{{item.name}}</div>
                                <div class="pinItwo red">{{item.price+item.yuan}}</div>
                                <div class="pinIthree"><span v-show="item.tagNew!=undefined">{{item.tagNew}}</span></div>
                            </div>
                    </div>
                    
                </div>
        </div>
        <!-- 品牌块 -->
        
        <!-- <div class="hr"></div> -->
        <!-- 横向滚动条 -->
        <Item :list='this.list.modCon.hotGoods' />
        <Item :list='this.list.modCon.newGoods' />
        <!-- <Item :list='this.list.modCon.topicGoods' /> -->
        <Item class="last" :list='this.list.modCon.provideGoods'/>
        
        
        <!-- 横向滚动条 -->


</div>
</template>

<script>
import {getOther} from '../../../../server/getCom'
import Item from './Item'
export default {
    components:{
        Item
    },
    computed:{
        swiperList(){
            return this.list.banner
        },
        pinListT(){
            return this.list.modCon.provideGoods.title
        },
        pinList(){
            return this.list.modCon.provideGoods.items
            
        }
    },
    data(){
        return {
            list: []
        }
    },
    created(){
        getOther().then(res=>{
            this.list=res.recommend
        })
    }
}
</script>

<style scoped>
.last{
    margin-bottom: 50px;
}
.swipeC{
  height: 188px;
  margin-top: 5px;
}
.info{
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
}
.infoItem{
   font-size: 12px;
}
.pinC{
    text-align: center;
    margin: 10px 0;
    /* background-color: #EAEAEA; */

}
.pinC span{
    margin-right: 8px;
}
.pinR{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0;
    
}
.pinI{
    width: 48%;
    height: 120px;
    background-color: rgb(240, 239, 239);
    position: relative;
    overflow: hidden;
}
.pinI:nth-child(1){
    margin-right: 10px;
    margin-bottom: 10px;
}
.pinI:nth-child(2){
    margin-bottom: 10px;
}
.pinI:nth-child(3){
    margin-right: 10px;
    margin-bottom: 10px;
}
.pinI:nth-child(4){
    margin-bottom: 10px;
}
.pinI img{
    width: 110%;
    height: auto;
}
.pinIt{
    position: absolute;
    top: 10px;
    left: 10px;
    text-align: left;
}
.pinIone{
    font-size: 1.1rem;
    margin: 3px 0;
}
.pinItwo{
    font-size: 0.9rem;
}
.pinIthree{
    margin: 1px 0;
}
.pinIthree span{
    border: 1px solid #c18500;
    border-radius: 5px;
    width: 100%;
    color: #c18500;
    padding: 1px 5px;
    font-size: 0.7rem;
}
</style>
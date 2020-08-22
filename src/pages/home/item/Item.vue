<template>
<div class="con">
        <div class="hotC">
            <div class="hotCC">
                <h2>{{list.title}}</h2>
                <span>查看全部<i class="iconfont icon-xiangyou"></i></span>
            </div>
        </div>

        <div class="hengC" >
            <div class="hengItem" v-for="(item,index) in list.items" :key="index+7">
                    <div class="imgC">
                        <img :src="item.imgSrc" alt="">
                        <div class="deS" v-if="item.descript!=undefined">{{deC(item)}}</div>
                    </div>
                    <div class="tagC" v-if="item.tag!=null"><span>{{item.tags[0].name}}</span></div>
                    <div class="nameC">{{item.name}}</div>
                    <div class="priceC"><span class="red">￥{{item.price}}</span></div>
            </div>
        </div>
</div>
</template>

<script>

export default {
        props:['list'],
        methods: {
            deC(pro){
                if(pro===undefined){
                    return ''              
                }else{
                    return pro.descript
                }
                
            }
        }
}
</script>

<style scoped>
.deS{
    position: absolute;
    bottom: 0;
    font-size: 12px;
    width: 100%;
    text-align: center;
    padding: 3px 0;
    background-color: rgb(255, 198, 74);
}
.hotC{
    width: 100%;
    height: 130px;
    background-image: url('../../../assets/images/hot.png');
    background-size: 381px;
    text-align: center;
    vertical-align: middle;
}
.hotCC{
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
.hotCC span{
    background-color: #F4E9CB;
    display: block;
    width: 94px;
    padding: 4px 8px;
    margin: 0 auto;
}
.hengC{
    display: flex;
    height: 257px;
    overflow-x: scroll !important;
    overflow-y: hidden !important;
}
.hengItem{

}
.imgC{
    position: relative;
    background-color: rgb(248, 247, 238);
    margin: 10px 10px 10px 0;
    border-radius: 12px;
    width: 225px;
}
.imgC img{
    height: 160px;
}
.tagC span{
    padding: 2px 5px;
    font-size: 12px;
    background-color: rgb(255, 175, 26);
    border-radius: 3px;
}
.nameC{
    font-size: 16px;
    margin: 5px 0;
}
</style>
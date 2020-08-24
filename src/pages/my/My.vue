<template>
  <div class="con">
      <div class="logo"><img src="../../assets/images/logo.png" alt=""></div>
        <div class="topC">
            <div class="topL">
                <a href="/home">   <i class="iconfont icon-shouye"></i></a>
            </div>
            
            <div class="topR">
                <i class="iconfont icon-sousuo"></i>
                <i class="iconfont icon-gouwuche"></i>
            </div>
        </div>
        <div class="body">
                <div class="bodyT">
                    <div class="bodyI1 h">
                        <i class="iconfont icon-shouji"></i>
                        <span>手机号账号登录</span>
                    </div>
                    <div class="bodyI2 h">
                        <i class="iconfont icon-youxiang"></i>
                        <span>邮箱账号登录</span>
                    </div>
                    <div class="bodyI3">
                        <span>手机号快速注册</span>
                        <i class="iconfont icon-xiangyou"></i>
                    </div>
                </div>
        </div>
        <div class="footer">
            <span><i class="iconfont icon-weixin"></i> 微信</span>
            <span><i class="iconfont icon-qq"></i>QQ</span>
            <span><i class="iconfont icon-weibo"></i>微博</span>
        </div>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.footer span:nth-child(2){
    margin: 0 1.8rem;
}
.footer{
    color: rgb(133, 133, 133);
    position: fixed;
    bottom: 4rem;
    width: 100%;
    text-align: center;
    z-index: 999;

}
.bodyI1{
    background-color: #bb141a;
    color: white;
}
.bodyI1 span{
    margin-left: 8px;
}
.bodyI2 span{
    margin-left: 8px;
}
.bodyI3 span{
    margin-right: 8px;
}
.bodyI2{
    border: 1px solid #bb141a;
    border-radius: 3px;
}

.h{
    line-height: 55px;
    height: 55px;
    margin: 15px 0;
    text-align: center;
    vertical-align: middle;
}
.topC{
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    position: relative;
    padding: 0 10px;
    background-color: white;
}
i{
    font-size: 20px;
}
.logo img{
    position: fixed;
    left: 50%;
    top: 1.5rem;
    transform: translate(-50%,-50%);
    margin: 0 auto;
    height: 25px;
    z-index: 11111;
}
.topR i{
    font-size: 20px;
    margin-left: 15px;
}
.body{
    background-color: rgb(243, 243, 243);
    padding-top: 10rem;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
}
.bodyT{
    margin: 0 32px 32px;
    text-align: center;
}
</style>
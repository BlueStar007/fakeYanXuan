<template>
  <div class="con">
        <Header/>
        <Body/>
        <Bom/>
  </div>
</template>

<script>
import Header from '../../components/Header';
import Bom from '../../components/Bom'
import Body from './item/Body'

export default {
    components: {
        Bom,
        Header,
        Body
       
    },
    data(){
      return{
          
      }
    },
    methods: {
      handleChange(){
        console.log('切换成功');
      }
    }
}
</script>

<style scoped>

</style>
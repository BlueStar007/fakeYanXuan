<template>
  <div id="app">
      <Bom></Bom>
  </div>
</template>

<script>
import{Toast} from 'mint-ui'
import Bom from './components/Bom'
export default {
  name: 'App',
  components: {
      Bom,
  },
  mounted(){
    Toast('nihao')
  }
}
</script>

<style>

</style>

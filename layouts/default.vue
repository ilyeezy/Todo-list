<template>
    <div>
   <headerVue></headerVue>
     <nuxt></nuxt>
    </div>
</template>

<script>

import {mapActions} from 'vuex'
import headerVue from '@/components/header.vue'
export default {
components:{
  headerVue
},
mounted(){
this.init()
},
methods:{
  ...mapActions([
        'init'
    ])
        
}
}
</script>
<style >
*{
  margin:0;
  padding:0;
  
  box-sizing: border-box;
}
</style>
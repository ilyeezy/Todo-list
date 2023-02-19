<template>
    <div>
   <headerVue></headerVue>
     <nuxt></nuxt>
    </div>
</template>

<script>
import headerVue from '@/components/header.vue'
export default {
components:{
  headerVue
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
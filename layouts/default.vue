<template>
<!-- 4 layouts ваще долбаеб? -->
    <div>
   <headerVue></headerVue>
     <nuxt />
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
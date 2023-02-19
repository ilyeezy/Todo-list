<template>
    <div>
<div id="error">
    <div  class="error_status">{{ error.statusCode }}</div>
    <div class="error_message">{{ error.message }}</div>
    <div class="link">
<nuxt-link :to="'/'">Вернуться на главную</nuxt-link>
</div>
</div>

    </div>
</template>

<script>

    export default {
        props:['error'],
        layout: 'error-layout'
    }
</script>

<style  scoped>
#error{
    
    flex-direction: column;
    display:flex;
    justify-content: center;
    align-content: center;;
    align-items: center;
    height: 100vh;
}
.error_status{
    font-size:48px;
}
.error_message{
    font-size: 26px;
}
</style>
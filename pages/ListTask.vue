<template>
 <div class="TaskList">
                <h1 class="title">Task List</h1>
                <hr/>
                
 <TaskList :is-loaded="isLoaded" />
</div>
</template>

<script>
    export default {
        data () {
            return {
                isLoaded: false
            }
        },
        mounted () {
            setTimeout(() => {
                this.isLoaded = true
            }, 400)
        }
    }
</script>

<style lang="scss" scoped>
.TaskList{
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
.title{
    text-transform: uppercase;
    letter-spacing: 4px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: center;
   margin: 15px 0;
}
</style>
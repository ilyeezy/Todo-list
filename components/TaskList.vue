<template>
          <div>
            <selectStatus
            v-model="select"
            :options="sortOptions"
            ></selectStatus>
                <table v-if="tasks.length && isLoaded">   
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>More</th> 
                    </tr>
              </thead>
                   <TaskItem
                   :index="i"
                   :task="task"
                    v-for="(task,i) in filterTasks"
                   :key="task.id"
                   > </TaskItem>
        </table>
                <p v-else-if="!isLoaded">Задачи загружаются</p>
                <p v-else>Oh,sorry, but you have not added any task</p>
            </div>
</template>

<script>
import selectStatus from '@/components/selectStatus.vue'
import TaskItem from '@/components/TaskItem.vue'
import { mapGetters } from 'vuex';
    export default { 
        props: {
            isLoaded: {
                type: Boolean,
                default: false
            }
        },
        data(){
    return{
        sortOptions:[
           
            {value:'В работе', name:'В работе'},
            {value:'Завершено', name:'Заверешено'},
            {value:'Просрочена', name:'Просрочено'},
            {value:'show_all', name:'Показать всё'}
            
        ],
        select:' ',
        
    }
  },
        components:{
            TaskItem,
            selectStatus
        },
        computed:{
   
   ...mapGetters({
    tasks: 'getTask'
   }),
    filterTasks(){
        return this.tasks.filter(task =>{
            if( this.select == 'show_all' || this.select == ' '){
                return true
            }
            else{
                return task.TaskStatus == this.select
            }
        })
    }   

  },
    
 
 
  
    }
</script>

<style lang="scss" scoped>
table{
    width: 100%;
    padding: 0 10px;
}
thead{
    text-align: left;
    letter-spacing: 1.5px;

}


</style>
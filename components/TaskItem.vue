<template>
    <!-- сделай просто флексами а не таблицей -->
              <tr  class="body">
              <td class="body__element"> {{ index + 1 }}</td>
              <td class="body__element">{{ task.title }}</td>
              <td class="body__element">До: {{ task.time }} {{ task.date }}</td>
              <td  class="body__element__textTaskList"><div class="textTaskList">{{ task.decrtiption }}</div></td>
              <td class="body__element">{{ task.TaskStatus }} </td>
              <td class="body__element__buttons">
      
                <nuxt-link class="btnLink" :to="'/tasks/' + task.id">Open</nuxt-link> 
               <span class="btn"><button class="btn__button" v-if="task.TaskStatus == 'Завершено'"  @click="removeTask(index)">Delete</button></span> 
              </td>
             
              </tr>
        

</template> 

<script>
import { mapGetters } from 'vuex';
  export default {
   
    computed:{
   
   ...mapGetters({
    tasks: 'getTask'
   }),

  },
  props:{
    task:{
      type:Object,
      required:true
    },
    index:{
type:Number,
required:true
    }
  },
  methods:{
    removeTask(){
      this.$store.dispatch('removeTask',this.index)
      this.$toast.error('Задача удалена')
    },
  
  },
 
  }
</script>

<style lang="scss" >

.body{

width: 100%;
  &__element{
    &__textTaskList{
      
      width: 400px;
      padding:5px 5px 5px 0;
    }
    padding: 5px 0px;
    &__buttons{
      display: flex;
      align-items: baseline;

    }
  }
}
.textTaskList{
  width: 400px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
 }

 .btnLink{
color:rgb(123, 69, 159);
text-decoration: none;
font-family: 'Courier New', Courier, monospace;
font-size: 16px;
font-weight: 600;

margin-right: 5px;

 }
 .btn{
  font-weight: 500;
  &__button{
    font-weight: 600;
  color:rgb(255, 0, 0);
  cursor: pointer;
  border:none;
  outline: none;
  background: none;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
  }

 

 }
</style>
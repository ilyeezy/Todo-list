<template>
        <div class="idTask" v-if="task">
            <div >
    <h1  class="titleTask">{{ task.title }}</h1>
   </div>
        <form  @keydown.enter="$event.preventDefault()" style="margin: 0 auto; width:60%;" @submit.prevent class="CreateTusk__form form">
<div class="form__inputs inputs">
 
<div v-if="task.tags.length" class="user-input-wrp1">
    <label for="tags" style="" class="floating-label">Tags</label>
  <br/>
  <div class="tags" >
    <div v-for="tag in task.tags " :key="tag"  style="padding: 0 20px" class="tags__nameTags">
        {{tag}}
    </div>
  </div>  
 
</div>

<div class="user-input-wrp">
  <br/>
  <div style="display:flex" >
  <input placeholder=" " :disabled="task.TaskStatus === 'Завершено'" class="inputText inputTime" v-model="time" id="time" type="time">
  <input placeholder=" " :disabled="task.TaskStatus === 'Завершено'" v-model="date" id="date" type="date" class="inputText" />
</div>
</div>
</div>
<div   class="form__decrtiption decrtiption user-input-wrp">
    <br/>
    <span
    class="lenght"
    :class="this.status === true ? lengthLimit():''"
    v-bind="decrtiptionLimitation()">
    {{ decrtiption.length }} / 2048</span>
    <textarea 
    :disabled="task.TaskStatus === 'Завершено'"
    @keydown.enter="$event.stopPropagation() "
    v-bind="decrtiptionLength()"
    
    id="description"
    placeholder=" "
    style="float:right; overflow: hidden;"
    :class="this.status === true ? limit():''"
    class="decrtiption__text text inputText inputText__border" 
    :maxlength="maxLength"
    v-model="decrtiption"
    @focus="resizeTextarea"
    @keyup="resizeTextarea"
    ref="textarea"
    ></textarea>
    <label for="description"
    class="floating-label floating-label__descrip"
    >Description</label>
</div>
    <div class="form__button" v-if="task.TaskStatus !== 'Завершено'">
        <button type="submit" @click="submitHandler" class="button__Save">Save edits</button>
        <button type="button" @click="CompleteTask" class="button__Complete" style="margin-left:2rem">Complete task</button>
        <transition name="fade">
        <p 
        v-bind="TimeOut()"
        class="fade"
        id="fade" name="fade"
        v-if="click"
        >Изменения успешно сохранены</p>
    </transition>
    </div>
   
    <p class="form__TaskComplete" v-else>Задача успешно завершена</p>
   </form>
 
        </div>
        <p v-else>Task not found</p>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
  
    export default {
        // fetch(){
        //      this.task = this.$store.getters.getTaskbyId(+this.$route.params.id)
        //     console.log(this.task)
        //   console.log(this.$store.getters.getTaskbyId)
        // },
        // asyncData(ctx) {
        //     console.log(ctx)
        //     const task = ctx.store.getters.getTaskbyId(+ctx.route.params.id)
            
        //     console.log(task)
        //     return {task}
        // },
        data(){
            return {
           
                tags:[],
                tag:'',
                maxLength: 2048,
                status:false,
                click:false,
                decrtiption:'',
                title:'',
                date:'',
                time:''
                
                
            }
        },
        computed:{
            ...mapGetters({
                task:'getTaskbyId',
                
            }),
           task(){
           return this.$store.getters.getTaskbyId(+this.$route.params.id)
           }
         
        },
              mounted(){
            this.init();
            this.decrtiption = this.task.decrtiption;
            this.date = this.task.date;
            this.time = this.task.time;
            this.$nextTick(function(){
                 this.resizeTextarea();
            })
        }, 
        
        destroyed(){
            if(this.date && this.date.destroy){
                this.date.destroy()
            }
            if (this.tags && this.tags.destroy){
                this.tags.destroy()
            }
        },
     
            methods:{
                resizeTextarea() {
                    let {textarea} = this.$refs
                    textarea.style.height = "33px";
                    textarea.style.height = textarea.scrollHeight + "px"; 
                },
                TimeOut(){
                    setTimeout(function() { 
                let fade = document.getElementById("fade"); 
                fade.style.opacity = 0; 
                let timerId = setInterval(function() {
                    let opacity = fade.style.opacity; 
                    if (opacity == 0) { 
                    clearInterval(timerId);
                    } else {
                    fade.style.opacity = opacity + 0.04; 
                    }
                }, 100);
                },0); 
                },
            
          decrtiptionLimitation(){
                if(this.decrtiption.length > 2048){
                  this.decrtiption = this.maxLength;
                  
                }
            },
            
            drawSheves(){
                return false;
            },
           
            limit(){
            let classes = ['']
            classes.push('limit') 
                return classes.join(' ')
            },
            lengthLimit(){
                let lenght = ['']
                lenght.push('Lenghtlimit')
                return lenght.join(' ')
            },
        
          decrtiptionLength(){            
               
            if(this.decrtiption.length >= 2048){
                    this.status = true;
                }else{
                    this.status = false;
                }
            },
            submitHandler(){
                this.$store.dispatch('updateTask', {
                    id:this.task.id,
                    decrtiption:this.decrtiption,
                    date:this.date,
                    time:this.time
                }) 
                
                this.click = true;
               
                // setTimeout(()=>{
                //     this.click = false;
                // },0)
            },
            CompleteTask(){
                this.$store.dispatch('CompleteTask',this.task.id)
            },
      
    ...mapActions([
        'init'
    ])
            

    
    }
}

        
    
    
</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active  {
    animation: 1s fadeIn; 
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
   
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
.fade{
    margin-top: 20px ;
    text-align: center;
    font-size: 24px;
    padding:20px 0;


}
.form{
 
    &__TaskComplete{
        text-align: center;
        font-size: 24px;
        margin-top: 20px;
    }
}
// @keyframes bounce-in {
//   0% {
//     transform: scale(0);
//   }
//   50% {
//     transform: scale(1.25);
//   }
//   100% {
//     transform: scale(1);
//   }
// }

.button{
    &__Save{
        background-color: rgba(77, 21, 130, 0.744);
    border-radius: 4px;
    &:active{
        position: relative;
        left:0;
        top:4px;
    }
    }
    &__Complete{
        background-color: rgba(4, 114, 89, 0.744);
    border-radius: 4px;
    &:active{
        position: relative;
        left:0;
        top:4px;
    }
    }
}
.user-input-wrp:not(:placeholder-shown)  .inputText textarea:focus

{
	
  outline-color: blue;
}
.inputText{
&__border{
    border:none;
    outline: auto;
}
}
.titleTask{
    margin: 20px 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    font-size:45px;
    letter-spacing: 2.4px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
export const state= () =>({
  
tasks:[]
})

export const mutations = {
    init(state){
        
        state.tasks = JSON.parse(localStorage.getItem('tasks') || '[]' ).map(task=>{
            const t = new Date().toLocaleDateString()
            const d = new Date(task.date).toLocaleDateString()
            const tA = new Date().toLocaleTimeString().slice(0,5)
            if(d <= t && tA >= task.time && task.TaskStatus !== 'Завершено'){
                task.TaskStatus = 'Просрочена'
            }
            return task
        })
    },
    createTask(state, task){
    state.tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state,{id,decrtiption,time,date}){
        const i = state.tasks.findIndex(task => task.id === id)
        const task = state.tasks[i]
       
        const t = new Date().toLocaleDateString()
        const d = new Date(date).toLocaleDateString()
        const tA = new Date().toLocaleTimeString().slice(0,5)
        const TaskStatus = (d >= t && tA < time ) ? 'В работе' : 'Просрочена'
        state.tasks[i] = {...task,date,time,decrtiption,TaskStatus}

       localStorage.setItem('tasks', JSON.stringify(state.tasks))
        console.log(tA)
    },
    CompleteTask(state,id){
        const i = state.tasks.findIndex(task => task.id === id)
        state.tasks[i].TaskStatus = 'Завершено'
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    removeTask(state,task){
        
        //const i = state.tasks.findIndex(task => task.id === id)
        state.tasks.splice(task,1)
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
   
  
}
export const actions = {
    createTask({commit},task){
        commit('createTask', task)
    },
    updateTask({commit},task){
        commit('updateTask', task)
    },
    CompleteTask({commit},id){
        commit('CompleteTask', id)
    },
    removeTask({commit},task){
        commit('removeTask', task)
    },
   
    async init(context){
        context.commit('init')
    }
}
export const getters = {
getTask(state){
    return state.tasks
},

getTaskbyId:(state)=>(id)=>{
    return state.tasks.find( task => task.id === id)
}
}


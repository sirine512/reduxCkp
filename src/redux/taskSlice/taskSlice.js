import { createSlice } from '@reduxjs/toolkit'

const initialState = [{id:1,title:"Complete React",isDone:false},
{id:2,title:"Sports",isDone:false},
{id:3,title:"Meditation",isDone:false},
{id:4,title:"Read for one hour",isDone:false}]

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask:(state,action)=>{
        state.push(action.payload)
    },
    deleteTask:(state,action)=>{
        return state.filter((task)=>task.id!== action.payload.id)
    },
    editTask:(state,action)=>{
        return state.map(el=>el.id===action.payload.id ? action.payload : el)
    }
  },
})

// Action creators are generated for each case reducer function
export const {addTask,deleteTask,editTask} = taskSlice.actions

export default taskSlice.reducer
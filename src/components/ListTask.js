import React from 'react'
import Task from './Task'
import '../style/style.css'
import { useSelector } from 'react-redux'
const ListTask = () => {
  const tasks=useSelector((store)=>store.task)
  return (
    <div className='list'>
     {tasks.map((task,i)=><Task key={i} task={task}/>)}

    </div>
  )
}

export default ListTask


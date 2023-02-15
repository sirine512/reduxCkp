import React, { useState } from 'react'
import '../style/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck , faTrash, faPenToSquare,faCheck} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../redux/taskSlice/taskSlice'
const Task = ({task}) => {
  const dispatch=useDispatch()
  const [update, setUpdate] = useState(false);
  const [newTask, setNewTask] = useState(task);
  return (
    <div>
      {update ? <div className='taskBox'>
         <input onChange={(e)=>setNewTask({...newTask,title:e.target.value})} type={"text"} defaultValue={task.title} id='inputBox' style={{width:'25vw', marginLeft:'20px'}}></input>
         <button id='btn' onClick={()=>{dispatch(editTask(newTask));setUpdate(false)}}><FontAwesomeIcon icon={faCheck} /></button>
         <button id='btn' onClick={()=>setUpdate(false)}>X</button>
         </div>
       : <div className='taskBox'>
        <button id='checkBtn' onClick={()=>dispatch(editTask({...newTask,isDone:!task.isDone})) } > <FontAwesomeIcon className={task.isDone ? 'done' : 'notDone'} icon={ faCircleCheck}/></button>
      <h3>{task.title}</h3>
      <button id='btn' onClick={()=>setUpdate(true)}><FontAwesomeIcon icon={faPenToSquare} /></button>
      <button id='btn' onClick={()=>dispatch(deleteTask(task))}><FontAwesomeIcon icon={faTrash} /></button></div>
 } </div>)
      
}

export default Task

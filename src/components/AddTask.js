import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice/taskSlice';
import '../style/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'


const AddTask = () => {
  const [newTask, setnewTask] = useState({title:""});
  const dispatch=useDispatch()
  return (<>
    <div className='addBox'>
    <button id='add' onClick={()=>{dispatch(addTask({...newTask,isDone:false,id:Math.floor(Math.random()*1000000000)}))
  setnewTask({title:""})
  }}>
     <FontAwesomeIcon icon={faPlus} id='plus'/></button>
      <input value={newTask.title} type="text" placeholder='Create a new TODO...' id='inputBox' onChange={(e)=>setnewTask({...newTask,title:e.target.value})}/>
    </div></>
  )}
export default AddTask
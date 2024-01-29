import './App.css';
import {Task} from './Task';
import { useState } from 'react';


function App() {  
  const [todoList,setTodoList]=useState([]);
  const [newTask, setNewTask]=useState("");

  const handleChange = (event) =>{
    setNewTask(event.target.value);
  }

  const deleteTask = (id) =>{
    setTodoList(todoList.filter((task) => 
      task.id!==id
    )
    )
  }

  
  const completeTask = (id) =>{
    setTodoList(todoList.map((task)=>{
      if(task.id===id){
        return {...task,completed:true};
      }
      else{
        return task;
      }
    }))
  }


  const addTask = () =>{
    const task = {
      id: todoList.length===0?1:todoList[todoList.length-1].id+1,
      taskName:newTask,
      completed:false
    };
    setTodoList(task.name!==""?[...todoList,task]:todoList);
  };

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
        <div className='list'>
         {todoList.map((task) => {
          return( 
            <Task taskname={task.taskName}
            id={task.id}
            deleteTask={deleteTask}
            completeTask={completeTask}
            completed={task.completed}/>
          )
         })} 
        </div>
      </div>

    </div>
  );
} 


export default App;

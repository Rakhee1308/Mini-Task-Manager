import './App.css'
import {useState} from 'react'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  function addTask(){
    if(task.trim() === ""){
      return;
    }
    const newTask = {
      id: Date.now(),
      title: task,
      completed: false
    }
    setTasks([...tasks, newTask])
    setTask("")
  }

  function toggleTask(id){
    setTasks(
      tasks.map((item)=>
      item.id === id ? {
        ...item, completed: !item.completed
      } : item)
    )
  }

  function deleteTask(id){
    setTasks(tasks.filter((item)=> item.id !== id))
  }

  return (
     <div className = "container">
      <h1>Mini Task Manager</h1>
      <p>Manage your daily tasks.</p>

      <div className = "task-stats">
        <div className="stat-box">
          <h3>Total Tasks</h3>
          <p>0</p>
        </div>

        <div className="stat-box">
          <h3>Completed</h3>
          <p>0</p>
        </div>
      </div>

      <div className="task-input">
        <input type="text" placeholder = "Enter a new task..." 
        value = {task}
        onChange = {(e)=> setTask(e.target.value)}/>
        <button onClick = {addTask}>Add Task</button>
      </div>

      <div className="task-list">
        { tasks.length === 0 ?(
        <p>No tasks available. Add your first task!</p>
        ) : (
          tasks.map((item)=>(
            <div className="task-item" key = {item.id}>
              <input type="checkbox"
              checked = {item.completed} 
              onChange = {()=> toggleTask(item.id)}
              />

              <span className ={item.completed ? "completed" : ""}>
                {item.title}
              </span>

              <button onClick= {() => deleteTask(item.id)}> 
                Delete </button>
            </div>
          ))
        )}
      </div>
     </div>
  )
}

export default App

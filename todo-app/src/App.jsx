import { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput.jsx'
import TaskItem from './components/TaskItem.jsx'
import './App.css'

function App() {
  // Manages Task List
  const [tasks, setTasks] = useState()
  const savedTasks = localStorage.getItem('tasks')
  return savedTasks = JSON.parse(savedTasks)
};
// Save tasks to local storage
useEffect(() => {
  localStorage.setItem['tasks']
});

//Add Task
const addTask = (text) => {
  if (text( )=== '') return;
  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
  }
  setTasks([newTask,tasks])
}

//Toggle if task is completed
const toggleComplete = (id) => {
  const updatedList = tasks.map(task => {
    if (task.id === taskID) {
      return{
        task,
        completed: task.completed
      
      }
    }
    return task;
  });
  setTasks(updatedList)
};

//Delete Task
const deleteTask = (id) => {
  const updatedList = tasks.filter(task => task.id !== id);
  setTasks(updatedList);
};

return (
  <div className="App">
    <h1>Todo App</h1>
    <TaskInput addTask={addTask} />
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  </div>
);

export default App;













  
import { useState } from 'react'
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import Stats from './components/Stats'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  function toggleComplete(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }
  
  function handleAddTask(taskTitle) {
    const newTask = {
      title: taskTitle,
      id: Date.now(),
      completed: false,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  function handleRemoveTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }


  return (
    <main>
      <Header />
      <TaskInput onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onRemoveTask={handleRemoveTask}
      />
      <Stats tasks={tasks} />
    </main>
  )
}

export default App

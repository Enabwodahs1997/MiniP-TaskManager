import { useState } from 'react'

function TaskInput({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmedTitle = taskTitle.trim()
    if (!trimmedTitle) {
      return
    }

    onAddTask(trimmedTitle)
    setTaskTitle('')
  }

  return (
    <section>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          aria-label="Task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default TaskInput
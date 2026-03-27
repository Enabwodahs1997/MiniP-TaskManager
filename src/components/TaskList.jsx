import TaskItem from './TaskItem'

function TaskList({ tasks, onToggleComplete, onRemoveTask }) {
  return (
    <section>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </ul>
    </section>
  )
}

export default TaskList

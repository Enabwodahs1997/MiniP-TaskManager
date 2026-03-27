function TaskItem({ task, onToggleComplete, onRemoveTask }) {
  return (
    <li className="task-item">
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span className={task.completed ? 'task-title completed' : 'task-title'}>
          {task.title}
        </span>
      </label>
      <button type="button" className="remove-btn" onClick={() => onRemoveTask(task.id)}>
        Remove
      </button>
    </li>
  )
}

export default TaskItem

function Stats({ tasks }) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length

  return (
    <section>
      <h2>Stats</h2>
      <p>Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
    </section>
  )
}

export default Stats

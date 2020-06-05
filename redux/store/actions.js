const addTask = task => ({
  type: 'TASK_ADD',
  payload: {
    task,
  },
})

const removeTask = id => ({
  type: 'TASK_REMOVE',
  payload: {
    id,
  },
})

module.exports = {
  addTask: addTask,
  removeTask: removeTask
}

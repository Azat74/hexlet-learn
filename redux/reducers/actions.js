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

const addTaskComment = comment => ({
  type: 'TASK_COMMENT_ADD',
  payload: {
    comment,
  },
})

const removeTaskComment = id => ({
  type: 'TASK_COMMENT_REMOVE',
  payload: {
    id,
  },
})

module.exports = {
  addTask: addTask,
  removeTask: removeTask,
  addTaskComment: addTaskComment,
  removeTaskComment: removeTaskComment
}

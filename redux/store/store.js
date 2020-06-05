const omit = require('lodash').omit

// BEGIN (write your solution here)
const generateStore = (initialState = {}) => {
  let currentState = initialState

  const dispatch = (action = {}) => {
    currentState = defaultReducer(currentState, action)
  }
  const getState = () => currentState

  return {
    dispatch,
    getState
  }
}
// END

module.exports = {
  generateStore: generateStore
}

const defaultReducer = (state, action) => {
  switch (action.type) {
  case 'TASK_ADD':
    return {
      ...state,
      [action.payload.task.id]: action.payload.task
    }
  case 'TASK_REMOVE':
    return omit({ ...state }, [action.payload.id])
  default:
    return {...state}
  }
}

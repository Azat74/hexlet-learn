const _ = require('lodash')
const combineReducers = require('redux').combineReducers

const comments = (state = {}, action) => {
  // BEGIN (write your solution here)
  
  // END
}

const tasks = (state = {}, action) => {
  // BEGIN (write your solution here)
  
  // END
}


const reducers = combineReducers({
  comments,
  tasks,
})

module.exports = {
  reducers : reducers
}

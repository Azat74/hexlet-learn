const fs = require('fs').promises

// BEGIN (write your solution here)

const checkComplete = (items, newItems) => items.length === newItems.filter(item => item !== undefined).length

const getTypes = (items) => {
  return new Promise(function (resolve) {
    const newItems = []

    items.forEach((path, i) => {
      fs.stat(path)
        .then(res => {
          newItems[i] = res.isDirectory() ? 'directory' : 'file'
        })
        .catch(e => {
          newItems[i] = null
        })
        .finally(() => {
          if (checkComplete(items, newItems)) {
            resolve(newItems.filter(item => item !== undefined))
          }
        })
    })
  })
}
// END

// BEGIN teacher's decision
const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file')

const getTypes1 = (filesPath) => {
  const processPath = (item, result) => fs.stat(item)
    .then((data) => [...result, getTypeName(data)])
    .catch(() => [...result, null])

  const resultPromise = filesPath.reduce(
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    Promise.resolve([]),
  )

  return resultPromise
}
// END

module.exports = {
  getTypes: getTypes
}

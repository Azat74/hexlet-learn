const path = require('path')
const _ = require('lodash')
const fs = require('fs').promises

// BEGIN (write your solution here)
const getDirectorySize = (dirpath) => {
  const promise = fs.readdir(dirpath).then((filenames) => {
    const filepaths = filenames.map((name) => path.join(dirpath, name))
    const promises = filepaths.map(fs.stat)

    return Promise.all(promises)
  })

  return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'))
}
// END

module.exports = {
  getDirectorySize: getDirectorySize
}

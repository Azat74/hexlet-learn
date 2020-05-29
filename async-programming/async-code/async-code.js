const fs = require('fs')

// BEGIN (write your solution here) (write your solution here)
const print = function (file) {
  const content = fs.readFile(file, 'utf-8', () => {});
  return content
}
// END

module.exports = {
  print: print
}
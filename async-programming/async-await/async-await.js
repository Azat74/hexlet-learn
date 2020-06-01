const fs = require('fs').promises

const exchange = async (filepath1, filepath2) => {
  const reading1 = fs.readFile(filepath1)
  const reading2 = fs.readFile(filepath2)
  const [data1, data2] = await Promise.all([reading1, reading2])
  const writing1 = fs.writeFile(filepath1, data2)
  const writing2 = fs.writeFile(filepath2, data1)

  await Promise.all([writing1, writing2])
}

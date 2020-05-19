import fs from 'fs'

const myFile = '/tmp/test'

const functions = [
  cb => fs.readFile(myFile, (err, body) => {
    cb(err, `${body}\nAppended something`);
  }),
  (body, cb) => fs.writeFile(myFile, body, err => {
    cb(err)
  }),
]

hexletAsync.waterfall(functions, err => {
  if (err) {
    return console.log(err)
  }
})

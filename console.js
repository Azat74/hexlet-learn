function consoleTest () {
  console.log(this)
}

const testObj = {

}

const consoleBind = consoleTest.bind(undefined)
const consoleBind2 = consoleTest.bind(testObj)

consoleBind()
consoleBind2()
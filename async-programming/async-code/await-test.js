const testFunc = new Promise((res) => setTimeout(() => res(Math.random())), 1000)

let a = 0

async function res() {
  const newRes = await testFunc.then((res) => res)

  console.log(newRes)
}

res()

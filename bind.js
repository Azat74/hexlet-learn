const user = {
  name: 'Tony',
  printName() {
    console.log(this.name)
  },
}

//setTimeout(user.printName.bind(user), 100)

function bind(context, ...args) {
  return () => this.apply(context, args)
}

Function.prototype.bind = bind

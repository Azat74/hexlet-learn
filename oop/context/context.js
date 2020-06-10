'use strict'

const make = (numer, denom) => {
  return {
    getNumer() {
      return numer
    },
    getDenom() {
      return denom
    },
    toString() {
      return numer + '/' + denom
    },
    add(another) {
      // a / b + c / d = (a * d + b * c) / b * d
      const newNumer = this.getNumer() * another.getDenom() + another.getNumer() * this.getDenom()
      const newDenom = another.getDenom() * denom

      return make(newNumer, newDenom)
    }
  }
}

module.exports = {
  make: make
}

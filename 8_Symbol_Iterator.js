// usage of Generator functions
// implementing iterables
// When you implement an iterator, you have to make an iterable object manually which
// return next() method. P.s you have to manually save the states.
// it gets really hard sometimes. since generators are also iterables, they can be
// used to implement iterables without extra boilerplate code.

const iterableObj = {
  [Symbol.iterator]() {
    let step = 0
    return {
      next: () => {
        step++
        if (step === 1) return { value: "first", done: false }
        else if (step === 2) return { value: "second", done: false }
        else if (step === 3) return { value: "third", done: false }
        return { value: "", done: true }
      }
    }
  }
}

for (val of iterableObj) {
  console.log(val) //first, second and third
}

// same version but with generator functions
const _iterableObj = function* () {
  yield "first"
  yield "second"
  yield "third"
}

for (val of _iterableObj()) {
  console.log(val) //first, second, third
}

const makeIterator = (array) => {
  let nextIndex = 0

  return {
    next: () => {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false
          }
        : {
            done: true
          }
    }
  }
}

const array = ["hamza", "zaheer"]
const iterator = makeIterator(array)
console.info(iterator.next().value)
console.info(iterator.next().value)
console.info(iterator.next().value)

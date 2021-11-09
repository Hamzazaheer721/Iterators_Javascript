const makeIterator = function* (array) {
  let maxIndex = 0
  while (maxIndex < array.length) {
    yield array[maxIndex++]
  }
}

const array = ["hey", "my brother", "is doctor"]
const iterator = makeIterator(array)

console.log(iterator.next().value)

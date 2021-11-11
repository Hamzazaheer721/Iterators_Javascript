const anotherGenerator = function* (i) {
  yield i + 1
  yield i + 2
  yield i + 3
}

const generator = function* (i) {
  yield i
  yield* anotherGenerator(i)
  yield i + 10
}

const iterator = generator(10)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

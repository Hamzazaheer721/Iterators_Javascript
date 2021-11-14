// Symbol iterator basically defines the default iterator for the object
// it is bascially used by for .... of
const iterable = {}
iterable[Symbol.iterator] = function* () {
  yield 1
  yield 2
  yield 3
}

console.log([...iterable])

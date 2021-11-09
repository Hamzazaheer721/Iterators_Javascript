const makeIterator = (obj) => {
  let maxIndex = 0
  const _obj = Object.keys(obj)
  return {
    next: () => {
      return maxIndex < _obj.length
        ? {
            value: obj[_obj[maxIndex++]],
            done: false
          }
        : {
            done: true
          }
    }
  }
}

const _obj = { first: 1, second: 2, third: 3 }
const iterator = makeIterator(_obj)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

const variable = "I am a string"

console.info(typeof variable[Symbol.iterator])
const iterator = variable[Symbol.iterator]()

console.info(iterator.next())
console.info(iterator.next())

const _obj = ["g", "b", "o"]

// for in iterates over all the enumerable keys of iterable object
for (let a in _obj) {
  console.log(a) // 0,1,2
  console.log(_obj[a]) //g,b,o
}

// for of iterates overa all the iterable values of iterable object
for (let b of _obj) {
  console.log(b) //g,b,o
}

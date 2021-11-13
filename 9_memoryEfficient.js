const thresholdIterator = function* (limit, iterable) {
  let index = 0
  for (val of iterable) {
    if (index >= limit) return
    index += 1
    yield val
  }
}

console.log(thresholdIterator(4, ["2", "g", "4"]))

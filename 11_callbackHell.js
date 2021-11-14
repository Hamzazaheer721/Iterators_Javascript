const apiCall = async function* () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  yield await response.json()
}

const iterator = apiCall()
iterator.next().then(({ value, done }) => {
  console.info(value)
})

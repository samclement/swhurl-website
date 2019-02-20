import fetch from 'node-fetch'

export const getTodo = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  return res.json()
}

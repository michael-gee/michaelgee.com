export default class MockDataApi {
  static fetchMockToDoItems() {
    return fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(res => res.json())
      .then(json => {
        return json.splice(0, 5)
      })
  }
}

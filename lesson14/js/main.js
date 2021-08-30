fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
     const todocka = data.map(todo => createTodoTitle(todo.title));
     console.log(todocka)
    document.getElementById('todoTitle').append(...todocka)

  });

function renderData(title) {
    const titleElement = createTodoTitle(title)
    document.getElementById('todoTitle').appendChild(titleElement)
}

function createTodoTitle(title) {
    const titleElement = document.createElement('p')
    titleElement.innerHTML = title

    return titleElement;
}
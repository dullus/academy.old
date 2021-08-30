fetch('mocks/todo.json')
  .then(response => response.json())
  .then(data => {
     console.log(data)
  });

function fakeAsync() {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            const fortune = Math.floor(Math.random() * 2);

            if (fortune == 0) {
                resolve('ok')
            } else {
                reject('bad')
            }
        }, 1000);
    })
}

fakeAsync()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

function renderData(title) {
    const titleElement = createTodoTitle(title)
    document.getElementById('todoTitle').appendChild(titleElement)
}

function createTodoTitle(title) {
    const titleElement = document.createElement('p')
    titleElement.innerHTML = title

    return titleElement;
}
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

/ * part 2 */

fetch('mocks/todo.json')
  .then(response => response.json())
  .then(data => {
     console.log(data)
  });

function fakeAsync() {
  return new Promise(( resolve, reject ) => {
    window.setTimeout(()=>{
      const fortune = Math.floor(Math.random() * 2);
      if (fortune === 0) {
        resolve('ok')
      } else {
        reject('bad');
      }
    }, 1000);
  })
}

const fa = fakeAsync()
  .then((data)=> console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log(fa));

console.log(fa);
console.log(2);
console.log(3);

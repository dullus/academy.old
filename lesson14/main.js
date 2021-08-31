fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
     const todocka = data.map(todo => createTodoTitle(todo.title, todo.id));
     console.log(todocka)
    document.getElementById('todoTitle').append(...todocka)

    const list = document.getElementsByClassName("checkbox");
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("change", (e) => {
       
        alert(e.target.id);
        
      });
    }

  });

function renderData(title) {
    const titleElement = createTodoTitle(title)
    document.getElementById('todoTitle').appendChild(titleElement)
}

function createTodoTitle(title, id) {
  const titleElement = document.createElement("div");
  const titleElement2 = document.createElement("p");
  titleElement2.setAttribute("id", `${id}`) 
  titleElement2.innerHTML = title;
  titleElement.appendChild(titleElement2);
  const titleElement3 = document.createElement("input");
  titleElement3.setAttribute("type", "checkbox");
  titleElement3.setAttribute("class", "checkbox");
  titleElement3.setAttribute("id",  `${id}`);  
  titleElement.appendChild(titleElement3);

  return titleElement;
}
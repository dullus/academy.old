fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    const todocka = data.map(todo => createTodoTitle(todo.title, todo.id));
    document.getElementById('todoTitle').append(...todocka);
  });

function createTodoTitle(title, id) {
  const titleElement = document.createElement('div');
  const inputElement = document.createElement('input');
  const p = document.createElement("p");
  titleElement.style.display = 'flex';
  titleElement.style.justifyContent = 'center';
  titleElement.style.alignItems = 'center';
  inputElement.setAttribute("type", "checkbox");
  inputElement.setAttribute("class", "input");
  inputElement.setAttribute("id", `ID: ${id}`);

  //addEventListener change logic
  // inputElement.addEventListener("change", (e) => {
  // windowAlert(e.target)
  // });

  // addEventListener click logic
  inputElement.addEventListener('click', () => windowAlert(inputElement));

  p.innerHTML = title;
  titleElement.appendChild(inputElement);
  titleElement.appendChild(p);
  return titleElement;
}

function windowAlert(input) {
  if (input.checked) {
    window.alert(input.id);
  }
}
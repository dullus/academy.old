fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    const todos = data
      .slice(0, 5)
      .map((todo) => createTodoTitle(todo.title, todo.id));
    document.getElementById("todoTitle").append(...todos);

    var list = document.getElementsByClassName("checkbox");
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("change", () => {
        alert(list[i].id);
      });
    }
    console.log(list);
    // console.log(todos);
  });

function renderData(title) {
  const titleElement = createTodoTitle(title);
  document.getElementById("todoTitle").appendChild(titleElement);
}

function createTodoTitle(title, id) {
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "todoDiv");

  const titleElement = document.createElement("p");
  titleElement.setAttribute("id", `${id}`);
  titleElement.setAttribute("class", "todoElm");
  titleElement.innerHTML = title;
  const titleCheckBox = document.createElement("input");
  titleCheckBox.setAttribute("id", `${id}`);
  titleCheckBox.setAttribute("type", "checkbox");
  titleCheckBox.setAttribute("class", "checkbox");

  titleDiv.appendChild(titleElement);
  titleDiv.appendChild(titleCheckBox);

  return titleDiv;
}

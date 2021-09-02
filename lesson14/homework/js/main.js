fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 200; i++) {
        renderData(data[i].title, i);
    }
  }
 )
  function renderData(title,id) {
    const titleElement = createTodoTitle(title);
    const checkBoxElement = createCheckBox(id);

   const divElement = document.createElement("div");

   divElement.appendChild(titleElement);
   divElement.appendChild(checkBoxElement);

   divElement.setAttribute("id", "todoTitle" )
   const bodySelector = document.querySelector("body");
   bodySelector.appendChild(divElement);
}

 function createTodoTitle(title) {
    const titleElement = document.createElement('p')
    titleElement.innerHTML = title

    return titleElement;
}

function createCheckBox(id) {
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.onclick = () => {
      alert(`id#${id}: ${checkBox.previousElementSibling.innerHTML}`);
    }
    return checkBox;
}




createHeading();

function createHeading() {
    const heading = document.createElement('h1')
    heading.innerHTML = "List of Todos"
    const x = document.getElementById('todoTitle')
    x.appendChild(heading)
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
        renderData(data);
    }
);

function renderData(data) {         
	data.forEach(createCheckbox)
}


function createCheckbox(data) {
   
    const wrapper = document.createElement('div')
    document.getElementById('todoTitle').appendChild(wrapper)

    const checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', `checkbox${data.id}`)
    checkbox.addEventListener('change', () => window.alert(`Id: ${data.id}`))
    wrapper.appendChild(checkbox)
    
    const label = document.createElement('LABEL');      
    label.setAttribute('for', 'checkbox')
    const textOfLabel = data.title
    label.innerHTML = textOfLabel
    wrapper.appendChild(label)  

}


// const a = data.id
// console.log(a);

// .then(data => {
//     const todocka = data.map(todo => createTodoTitle(todo.title));
//     console.log(todocka)
//    document.getElementById('todoTitle').append(...todocka)
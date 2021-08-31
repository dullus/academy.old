fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    appendData(data);
    // console.log(data)
  });

function appendData(data){
for (let i = 0; i < data.length; i++){
  const mainPanel = document.getElementById("mainPanel");
  const checkbox = document.createElement('Input');

    var div = document.createElement("div");
    div.innerHTML = 'Id: ' + data[i].id;
    checkbox.addEventListener('change', () => {
    alert(data[i].title)
    })
    mainPanel.appendChild(div);
    checkbox.type = 'checkbox';
    mainPanel.appendChild(checkbox);
    }
  }














// function fakeAsync() {
//     return new Promise((resolve, reject) => {
//         window.setTimeout(() => {
//             const fortune = Math.floor(Math.random() * 2);

//             if (fortune == 0) {
//                 resolve('ok')
//             } else {
//                 reject('bad')
//             }
//         }, 1000);
//     })
// }

// fakeAsync()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// function renderData(title) {
//     const titleElement = createTodoTitle(title)
//     document.getElementById('mainPanel').appendChild(titleElement)
// }

// function createTodoTitle(title) {
//     const titleElement = document.createElement('p')
//     titleElement.innerHTML = title

//     return titleElement;
// }
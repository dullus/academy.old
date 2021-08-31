fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    
     renderData(data)

     
     document.addEventListener('change', e =>{
      if(e.target.checked){
       alert('Stlacil si checkbox, ktory patri datam s id:'+e.target.id)
      
      }
      
    })
    

  });

  let dataId;
  
function renderData(data) {
     data.forEach(createTodoTitle)
}


function createTodoTitle(data)  {
    const titleElementWraper = document.createElement('div')
    dataId = data.id
    titleElementWraper.setAttribute("id","wraper"+dataId)
    document.getElementById('todoTitle').appendChild(titleElementWraper)
    const titleElement = document.createElement('p')
    titleElement.innerHTML = data.title
    document.getElementById('wraper'+dataId).style.display = 'flex'
    document.getElementById('wraper'+dataId).style.flexDirection = 'row'
    document.getElementById('wraper'+dataId).style.alignItems = 'center'


    document.getElementById('wraper'+dataId).appendChild(titleElement)

    const input = document.createElement('input')
    input.setAttribute('type','checkbox')
    input.setAttribute('id', dataId)
    
    document.getElementById('wraper'+dataId).appendChild(input)
    
}





// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data => {
 
// renderData(data);
//   }
//   );
 
// function renderData(data) {
//     data.forEach(createCheckbox)
 
// }
 
// function createCheckbox(data) {
//     document.getElementById('todoTitle').style.display = 'flex';
//     document.getElementById('todoTitle').style.flexDirection = 'column';
 
// const checkbox = document.createElement('INPUT');
//   const label = document.createElement('LABEL');
//   checkbox.setAttribute('type', 'checkbox')
//   checkbox.setAttribute('id', 'checkbox')
  
//   label.setAttribute('for', 'checkbox')
//   document.getElementById('todoTitle').appendChild(checkbox)
//   document.getElementById('todoTitle').appendChild(label) 
//   const textOfLabel = data.title
//   label.innerHTML = textOfLabel
 
// }

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data => {
//      const todocka = data.map(todo => createTodoId(todo.title));
//      console.log(todocka)
//     document.getElementById('todoTitle').append(...todocka)

//   });

// function renderData(title) {
//      const titleElement = createTodoTitle(title)
//      document.getElementById('todoTitle').appendChild(titleElement)
// }

// function createTodoId(title)  {
//     const titleElement = document.createElement('p')
//     titleElement.innerHTML = title
//     return titleElement;
// }



/* part 2*/

// fetch('mocks/todo.json')
//   .then(response => response.json())
//   .then(data => {
//      console.log(data)
//   });

// function fakeAsync() {
//   return new Promise(( resolve, reject ) => {
//     window.setTimeout(()=>{
//       const fortune = Math.floor(Math.random() * 2);
//       if (fortune === 0) {
//         resolve('ok')
//       } else {
//         reject('bad');
//       }
//     }, 1000);
//   })
// }

// const fa = fakeAsync()
//   .then((data)=> console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log(fa));

// console.log(fa);
// console.log(2);
// console.log(3);

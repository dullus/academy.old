fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(({title}) => {
      document.getElementById("title").innerHTML = title;
    });
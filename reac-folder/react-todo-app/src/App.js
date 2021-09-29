import React from 'react';
import {useEffect, useState} from 'react' ;
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoApiList from './components/TodoApiList';

function App() {


  const [todosFromApi, setTodos] = useState( [] );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then(json => setTodos(json))
    .catch((error) => console.log(error))
  });


  return (
    <div className="todo-app">
     
  
    <TodoList  />
    <TodoApiList todosFromApi={todosFromApi}/>
    

    </div>
  );
}

export default App;

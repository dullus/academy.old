import React, {useState} from 'react'

function TodoApiList(props) {


    return (
        <div>

            {/* <select>
            
                {props.todosFromApi.map(todo => 
                    <option>
                    {todo.title}
                    </option>
                )}

            </select> */}
    <p id="api-todo-list">

                    <h4>Raw list of common todos from API (https://jsonplaceholder.typicode.com/todos/): </h4>
                    {props.todosFromApi.map(todo => todo.title)}
      </p>              
            
        </div>
    )
}

export default TodoApiList

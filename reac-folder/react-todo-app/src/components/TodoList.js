import { TIMEOUT } from "dns"
import { useState } from "react"
import TodoForm from "./TodoForm"
import React {useState} from 'react'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const  addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return   
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    }

    return (
        <div>
            <h1>What are you going to do today?</h1>
            <TodoForm />
        </div>
    )
}

export default TodoList

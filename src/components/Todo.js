import React from 'react'

export default function Todo({ todo, toggleTodo }) {

    // function handleTodoClick() {
    //     toggleTodo(todo.id);
    // }

    return (
        <div>
            <label>
                <input onChange={() => toggleTodo(todo.id)} type="checkbox" checked={todo.complate} />
                {/* <input onChange={handleTodoClick} type="checkbox" checked={todo.complate} /> */}
                {todo.name}
            </label>
        </div>
    )
}

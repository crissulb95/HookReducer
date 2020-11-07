import React from 'react'

export const TodoItem = ({ todo, index, handleTachado, handleDelete }) => {

    console.log('desde items')
    return (
        
        <li
            key = { todo.id }
            className = 'list-group-item'
        >
            <p 
                onClick = { () => handleTachado( todo.id ) }
                className = { `${ todo.done && 'tachado' }` }
            > 
                { index + 1 } . { todo.description } 
            </p>
            <button

                className = 'btn btn-danger'
                onClick = { () => handleDelete( todo.id ) }
            >
                Borrar
            </button>
        </li>
        
    )
}

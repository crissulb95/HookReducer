import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, handleTachado, handleDelete }) => {

    return (
        <ul className='list-group list-group-flush'>
            { todos.map( ( todo, index ) => (
                <TodoItem 
                    key={ todo.id } 
                    index={ index }
                    todo={ todo }
                    handleTachado={ handleTachado } 
                    handleDelete={ handleDelete }
                />
            ) ) }
        </ul>
    )
}

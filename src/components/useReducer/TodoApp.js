import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    
    return JSON.parse(localStorage.getItem('todos')) || [];

    /**return [{
        id: new Date().getTime(),
        description: 'Estudiar React',
        done: false,
    }]; */
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify(todos) );
    }, [ todos ] );

    const handleDelete = id => {
        
        const action = {
            type : 'delete',
            payload : id
        }

        dispatch( action );
    }

    const handleTachado = id => {
        
        dispatch({
            type : 'tachado-new',
            payload : id
        });

    }

    const handleAddTodo = newTodo => {

        dispatch({
            type: 'add',
            payload: newTodo
        })

    }


    console.log(todos);
    return (
        <div>
            <h1>To Do's App ({ todos.length }) </h1>
            <hr />

            <div className = 'row'>

                <div className = 'col-7'>
                    <TodoList 
                        todos = { todos } 
                        handleTachado = { handleTachado }
                        handleDelete = { handleDelete }
                    />
                </div>
                <div className = 'col-5'>
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    />
                </div>

            </div>
        </div>
    )
}

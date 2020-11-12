import React, { useContext } from 'react'
import { UserContext } from './userContext'

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h2>LoginPage</h2>
            <hr />
            <button 
                className='btn btn-outline-primary'
                onClick={ () => setUser({ ...user, id: 1, name: 'Harry' }) }
            >
                Iniciar sesión
            </button>
        </div>
    )
}

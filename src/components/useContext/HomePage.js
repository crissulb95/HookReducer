import React, { useContext } from 'react'
import { UserContext } from './userContext'

export const HomePage = () => {

    const { user, setUser } = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <h2>HomePage</h2>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button 
                className='btn btn-outline-warning'
                onClick={ () => setUser({}) }
            >
                Cerrar sesión
            </button>
        </div>
    )
}

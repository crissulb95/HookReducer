import React, { useContext } from 'react'
import { UserContext } from './userContext';

export const AboutPage = () => {

    const { user, setUser } = useContext(UserContext);
    console.log(user);

    const handleClick = () => {
        setUser({});
    }

    return (
        <div>
            <h2>AboutPage</h2>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button 
                className='btn btn-warning'
                onClick={ handleClick }
            >
                Cerrar sesión
            </button>
        </div>
    )
}

import React from 'react';
import { useCounter } from '../Hooks/useCounter';
import { useFetch } from '../Hooks/useFetch';

export const MultipleCustomHooks = () => {

    const { Counter, increment } = useCounter(1);
    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ Counter }` );
    //console.log(datos);
    const { author, quote } = !!data && data[0];

    //console.log(author, quote);

    return (
        <div>
            <h2>Breaking Bad Quotes</h2>
            <hr />
            
            {
                loading
                ? (
                    <div className="alert alert-info text-center">
                        Cargando
                    </div>
                )
                : (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }{/* onClick={ () => { 
                    increment(1); 
                }}> */}

            <button 
                className="btn btn-info"
                onClick={ increment }
                >
                Siguiente frase
            </button>

        </div>
    )
}

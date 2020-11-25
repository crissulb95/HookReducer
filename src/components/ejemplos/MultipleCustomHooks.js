import React from 'react';
import { useCounter } from '../Hooks/useCounter';
import { useFetch } from '../Hooks/useFetch';

export const MultipleCustomHooks = () => {

    const { Counter, increment } =  useCounter(1);
    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ Counter }` );
    
    const { author, quote } = !!data && data[0];


    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />


            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0"> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>
                    )
            }


            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    )
}

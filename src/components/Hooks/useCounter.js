import { useState } from "react";

export const useCounter = ( initialState = 10 ) => {

    const [Counter, setCounter] = useState( initialState );

    const reset = () => {
        setCounter( initialState );
    };

    const increment = () => {
        setCounter( Counter + 1 );
    };

    const decrement = () => {
        setCounter( Counter - 1 );
    };

    return {
        Counter,
        increment,
        decrement,
        reset
    };
}

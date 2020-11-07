import { useState } from "react"

export const useCounter = ( initialState = 10 ) => {

    const [Counter, setCounter] = useState( initialState );

    const increment = ( Factor = 1 ) => {
        setCounter( Counter + Factor );
    };

    const decrement = ( Factor = 1 ) => {
        setCounter( Counter - Factor );
    };

    const reset = () => {
        setCounter( initialState );
    };

    return {
        Counter,
        increment,
        decrement,
        reset
    };
}

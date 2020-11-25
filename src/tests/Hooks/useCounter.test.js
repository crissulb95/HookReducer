import React from 'react';

import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../components/Hooks/useCounter';

describe('Pruebas en useCounter Hook', () => {
    
    test('Debe retornar valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );
        //console.log( result.current );
        expect( result.current.Counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    });

    test('Debe tener el contador en 357', () => {
        
        const { result } = renderHook( () => useCounter(357) );
        //console.log( result.current );
        expect( result.current.Counter ).toBe(357);

    });
    

    test('Debe incrementar el contador en 1', () => {
        
        const { result } = renderHook( () => useCounter(357) );
        const { increment } = result.current;

        act( () => { increment() } );
        
        const { Counter } = result.current;
        expect( Counter ).toBe(358);
    });
    
    test('Debe decrementar el contador en 1', () => {
        
        const { result } = renderHook( () => useCounter(432) );
        const { decrement } = result.current;

        act( () => { decrement() } );
        
        const { Counter } = result.current;
        expect( Counter ).toBe(431);
    });
    
    test('Debe resetear el contador al valor inicial', () => {
        
        const { result } = renderHook( () => useCounter(432) );
        const { decrement, increment, reset } = result.current;

        act( () => { 
            decrement(20);
            increment(800);
            reset();
        } );
        
        const { Counter } = result.current; //no puedo extraer Counter sino despues de que ocurre el act, porque
        //sino, no surte efecto el act, y hace pasar la prueba independientemente de lo que hagas
        expect( Counter ).toBe(432);

    });
})

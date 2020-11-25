import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useFetch } from '../../components/Hooks/useFetch';

describe('Pruebas en useFetch Hook', () => {
    
    test('Debe retornar información por defecto', () => {

        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );

        const { loading, error, data } = result.current;

        expect( data ).toBe(null);
        expect( error ).toBe(null);
        expect( loading ).toBe(true);
    });

    test('Debería tener info deseada ', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );
        await waitForNextUpdate();

        const { loading, error, data } = result.current; 

        expect( data.length ).toBe(1);   
        expect( loading ).toBe(false);   
        expect( error ).toBe(null);   
    
    });

    test('Debe manejar el error ', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apid/users?page=2') );
        await waitForNextUpdate();

        const { loading, error, data } = result.current; 

        expect( data ).toBe(null);   
        expect( loading ).toBe(false);   
        expect( error ).toBe('No se pudo cargar la información desde el servidor');   
    
    })
    
})

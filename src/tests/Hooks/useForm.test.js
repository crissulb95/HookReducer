import React from 'react';

import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../components/Hooks/useForm';

describe('Pruebas en el useForm hook', () => {

    const initialForm = {
        name:'Cristian',
        email:'cristian.sulbaran.r@gmail.com'
    }

    test('Debe regresar un formulario por defecto ', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        //se desestructura result de la función renderHook para extraer los valores del hook a prueba

        const [ value, handleInputChange, reset ] = result.current;
        //se desestructuran los elementos internos del hook para poder evaluar sus valores

        expect( value ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    });

    test('Debe cambiar el valor del formulario (Cambiar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({
                target:{
                    name:'name',
                    value:'Levi'
                } 
            });
        });
        //el valor se llama target como el valor que recibe el hook, imitando el proceso de obtención de eventos.
        //por lo que se obtendría según ese objeto [target.name]: target.value

        const [ value ] = result.current;

        expect( value ).toEqual( {...initialForm, name: 'Levi'} );
    });
    
    test('Debe reestablecer el formulario con Reset', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange({
                target:{
                    name:'name',
                    value:'Levi'
                } 
            });

            reset();
        });

        const [ value ] = result.current;

        expect( value ).toEqual( initialForm );

    });
})

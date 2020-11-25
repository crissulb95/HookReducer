import React from 'react';
import {shallow} from 'enzyme';
import { MultipleCustomHooks } from '../../components/ejemplos/MultipleCustomHooks';
import { useFetch } from '../../components/Hooks/useFetch';
jest.mock('../../components/Hooks/useFetch');

describe('Pruebas en MultipleCustomHooks', () => {

    test('Debe mostrarse correctamente', () => {        

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null, 
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar información', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Momoy',
                quote: 'Hola Momoy'
            }],
            loading: false,
            error: null, 
        });


        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe('Hola Momoy');//quote
        expect( wrapper.find('.blockquote-footer').text().trim() ).toBe('Momoy'); //author

    })
    
    

});

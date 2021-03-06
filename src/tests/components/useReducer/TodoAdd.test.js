import React from 'react';
const { shallow } = require("enzyme");
const { TodoAdd } = require("../../../components/useReducer/TodoAdd");

describe('Pruebas en TodoAdd', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={handleAddTodo}
        />
    )
    
    test('Tiene que mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });
    
    test('No debe llamar el handleAddTodo', () => {
        
        const submitted = wrapper.find('form').prop('onSubmit')
        submitted({ preventDefault(){} })
        expect(handleAddTodo).toHaveBeenCalledTimes(0)

    })

    test('Debe llamar la función handleAddTodo', () => {
        const value = 'Aprender react';
        wrapper.find('input').simulate('change', {
            target: {
                value, name:'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            description: value,
            done: false, 
            id: expect.any(Number)
        });

        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
})

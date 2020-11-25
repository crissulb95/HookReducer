const { shallow } = require("enzyme");
const { todoReducer } = require("../../../components/useReducer/todoReducer");
const { demos } = require("../../fixtures/demoTodos");

describe('Pruebas en <todoReducer />', () => {


    test('Debe retornar el estado por defecto', () => {

        const state = todoReducer(demos, {});
        expect(state).toEqual(demos);
        console.log(demos, ', string,', state)

    });
    
    test('Debe agregar un todo', () => {

        const todoNueva = {
            id:3,
            description: 'Testing description 3',
            done: false
        }

        const action = {
            type: 'add', 
            payload: todoNueva
        }

        const state = todoReducer(demos, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demos, todoNueva])
        console.log(state, [...demos, todoNueva])

    }) 
    
    test('Debe eliminar un todo', () => {
        
        const todoNueva = {
            id:3,
            description: 'Testing description 3',
            done: false
        }
        
        const preDemos = [
            ...demos, todoNueva
        ]

        const action = {
            type: 'delete', 
            payload: todoNueva.id
        }

        const state = todoReducer(preDemos, action);

        expect(state.length).toBe(2);
        expect(state).toEqual(demos)
        console.log(state, [...demos, todoNueva], demos)

    })
    
    test('Debe tachar', () => {
        
        const todoNueva = {
            id:3,
            description: 'Testing description 3',
            done: false
        }
        
        const preDemos = [
            ...demos, todoNueva
        ]

        const action = {
            type: 'tachado-new', 
            payload: todoNueva.id
        }

        const state = todoReducer(preDemos, action);

        expect(state.length).toBe(3);
        expect(state[2].done).toEqual(true)
        console.log(state, [...demos, todoNueva], demos)

    })    
    
})

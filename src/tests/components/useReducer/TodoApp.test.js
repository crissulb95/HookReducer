const { act } = require("@testing-library/react");
const { shallow, mount } = require("enzyme");
const { TodoAdd } = require("../../../components/useReducer/TodoAdd");
const { TodoApp } = require("../../../components/useReducer/TodoApp");
const { demos } = require("../../fixtures/demoTodos");

describe('Pruebas en TodoApp', () => {
    
    const wrapper = shallow( <TodoApp />);

    Storage.prototype.setItem = jest.fn(() => {});

    test('Debe mostrarse bien ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe agregar un Todo', () => {

        const wrapper = mount(<TodoApp />);

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demos[0])
            wrapper.find('TodoAdd').prop('handleAddTodo')(demos[1])
        } );

        expect(wrapper.find('h1').text().trim()).toBe('To Do\'s App (2) ');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)
        //Parece ser que esta versión de enzyme no funciona con mi react 17, por lo que hay que 
        //esperar a que salga un nuevo adaptador oficial para que logre funcionar la prueba
        //que da el error en la funcion mount como TypeError: Cannot read property 'child' of undefined

    });
    

})

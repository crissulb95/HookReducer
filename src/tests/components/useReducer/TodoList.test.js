const { shallow } = require("enzyme");
const { TodoList } = require("../../../components/useReducer/TodoList");
const { demos } = require("../../fixtures/demoTodos");

describe('Pruebas en <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleTachado = jest.fn();
    
    const wrapper = shallow(
        <TodoList 
        todos = {demos}
        handleTachado={handleTachado}
        handleDelete={handleDelete}
        />
    );

    test('Debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    })
    
    test('Debe tener dos <TodoItem />', () => {
        
        expect(wrapper.find('TodoItem').length).toBe(2)
        expect(wrapper.find('TodoItem').length).toBe(demos.length)
        expect(wrapper.find('TodoItem').at(0).prop("handleTachado")).toEqual(expect.any(Function))
        
    })
    

})

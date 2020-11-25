const { shallow } = require("enzyme");
const { TodoItem } = require("../../../components/useReducer/TodoItem");
const { demos } = require("../../fixtures/demoTodos");

describe('Pruebas con <TodoItem />', () => {
    
    const handleTachado = jest.fn(); 
    const handleDelete = jest.fn();

    const wrapper = shallow( 
        <TodoItem 
        todo = {demos[0]}
        index = {0}
        handleTachado= {handleTachado}
        handleDelete= {handleDelete}
        />
    );
    
    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })
    
    test('Debe llamar handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(1) //<--id de demos[0]
    })

    test('Debe llamar handleTachado', () => {
        wrapper.find('p').simulate('click');
        expect(handleTachado).toHaveBeenCalledWith(1) //<--id de demos[0]
    })
    
    test('Debe mostrar el texto correctamente', ()=> {
        const parrafo = wrapper.find('p')
        expect(parrafo.text()).toBe(`1 . ${ demos[0].description }`)
    })

    test('Debe tener la clase "tachado"', () => {
        
        const someTodo = demos[0];
        someTodo.done= true;

        

    const wrapper = shallow( 
        <TodoItem 
        todo = {someTodo}
        index = {0}
        handleTachado= {handleTachado}
        handleDelete= {handleDelete}
        />
    );

    expect(wrapper.find('p').hasClass('tachado')).toBe(true)

    })
})
